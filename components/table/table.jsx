import React from 'react'
import style from "./table.module.scss"

const Table = ({items}) => {
	return (
		<div className={style.table} role={"table"}>
			<p className={style.heading}> Name </p>
			<p className={style.heading}> Description </p>
			<p className={style.heading}> Status </p>
			{items.map(item => <>
				<p> {item.title} </p>
				<p> {item.description} </p>
				<p> {item.status} </p>
			</>)}
		</div>
	)
}

export default Table