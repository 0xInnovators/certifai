import smartContractABI from "./AcademicManager.json";

const AcademicManagerSmartContractAddress = process.env.NEXT_PUBLIC_ACADEMIC_MANAGER_ADDRESS
const CertificateNFTSmartContractAddress = process.env.NEXT_PUBLIC_CERTIFAI_ADDRESS;
const CertificateNFTSmartContractABI =  [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "academicManagerAddress",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_fromTokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_toTokenId",
        "type": "uint256"
      }
    ],
    "name": "BatchMetadataUpdate",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      }
    ],
    "name": "MetadataUpdate",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "ACADEMIC_MANAGER_ADDRESS",
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
    "inputs": [],
    "name": "_tokenIds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
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
    "name": "certificatedMinted",
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
        "name": "courseId",
        "type": "uint256"
      }
    ],
    "name": "generateCertificate",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "getApproved",
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
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
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
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ownerOf",
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
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
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
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

const AcademicManagerSmartContractABI =     [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
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
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "coursePrice",
        "type": "uint256"
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
        "internalType": "uint256",
        "name": "_courseId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_lessonId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_answer",
        "type": "string"
      }
    ],
    "name": "assignAnswer",
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
            "internalType": "string",
            "name": "lessonQuestion",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "lessonAnswer",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "lessonDocURI",
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
      },
      {
        "internalType": "uint256",
        "name": "coursePrice",
        "type": "uint256"
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
        "internalType": "uint256",
        "name": "_coursePrice",
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
            "internalType": "string",
            "name": "lessonQuestion",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "lessonDocURI",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "lessonAnswer",
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
        "internalType": "struct Lesson[]",
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
            "internalType": "uint256",
            "name": "coursePrice",
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
                "internalType": "string",
                "name": "lessonQuestion",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "lessonDocURI",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "lessonAnswer",
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
            "internalType": "struct Lesson[]",
            "name": "lessons",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct Course[]",
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
            "internalType": "uint256",
            "name": "coursePrice",
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
                "internalType": "string",
                "name": "lessonQuestion",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "lessonDocURI",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "lessonAnswer",
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
            "internalType": "struct Lesson[]",
            "name": "lessons",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct Course",
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
            "internalType": "uint256",
            "name": "coursePrice",
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
                "internalType": "string",
                "name": "lessonQuestion",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "lessonDocURI",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "lessonAnswer",
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
            "internalType": "struct Lesson[]",
            "name": "lessons",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct Course[]",
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
            "internalType": "string",
            "name": "lessonQuestion",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "lessonAnswer",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "lessonDocURI",
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
        "internalType": "address payable",
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
        "internalType": "string",
        "name": "lessonQuestion",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "lessonAnswer",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "lessonDocURI",
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
export { AcademicManagerSmartContractABI, AcademicManagerSmartContractAddress, CertificateNFTSmartContractAddress, CertificateNFTSmartContractABI };
