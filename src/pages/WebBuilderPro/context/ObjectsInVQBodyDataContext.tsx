import React, { useState, createContext } from 'react';
import { IObjectsInVQBodyDataContext, IObjectInVQBodyData } from "../dataModels/ObjectsInVQBodyDataModel";

export const ObjectsInVQBodyDataContext = createContext<IObjectsInVQBodyDataContext | null>(null);

export const ObjectsInVQBodyDataProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  //const [objectsInVQBodyData, setObjectsInVQBodyData] = useState<IObjectInVQBodyData[]>([{id: 0, objId: "", icon: "", iconType: "", rect: {x: 0, y: 0, width: 0, height: 0}}]);
  const [objectsInVQBodyData, setObjectsInVQBodyData] = useState<IObjectInVQBodyData[]>([]);

const updateObjectsInVQBodyData = (action: string, id:number, newData: IObjectInVQBodyData) => {
let arrForUpdate: IObjectInVQBodyData[] = [];

  switch (action.toLowerCase()) {
    case "add":
      arrForUpdate = [newData];
      setObjectsInVQBodyData([... arrForUpdate]);
      break;

    case "update":
      arrForUpdate = [... objectsInVQBodyData];
      arrForUpdate.filter((element: IObjectInVQBodyData) => {
        if(element.id === id) {
          element = newData;
          arrForUpdate = [newData];
          return true;
        }
        return false;
      });
      setObjectsInVQBodyData(arrForUpdate);
      break;

    case "remove":
      arrForUpdate = [... objectsInVQBodyData];
      arrForUpdate.map((element: IObjectInVQBodyData, index: number) => {
        if(element.id === id)
          arrForUpdate.splice(index, 1);
      });
      setObjectsInVQBodyData([... arrForUpdate]);
      break;

    default:
      setObjectsInVQBodyData(objectsInVQBodyData);
      break;
  }
};

  return (
    <ObjectsInVQBodyDataContext.Provider value={{objectsInVQBodyData, updateObjectsInVQBodyData }}>
      {children}
    </ObjectsInVQBodyDataContext.Provider>
  );
};
export default ObjectsInVQBodyDataProvider;
