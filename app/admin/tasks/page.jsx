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
    const [astronauts, setAstronauts] = useState([])
    useGetUsers(setAstronauts)
    const [tasks, setTasks] = useState([])
    useGetAllTasks(setTasks)
    const groupedTasks = Object.groupBy(tasks, item => item.userId)

    const listOfUsersWithTasks = []

    if(astronauts){
        for (const [key, value] of Object.entries(groupedTasks)){
            if(key !== undefined){
                listOfUsersWithTasks.push({
                    userId: (astronauts.find(astronaut => key === astronaut._id))._id,
                    name: (astronauts.find(astronaut => key === astronaut._id)).email,
                    tasks: groupedTasks[(astronauts.find(astronaut => key === astronaut._id))._id]
                })

            }
        }
    }

    return(
        <Dashboard>
            <Button href={"/"} btnText={"Add task"}/>
            {listOfUsersWithTasks.map(item =>
                <DashboardElement backgroundColor={"#BAB6C1"} additionalClassName={style.element} key={item.userId}>
                    <h3> {item.name} </h3>
                    <Table
                        items={item.tasks}
                    />
                </DashboardElement>
            )}
        </Dashboard>
    )
}
