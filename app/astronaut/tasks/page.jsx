"use client"
import style from "./page.module.scss"
import Dashboard from "@/components/dashboard/Dashboard";
import DashboardElement from "@/components/dashboardElement/DashboardElement";
import Table from "@/components/table/table";
import axios from "axios"
import {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import useGetTasks from "@/hooks/useGetTasks";

export default function Page() {
    const {data: session} = useSession()

    const [tasks, setTasks] = useState([])
    useGetTasks(1, setTasks) // todo: change to session.userId

    return(
        <Dashboard>
            <DashboardElement additionalClassName={style.dashboardEl} backgroundColor={"#B0D2C1"}>
                <h5>TODO</h5>
                <h3>Your Tasks</h3>
            </DashboardElement>
            <DashboardElement backgroundColor={"#C4C3A9"}>
                <Table items={tasks} />
            </DashboardElement>
        </Dashboard>
    )
}
