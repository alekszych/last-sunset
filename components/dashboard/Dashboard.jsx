"use client";

import style from "./dashboard.module.scss"

const Dashboard = ({children}) => {
    return (
        <div className={style.dashboard}>
            {children}
        </div>
    );
}

export default Dashboard;
