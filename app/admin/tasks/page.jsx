import Dashboard from "@/components/dashboard/Dashboard"
import DashboardElement from "@/components/dashboardElement/DashboardElement"
import Table from "@/components/table/table"
import style from "./page.module.scss"

const astronauts = [
    {
        id: 124214,
        name: "John Doe",
        tasks: [
            {id: 4121321, name: "Task 1", description: "Lorem ipsum dolor", status: "Pending"}
        ]
    }
]

export default function Page() {
    return(
        <Dashboard>
            {astronauts.map(astronaut =>
                <DashboardElement backgroundColor={"#BAB6C1"} key={astronaut.id} additionalClassName={style.element}>
                    <h2> {astronaut.name} </h2>
                    <Table
                        items={astronaut.tasks}
                    />
                </DashboardElement>
            )}
        </Dashboard>
    )
}
