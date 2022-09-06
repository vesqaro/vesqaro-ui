import React from 'react';

const DroppableComponentsDataContext = React.createContext();

export class DroppableComponentsDataProvider extends React.Component {
  state = {
    data: {
      listOfObjects: [
        {
          id: 0,
          text: "Text",
          icon: "bi bi-fonts",
          iconType: "bootstrap",
          label: "basic"
        },
        {
          id: 1,
          text: "button",
          icon: "bi bi-fonts",
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
        }
      ],
    }
  }

  setDroppableComponentsData = (droppableComponentsData) => {
    this.setState((prevState) => ({ droppableComponentsData }))
  }

  render() {
    const { children } = this.props;
    const { droppableComponentsData } = this.state;
    const { setDroppableComponentsData } = this;

    return (
      <DroppableComponentsDataContext.Provider value={{droppableComponentsData, setDroppableComponentsData}}>
        {children}
      </DroppableComponentsDataContext.Provider>
    )
  }
}

export const DroppableComponentsDataConsumer = DroppableComponentsDataContext.Consumer;
export default DroppableComponentsDataContext;
