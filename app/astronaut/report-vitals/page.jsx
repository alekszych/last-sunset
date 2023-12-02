"use client"
import style from './page.module.scss';
import Vitals from "@/components/vitals/vitals";
import Dashboard from "@/components/dashboard/Dashboard";
import DashboardElement from "@/components/dashboardElement/DashboardElement";
import Input from "@/components/input/Input";
import {useState} from "react";

export default function Page() {
    const [hr, setHr] = useState("");
    const [sugar, setSugar] = useState("");
    const [mood, setMood] = useState("normal");
    const [sleep, setSleep] = useState("");

    return(
        <Dashboard>
            <DashboardElement backgroundColor={"#BAB6C1"}><h3>Your vitals</h3></DashboardElement>
            <DashboardElement backgroundColor={"#B0D2C1"}>
                <Input label={"Heart rate"} type={"text"} placeholder={"Heart rate"} required={true} onChange={setHr} />
                <Input label={"Sugar level"} type={"text"} placeholder={"Sugar level"} required={true} onChange={setSugar} />
                <Input label={"Current mood"} type={"select"} selectOptionsHTML={<><option value={"happy"}>Happy</option><option value={"normal"} selected>Normal</option><option value={"sad"}>Sad</option></>} onChange={setMood} />
                <Input label={"Last sleep"} type={"text"} placeholder={"Last sleep"} required={true} onChange={setSleep} />
            </DashboardElement>
        </Dashboard>
    )
}
