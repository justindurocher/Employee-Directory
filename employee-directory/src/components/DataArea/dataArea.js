import React, { Component } from 'react';
import SearchBox from "../SearchBox/SearchBox.js";
import DataTable from "../DataTable/dataTable.js";
import API from "../../utils/API";
import "./dataArea.css";

class DataArea extends Component{

    state = {
        search : "",
        employees: [],
        filteredEmployees: [],
        order : ""
    };

    componentDidMount() {

        API.getUsers().then(res => this.setState({

            employees: res.data.results,

                filteredEmployees: res.data.results

        })).catch(err => console.log(err));
    }

}

    sortByName = () => {

        const filter = this.state.filteredEmployees;

        if (this.state.order === 'ascending') {

            const sorteds = filter.sort((a,b) => (a.name.first > b.name.first) ? -1:1);

            console.log(sorteds);

            this.state({
                filteredEmployees: sorteds,
                order: 'descending'
            })

        } else {

            const sorteds = filter.sort((a,b) => (a.name.first> b.name.first) ? -1:1);

            console.log(sorteds);

            this.setState({
                filteredEmployees: sorteds,
                order : 'ascending'
            })

        }

    }

    handleInputChange = event => {

        const employees = this.state.employees;

        const UserInput = event.target.value;

        const filteredEmployees = employees.filter(employee => employee.name.first.toLowerCase().indexOf(UserInput.toLowerCase()));

        this.setState({

            filteredEmployees,

        });
    }

    employeeSearch = () => {

        API.getUsers()
        .then(response => this.setState({

            filteredEmployees: response.data.results,
            employees: response.data.results

        }))
        .catch(err => console.log(err));

    }

    handleSearch = event => {

        event.preventDefault();

        if(!this.state.search) {

            alert("Enter employees Name");

        }

        const {employees, search} = this.state;

        const filteredEmployees = employees.filter(employee => employee.name.first.toLowerCase().includes(search.toLowerCase()));

        this.setState({
            filteredEmployees
        });

    }

    render = () => {

        return(

            <div>
                <SearchBox 
                employee={this.state.employees}
                handleSearch = {this.handleSearch}
                handleInputChange = {this.handleInputChange}
                />
                <DataTable results = {this.state.filteredEmployees}
                sortByName = {this.sortByName}
                />
            </div>

        );

    }



export default DataArea;
    