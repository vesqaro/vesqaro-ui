import React, { createContext, useState } from 'react';

 const ObjectInVQBodyContext = createContext({
   objectsInVQBody: []
 });

export function ObjectInVQBodyContextProvider(props) {
  const [listOfObjectsInVQBody, setListOfObjectsInVQBody] = useState([]);
  const context = {
    objects: listOfObjectsInVQBody
  };

  function addObjectToVQBodyArray(object) {

  }

  function removeObjectFromVQBodyArray() {

  }

  return <ObjectInVQBodyContext.Provider value={context}>
    {props.children}
  </ObjectInVQBodyContext.Provider>
}

export default ObjectInVQBodyContext;
