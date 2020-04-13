import React from 'react';
import './dataTable.css';
import Moment from 'react-moment';

DataTable = (props) => {

    return(
        <table className="dataTable">
            <thead>
                <tr>
                    <th></th>
                    <th onClick={props.sortByName}>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Date of Birth</th>
                </tr>
            </thead>
            <tbody className="dataBody">
                {props.results.map(result => (
                    <tr className = "table" key = {result.login.uuid}>
                        <td>
                            <img className="img" src={result.picture.medium} alt=""/>
                        </td>
                        <td>{result.name.first + "" + result.name.last}</td>
                        <td>{result.cell}</td>
                        <td className="email"><a href={result.email}>{result.email}</a></td>
                        <td><Moment format="YYYY/MM/DD">{result.dob.date}</Moment></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )

}

export default DataTable