"use client"
import style from "./login.module.scss"
import Button from "@/components/button/Button"
import Input from "@/components/input/Input"
import {useState} from "react"
import {signIn} from "next-auth/react"
import {useRouter} from "next/navigation";

export default function Page() {
	const router = useRouter()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

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

		if(typeof window !== "undefined")
			router.push("/astronaut/dashboard")
	}

	return(
		<div className={style.loginForm}>
			<h2 className={style.title}> Sign in </h2>
			<div className={style.inputContainer}>
				<Input type={"text"} label={<p> Email </p>} onChange={setEmail}/>
				<Input type={"password"} label={<p> Password </p>} onChange={setPassword}/>
			</div>
			<Button onClick={handleSubmit} btnText={"Login"} additionalClassName={style.colorChange}/>
		</div>
	)
}
