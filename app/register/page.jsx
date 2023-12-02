"use client"
import style from "./login.module.scss"
import Button from "@/components/button/Button"
import Input from "@/components/input/Input"
import {useState} from "react"
import {useRouter} from "next/navigation"

export default function Page() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const router = useRouter()

	const handleSubmit = async () => {

		if (!email || !password) {
			alert("All fields are necessary.");
			return;
		}

		try {
			const resUserExists = await fetch("api/userExists", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email }),
			});

			const { user } = await resUserExists.json();

			if (user) {
				console.log("User already exists.");
				return;
			}

			const res = await fetch("api/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email,
					password,
				}),
			});

			if (res.ok) {
				router.replace("/login")
			} else {
				alert("User registration failed.");
			}
		} catch (error) {
			console.log("Error during registration: ", error);
		}
	};

	return(
		<div className={style.loginForm}>
			<h2 className={style.title}> Create account </h2>
			<div className={style.inputContainer}>
				<Input type={"text"} label={<p> Email </p>} onChange={setEmail}/>
				<Input type={"password"} label={<p> Password </p>} onChange={setPassword}/>
			</div>
			<Button onClick={handleSubmit} btnText={"Register"} additionalClassName={style.colorChange}/>
		</div>
	)
}
