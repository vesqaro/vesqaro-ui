export interface IAppData {
  theme: "light" | "dark";
  selectedVQView: number;
  screenWidth: number;
  screenHeight: number;
  latestId: number;
}

export interface IAppDataContext {
  appData: IAppData;
  updateAppData: (data: IAppData) => void;
}
