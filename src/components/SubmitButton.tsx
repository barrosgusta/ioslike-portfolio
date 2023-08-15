import { ComponentProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface SubmitButtonProps extends ComponentProps<"button"> {
    className?: string
    text: string
    icon?: ReactNode
}

export function SubmitButton({ className, text, icon, ...props }: SubmitButtonProps) {
    return (
        <button 
            type="submit" 
            className={twMerge("duration-100 font-sfpmedium inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-default hover:shadow-sm text-base font-medium text-zinc-100 bg-indigo-600 hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-80", className)}
            {...props}
        >
            {icon}
            {text}
        </button>   
    )
}