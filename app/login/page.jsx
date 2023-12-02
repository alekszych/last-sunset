"use client"
import style from "./login.module.scss"
import Button from "@/components/button/Button"
import Input from "@/components/input/Input"
import {useState} from "react"
import {signIn} from "next-auth/react"
import {redirect, useRouter} from "next/navigation"

export default function Page() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const router = useRouter()

	const handleSubmit = async () => {
		const res = await signIn("credentials", {
			email,
			password,
			redirect: false,
		});

		if (res.error) {
			console.log("Invalid Credentials");
			return;
		}

		router.replace("/astronaut/dashboard");
	}

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
