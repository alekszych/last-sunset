import {useEffect} from "react";
import axios from "axios";

const useGetTasks = (setTasks) => {
	useEffect(() => {
		(async function(){
			try{
				const res = await axios.get("/api/tasks")
				if("data" in res){
					setTasks(res.data)
				}
			}
			catch(e) {
				alert(e)
			}
		}())
	}, [setTasks])
}

export default useGetTasks