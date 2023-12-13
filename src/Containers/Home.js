import React from "react";
import NavBar from "../Components/Appbar";
import HomeComponent from "../Components/HomeComponent";
import Featured from "../Components/Featured";
import { Divider } from "@mui/material";

export default function Home() {
    return(
        <div style={{
            height: '110%',
            backgroundColor: 'rgb(18 18 18)'
        }}>
            <NavBar badgeContent="3" auth={true}/>
            <HomeComponent />
            <Featured />
        </div>
    )
}