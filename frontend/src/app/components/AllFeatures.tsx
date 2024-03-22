import React from 'react'
import Features from './Features'
import Images from "../services/Images"
import { MdAssignment } from 'react-icons/md'
import { FaGraduationCap } from 'react-icons/fa'
import { IoIosMedal } from 'react-icons/io'
import SectionTitle from './SectionTitle'
import LinkButton from './LinkButton'

function AllFeatures() {
    return (
        <div id='howitworks' className='mt-16'>
            <SectionTitle title='Como Funciona?' />
            <Features image={Images.tostudents} title="Benefícios" to="Para Alunos" description="Acesse suas notas e seu certificado a qualquer motmento, com segurança e verificabilidade assegurada por blockchain, garantindo sua credibilidade e acessibilidade profissional." reverse={false}><LinkButton color='blue' icon={<FaGraduationCap />} url='/my-courses'>Meus cursos</LinkButton></Features>
            <Features image={Images.toteachers} title="Benefícios" to="Para Professores" description="Simplifique o processo de avaliação e emissão de certificados, economizando tempo e recursos, enquanto garante a autenticidade e integridade dos documentos emitidos" reverse={true}><LinkButton color='gray' icon={<MdAssignment />} url='/student-score'>Lançar notas dos alunos</LinkButton></Features>
            <Features image={Images.certifai} title="Benefícios" to="Certificados NFT" description="Engaje os alunos de forma inovadora, proporcionando uma experiência de aprendizagem interativa e envolvente, enquanto promove a valorização e reconhecimento das conquistas educacionais de forma única e personalizada." reverse={false}><LinkButton color='blue' icon={<IoIosMedal />} url='/mint-nft'>Mintar meu Certificado</LinkButton></Features>
        </div>
    )
}

export default AllFeatures