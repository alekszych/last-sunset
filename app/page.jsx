import style from './page.module.css';
import Image from "next/image";
import Button from "@/components/button/Button";

export default async function Home() {
    return (
        <div>
            <Image src={"/home_page_background.png"} alt={"background"} width={3500} height={3500} className={style.backgroundImage} />
            <h1 className={style.title}>Last sunset Mission</h1>
            {/*href????*/}
            <Button additionalClassName={style.buttonA} transparent={true} btnText={"Learn about our missions"} href={"/guest"}/>
        </div>
    );
}
