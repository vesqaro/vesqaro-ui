import React from 'react';

const WebBuilderProDataCtx = React.createContext();

export class WebBuilderProDataProvider extends React.Component {
  state = {
    webBuilderProData: {
      currentView: "desktop",
      isBodySelected: true,
      screenWidth: 0,
      screenHeight: 0,
      vqBodySettings: {
        translateX: 0,
        translateY: 0,
        currentScale: 1,
        ideWidth: 0,
        ideHeight: 0,
      },
      latestId: 0,
      objectsInVQBody: []
    }
  }

  setWebBuilderProData = (webBuilderProData) => {
    this.setState((prevState) => ({ webBuilderProData }))
  }

  render() {
    const { children } = this.props;
    const { webBuilderProData } = this.state;
    const { setWebBuilderProData } = this;

    return (
      <WebBuilderProDataCtx.Provider value={{webBuilderProData, setWebBuilderProData}}>
        {children}
      </WebBuilderProDataCtx.Provider>
    )
  }
}

//export const WebBuilderProDataProvider = WebBuilderProDataCtx.Provider;
export const WebBuilderProDataConsumer = WebBuilderProDataCtx.Consumer;

export default WebBuilderProDataCtx;

 /*const VQBodyDataContext = createContext({
   objectsInVQBody: []
 });

export function VQBodyDataContextProvider(props) {
  const [listOfObjectsInVQBody, setListOfObjectsInVQBody] = useState([]);
  const context = {
    objects: listOfObjectsInVQBody
  };

  function addObjectToVQBodyArray(object) {

  }

  function removeObjectFromVQBodyArray() {

  }

  return <VQBodyDataContext.Provider value={context}>
    {props.children}
  </VQBodyDataContext.Provider>
}

export default VQBodyDataContext;
*/
