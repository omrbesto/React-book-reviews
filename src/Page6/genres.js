import React from "react";
import classes from "./genres.module.css";

const Genres = (props) => {
  return (
    <div className={classes.genres}>
      <h4>{props.name}</h4>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 ,textAlign:"center" }}>
        <div >
        
        <p><a href="javascript:void(0);">
        <img className={classes.imgs} src={props.bi1}></img>
        </a></p>
        <p className={classes.title}>{props.bt1}</p>
        <p className={classes.rates}>Rating : {props.rating1}</p>
        </div>
        <div >
        
        <p><a href="javascript:void(0);">
          <img className={classes.imgs} src={props.bi2}></img>
        </a></p>
        <p className={classes.title}>{props.bt2}</p>
        <p className={classes.rates}>Rating : {props.rating2}</p>
        </div>
        <div >
        
        <p><a href="javascript:void(0);">
          <img className={classes.imgs} src={props.bi3}></img>
        </a></p>
        <p className={classes.title}>{props.bt3}</p>
        <p className={classes.rates}>Rating : {props.rating3}</p>
        </div>
      </div>
    </div>
  );
};

export default Genres;