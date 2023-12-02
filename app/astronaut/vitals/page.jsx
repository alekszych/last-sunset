"use client"
import style from './page.module.scss';
import Vitals from "@/components/vitals/vitals";
import Button from "@/components/button/Button";
import {useRouter} from "next/navigation";

export default function Page() {
    const router = useRouter();
    function redirect()  {
        router.replace("/astronaut/report-vitals");
    }

    return(
        <div>
            <Vitals title={"Your vitals"} />
            <Button btnText={"Report current vitals"} additionalClassName={style.buttonEx} onClick={redirect} />
        </div>
    )
}
