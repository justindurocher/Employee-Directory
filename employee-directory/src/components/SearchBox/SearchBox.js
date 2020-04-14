import { React } from "react";

searchName = (props) => {

    return (

        <form className="searchForm">

            <label htmlFor="nameSearch">Search...</label>

            <input 
                onChange={props.handleInputChange}
                value={props.value}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search for Employee"
                id="employeeSearch"
            />

            <hr />

            <button onClick={props.handleFormSubmit} className="searchButton btn btn-primary">

                Search

            </button>

        </form>

    );

}

export default searchName;