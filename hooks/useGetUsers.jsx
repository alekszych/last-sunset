import {useEffect} from "react"
import axios from "axios"

const useGetUsers = (setAstronauts) => {
	useEffect(() => {
		(async function(){
			try{
				const res = await axios.get("/api/astronauts")
				if("data" in res){
					setAstronauts(res.data)
				}
			}
			catch(e) {
				console.log(e)
			}
		}())
	}, [setAstronauts])
}

export default useGetUsers