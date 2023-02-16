import React from 'react'
import style from "./photo.module.css";
import PropsType from "prop-types";
const Photo = (props) => {
    const {id,title,url}=props;

    const handleSubmit =(id)=>{
        alert(id);
    }
  return (
    <div className={style.card}>
      <h3 className={style.title}>{title}</h3>
      <img className={style.icon} src={url} alt={title}/>
      <button onClick={()=>handleSubmit(id)}>Click On Image</button>
    </div>
  )
}
Photo.prototype ={
    id:PropsType.string,
    title:PropsType.string,
    url:PropsType.string
}
export default Photo
