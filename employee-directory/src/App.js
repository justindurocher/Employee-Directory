import React from 'react';
import { Container } from "./components/container/Container.js";
import { Header } from "./components/header/Header.js";
import { Table } from "./components/table/table.js";

function App() {

  return (

    <div className="wholePage"> 

      <Header />

      <Container>

        <Table />

      </Container>

    </div>
  );

}

export default App;
