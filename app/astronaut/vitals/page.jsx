"use client"
import style from './page.module.scss'
import Vitals from "@/components/vitals/vitals"
import Button from "@/components/button/Button"
import Link from "next/link"
import {useState} from "react";
import useGetVitals from "@/hooks/useGetVitals";
import Dashboard from "@/components/dashboard/Dashboard";
import {useRouter} from "next/navigation";

export default function Page() {
    const [vitals, setVitals] = useState({heartBeat: "", feeling: "", sugar: "", sleep: "", exercise: ""})
    useGetVitals("656a4bad181e25ea1531b02d", setVitals)

    const {heartBeat, feeling, sugar, sleep, exercise} = vitals
    
    const router = useRouter();
    function redirect()  {
        router.replace("/astronaut/report-vitals");
    }

    return(
        <Dashboard>
            <Vitals title={"Your vitals"} heartRate={heartBeat} mood={feeling} sugar={sugar} sleep={sleep} exercise={exercise}/>
            <Button btnText={"Report current vitals"} additionalClassName={style.buttonEx} onClick={redirect} />
        </Dashboard>
    )
}
