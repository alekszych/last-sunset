"use client"
import Dashboard from "@/components/dashboard/Dashboard"
import DashboardElement from "@/components/dashboardElement/DashboardElement"
import Table from "@/components/table/table"
import style from "./page.module.scss"
import Button from "@/components/button/Button"
import {useState} from "react"
import {useSession} from "next-auth/react"
import useGetAllTasks from "@/hooks/useGetAllTasks"
import useGetUsers from "@/hooks/useGetUsers"


export default function Page() {
    const {data: session} = useSession()
    const [users, setUsers] = useState([])
    useGetUsers(setUsers)
    const [tasks, setTasks] = useState([])
    useGetAllTasks(setTasks)

    const groupedTasks = Object.groupBy(tasks, item => item.userId)
    for (const [key, value] of Object.entries(groupedTasks)){
        if(key !== undefined){
            console.log(users.find(user => user._id === key))
        }
    }
    console.log(groupedTasks)

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
