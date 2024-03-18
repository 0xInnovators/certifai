import { expect } from "chai";
import hre from "hardhat";

describe("AcademicManager", function () {
    let academicManager: any;
    let owner: any;
    let otherAccount: any;
    let student: any;

    const courseName = "Introdução ao solidity";
    const courseDescription = "Funcionamento básico da EVM e linguagem solidity";
    const courseImageURI = "https://solidityprogram.com/image.jpg";

    const lesson1 = {
        lessonId: 1,
        lessonName: "Disciplina 1",
        lessonContent: "Conteúdo da disciplina 1",
        mandatory: true,
        minimumPassingScore: 70
    };

    const lesson2 = {
        lessonId: 2,
        lessonName: "Disciplina 2",
        lessonContent: "Conteúdo da disciplina 2",
        mandatory: false,
        minimumPassingScore: 60
    };

    const lessons = [lesson1, lesson2];

    beforeEach(async () => {
        [owner, otherAccount, student] = await hre.ethers.getSigners();
        const AcademicManager = await hre.ethers.getContractFactory("AcademicManager");
        academicManager = await AcademicManager.deploy();
        return { academicManager, owner, otherAccount };
    });

    describe("Deployment", function () {
        it("Should set the owner correctly", async function () {
            expect(await academicManager.owner()).to.equal(owner.address);
        });
    });

    describe("createCourse", function () {
        it("Should create a new course", async function () {
            // Create the course
            await academicManager.createCourse(courseName, courseDescription, courseImageURI, lessons);

            // Retrieve the course information
            const nextCourseId = parseInt(await academicManager.nextCourseId());
            const courseId = nextCourseId - 1; // Subtract 1 from the converted regular number
            const course = await academicManager.getCourse(courseId);

            // Check if the course information is correct
            expect(course.courseId).to.equal(courseId);
            expect(course.courseName).to.equal(courseName);
            expect(course.courseDescription).to.equal(courseDescription);
            expect(course.courseImageURI).to.equal(courseImageURI);

            // Check if the lessons are correctly stored
            expect(course.lessons.length).to.equal(lessons.length);
            for (let i = 0; i < lessons.length; i++) {
                expect(course.lessons[i].lessonId).to.equal(lessons[i].lessonId);
                expect(course.lessons[i].lessonName).to.equal(lessons[i].lessonName);
                expect(course.lessons[i].lessonContent).to.equal(lessons[i].lessonContent);
                expect(course.lessons[i].mandatory).to.equal(lessons[i].mandatory);
                expect(course.lessons[i].minimumPassingScore).to.equal(lessons[i].minimumPassingScore);
            }
        });

        it("Should get all courses", async function () {
            // Create the course
            await academicManager.createCourse(courseName, courseDescription, courseImageURI, lessons);
            await academicManager.createCourse(courseName, courseDescription, courseImageURI, lessons);
            const courses = await academicManager.getAllCourses();
            expect(courses.length).to.equal(2);
        });

        it("Should revert if CreateCourse not called by the owner", async function () {
            await expect(academicManager.connect(otherAccount).createCourse(courseName, courseDescription, courseImageURI, lessons)).to.be.revertedWithCustomError(academicManager, 'OnlyOwner')
        });

        it("Should get a new course", async function () {
            // Create the course
            await academicManager.createCourse(courseName, courseDescription, courseImageURI, lessons);
            // Retrieve the course information
            const nextCourseId = parseInt(await academicManager.nextCourseId());
            const courseId = nextCourseId - 1; // Subtract 1 from the converted regular number
            const course = await academicManager.getCourse(courseId);
            // Check if the course information is correct
            expect(course.courseId).to.equal(courseId);
            expect(course.courseName).to.equal(courseName);
            expect(course.courseDescription).to.equal(courseDescription);
            expect(course.courseImageURI).to.equal(courseImageURI);
        });

        it("Should enroll a student", async function () {
            // Create the course
            await academicManager.createCourse(courseName, courseDescription, courseImageURI, lessons);
            // enroll student
            const nextCourseId = parseInt(await academicManager.nextCourseId());
            await academicManager.connect(student).enrollStudent(nextCourseId - 1);
            // Retrieve the enrollment records for the student
            const coursesEnrolled = await academicManager.getCoursesByStudent(student.address);
            // Check if the student is enrolled in the correct course
            expect(coursesEnrolled[0][0]).to.equal(0)
            expect(coursesEnrolled).to.have.length(1)
            // Retrieve the student records for the enrolled course
            const studentCourseRecords = await academicManager.getStudentRecords(student.address, nextCourseId - 1);
            
            // Check if the student records contain the correct number of lessons
            expect(studentCourseRecords).to.have.lengthOf(lessons.length);
            for (let i = 0; i < lessons.length; i++) {
                expect(studentCourseRecords[i].lessonId).to.equal(lessons[i].lessonId);
                expect(studentCourseRecords[i].lessonName).to.equal(lessons[i].lessonName);
                expect(studentCourseRecords[i].lessonContent).to.equal(lessons[i].lessonContent);
                expect(studentCourseRecords[i].mandatory).to.equal(lessons[i].mandatory);
                expect(studentCourseRecords[i].minimumPassingScore).to.equal(lessons[i].minimumPassingScore);
                expect(studentCourseRecords[i].score).to.equal(0); // Score should be initialized to 0
            }
        });

        it("Should enroll a student and add scores", async function () {
            // Create the course
            await academicManager.createCourse(courseName, courseDescription, courseImageURI, lessons);
            // enroll student
            const nextCourseId = parseInt(await academicManager.nextCourseId());
            await academicManager.connect(student).enrollStudent(nextCourseId - 1);
            const lesson1 = {
                lessonId: 1,
                lessonName: "Disciplina 1",
                lessonContent: "Conteúdo da disciplina 1",
                mandatory: true,
                minimumPassingScore: 70,
                score: 80
            };
            const lesson2 = {
                lessonId: 2,
                lessonName: "Disciplina 2",
                lessonContent: "Conteúdo da disciplina 2",
                mandatory: false,
                minimumPassingScore: 60,
                score: 90
            };
            const _scores = [
                lesson1, lesson2
            ];
            // Assign scores to the student's records
            await academicManager.connect(owner).assignScores(student.address, nextCourseId - 1, _scores);
            // checking
            const studentCourseRecordsAfter = await academicManager.getStudentRecords(student.address, nextCourseId - 1);
            expect(studentCourseRecordsAfter[0].score).to.equal(80);
            expect(studentCourseRecordsAfter[1].score).to.equal(90);
        });

        it("Should return true if student has been approved", async function () {
            // Create the course
            await academicManager.createCourse(courseName, courseDescription, courseImageURI, lessons);
            // enroll student
            const nextCourseId = parseInt(await academicManager.nextCourseId());
            await academicManager.connect(student).enrollStudent(nextCourseId - 1);
            const lesson1 = {
                lessonId: 1,
                lessonName: "Disciplina 1",
                lessonContent: "Conteúdo da disciplina 1",
                mandatory: true,
                minimumPassingScore: 70,
                score: 80
            };
            const lesson2 = {
                lessonId: 2,
                lessonName: "Disciplina 2",
                lessonContent: "Conteúdo da disciplina 2",
                mandatory: false,
                minimumPassingScore: 60,
                score: 90
            };
            const _scores = [
                lesson1, lesson2
            ];
            // Assign scores to the student's records
            await academicManager.connect(owner).assignScores(student.address, nextCourseId - 1, _scores);
            // checking
            const result = await academicManager.checkCourseApproval(student.address, nextCourseId - 1);
            expect(result).to.equal(true)
        });

        it("Should return true if student has NOT been approved", async function () {
            // Create the course
            await academicManager.createCourse(courseName, courseDescription, courseImageURI, lessons);
            // enroll student
            const nextCourseId = parseInt(await academicManager.nextCourseId());
            await academicManager.connect(student).enrollStudent(nextCourseId - 1);
            const lesson1 = {
                lessonId: 1,
                lessonName: "Disciplina 1",
                lessonContent: "Conteúdo da disciplina 1",
                mandatory: true,
                minimumPassingScore: 70,
                score: 90
            };
            const lesson2 = {
                lessonId: 2,
                lessonName: "Disciplina 2",
                lessonContent: "Conteúdo da disciplina 2",
                mandatory: false,
                minimumPassingScore: 60,
                score: 20
            };
            const _scores = [
                lesson1, lesson2
            ];
            // Assign scores to the student's records
            await academicManager.connect(owner).assignScores(student.address, nextCourseId - 1, _scores);
            // checking
            const result = await academicManager.checkCourseApproval(student.address, nextCourseId - 1);
            expect(result).to.equal(false)
        });

        it("Should throw error at trying to enroll a student in a inexistent course", async function () {
            await expect(academicManager.connect(student).enrollStudent(0)).to.be.revertedWith('O curso não existe')
        });

        it("Should throw error at trying to enroll a student twice", async function () {
            await academicManager.createCourse(courseName, courseDescription, courseImageURI, lessons);
            const nextCourseId = parseInt(await academicManager.nextCourseId());
            academicManager.connect(student).enrollStudent(nextCourseId - 1);
            await expect(academicManager.connect(student).enrollStudent(nextCourseId - 1)).to.be.revertedWith('O aluno já está matriculado');
        });
    });
});