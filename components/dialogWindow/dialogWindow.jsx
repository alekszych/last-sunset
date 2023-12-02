"use client"
import React from 'react';
import style from"./dialogWindow.module.scss"
import { IoIosClose } from "react-icons/io"


const DialogWindow = ({children}) => {
	return (
		<div className={style.wrapper}>
			<div className={style.window}>
				<IoIosClose size={32} className={style.close}/>
				{children}
			</div>
		</div>
	);
};

export default DialogWindow