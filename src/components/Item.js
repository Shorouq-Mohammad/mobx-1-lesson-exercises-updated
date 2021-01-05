import React, { Component } from 'react';
import { observer } from 'mobx-react'

class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)  
  }
  editItem = () => {
    //your code here
    const itemName = this.props.item.name
    const newItemLocation = prompt("which location do you need to move into")
    this.props.store.editItem(itemName, newItemLocation)
  }
  deleteItem = () => {
    //your code here
    this.props.store.deleteItem(this.props.item.name)
  }
  render() {
    const {name, location, completed} = this.props.item
    return (
      <div className = {completed ? "crossed": null}>
      <input type="checkbox" onClick={this.checkItem} value={name}/> {name} , {location}
      <button onClick={this.editItem}>Edit</button>
      <button onClick={this.deleteItem}>Delete</button>
      
        {/*   your code here
            each item should be in an input checkbox
            it should display the item name and location
            it should have both an edit button and a delete button
      */}
      </div>)
  }
}

export default observer(Item)