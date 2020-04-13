import React from 'react';
import "./searchBox.css";

SearchBox = (props) => {
    return(

        <div className="searchBox">

            <header className="SearchHeader">

                <div className="row">

                    <div className="col-md-6">

                        <h1 id="title">Employee Directory</h1>

                        <h3 className="right-align headerText">Search</h3>

                    </div>

                    <div className="col-md-6">

                        <div className="col s6 inputAndButton right-align">

                            <input 
                                onChange={props.handleInputChange}
                                value = {props.value}
                                id="employees"
                                type="text"
                                name="search"
                                list="employee"
                                className="inputBox"
                                placeholder = "Search Employee's Name"
                            />

                        </div>

                        <div className="col-md-4">

                            <button 
                                type='submit'
                                value= ""
                                className="searchButton"
                                onClick={props.handleSearch}
                            >Search</button>
                            

                        </div>

                    </div>

                </div>

            </header>

        </div>

    );
}

export default SearchBox;