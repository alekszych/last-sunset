"use client";

import style from "./dashboardElement.module.scss"

const DashboardElement = ({backgroundColor, children}) => {
    return (
        <div style={{"backgroundColor" : backgroundColor}} className={style.dashboardElement}>
            {children}
        </div>
    );
}

export default DashboardElement;
