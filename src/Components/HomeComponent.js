import React from "react";
import gameImage from "../imgs/games.webp";
import { Button, Typography } from "@mui/material";

export default function HomeComponent() {
    const containerStyle = {
        width: "100%",
        height: "300px",
        background: `url(${gameImage})`, // Set the image as background
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
    };

    const textStyle = {
        color: "white",
        fontSize: "24px",
        textAlign: "center",
        zIndex: 1,
    };

    return (
        <div style={containerStyle}>
            <div style={textStyle}>
                <Typography variant="h4" style={{
                    margin: '10px'
                }}>Slogan here</Typography>
                <Button variant="contained">Shop All</Button>
            </div>
        </div>
    );
}
