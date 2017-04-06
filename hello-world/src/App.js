import React, { Component } from 'react';
import './App.css';

const SERVER_DATA = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <SearchBox/>
        <table>
          <TableHead/>
        <ProductData inventory={SERVER_DATA}/>
        </table>
      </div>
    );
  }
}

class SearchBox extends Component {
  render () {
    return (
    <div>
    <input type="text" name="search" placeholder="Search..."/>
    <p><input type='checkbox'/>Only show products in stock</p>
    </div>
    )
  }
}

class TableHead extends Component {
  render () {
    return (
      <div>
        <thead><b>
          <tr><td>Name</td><td>Price</td></tr>
        </b></thead>
      </div>
    )
  }
}

class ProductData extends Component {
  
  render () {
    let tableGuts = []
    let currentCategory = ""
    this.props.inventory.forEach ((inventoryItem) => {
      if (currentCategory !== inventoryItem.category) {
        tableGuts.push(<b><tr><td colSpan={2}>{inventoryItem.category}</td></tr></b>)
        currentCategory = inventoryItem.category
      }
      tableGuts.push(<tr><td>{inventoryItem.name}</td><td>{inventoryItem.price}</td></tr>)
    })

    return (
      <div>
        <tbody>
          {tableGuts}
        </tbody>
      </div>
    )
  }
}


export default App;
