import hre from "hardhat";

async function main() {
  const AM = await hre.ethers.getContractFactory("AcademicManager");
  const am = await AM.deploy();
  console.log(`AcademicManager deployed to ${await am.getAddress()}`);

  const CERTIFAI = await hre.ethers.getContractFactory("CERTIFAI");
  const certifAI = await CERTIFAI.deploy(await am.getAddress());
  console.log(`CERTIFAI deployed to ${await certifAI.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
