import { CertificateNFT } from './../typechain-types/contracts/CertificateNFT';
import { expect } from "chai";
import hre from "hardhat";

describe("CertificateNFT", function () {
    let academicManager: any;
    let certificateNFT: any;
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
        const CertificateNFT = await hre.ethers.getContractFactory("CertificateNFT");
        academicManager = await AcademicManager.deploy();
        certificateNFT = await CertificateNFT.deploy(academicManager.target);
        console.log('manager deployed to', academicManager.target)
        console.log('certificate deployed to', certificateNFT.target)
        return { academicManager, owner, otherAccount };
    });

    describe("Deployment", function () {
        it("Should throw error trying to mint NFT", async function () {
            await academicManager.createCourse(courseName, courseDescription, courseImageURI, lessons);
            const nextCourseId = parseInt(await academicManager.nextCourseId());
            academicManager.connect(student).enrollStudent(nextCourseId - 1);
            await expect(certificateNFT.connect(student).generateCertificate(nextCourseId - 1)).to.be.revertedWith('Você ainda não tem notas suficientes para mintar o certificado');
        });

        it("Should mint NFT", async function () {
            await academicManager.createCourse(courseName, courseDescription, courseImageURI, lessons);
            const nextCourseId = parseInt(await academicManager.nextCourseId());
            academicManager.connect(student).enrollStudent(nextCourseId - 1);
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
            await academicManager.connect(owner).assignScores(student.address, nextCourseId - 1, _scores);
            await expect(certificateNFT.connect(student).generateCertificate(nextCourseId - 1)).to.not.reverted;
        });
    });
})