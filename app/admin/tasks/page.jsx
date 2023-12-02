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
import DialogWindow from "@/components/dialogWindow/dialogWindow";
import Input from "@/components/input/Input";
import axios from "axios"

export default function Page() {
    const [newTaskTitle, setNewTaskTitle] = useState("")
    const [newTaskDescription, setNewTaskDescription] = useState("")
    const [newTaskUserId, setNewTaskUserId] = useState("")
    const {data: session} = useSession()
    const [astronauts, setAstronauts] = useState([])
    useGetUsers(setAstronauts)
    const [tasks, setTasks] = useState([])
    useGetAllTasks(setTasks)
    const groupedTasks = Object.groupBy(tasks, item => item.userId)
    const listOfUsersWithTasks = []
    const [window, setWindow] = useState(false)

    const addNewTask = async () => {
        try{
            const response = await axios.post("/api/task", {title: newTaskTitle, description: newTaskDescription, userId: newTaskUserId})
            setWindow(false)
        }
        catch (e) {
            console.log(e)
        }
    }

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
            <Button href={"/"} btnText={"Add task"} onClick={() => setWindow(true)}/>
            {listOfUsersWithTasks.map(item =>
                <DashboardElement backgroundColor={"#BAB6C1"} additionalClassName={style.element} key={item.userId}>
                    <h3> {item.name} </h3>
                    <Table
                        items={item.tasks}
                    />
                </DashboardElement>
            )}
            {window && <DialogWindow close={() => setWindow(false)}>
                <h2>Add new task</h2>
                <Input onChange={setNewTaskTitle} type={"text"} placeholder={"Enter the task title"} label={"Title"}></Input>
                <Input onChange={setNewTaskUserId} type={"text"} placeholder={"Enter user id"} label={"User ID"}></Input>
                <Input onChange={setNewTaskDescription} type={"textarea"} placeholder={"Enter the task description"} label={"Description"}></Input>
                <Button btnText={"Add task"} onClick={()=>{addNewTask()}}/>
            </DialogWindow>}
        </Dashboard>
    )
}
