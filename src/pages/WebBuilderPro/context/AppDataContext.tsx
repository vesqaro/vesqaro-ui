import React from 'react';
import { IAppDataContext, IAppData } from "../dataModels/AppDataModel";

export const AppDataContext = React.createContext<IAppDataContext | null>(null);

export const AppDataProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [appData, setAppData] = React.useState<IAppData>({
    theme: "dark",
    currentView: "desktop",
    screenWidth: 0,
    screenHeight: 0,
    latestId: 0
  });

const updateAppData = (newData: IAppData) => {
  setAppData(newData);
};

  return (
    <AppDataContext.Provider value={{ appData, updateAppData }}>
      {children}
    </AppDataContext.Provider>
  );
};
export default AppDataProvider;
