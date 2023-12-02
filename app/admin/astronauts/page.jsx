"use client"
import Dashboard from "@/components/dashboard/Dashboard"
import DashboardElement from "@/components/dashboardElement/DashboardElement"
import style from "./page.module.scss"
import Vitals from "@/components/vitals/vitals"
import Table from "@/components/table/table"
import {useState} from "react"
import useGetUsers from "@/hooks/useGetUsers";
import useGetVitals from "@/hooks/useGetVitals";
import useGetTasks from "@/hooks/useGetTasks";
import {useSession} from "next-auth/react";

export default function Page() {
    const { data: session } = useSession()
    const userId = session?.user?.id
    const [selectedAstronaut, setSelectedAstronaut] = useState(0)
    const [users, setUsers] = useState([{"_id": userId}])
    const [vitals, setVitals] = useState({heartBeat: "", feeling: "", sugar: "", sleep: "", exercise: ""})
    const [tasks, setTasks] = useState([])
    useGetUsers(setUsers)
    useGetVitals(users[selectedAstronaut]._id, setVitals)
    useGetTasks(users[selectedAstronaut]._id, setTasks)
    const {heartBeat, feeling, sugar, sleep, exercise} = vitals

    return(
        <Dashboard className={style.dashboard}>
            <section className={style.section}>
                <DashboardElement backgroundColor={"#B0D2C1"}>
                    <h3> Astronauts </h3>
                </DashboardElement>
                <div className={style.astronautContainer}>
                    {users.map((user, i) =>
                        <DashboardElement additionalClassName={style.astronaut} backgroundColor={"#BAB6C1"} key={user._id} onClick={() => setSelectedAstronaut(i)}>
                            <h4> {user.email} </h4>
                        </DashboardElement>
                    )}
                </div>
            </section>

            <Vitals title={"Vitals of " + users[selectedAstronaut].email} heartRate={heartBeat} mood={feeling} sugar={sugar} sleep={sleep} exercise={exercise}/>

            <section className={style.section}>
                <DashboardElement backgroundColor={"#C4C3A9"}>
                    <h3> Tasks of {users[selectedAstronaut].email} </h3>
                </DashboardElement>
                <DashboardElement backgroundColor={"#BAB6C1"}>
                    <Table items={tasks}/>
                </DashboardElement>
            </section>
        </Dashboard>
    )
}
