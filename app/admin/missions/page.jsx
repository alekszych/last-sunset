"use client";

import Dashboard from "@/components/dashboard/Dashboard";
import Button from "@/components/button/Button";
import DashboardElement from "@/components/dashboardElement/DashboardElement";
import {useEffect, useState} from "react";
import style from "./page.module.scss";
import ProgressBar from "@/components/progressBar/ProgressBar";
import Table from "@/components/table/table";
import axios from "axios";

export default function Page() {
    const[missions, setMissions] = useState(null);
    const[loading, setLoading] = useState(true);
    const[currentlySelected, setCurrentlySelected] = useState(null);


    async function changeStatus()
    {
        await axios.put("/api/mission", {title: currentlySelected.title, changedElement: "status", changeValueTo: currentlySelected.status === "In progress" ? "Pending" : "In progress"});
        let currentlySelectedClone = currentlySelected;
        currentlySelectedClone.status = currentlySelected.status === "In progress" ? "Pending" : "In progress";
        setCurrentlySelected(currentlySelectedClone);
    }

    useEffect(() => {
        fetch('/api/getAllMissions')
            .then((res) => res.json())
            .then((data) => {
                setMissions(data.missions);
                setLoading(false);

                setCurrentlySelected(data.missions[0]);
            })
    }, []);

    if(loading && !missions){
        return(
            <div style={{"display":"flex", "justify-content":"center", "align-items":"center", "width":"100%", "height":"100%"}}>
                <h1>LOADING...</h1>
            </div>
        )
    }
    else {
        return (
            <div style={{"padding": "64px 0"}}>
                <Dashboard>
                    <Button href={"/ababba"} btnText={"Create new mission"}></Button>
                    <section style={{"padding": "32px 0"}}>
                        {
                            missions.map((mission, i)=>
                                <div key={i} className={mission.title===currentlySelected.title ? style.missionSelected : style.mission} onClick={()=>{setCurrentlySelected(mission)}}>
                                    <h5>{mission.title}
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="tabler:dots">
                                                <path id="Vector" d="M4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13C5.26522 13 5.51957 12.8946 5.70711 12.7071C5.89464 12.5196 6 12.2652 6 12C6 11.7348 5.89464 11.4804 5.70711 11.2929C5.51957 11.1054 5.26522 11 5 11C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12ZM11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12ZM18 12C18 12.2652 18.1054 12.5196 18.2929 12.7071C18.4804 12.8946 18.7348 13 19 13C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11C18.7348 11 18.4804 11.1054 18.2929 11.2929C18.1054 11.4804 18 11.7348 18 12Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                        </svg>
                                    </h5>
                                    <p>{mission.status}</p>
                                </div>
                            )
                        }
                    </section>
                    <section className={style.midsectionSection}>
                        <div className={style.currentlySelectedMoreInfo}>
                            <h5>
                                Mission name
                            </h5>
                            <h3>
                                {currentlySelected.title}
                            </h3>
                            <button className={currentlySelected.status==="Completed" ? style.dontDisplay : (currentlySelected.status==="In progress" ? style.putThisAway : style.makeTheCurrentTask)} onClick={()=>{changeStatus()}}><h5>{currentlySelected.status==="In progress" ? "Put this mission away" : "Make this the current mission"}</h5></button>
                        </div>
                    </section>
                    <section className={style.midsectionSection}>
                        <div className={style.currentlySelectedMoreInfo}>
                            <div className={style.progressBar}>
                                <h3>Progress</h3>
                                <ProgressBar tasks={currentlySelected.milestones}></ProgressBar>
                            </div>
                            <Table items={currentlySelected.milestones}></Table>
                        </div>
                    </section>
                    <Button href={"/ababba"} btnText={"Add task to mission"}></Button>
                </Dashboard>
            </div>
        )
    }
}
