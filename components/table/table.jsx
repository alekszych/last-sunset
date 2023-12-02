"use client"
import React, {useState} from 'react'
import style from "./table.module.scss"
import DialogWindow from "@/components/dialogWindow/dialogWindow";
import Input from "@/components/input/Input";

const Table = ({items, changeTaskStatus}) => {
	const [window, setWindow] = useState(false)
	return (
		<div className={style.table} role={"table"}>
			<p className={style.heading}> Name </p>
			<p className={style.heading}> Description </p>
			<p className={style.heading}> Status </p>
			{items.map(item => <>
				<p> {item.title} </p>
				<p> {item.description} </p>
				<p onClick={() => {setWindow(item)}} className={style.link}> {item.status} </p>
			</>)}
			{window && <DialogWindow close={() => setWindow(false)}>
				<h3> {window.title} </h3>
				<p> {window.description} </p>
				<Input type={"select"}
				       selectOptionsHTML={<><option value={"Completed"}>Completed</option><option value={"In progress"}>In progress</option><option value={"Pending"}>Pending</option></>}
				       unit={"select"}
				       onChange={e => {changeTaskStatus(e, window.title); setWindow(false)}}/>
			</DialogWindow>}
		</div>
	)
}

export default Table
