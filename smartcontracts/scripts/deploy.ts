import hre from "hardhat";

async function main() {
  const AM = await hre.ethers.getContractFactory("AcademicManager");
  const am = await AM.deploy();
  console.log(`AcademicManager deployed to ${await am.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
