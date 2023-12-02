"use client";
import style from "./dashboardElement.module.scss"

const DashboardElement = ({backgroundColor, children, additionalClassName, onClick}) => {
    return (
        <div style={{"backgroundColor" : backgroundColor}}
             className={additionalClassName ? [style.dashboardElement, additionalClassName].join(" ") : style.dashboardElement}
             onClick={onClick}
        >
            {children}
        </div>
    );
}

export default DashboardElement;
