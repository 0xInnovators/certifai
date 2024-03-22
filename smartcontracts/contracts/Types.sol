// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

struct Course {
    uint256 courseId;
    string courseName;
    string courseDescription;
    string courseImageURI;
    uint256 coursePrice;
    Lesson[] lessons;
}

struct Lesson {
    uint256 lessonId;
    string lessonName;
    string lessonContent;
    string lessonQuestion;
    string lessonDocURI;
    string lessonAnswer;
    bool mandatory;
    uint256 minimumPassingScore;
}
