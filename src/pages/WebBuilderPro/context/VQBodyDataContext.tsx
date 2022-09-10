import React from 'react';
import { IVQBodyDataContext, IVQBodyData } from "../dataModels/VQBodyDataModel";

export const VQBodyDataContext = React.createContext<IVQBodyDataContext | null>(null);

export const VQBodyDataProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [vqBodyData, setVQBodyData] = React.useState<IVQBodyData>({
    currentView: 1,
    translateX: 0,
    translateY: 0,
    currentScale: 1,
    ideWidth: 0,
    ideHeight: 0
  });

const updateVQBodyData = (newData: IVQBodyData) => {
  setVQBodyData(newData);
};

  return (
    <VQBodyDataContext.Provider value={{ vqBodyData, updateVQBodyData }}>
      {children}
    </VQBodyDataContext.Provider>
  );
};
export default VQBodyDataProvider;
