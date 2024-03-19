import React from 'react'

interface PageTitleProps {
    title: string
    subtitle: string
}

function PageTitle (props: PageTitleProps) {
    return (
        <div className='flex flex-col m-auto px-2 py-10 text-gray-600 gap-4'>
            <h2 className="text-4xl font-extrabold">{props.title}</h2>
            <h4 className="text-xl">{props.subtitle}</h4>
        </div>
    )
}

export default PageTitle