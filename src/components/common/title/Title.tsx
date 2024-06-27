import React from 'react';

type TTitleProps = {
    title: string,
    className?: string,
    size?: "sm" | "md" | "lg",
    tag: "h1" | "h2" | "h3" |"h4",
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

const Title = ({size,title,className,tag}:TTitleProps) => {
    const mainClassList = "font-primary text-gray-950  " + className;
    let mainSize = " text-2xl";

    const Tag = tag ?? "h1";

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
        <Tag className={mainClassList + mainSize}>{title}</Tag>
    );
};

export default Title;