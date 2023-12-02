import style from "./page.module.scss"
import Dashboard from "@/components/dashboard/Dashboard";
import DashboardElement from "@/components/dashboardElement/DashboardElement";
import Table from "@/components/table/table";

export default function Page() {
    let tasks = [{name: "Collect rocks", status: "Complete"}, {name: "Collect rocks", status: "Complete"}, {name: "Collect rocks", status: "Complete"}, {name: "Collect rocks", status: "Complete"},{name: "Collect rocks", status: "Complete"},{name: "Collect rocks", status: "Complete"}];

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
