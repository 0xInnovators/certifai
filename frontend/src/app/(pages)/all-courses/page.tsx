import AllCourses from '@/app/components/AllCourses'
import PageTitle from '@/app/components/PageTitle'
import React from 'react'

function AllCoursesPage() {
  return (
    <div className=''>
      <PageTitle title='Lista de cursos' subtitle='Aqui, você consegue ver toda a lista de cursos' />
      <AllCourses />
    </div>
  )
}

export default AllCoursesPage