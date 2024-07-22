import React from "react";

interface ButtonProps {
    color: 'primary' | 'normal' | 'success' | 'danger' | 'base';
    style?: 'filled' | 'outlined';
    onClick?: () => void;
    text: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({color, onClick, text,
                                           className, style}) => {

    const classNameOfColor = (color: string) => {
        switch (color) {
            case 'primary':
                return `${style === "outlined" ? `hover:bg-custom-primary-100 dark:hover:bg-custom-primary-800
                border border-custom-primary-600 text-custom-primary-600 dark:text-white` :
                    "bg-custom-primary-600 hover:bg-custom-primary-700 text-white"} font-bold text-sm py-1.5 px-4 rounded-lg `;
            case 'normal':
                return `${style === "outlined" ? `border border-custom-gray-900
                 dark:border-custom-gray-200 text-custom-gray-900 dark:text-custom-gray-200 dark:hover:bg-custom-gray-800
                hover:bg-custom-gray-200 text-custom-gray-200` :
                    "bg-custom-gray-100 hover:bg-custom-gray-200"}  text-custom-gray-800 font-bold text-sm py-1.5 px-4 rounded-lg`;
            case 'success':
                return `
                ${style === "outlined" ? `border border-custom-success-600 text-custom-success-600 
                hover:bg-custom-success-100 dark:hover:bg-custom-success-800 dark:text-white` :
                    "bg-custom-success-600 hover:bg-custom-success-700"}
                 
                text-white text-sm font-bold py-1.5 px-4 rounded-lg`;
            case 'danger':
                return `
                ${style === "outlined" ? `border border-error-500 text-error-500
                hover:bg-error-100 dark:hover:bg-error-50 dark:text-white dark:hover:bg-error-800` :
                    `bg-error-600 hover:bg-error-700 text-white`}
                text-white font-bold text-sm py-1.5 px-4 rounded-lg`;
            case 'base':
                return `
                ${style === "outlined" ? `border border-custom-gray-900 dark:border-custom-gray-200
                 dark:text-custom-gray-100 dark:hover:bg-custom-gray-800
                hover:bg-custom-gray-200 text-custom-gray-900` :
                    `dark:bg-white bg-custom-primary-900 dark:hover:bg-custom-gray-200 hover:bg-custom-primary-800 text-white`}
                dark:text-custom-gray-800 font-bold text-sm py-1.5 px-4  rounded-lg`;


            default:
                return 'bg-error-500 hover:bg-error-700 text-white font-bold text-sm py-1.5 px-4 rounded';
        }
    }

    return (
        <button
            className={`${classNameOfColor(color)} ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;