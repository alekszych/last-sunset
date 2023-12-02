"use client"
import Dashboard from "@/components/dashboard/Dashboard"
import DashboardElement from "@/components/dashboardElement/DashboardElement"
import style from "./page.module.scss"
import Vitals from "@/components/vitals/vitals"
import Table from "@/components/table/table"
import {useState} from "react"

const astronauts = [
    {id: 4212411, name: "John Sparrow"},
    {id: 421421, name: "John Black"}
]

const tasks = [
    {id: 4121321, name: "Task 1", description: "Lorem ipsum dolor", status: "Pending"}
]

export default function Page() {
    const [selectedAstronaut, setSelectedAstronaut] = useState(1)

    return(
        <Dashboard className={style.dashboard}>
            <section className={style.section}>
                <DashboardElement backgroundColor={"#B0D2C1"}>
                    <h3> Astronauts </h3>
                </DashboardElement>
                <div className={style.astronautContainer}>
                    {astronauts.map((astronaut, i) =>
                        <DashboardElement additionalClassName={style.astronaut} backgroundColor={"#BAB6C1"} key={astronaut.id} onClick={() => setSelectedAstronaut(i)}>
                            <p> {astronaut.name} </p>
                        </DashboardElement>
                    )}
                </div>
            </section>

            <Vitals title={"Vitals of " + astronauts[selectedAstronaut].name}/>

            <section className={style.section}>
                <DashboardElement backgroundColor={"#C4C3A9"}>
                    <h3> Tasks of John Sparrow </h3>
                </DashboardElement>
                <DashboardElement backgroundColor={"#BAB6C1"}>
                    <Table items={tasks}/>
                </DashboardElement>
            </section>
        </Dashboard>
    )
}
