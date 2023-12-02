import {useEffect} from "react";
import axios from "axios";

const useGetTasks = (userId, setTasks) => {
	useEffect(() => {
		(async function(){
			try{
				const res = await axios.get("/api/task", {params: {userId: userId}})
				if("data" in res){
					setTasks(res.data)
				}
			}
			catch(e) {
				alert(e)
			}
		}())
	}, [setTasks, userId])
}

export default useGetTasks