"use client";
import {useEffect, useState} from "react";
import Button from "@/components/button/Button";
import Dashboard from "@/components/dashboard/Dashboard";
import ProgressBar from "@/components/progressBar/ProgressBar";
import Table from "@/components/table/table";
import style from "./page.module.scss";
import axios from "axios";

export default function Page() {
    const[mission, setMission] = useState(null);
    const[loading, setLoading] = useState(true);

    const changeTaskStatus = async(value, title) => {
        try{
            const res = await axios.put('/api/task', {title: title, changedElement: "status", changeValueTo: value})
            console.log(res)
        }
        catch (e)
        {
            console.log(e)
        }
    }

    useEffect(() => {
        fetch('/api/mission')
            .then((res) => res.json())
            .then((data) => {
                setMission(data.mission[0]);
                setLoading(false);
                console.log(data);
            })
    }, []);

    if(loading && !mission){
        return(
            <div style={{"display":"flex", "justify-content":"center", "align-items":"center", "width":"100%", "height":"100%"}}>
                <h1>LOADING...</h1>
            </div>
        )
    }
    else
    {
        console.log(mission);
        return (
            <div style={{"padding": "64px 0"}}>
                <Dashboard>
                    <section className={style.midsectionSection}>
                        <div className={style.currentlySelectedMoreInfo}>
                            <h5>
                                Mission name
                            </h5>
                            <h3>
                                {mission.title}
                            </h3>
                        </div>
                    </section>
                    <section className={style.midsectionSection}>
                        <div className={style.currentlySelectedMoreInfoColor2}>
                            <div className={style.progressBar}>
                                <h3>Progress</h3>
                                <ProgressBar tasks={mission.milestones}></ProgressBar>
                            </div>
                            <Table items={mission.milestones} changeTaskStatus={changeTaskStatus}></Table>
                        </div>
                    </section>
                </Dashboard>
            </div>
        )
    }
}
