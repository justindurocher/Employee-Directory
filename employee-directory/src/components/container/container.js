import { React } from "react";

Container = (props) => {

    return <div className={`container${props.fluid ? "-fluid" : ""}`}>{props.children}</div>

}

export default Container;