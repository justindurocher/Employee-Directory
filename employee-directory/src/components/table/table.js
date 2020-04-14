import { React } from "react";

Table = (props) => {

    return (

        <div className="employeeTable">
            <tr>
                <td>
                    <img src= {props.imageUrl} alt="Employee Photo"/>
                </td>
                <td>
                    {props.name}
                </td>
                <td>
                    {props.phone}
                </td>
                <td>
                    {props.email}
                </td>
            </tr>
        </div>

    )

}