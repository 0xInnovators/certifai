import React from 'react'

interface SectionTitleProps {
    title: string
}
function SectionTitle({ title }: SectionTitleProps) {
    return (
        <h2 className="w-full text-3xl font-semibold text-gray-200 text-center">{title}</h2>
    )
}

export default SectionTitle