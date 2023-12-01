"use client";

import style from "./progressBar.module.scss"

const ProgressBar = ({tasks}) => {
    const stepsCompleted = tasks.filter((task)=>{
        return task.status === "completed";
    }).length;

    return (
        <div class={style.progressBar}>
            {
                tasks.map((element, i)=> {
                    return <div className={style.singleElement} key={"singleElement"+i}>
                        <div className={i<stepsCompleted ? style.circleCompleted : (i===stepsCompleted ? style.circleEmptyInProgress : style.circleEmpty)} key={i}></div>
                        <div className={i<stepsCompleted ? style.lineOrange : (i+1===tasks.length ? style.displayNone : style.lineGray)}></div>
                    </div>;
                })
            }
        </div>
    );
}

export default ProgressBar;
