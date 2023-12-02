"use client"
import Dashboard from "@/components/dashboard/Dashboard"
import DashboardElement from "@/components/dashboardElement/DashboardElement"
import Table from "@/components/table/table"
import style from "./page.module.scss"
import Button from "@/components/button/Button"
import {useState} from "react";
import useGetTasks from "@/hooks/useGetTasks";
import {useSession} from "next-auth/react";
import useGetAllTasks from "@/hooks/useGetAllTasks";


export default function Page() {
    const {data: session} = useSession()

    const [tasks, setTasks] = useState([])
    useGetAllTasks(setTasks)


    return(
        <Dashboard>
            <Button href={"/"} btnText={"Add task"}/>
            <DashboardElement backgroundColor={"#BAB6C1"} additionalClassName={style.element}>
                <h3> All tasks </h3>
                <Table
                    items={tasks}
                />
            </DashboardElement>
        </Dashboard>
    )
}
