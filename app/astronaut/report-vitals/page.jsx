"use client"
import style from './page.module.scss';
import Input from "@/components/input/Input";
import {useState} from "react";
import Button from "@/components/button/Button";
import * as querystring from "querystring";
import {signIn} from "next-auth/react";
import {router} from "next/client";
import {useRouter} from "next/navigation";
import axios from "axios";

export default function Page() {
    const [hr, setHr] = useState("");
    const [sugar, setSugar] = useState("");
    const [mood, setMood] = useState("normal");
    const [sleep, setSleep] = useState("");
    const [exercise, setExercise] = useState("");
    const router = useRouter()

    const handleSubmit = async () => {
        await axios.post("/api/vitals", { userId, hr, sugar, sleep, exercise})

        if (res.error) {
            console.log("Invalid Credentials");
            return;
        }

        router.replace("/astronaut/vitals");
    }

    return(
        <div className={style.form}>
            <h2 className={style.title}> Report vitals </h2>
            <div className={style.inputContainer}>
                <Input label={"Heart rate"} type={"number"} placeholder={"Heart rate"} required={true} unit={"bpm"} onChange={setHr} />
                <Input label={"Sugar level"} type={"number"} placeholder={"Sugar level"} required={true} unit={"mg"} onChange={setSugar} />
                <Input label={"Current mood"} type={"select"} selectOptionsHTML={<><option value={"happy"}>Happy</option><option value={"normal"} selected>Normal</option><option value={"sad"}>Sad</option></>} unit={"select"} onChange={setMood} />
                <Input label={"Last sleep"} type={"number"} placeholder={"Last sleep"} required={true} unit={"h"} onChange={setSleep} />
                <Input label={"Exercise"} type={"number"} placeholder={"Exercise"} required={true} unit={"kcal"} onChange={setExercise} />
            </div>
            <Button onClick={handleSubmit} btnText={"Submit"} additionalClassName={style.colorChange}/>
        </div>
    )
}
