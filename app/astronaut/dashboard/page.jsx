"use client"
import style from "./page.module.scss"
import Dashboard from "@/components/dashboard/Dashboard";
import DashboardElement from "@/components/dashboardElement/DashboardElement";
import { FaHeart } from "react-icons/fa";
import { TbMoodSmileFilled, TbMoodEmptyFilled, TbMoodSadFilled } from "react-icons/tb";
import { IoCubeOutline } from "react-icons/io5";
import Link from "next/link";
import Table from "@/components/table/table";
import {useSession} from "next-auth/react";
import {useState} from "react";
import useGetTasks from "@/hooks/useGetTasks";
import useGetVitals from "@/hooks/useGetVitals";
const timeLeft = 235

export default function Page() {
    const { data: session } = useSession()
    const userId = session?.user?.id || 0

    const [tasks, setTasks] = useState([])
    const [vitals, setVitals] = useState([])

    useGetTasks(userId, setTasks)
    useGetVitals(userId, setVitals)

    let iconMood

    switch(vitals.feeling) {
        case("happy"):
            iconMood = <TbMoodSmileFilled size={24} color={"green"} />;
            break;

        case("normal"):
            iconMood = <TbMoodEmptyFilled  size={24} color={"darkblue"} />;
            break;

        case("sad"):
            iconMood = <TbMoodSadFilled size={24} color={"red"} />;
            break;
    }

    return(
        <div className={style.content}>
            <Dashboard className={style.section}>
                <DashboardElement backgroundColor={"#C4C3A9"}><h3>Hello {session?.user?.email}!</h3></DashboardElement>
                <section style={{height: "251px"}}>
                    <DashboardElement additionalClassName={style.dashboardEl} backgroundColor={"#BAC1B6"}>
                        <h4 className={style.texts}>Time left</h4>
                        <h3> {timeLeft===1 ? timeLeft + "day" : timeLeft + " days"}</h3>
                    </DashboardElement>
                    <DashboardElement backgroundColor={"#B0D2C1"}>
                        <h3>Vitals</h3>
                        <div className={style.widgetGroup}>
                            <div className={style.iconWidget}>
                                <FaHeart size={24} color={"#AD0000"} />
                                <h5>{vitals.heartBeat} bpm</h5>
                            </div>
                            <div className={style.iconWidget}>
                                {iconMood}
                                <h5>{vitals.feeling === "happy" ? "Happy" : vitals.feeling === "normal" ? "Normal" : "Sad"}</h5>
                            </div>
                            <div className={style.iconWidget}>
                                <IoCubeOutline size={24} color={"black"} />
                                <h5>{vitals.sugar} mg</h5>
                            </div>
                        </div>
                    </DashboardElement>
                    <DashboardElement additionalClassName={style.dashboardElException} backgroundColor={"#BAB6C1"}>
                        <h3>Tasks</h3>
                        <div className={style.taskGroup}>
                            <p className={style.tasksHeader1}><b>Name</b></p>
                            <p className={style.tasksHeader2}><b>Status</b></p>
                            {
                                tasks.slice(0, 2).map((el, index)=>{
                                    if(index === 3) {
                                        return(<Link href={"/astronaut/tasks"}><p className={style.seeAllTasksLink}><b><u>See all tasks</u></b></p></Link>);
                                    } else if (index > 3) {
                                        return;
                                    }
                                    return(<><p>{el.title}</p> <p>{el.status}</p></>);
                                })
                            }
                        </div>
                    </DashboardElement>
                </section>
                <DashboardElement backgroundColor={"#BFB293"}>
                    <h3 style={{alignSelf: "flex-start"}}>Mission tasks:</h3>
                    <Table items={tasks} />
                </DashboardElement>
            </Dashboard>
        </div>
    )
}
