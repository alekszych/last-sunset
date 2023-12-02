"use client"
import style from "./button.module.scss"
import Link from "next/link"

const Button = ({btnText, href, additionalClassName}) => {
    return (
        <Link href={href} className={additionalClassName}>
            <button className={[style.btnTransparent, additionalClassName].join(" ")}>
                <h5>{btnText}</h5>
            </button>
        </Link>
    );
}

export default Button
