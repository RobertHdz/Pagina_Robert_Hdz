import React from 'react';

interface TitleProps {
    title: string;
    subtitle: string;
}

const Title = ({ title, subtitle }: TitleProps) => {
    return (
        <div className="flex flex-col items-center mb-8">
            <h3 className="text-gray-400">{title}</h3>
            <h2 className="text-3xl">{subtitle}</h2>
        </div>
    )
}

export default Title;