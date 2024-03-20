// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./Types.sol";
import "./IAcademicManager.sol";

contract CERTIFAI is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter public _tokenIds;
    address public immutable ACADEMIC_MANAGER_ADDRESS;
    mapping(uint256 => mapping(address => bool)) public certificatedMinted;

    constructor(
        address academicManagerAddress
    ) ERC721("CERTIFAI", "CERTIFAI") {
        ACADEMIC_MANAGER_ADDRESS = academicManagerAddress;
    }

    function generateCertificate(
        uint256 courseId
    ) external returns (uint256) {
        bool studentApproved = IAcademicManager(ACADEMIC_MANAGER_ADDRESS)
            .checkCourseApproval(msg.sender, courseId);
        require(
            studentApproved,
            unicode"Você ainda não tem pontuação suficiente para mintar o certificado"
        );
        require(certificatedMinted[courseId][msg.sender] == false, unicode"Você já mintou este certificado. Não é possível mintar o mesmo certificado duas vezes");
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        Course memory course = IAcademicManager(ACADEMIC_MANAGER_ADDRESS).getCourse(courseId);
        certificatedMinted[courseId][msg.sender] = true;
        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, course.courseImageURI);
        return newTokenId;
    }
}
