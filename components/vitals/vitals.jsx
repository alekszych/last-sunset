import React from 'react'
import DashboardElement from "@/components/dashboardElement/DashboardElement"
import style from "./vitals.module.scss"
import {TbMoodSmileFilled} from "react-icons/tb";
import {FaHeart, FaRunning, FaBed} from "react-icons/fa";
import {IoCubeOutline} from "react-icons/io5";

const Vitals = ({title, heartRate, sugar, mood, sleep, exercise}) => {
	return (
		<section className={style.section}>
			<DashboardElement backgroundColor={"#BAB6C1"}>
				<h3> {title} </h3>
			</DashboardElement>
			<div className={style.row}>
				<DashboardElement backgroundColor={"#BAC1B6"}>
					<h4> Heart rate </h4>
					<div>
						<FaHeart size={24} color={"#AD0000"} />
						<p> 64bpm </p>
					</div>
				</DashboardElement>
				<DashboardElement backgroundColor={"#B0D2C1"}>
					<h4> Sugar level </h4>
					<div>
						<IoCubeOutline size={24} color={"black"} />
						<p> 70mg </p>
					</div>
				</DashboardElement>
				<DashboardElement backgroundColor={"#C4C3A9"}>
					<h4> Last mood </h4>
					<div>
						<TbMoodSmileFilled size={24} color={"green"} />
						<p> Happy </p>
					</div>
				</DashboardElement>
			</div>
			<div className={style.row + " " + style.row2}>
				<DashboardElement backgroundColor={"#B0D2C1"}>
					<h4> Sleep </h4>
					<div>
						<FaBed size={24} />
						<p> 64bpm </p>
					</div>
				</DashboardElement>
				<DashboardElement backgroundColor={"#BAC1B6"}>
					<h4> Exercise </h4>
					<div>
						<FaRunning size={24} />
						<p> 1000kcal </p>
					</div>
				</DashboardElement>
			</div>
		</section>
	)
}

export default Vitals;