"use client";

import style from "./dashboard.module.scss"

const Dashboard = ({children, className}) => {
    return (
        <div className={style.dashboard + " " + className}>
            {children}
        </div>
    );
}

export default Dashboard;
