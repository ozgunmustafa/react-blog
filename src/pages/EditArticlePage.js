import React,{useEffect, useState} from 'react'
import NewArticleForm from '../components/articles/newArticleForm';
import {api} from "../api"
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const EditArticlePage=(props)=>{

    //const[article, setArticle]=useState({});

    const  {id} =useParams();
    const article=useSelector(state=>state.articleDetails)


    // useEffect(()=>{
    //     api()
    //     .get(`/posts/${id}`)
    //     .then((response)=>{
    //         setArticle(response.data)
    //             })
    // },[])
    return <div><NewArticleForm article={article}/></div>
}

export default EditArticlePage