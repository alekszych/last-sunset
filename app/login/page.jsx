"use client"
import style from "./login.module.scss"
import Button from "@/components/button/Button"
import Input from "@/components/input/Input"
import {useState} from "react"
import {signIn} from "next-auth/react"
import {redirect} from "next/navigation"

export default function Page() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = async () => {
		fetch('/api/login', {method: "POST", body: JSON.stringify({email: email, password: password})})
				.then((res) => res.json())
				.then((data) => {
					console.log(data)
					redirect("/astronaut/dashboard")
				})
				.catch(e => {
					console.log(e)
				})
	};

	return(
		<div className={style.loginForm}>
			<h2> Sign in </h2>
			<div className={style.inputContainer}>
				<Input type={"text"} label={<p> Email </p>} onChange={setEmail}/>
				<Input type={"text"} label={<p> Password </p>} onChange={setPassword}/>
			</div>
			<Button onClick={handleSubmit} btnText={"Login"}/>
		</div>
	)
}
