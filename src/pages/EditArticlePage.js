import React,{useEffect, useState} from 'react'
import NewArticleForm from '../components/articles/newArticleForm';
import {api} from "../api"

const EditArticlePage=(props)=>{

    const[article, setArticle]=useState({});

    const  id =props.match.params.id;
    useEffect(()=>{
        api()
        .get(`/posts/${id}`)
        .then((response)=>{
            setArticle(response.data)
                })
    },[])
    return <div><NewArticleForm article={article}/></div>
}

export default EditArticlePage