import React from "react";
import PropsType from "prop-types";
import style from "./photos.module.css";

import Photo from "../photo/Photo";
const Photos = (props) => {
 const {photos}=props;

 const photoList = photos.map((photo)=>{
    const {key,id, title,url} = photo;
    return <Photo key={key} id={id} title={title} url={url}/>;
 });
  return (
    <div className={style.photos}>
      {photoList}
    </div>
  )
}

Photos.prototype ={
    photos:PropsType.array,
    id:PropsType.string,
    title:PropsType.string,
    url:PropsType.string
}
export default Photos;
