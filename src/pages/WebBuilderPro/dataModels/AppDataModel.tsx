export interface IAppData {
  theme: "light" | "dark";
  currentView: string;
  screenWidth: number;
  screenHeight: number;
  latestId: number;
}

export interface IAppDataContext {
  appData: IAppData;
  updateAppData: (data: IAppData) => void;
}
