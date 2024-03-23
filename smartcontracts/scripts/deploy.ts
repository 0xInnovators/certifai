import hre from "hardhat";
import fs from 'fs';

function writeFile(file: string, message: string) {
  fs.appendFile(file, `${message}\n`, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

async function main() {
  const AM = await hre.ethers.getContractFactory("AcademicManager");
  const am = await AM.deploy();
  const amAddress = await am.getAddress()
  console.log(`AcademicManager deployed to ${amAddress}`);
  
  const CERTIFAI = await hre.ethers.getContractFactory("CERTIFAI");
  const certifAI = await CERTIFAI.deploy(amAddress);
  const certifAIAddress = await certifAI.getAddress();
  console.log(`CERTIFAI deployed to ${certifAIAddress}`);
  
  const courseName1 = "Desenvolvimento de Aplicações para DREX: A Nova CBDC Brasileira";
  const courseDescription1 = "Este curso abrange o desenvolvimento de aplicações financeiras para a Digital Real (DREX), a futura Central Bank Digital Currency (CBDC) do Brasil. Os participantes aprenderão a criar soluções inovadoras utilizando a DREX, explorando sua integração com sistemas financeiros e seu impacto na economia brasileira.";
  const courseImageURI1 = "https://finsidersbrasil.com.br/wp-content/plugins/seox-image-magick/imagick_convert.php?width=904&height=508&format=.jpg&quality=91&imagick=uploads.finsidersbrasil.com.br/2024/02/drexBC-1024x580.jpg";
  const coursePrice1 = 100
  
  const courseName2 = "Introdução aos Contratos Inteligentes e NFTs";
  const courseDescription2 = "Explore os fundamentos dos contratos inteligentes e NFTs, incluindo criação, implementação e casos de uso práticos";
  const courseImageURI2 = "https://t.jus.com.br/R8IHJsRjfPm43eMrnGYfGsHKQhM=/704x400/smart/assets.jus.com.br/system/file/913/8a0a9c174e12be6bddd524509c8ac5e6.png";
  const coursePrice2 = 1
  
  const courseName3 = "Certificação em Segurança de Contratos Inteligentes e NFTs";
  const courseDescription3 = "Domine as melhores práticas de segurança para contratos inteligentes e NFTs, identificando e mitigando vulnerabilidades comuns";
  const courseImageURI3 = "https://pixelplex.io/wp-content/uploads/2022/02/nft-marketplace-security-main-1600-1.jpg";
  const coursePrice3 = 100
  
  const courseName4 = "Curso Avançado de Blockchain e Finanças Descentralizadas (DeFi)";
  const courseDescription4 = "Aprofunde-se na tecnologia blockchain, explorando protocolos DeFi, como empréstimos, staking e governança descentralizada";
  const courseImageURI4 = "https://investidorsardinha.r7.com/wp-content/uploads/2022/09/defi-o-que-e-como-funciona-e-para-que-serve-1024x576.jpg.webp";
  const coursePrice4 = 55
  
  const courseName5 = "Blockchain para Desenvolvedores Web";
  const courseDescription5 = "Descubra como integrar blockchain em aplicativos web, abordando conceitos básicos, implementação de transações e interação com contratos inteligentes";
  const courseImageURI5 = "https://cartoriosdopara.com.br/wp-content/uploads/2023/04/blockchain.jpg";
  const coursePrice5 = 186
  
  const course1Lesson1 = {
      lessonId: 1,
      lessonName: "Introdução à Digital Real (DREX)",
      lessonContent: "Este módulo oferece uma visão geral da Digital Real (DREX), incluindo seu propósito, funcionamento e impacto na economia brasileira. Os alunos serão introduzidos aos conceitos básicos de CBDCs e às características distintas da DREX.",
      mandatory: true,
      minimumPassingScore: 60,
      lessonQuestion: "O que é uma CBDC e qual é o papel da Digital Real (DREX) no sistema financeiro brasileiro? Quais são os benefícios e desafios associados à implementação da DREX? Como a DREX difere das moedas digitais existentes, como criptomoedas e stablecoins?",
      lessonDocURI : "https://repositorio.animaeducacao.com.br/bitstreams/520c518e-aa09-436b-b405-a5d18c370f1e/download",
      lessonAnswer: ""
  };

  const course1Lesson2 = {
      lessonId: 2,
      lessonName: "Desenvolvimento de Aplicações Financeiras com DREX",
      lessonContent: "Neste módulo, os alunos aprenderão a desenvolver aplicações financeiras utilizando a Digital Real (DREX). Eles explorarão casos de uso práticos, como pagamentos eletrônicos, remessas e serviços bancários digitais, e aprenderão a integrar a DREX em suas soluções",
      mandatory: true,
      minimumPassingScore: 60,
      lessonQuestion: "Quais são os principais casos de uso da DREX em aplicações financeiras? Como você pode integrar a DREX em um aplicativo de pagamentos eletrônicos? Quais são os desafios técnicos ao desenvolver aplicações financeiras com a DREX?",
      lessonDocURI : "https://repositorio.animaeducacao.com.br/bitstreams/520c518e-aa09-436b-b405-a5d18c370f1e/download",
      lessonAnswer: ""
    };
    
    const course1Lesson3 = {
      lessonId: 3,
      lessonName: "Regulação e Segurança na Utilização da DREX",
      lessonContent: "Este módulo aborda questões regulatórias e de segurança relacionadas à utilização da Digital Real (DREX). Os alunos aprenderão sobre políticas governamentais, conformidade regulatória, medidas de segurança cibernética e proteção de dados na era da CBDC.",
      mandatory: false,
      minimumPassingScore: 60,
      lessonQuestion: "Quais são os principais requisitos regulatórios para o desenvolvimento e operação de aplicações com a DREX? Como você pode garantir a segurança cibernética e a proteção de dados ao lidar com transações na DREX? Qual é o papel do Banco Central do Brasil na regulamentação e supervisão da DREX?",
      lessonDocURI : "https://repositorio.animaeducacao.com.br/bitstreams/520c518e-aa09-436b-b405-a5d18c370f1e/download",
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
    
    console.log('Generating new `.env` file.')
    const file = "/app/generated/.env"
    fs.writeFileSync(file, '');
    writeFile(file, `NEXT_PUBLIC_CHAIN=HARDHAT`);
    writeFile(file, `NEXT_PUBLIC_ACADEMIC_MANAGER_ADDRESS=${amAddress}`);
    writeFile(file, `NEXT_PUBLIC_CERTIFAI_ADDRESS=${certifAIAddress}`);
    console.log('`.env` file created.')
    
  } catch (error) {
    console.log('Courses error', error)
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
