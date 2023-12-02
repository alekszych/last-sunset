"use client";

import style from "./dashboardElement.module.scss"

const DashboardElement = ({backgroundColor, children, additionalClassName}) => {
    return (
        <div style={{"backgroundColor" : backgroundColor}} className={additionalClassName ? [style.dashboardElement, additionalClassName].join(" ") : style.dashboardElement}>
            {children}
        </div>
    );
}

export default DashboardElement;
