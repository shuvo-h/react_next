import React from 'react';

type TTitleProps = {
    title: string,
    className?: string,
    size?: "sm" | "md" | "lg",
}

/*
    onClick
    disable
    loading
    size
    schema
    class
    icons
*/

const Title = ({size,title,className,}:TTitleProps) => {
    const mainClassList = "font-primary text-gray-950  " + className;
    let mainSize = " text-2xl";

    switch (size) {
        case "sm":
            mainSize = " text-xl"
            break;
        case "md":
            mainSize = " text-2xl"
            break;
        case "lg":
            mainSize = " text-4xl"
            break;
        default:
            mainSize = " text-2xl"
            break;
    }


    return (
        <h1 className={mainClassList + mainSize}>{title}</h1>
    );
};

export default Title;