// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "./Types.sol";

contract AcademicManager {
    error OnlyOwner();

    address public owner;
    uint256 public nextCourseId;
    mapping(uint256 => Course) public courses;
    mapping(uint256 => mapping(address => bool)) public enrollments; // courseId => student address
    mapping(address => uint256[]) public enrollmentsByStudent; // student address => courseId[]
    mapping(address => mapping(uint256 => SchoolRecords[])) public studentRecordsByCourseId; // student address => courseId

    struct SchoolRecords {
        uint256 lessonId;
        string lessonName;
        string lessonContent;
        string lessonQuestion;
        string lessonAnswer;
        string lessonDocURI;
        bool mandatory;
        uint256 minimumPassingScore;
        uint256 score;
    }

    event CourseCreated(uint256 indexed courseId, string courseName, string courseDescription, string courseImageURI, uint256 coursePrice);
    event StudentEnrolled(uint256 indexed courseId, address indexed student);

    modifier onlyOwner() {
        if (owner != msg.sender) {
            revert OnlyOwner();
        }
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function createCourse(string memory _courseName, string memory _courseDescription, string memory _courseImageURI, uint256 _coursePrice, Lesson[] memory _lessons) onlyOwner() external {
        Course storage newCourse = courses[nextCourseId];
        newCourse.courseId = nextCourseId;
        newCourse.courseName = _courseName;
        newCourse.courseDescription = _courseDescription;
        newCourse.courseImageURI = _courseImageURI;
        newCourse.coursePrice = _coursePrice;

        // Copiar cada Lesson individualmente para o armazenamento
        for (uint256 i = 0; i < _lessons.length; i++) {
            newCourse.lessons.push(Lesson({
                lessonId: _lessons[i].lessonId,
                lessonName: _lessons[i].lessonName,
                lessonContent: _lessons[i].lessonContent,
                mandatory: _lessons[i].mandatory,
                minimumPassingScore: _lessons[i].minimumPassingScore,
                lessonQuestion: _lessons[i].lessonQuestion,
                lessonDocURI: _lessons[i].lessonDocURI,
                lessonAnswer: ""
            }));
        }
        emit CourseCreated(nextCourseId, _courseName, _courseDescription, _courseImageURI, _coursePrice);
        nextCourseId++;
    }

    function getCourse(uint256 _courseId) external view returns (Course memory) {
        require(_courseId < nextCourseId, unicode"O curso não existe");
        return courses[_courseId];
    }

    function enrollStudent(uint256 _courseId) external {
        require(_courseId < nextCourseId, unicode"O curso não existe");
        require(!enrollments[_courseId][msg.sender], unicode"Você já está matriculado neste curso");
        // Course storage course = courses[_courseId];
        // require(msg.value >= course.coursePrice, unicode"O pagamento não atende ao preço do curso");
        enrollments[_courseId][msg.sender] = true;
        enrollmentsByStudent[msg.sender].push(_courseId);
        Lesson[] memory lessons = courses[_courseId].lessons;
        SchoolRecords[] storage studentRecords = studentRecordsByCourseId[msg.sender][_courseId];
        for (uint256 i = 0; i < lessons.length; i++) {
            studentRecords.push(SchoolRecords({
                lessonId: lessons[i].lessonId,
                lessonName: lessons[i].lessonName,
                lessonContent: lessons[i].lessonContent,
                mandatory: lessons[i].mandatory,
                lessonQuestion: lessons[i].lessonQuestion,
                lessonDocURI: lessons[i].lessonDocURI,
                lessonAnswer: "",
                minimumPassingScore: lessons[i].minimumPassingScore,
                score: 0 // Pontuação inicial zero
            }));
        }
        // owner.transfer(msg.value);
        emit StudentEnrolled(_courseId, msg.sender);
    }

    function assignScores(address _student, uint256 _courseId, SchoolRecords[] memory _scores) onlyOwner() external {
        require(_courseId < nextCourseId, unicode"O curso não existe");
        require(_scores.length > 0, unicode"Notas não fornecidas");
        require(enrollments[_courseId][_student], unicode"O estudante não está matriculado neste curso");
        SchoolRecords[] storage studentRecords = studentRecordsByCourseId[_student][_courseId];
        require(_scores.length == studentRecords.length, unicode"Número inválido de notas fornecidas");
        for (uint256 i = 0; i < _scores.length; i++) {
            require(studentRecords[i].lessonId == _scores[i].lessonId, unicode"Código do módulo inválido");
            studentRecords[i].score = _scores[i].score;
        }
    }

    function assignAnswer(uint256 _courseId, uint256 _lessonId, string memory _answer) external {
        require(_courseId < nextCourseId, unicode"O curso não existe");
        require(enrollments[_courseId][msg.sender], unicode"Você não está matriculado neste curso");
        SchoolRecords[] storage studentRecords = studentRecordsByCourseId[msg.sender][_courseId];
        for (uint256 i = 0; i < studentRecords.length; i++) {
            if (studentRecords[i].lessonId == _lessonId) {
                studentRecordsByCourseId[msg.sender][_courseId][i].lessonAnswer = _answer;
                break;
            }
        }
    }

    function getAllCourses() external view returns (Course[] memory) {
        Course[] memory allCourses = new Course[](nextCourseId);
        for (uint256 i = 0; i < nextCourseId; i++) {
            allCourses[i] = courses[i];
        }
        return allCourses;
    }

    function getCoursesByStudent(address _student) external view returns (Course[] memory) {
        uint256[] memory courseIds = enrollmentsByStudent[_student];
        Course[] memory coursesEnrolled = new Course[](courseIds.length);
        for (uint256 i = 0; i < courseIds.length; i++) {
            Course storage course = courses[courseIds[i]];
            coursesEnrolled[i] = Course({
                courseId: course.courseId,
                courseName: course.courseName,
                courseDescription: course.courseDescription,
                courseImageURI: course.courseImageURI,
                coursePrice: course.coursePrice,
                lessons: course.lessons
            });
        }
        return coursesEnrolled;
    }

    function getStudentRecords(address _student, uint256 _courseId) external view returns (SchoolRecords[] memory) {
        return studentRecordsByCourseId[_student][_courseId];
    }

    function checkCourseApproval(address _student, uint256 _courseId) external view returns (bool) {
        require(_courseId < nextCourseId, unicode"O curso não existe");
        require(enrollments[_courseId][_student], unicode"O estudante não está matriculado neste curso");
        SchoolRecords[] memory studentRecords = studentRecordsByCourseId[_student][_courseId];
        require(studentRecords.length > 0, unicode"Não foram encontrados registros para este aluno no curso especificado.");
        for (uint256 i = 0; i < studentRecords.length; i++) {
            if (studentRecords[i].score < studentRecords[i].minimumPassingScore) {
                return false; // Se o aluno não atingiu a pontuação mínima em qualquer lição, o curso não é aprovado
            }
        }
        return true; // Se o aluno passou em todas as lições com pontuação mínima, ele poderá mintar o nft
    }

    function getOwner() external view returns(address){
        return owner;
    }
}
