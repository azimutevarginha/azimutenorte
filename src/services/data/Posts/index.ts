import { useEffect, useState } from "react";
import api from "../../api";


export const usePosts = () => {
    const [posts, setPosts] = useState([])

    const getPosts = async() => {
        try{
            const response = await api.get("/read");
            const data = response.data;
            setPosts(data)
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    return posts;

}




