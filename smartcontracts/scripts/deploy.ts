import hre from "hardhat";

async function main() {
  const AM = await hre.ethers.getContractFactory("AcademicManager");
  const am = await AM.deploy();
  console.log(`AcademicManager deployed to ${await am.getAddress()}`);

  const CERTIFAI = await hre.ethers.getContractFactory("CERTIFAI");
  const certifAI = await CERTIFAI.deploy(await am.getAddress());
  console.log(`CERTIFAI deployed to ${await certifAI.getAddress()}`);

  const courseName1 = "Curso de Desenvolvimento de Aplicações Descentralizadas (DApps) com Blockchain";
  const courseDescription1 = "Aprenda a criar DApps utilizando tecnologias blockchain, contratos inteligentes e integração com Web3.";
  const courseImageURI1 = "https://red-wee-meerkat-231.mypinata.cloud/ipfs/QmRiTbtJQF3YnBCNkTGGKQQnX4q9GNeLGUM2nJZJKruorJ";
  const coursePrice1 = BigInt(1000000000000000000)
  
  const courseName2 = "Introdução aos Contratos Inteligentes e NFTs";
  const courseDescription2 = "Explore os fundamentos dos contratos inteligentes e NFTs, incluindo criação, implementação e casos de uso práticos";
  const courseImageURI2 = "https://red-wee-meerkat-231.mypinata.cloud/ipfs/QmPnx58FXC7rpvVJNEAndQsbEnejKm4RSBuYG9yuSiN1e6";
  const coursePrice2 = 1
  
  const courseName3 = "Certificação em Segurança de Contratos Inteligentes e NFTs";
  const courseDescription3 = "Domine as melhores práticas de segurança para contratos inteligentes e NFTs, identificando e mitigando vulnerabilidades comuns";
  const courseImageURI3 = "https://red-wee-meerkat-231.mypinata.cloud/ipfs/QmeqiP2diTu9QvYAZtC1PtvEo9u2njD3G5nQyiNKrtpv5P";
  const coursePrice3 = 100
  
  const courseName4 = "Curso Avançado de Blockchain e Finanças Descentralizadas (DeFi)";
  const courseDescription4 = "Aprofunde-se na tecnologia blockchain, explorando protocolos DeFi, como empréstimos, staking e governança descentralizada";
  const courseImageURI4 = "https://red-wee-meerkat-231.mypinata.cloud/ipfs/QmRiTbtJQF3YnBCNkTGGKQQnX4q9GNeLGUM2nJZJKruorJ";
  const coursePrice4 = 55
  
  const courseName5 = "Blockchain para Desenvolvedores Web";
  const courseDescription5 = "Descubra como integrar blockchain em aplicativos web, abordando conceitos básicos, implementação de transações e interação com contratos inteligentes";
  const courseImageURI5 = "https://red-wee-meerkat-231.mypinata.cloud/ipfs/QmPnx58FXC7rpvVJNEAndQsbEnejKm4RSBuYG9yuSiN1e6";
  const coursePrice5 = 186
  
  const course1Lesson1 = {
      lessonId: 1,
      lessonName: "Introdução à Tecnologia Blockchain e Ethereum",
      lessonContent: "Este módulo fornecerá uma visão geral da tecnologia blockchain, com foco especial na plataforma Ethereum. Os alunos aprenderão os fundamentos da blockchain, contratos inteligentes e como interagir com a rede Ethereum",
      mandatory: true,
      minimumPassingScore: 60,
      lessonQuestion: "Explique o processo de consenso na blockchain Ethereum e como ele difere dos sistemas tradicionais de banco de dados.",
      lessonDocURI : "https://goblockchain.io/wp-content/uploads/2021/09/NFT-Token-Nao-Fungivel-Report.pdf",
      lessonAnswer: ""
  };

  const course1Lesson2 = {
      lessonId: 2,
      lessonName: "Desenvolvimento de Contratos Inteligentes",
      lessonContent: "Neste módulo, os alunos mergulharão no desenvolvimento de contratos inteligentes usando Solidity, a linguagem de programação padrão para contratos inteligentes na Ethereum. Eles aprenderão a escrever, compilar e implantar contratos inteligentes na blockchain",
      mandatory: true,
      minimumPassingScore: 60,
      lessonQuestion: "Descreva o ciclo de vida de um contrato inteligente na Ethereum, incluindo compilação, implantação e execução",
      lessonDocURI : "https://goblockchain.io/wp-content/uploads/2021/09/NFT-Token-Nao-Fungivel-Report.pdf",
      lessonAnswer: ""
    };
    
    const course1Lesson3 = {
      lessonId: 3,
      lessonName: "Construção de Interfaces de Usuário Descentralizadas (DApp UI)",
      lessonContent: "Este módulo se concentrará na criação de interfaces de usuário amigáveis e eficientes para DApps. Os alunos aprenderão a utilizar ferramentas como Web3.js e React.js para conectar suas aplicações front-end com os contratos inteligentes na blockchain",
      mandatory: false,
      minimumPassingScore: 60,
      lessonQuestion: "Como você projetaria uma interface de usuário eficiente para uma DApp usando React.js e Web3.js?",
      lessonDocURI : "https://goblockchain.io/wp-content/uploads/2021/09/NFT-Token-Nao-Fungivel-Report.pdf",
      lessonAnswer: ""
  };
  const course1Lessons = [course1Lesson1, course1Lesson2, course1Lesson3];

  const course2Lesson1 = {
    lessonId: 1,
    lessonName: "Introdução aos Contratos Inteligentes",
    lessonContent: "Exploração dos conceitos fundamentais de contratos inteligentes, incluindo estrutura, funcionamento e implementação na blockchain.",
    mandatory: true,
    minimumPassingScore: 60,
    lessonQuestion: "Qual é a importância dos contratos inteligentes na descentralização e automação de processos?",
    lessonDocURI : "https://goblockchain.io/wp-content/uploads/2021/09/NFT-Token-Nao-Fungivel-Report.pdf",
    lessonAnswer: ""
  };

  const course2Lesson2 = {
      lessonId: 2,
      lessonName: "NFTs: Tokens Não Fungíveis",
      lessonContent: "Análise dos Tokens Não Fungíveis (NFTs), incluindo seu uso, padrões de implementação e casos de uso práticos.",
      mandatory: true,
      minimumPassingScore: 60,
      lessonQuestion: "Explique o conceito de Tokens Não Fungíveis (NFTs) e forneça exemplos de aplicação na indústria.",
      lessonDocURI : "https://goblockchain.io/wp-content/uploads/2021/09/NFT-Token-Nao-Fungivel-Report.pdf",
      lessonAnswer: ""
  };

  const course2Lessons = [course2Lesson1, course2Lesson2];

  const course3Lesson1 = {
    lessonId: 1,
    lessonName: "Principais Vulnerabilidades em Contratos Inteligentes",
    lessonContent: "Identificação e análise das principais vulnerabilidades em contratos inteligentes, com foco em mitigação de riscos.",
    mandatory: true,
    minimumPassingScore: 70,
    lessonQuestion: "Quais são as principais vulnerabilidades em contratos inteligentes e como podem ser evitadas?",
    lessonDocURI : "https://goblockchain.io/wp-content/uploads/2021/09/NFT-Token-Nao-Fungivel-Report.pdf",
    lessonAnswer: ""
  };

  const course3Lesson2 = {
    lessonId: 2,
    lessonName: "Auditoria e Testes de Segurança",
    lessonContent: "Exploração das melhores práticas de auditoria e teste de segurança para contratos inteligentes e aplicações descentralizadas.",
    mandatory: true,
    minimumPassingScore: 70,
    lessonQuestion: "Por que é importante realizar auditorias e testes de segurança em contratos inteligentes?",
    lessonDocURI : "https://goblockchain.io/wp-content/uploads/2021/09/NFT-Token-Nao-Fungivel-Report.pdf",
    lessonAnswer: ""
  };

  const course3Lessons = [course3Lesson1, course3Lesson2];

  const course4Lesson1 = {
    lessonId: 1,
    lessonName: "Protocolos DeFi",
    lessonContent: "Estudo aprofundado dos protocolos DeFi, incluindo empréstimos, staking, yield farming e governança descentralizada.",
    mandatory: true,
    minimumPassingScore: 70,
    lessonQuestion: "Quais são os principais protocolos DeFi e como eles funcionam?",
    lessonDocURI : "https://goblockchain.io/wp-content/uploads/2021/09/NFT-Token-Nao-Fungivel-Report.pdf",
    lessonAnswer: ""
  };

  const course4Lesson2 = {
    lessonId: 2,
    lessonName: "Desenvolvimento de Aplicações Financeiras Descentralizadas",
    lessonContent: "Prática no desenvolvimento de aplicações financeiras descentralizadas utilizando tecnologias blockchain.",
    mandatory: true,
    minimumPassingScore: 70,
    lessonQuestion: "Quais são os desafios e oportunidades no desenvolvimento de aplicações financeiras descentralizadas?",
    lessonDocURI : "https://goblockchain.io/wp-content/uploads/2021/09/NFT-Token-Nao-Fungivel-Report.pdf",
    lessonAnswer: ""
  };

  const course4Lessons = [course4Lesson1, course4Lesson2];

  const course5Lesson1 = {
    lessonId: 1,
    lessonName: "Integração de Blockchain em Aplicações Web",
    lessonContent: "Exploração das técnicas de integração de blockchain em aplicações web, incluindo interação com contratos inteligentes.",
    mandatory: true,
    minimumPassingScore: 70,
    lessonQuestion: "Como você integraria a blockchain em uma aplicação web e quais seriam os benefícios dessa integração?",
    lessonDocURI : "https://goblockchain.io/wp-content/uploads/2021/09/NFT-Token-Nao-Fungivel-Report.pdf",
    lessonAnswer: ""
  };

  const course5Lesson2 = {
    lessonId: 2,
    lessonName: "Segurança e Privacidade em Aplicações Descentralizadas",
    lessonContent: "Discussão sobre os desafios de segurança e privacidade em aplicações descentralizadas e estratégias para mitigação de riscos.",
    mandatory: true,
    minimumPassingScore: 70,
    lessonQuestion: "Quais são as principais preocupações de segurança e privacidade em aplicações descentralizadas?",
    lessonDocURI : "https://goblockchain.io/wp-content/uploads/2021/09/NFT-Token-Nao-Fungivel-Report.pdf",
    lessonAnswer: ""
  };

  const course5Lessons = [course5Lesson1, course5Lesson2];

  try {
    await am.createCourse(courseName1, courseDescription1, courseImageURI1, coursePrice1, course1Lessons);
    await am.createCourse(courseName2, courseDescription2, courseImageURI2, coursePrice2, course2Lessons);
    await am.createCourse(courseName3, courseDescription3, courseImageURI3, coursePrice3, course3Lessons);
    await am.createCourse(courseName4, courseDescription4, courseImageURI4, coursePrice4, course4Lessons);
    await am.createCourse(courseName5, courseDescription5, courseImageURI5, coursePrice5, course5Lessons);
    console.log('Courses saved')
  } catch (error) {
    console.log('Courses error', error)
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
