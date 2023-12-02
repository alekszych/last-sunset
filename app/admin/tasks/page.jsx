import Dashboard from "@/components/dashboard/Dashboard"
import DashboardElement from "@/components/dashboardElement/DashboardElement"
import Table from "@/components/table/table"

export default function Page() {
    return(
        <Dashboard>
            <DashboardElement backgroundColor={"#BAB6C1"}>
                <Table
                        headings={["name", "description", "status"]}
                        items={[
                                {
                                    id: 21412,
                                    name: "Task1",
                                    description: "Task description lorem ipsum",
                                    status: "Pending"
                                }
                        ]}
                />
            </DashboardElement>
        </Dashboard>
    )
}
