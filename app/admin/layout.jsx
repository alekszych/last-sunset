"use client"
import {useSession} from "next-auth/react"

export default function AdminLayout({ children }) {
	const {data: session} = useSession()

	// if(!session){
	// 	window.location.href = "/login"
	// }

	return (<> {children} </>)
}
