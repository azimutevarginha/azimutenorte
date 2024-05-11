import { useEffect, useState } from "react";
import api from "../../api";

export const usePostsArticle = () => {
    const [posts, setPosts] = useState([])

    const getPosts = async() => {
        try{
            const response = await api.get("/ler_article");
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

export const usePostsCompet = () => {
    const [comps, setComps] = useState([])

    const getPosts = async() => {
        try{
            const response = await api.get("/ler_competicao");
            const data = response.data;
            setComps(data)
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    return comps;

}




