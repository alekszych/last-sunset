import style from './page.module.scss';
import Vitals from "@/components/vitals/vitals";
import Button from "@/components/button/Button";
import Link from "next/link";

export default function Page() {
    return(
        <div>
            <Vitals title={"Your vitals"} />
            <Button btnText={"Report current vitals"} additionalClassName={style.buttonEx} ><Link href={"/astronaut/report-vitals"} className={style.link} /></Button>
        </div>
    )
}
