<p align="center">
  <img src="frontend/public/images/logo.png" />
</p>

# CertfAI

## Technologies

- Solidity v0.8.20
- Hardhat v2.22.1
- Next.js v14.1.3
- React v18
- Docker v25.0.4
- Docker Compose v2.24.7

## About

- To access the administrator profile (contract owner) use the following private key: `8c4dc490b453b9819b6f416c12b287d57aa101ec9c6d8ef50fe8856e9971ea91`

- The administrator profile allows to examine and evaluate students enrolled in courses

- dApp: https://certifai-optimism-psi.vercel.app

- demo/pitch: https://youtu.be/UVnIkrY-4qY

## How to

- Add OP Sepolia Testnet network: <https://chainlist.org/chain/11155420>


## Start the project

- To create new docker images without cache from docker compose services: run the command below:

```sh
docker compose build --no-cache
```

- To initialize the project, simply run the command below:

```sh
docker compose up

# Or build and start the project:
# docker compose up --build
```

The command will initialize the following services:

- **blockchain-node**: Provides a local blockchain running on port `8545`
- **deploy**: Deploys smartcontracts on the local blockchain network
- **frontend**: Provides the frontend of the application

## Todo

- [ ] Create Whitepaper

## References

- [CertifAI](https://certifai-optimism-psi.vercel.app)
- [NearX](https://nearx.com.br)
- [Optimism](https://www.optimism.io)
- [Gitmoji](https://github.com/carloscuesta/gitmoji)
