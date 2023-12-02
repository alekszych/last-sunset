import {useEffect} from "react";
import axios from "axios";

const useGetTasks = (userId, setVitals) => {
	useEffect(() => {
		(async function(){
			try{
				const res = await axios.get("/api/vitals", {params: {userId: userId}})
				if("data" in res){
					setVitals(res.data)
				}
			}
			catch(e) {
				console.log(e)
			}
		}())
	}, [setVitals, userId])
}

export default useGetTasks