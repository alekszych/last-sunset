"use client"
import style from "./button.module.scss"
import Link from "next/link"

const Button = ({btnText, onClick, additionalClassName}) => {
    return (
        <button className={[style.btnTransparent, additionalClassName].join(" ")} onClick={onClick}>
            <h5>{btnText}</h5>
        </button>
    );
}

export default Button
