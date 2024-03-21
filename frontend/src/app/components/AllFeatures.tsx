'use client'
import React from 'react'
import Features from './Features'
import Images from "../services/Images"
import Button from './Button'
import { MdAssignment } from 'react-icons/md'
import { FaGraduationCap } from 'react-icons/fa'
import { IoIosMedal } from 'react-icons/io'
import SectionTitle from './SectionTitle'

function AllFeatures() {
    return (
        <div id='howitworks' className='mt-16'>
            <SectionTitle title='Como Funciona?' />
            <Features image={Images.tostudents} title="Benefícios" to="Para Alunos" description="Acesse suas notas e seu certificado a qualquer motmento, com segurança e verificabilidade assegurada por blockchain, garantindo sua credibilidade e acessibilidade profissional." reverse={false}><Button color='blue' icon={<FaGraduationCap />} onClick={() => { }}>Meus cursos</Button></Features>
            <Features image={Images.toteachers} title="Benefícios" to="Para Professores" description="Simplifique o processo de avaliação e emissão de certificados, economizando tempo e recursos, enquanto garante a autenticidade e integridade dos documentos emitidos" reverse={true}><Button color='gray' icon={<MdAssignment />} onClick={() => { }}>Lançar notas dos alunos</Button></Features>
            <Features image={Images.certifai} title="Benefícios" to="Certificados NFT" description="Engaje os alunos de forma inovadora, proporcionando uma experiência de aprendizagem interativa e envolvente, enquanto promove a valorização e reconhecimento das conquistas educacionais de forma única e personalizada." reverse={false}><Button color='blue' icon={<IoIosMedal />} onClick={() => { }}>Mintar meu Certificado</Button></Features>
        </div>
    )
}

export default AllFeatures