import React, { Component } from 'react';

export default class App extends Component {
  renderList = (item, i) =>{
    return (
      <li key={i}>item:  {item}</li>
    )
  }

  render() {
    const list = [11, 22, 33, 44, 55, 66, 77];
    return (
      <div className="">
        <h3>App Test</h3>
        <div className="app-content">
          <ul className="">
            {list.map(this.renderList)}
          </ul>
        </div>
      </div>
    )
  }
}