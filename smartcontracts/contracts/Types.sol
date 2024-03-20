// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

struct Course {
    uint256 courseId;
    string courseName;
    string courseDescription;
    string courseImageURI;
    Lesson[] lessons;
}

struct Lesson {
    uint256 lessonId;
    string lessonName;
    string lessonContent;
    bool mandatory;
    uint256 minimumPassingScore;
}
