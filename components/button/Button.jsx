"use client";

import style from "./button.module.scss"
import Link from "next/link";

const Button = ({transparent, btnText, href}) => {
    return (
        <Link href={href}>
            <button className={transparent === true ? style.btnTransparent : style.btnStandard}>
                <h5>{btnText}</h5>
            </button>
        </Link>
    );
}

export default Button;
