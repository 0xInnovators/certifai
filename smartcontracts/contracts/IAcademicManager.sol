// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "./Types.sol";

interface IAcademicManager {
    function checkCourseApproval(
        address _student,
        uint256 _courseId
    ) external view returns (bool);
    function getCourse(uint256 _courseId) external view returns (Course memory);
}
