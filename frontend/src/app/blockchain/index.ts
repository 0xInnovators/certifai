import smartContractABI from "./AcademicManager.json";

const AcademicManagerSmartContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const AcademicManagerSmartContractABI =  [
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "OnlyOwner",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "courseId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "courseName",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "courseDescription",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "courseImageURI",
        "type": "string"
      }
    ],
    "name": "CourseCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "courseId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "student",
        "type": "address"
      }
    ],
    "name": "StudentEnrolled",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_student",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_courseId",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "lessonId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "lessonName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "lessonContent",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "mandatory",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "minimumPassingScore",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "score",
            "type": "uint256"
          }
        ],
        "internalType": "struct AcademicManager.SchoolRecords[]",
        "name": "_scores",
        "type": "tuple[]"
      }
    ],
    "name": "assignScores",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_student",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_courseId",
        "type": "uint256"
      }
    ],
    "name": "checkCourseApproval",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "courses",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "courseId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "courseName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "courseDescription",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "courseImageURI",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_courseName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_courseDescription",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_courseImageURI",
        "type": "string"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "lessonId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "lessonName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "lessonContent",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "mandatory",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "minimumPassingScore",
            "type": "uint256"
          }
        ],
        "internalType": "struct AcademicManager.Lesson[]",
        "name": "_lessons",
        "type": "tuple[]"
      }
    ],
    "name": "createCourse",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_courseId",
        "type": "uint256"
      }
    ],
    "name": "enrollStudent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "enrollments",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "enrollmentsByStudent",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllCourses",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "courseId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "courseName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "courseDescription",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "courseImageURI",
            "type": "string"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "lessonId",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "lessonName",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "lessonContent",
                "type": "string"
              },
              {
                "internalType": "bool",
                "name": "mandatory",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "minimumPassingScore",
                "type": "uint256"
              }
            ],
            "internalType": "struct AcademicManager.Lesson[]",
            "name": "lessons",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct AcademicManager.Course[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_courseId",
        "type": "uint256"
      }
    ],
    "name": "getCourse",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "courseId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "courseName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "courseDescription",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "courseImageURI",
            "type": "string"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "lessonId",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "lessonName",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "lessonContent",
                "type": "string"
              },
              {
                "internalType": "bool",
                "name": "mandatory",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "minimumPassingScore",
                "type": "uint256"
              }
            ],
            "internalType": "struct AcademicManager.Lesson[]",
            "name": "lessons",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct AcademicManager.Course",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_student",
        "type": "address"
      }
    ],
    "name": "getCoursesByStudent",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "courseId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "courseName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "courseDescription",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "courseImageURI",
            "type": "string"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "lessonId",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "lessonName",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "lessonContent",
                "type": "string"
              },
              {
                "internalType": "bool",
                "name": "mandatory",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "minimumPassingScore",
                "type": "uint256"
              }
            ],
            "internalType": "struct AcademicManager.Lesson[]",
            "name": "lessons",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct AcademicManager.Course[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getOwner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_student",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_courseId",
        "type": "uint256"
      }
    ],
    "name": "getStudentRecords",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "lessonId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "lessonName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "lessonContent",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "mandatory",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "minimumPassingScore",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "score",
            "type": "uint256"
          }
        ],
        "internalType": "struct AcademicManager.SchoolRecords[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "nextCourseId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "studentRecordsByCourseId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "lessonId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "lessonName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "lessonContent",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "mandatory",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "minimumPassingScore",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "score",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
export { AcademicManagerSmartContractABI, AcademicManagerSmartContractAddress };
