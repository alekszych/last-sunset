"use client"
import style from "./page.module.scss"
import Dashboard from "@/components/dashboard/Dashboard";
import DashboardElement from "@/components/dashboardElement/DashboardElement";
import Table from "@/components/table/table";
import {useState} from "react";
import {useSession} from "next-auth/react";
import useGetTasks from "@/hooks/useGetTasks";
import axios from "axios"

export default function Page() {
    const {data: session} = useSession()
    const userId = session?.user?.id || 0

    const [tasks, setTasks] = useState([])
    useGetTasks(userId, setTasks)

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

    return(
        <Dashboard>
            <DashboardElement additionalClassName={style.dashboardEl} backgroundColor={"#B0D2C1"}>
                <h5>TODO</h5>
                <h3>Your Tasks</h3>
            </DashboardElement>
            <DashboardElement backgroundColor={"#C4C3A9"}>
                <Table items={tasks} changeTaskStatus={changeTaskStatus}/>
            </DashboardElement>
        </Dashboard>
    )
}
