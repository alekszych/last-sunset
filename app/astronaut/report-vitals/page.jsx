"use client"
import style from './page.module.scss';
import Input from "@/components/input/Input";
import {useState} from "react";
import Button from "@/components/button/Button";

export default function Page() {
    const [hr, setHr] = useState("");
    const [sugar, setSugar] = useState("");
    const [mood, setMood] = useState("normal");
    const [sleep, setSleep] = useState("");

    const handleSubmit = async () => {

    }

    return(
        <div className={style.form}>
            <h2 className={style.title}> Report vitals </h2>
            <div className={style.inputContainer}>
                <Input label={"Heart rate"} type={"number"} placeholder={"Heart rate"} required={true} unit={"bpm"} onChange={setHr} />
                <Input label={"Sugar level"} type={"number"} placeholder={"Sugar level"} required={true} unit={"mg"} onChange={setSugar} />
                <Input label={"Current mood"} type={"select"} selectOptionsHTML={<><option value={"happy"}>Happy</option><option value={"normal"} selected>Normal</option><option value={"sad"}>Sad</option></>} unit={"select"} onChange={setMood} />
                <Input label={"Last sleep"} type={"number"} placeholder={"Last sleep"} required={true} unit={"h"} onChange={setSleep} />
            </div>
            <Button onClick={handleSubmit} btnText={"Login"} additionalClassName={style.colorChange}/>
        </div>
    )
}
