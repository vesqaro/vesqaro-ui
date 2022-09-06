import React, { useState } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import ComponentsMenu from '../ComponentsMenu/ComponentsMenu';

const defaultData = {
  listOfObjects: [
    {
      id: 0,
      text: "Text",
      icon: "bi bi-search",
      iconType: "bootstrap",
      label: "basic"
    },
    {
      id: 1,
      text: "button",
      icon: "bi bi-book",
      iconType: "bootstrap",
      label: "form"
    },
    {
      id: 2,
      text: "Text Input",
      icon: "bi bi-fonts",
      iconType: "bootstrap",
      label: "form"
    },
    {
      id: 3,
      text: "Text Area",
      icon: "bi bi-fonts",
      iconType: "bootstrap",
      label: "form"
    },
    {
      id: 4,
      text: "Radio Button",
      icon: "bi bi-fonts",
      iconType: "bootstrap",
      label: "form"
    },
    {
      id: 5,
      text: "YouTube",
      icon: "bi bi-fonts",
      iconType: "bootstrap",
      label: "form"
    }
]};

class LeftMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultData;
    this.onFillHandler = this.onFillHandler.bind(this);
    }
  onFillHandler(event) {
    if(event.target.value.length > 0) {

      let temp = [];
      defaultData.listOfObjects.forEach((item, i) => {
        if(item.text.toLowerCase().indexOf(event.target.value.toLowerCase()) >= 0)
          temp.push(item);
      });
      this.setState({listOfObjects: temp});
    }
    else {
      this.setState(defaultData);
    }
  }

  render() {
    return <div id="LeftMenu">
      <SearchBox onFillHandler={this.onFillHandler} />
      <ComponentsMenu data={this.state} />
    </div>
  }
}

export default LeftMenu;
