import React, { Component } from "react";

import { fetchMeetups } from "../api";
import ListItem from "../components/list-item";

import "../styles/list.css"
import "../styles/app.css"

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listItems: []
    }

    this.receiveList = this.receiveList.bind(this);
  }
  
  componentDidMount() { 
    fetchMeetups(this.receiveList)
  }

  receiveList(list) {
    this.setState({
      listItems: list
    })
  }

  render() {
    const { itemClick, selectedID} = this.props;
    const { listItems } = this.state;
    let renderListItems = null;

    if (listItems.length !== 0) {
      renderListItems = listItems.map(listItem => {
        return(
          <ListItem 
            key={listItem.id} 
            itemDetails={listItem} 
            title={listItem.name} 
            selected={selectedID === listItem.id}
            date={new Date(listItem.time)} 
            action={itemClick}
          />
        )
      })
    }

    return (
      <div className="list-panel standard-margins">
        <div className="sub-title">
          Meetups
        </div>
        <hr style={{ width: "100%" }} />
        <div>
          {
            renderListItems ?
            renderListItems
            :
            <div>
              Loading, please wait...
            </div>
          }
        </div>
      </div>
    )
  }
}

export default List;