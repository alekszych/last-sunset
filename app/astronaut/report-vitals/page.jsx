"use client"
import style from './page.module.scss';
import Input from "@/components/input/Input";
import {useState} from "react";
import Button from "@/components/button/Button";
import {useSession} from "next-auth/react";
import axios from "axios";
import {useRouter} from "next/navigation";

export default function Page() {
    const { data: session } = useSession()
    const router = useRouter()
    const userId = session?.user?.id || 0

    const [heartBeat, setHeartBeat] = useState("");
    const [sugar, setSugar] = useState("");
    const [feeling, setFeeling] = useState("normal");
    const [sleep, setSleep] = useState("");
    const [exercise, setExercise] = useState("");

    const handleSubmit = async () => {
        const res = await axios.post("/api/vitals", { userId, heartBeat, sugar, sleep, exercise, feeling})

        if ("error" in res) {
            console.log("Invalid Credentials");
            return;
        }

        if(typeof window !== "undefined")
            router.push("/astronaut/vitals")
    }

    return(
        <div className={style.form}>
            <h2 className={style.title}> Report vitals </h2>
            <div className={style.inputContainer}>
                <Input label={"Heart rate"} type={"number"} placeholder={"Heart rate"} required={true} unit={"bpm"} onChange={setHeartBeat} />
                <Input label={"Sugar level"} type={"number"} placeholder={"Sugar level"} required={true} unit={"mg"} onChange={setSugar} />
                <Input label={"Current mood"} type={"select"} selectOptionsHTML={<><option value={"happy"}>Happy</option><option value={"normal"} selected>Normal</option><option value={"sad"}>Sad</option></>} unit={"select"} onChange={setFeeling} />
                <Input label={"Last sleep"} type={"number"} placeholder={"Last sleep"} required={true} unit={"h"} onChange={setSleep} />
                <Input label={"Exercise"} type={"number"} placeholder={"Exercise"} required={true} unit={"kcal"} onChange={setExercise} />
            </div>
            <Button onClick={handleSubmit} btnText={"Submit"} additionalClassName={style.colorChange}/>
        </div>
    )
}
