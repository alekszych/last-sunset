"use client";

import style from "./button.module.scss"
import Link from "next/link";

const Button = ({transparent, btnText, href, additionalClassName}) => {
    return (
        <Link href={href} className={additionalClassName}>
            <button className={additionalClassName ? [(transparent === true ? style.btnTransparent : style.btnStandard), additionalClassName].join(" ") : transparent === true ? style.btnTransparent : style.btnStandard}>
                <h5>{btnText}</h5>
            </button>
        </Link>
    );
}

export default Button;
