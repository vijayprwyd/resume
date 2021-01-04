import React from "react";

export function AboutMe({children}) {

    return  (
        <div className="box">

            <h2> Professional Summary </h2>
            <hr/>
            <p> {children} </p>

        </div>

    )
}