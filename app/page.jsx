"use client"
import style from './page.module.css';
import Image from "next/image";
import Button from "@/components/button/Button";
import Link from "next/link";

export default async function Home() {
    return (
        <div>
            <Image src={"/home_page_background.png"} alt={"background"} width={3500} height={3500} className={style.backgroundImage} />
            <h1 className={style.title}>Last sunset Mission</h1>
            {/*href????*/}
            <Link href={"/login"}>
                <Button additionalClassName={style.buttonA} transparent={true} btnText={"Go to your panel"}/>
            </Link>
        </div>
    );
}
