"use client"
import {useSession} from "next-auth/react"
import {useRouter} from "next/navigation"

export default function AdminLayout({ children }) {
	const {data: session} = useSession()
	const router = useRouter()

	if(!session){
		router.replace("/login")
	}

	return (<> {children} </>)
}
