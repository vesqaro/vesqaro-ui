export interface IAppData {
  theme: "light" | "dark";
  currentView: string;
  screenWidth: number;
  screenHeight: number;
  latestId: number;
  objectsInVQBody: [];
}

export interface IVQBodySettings {
  translateX: number;
  translateY: number;
  currentScale: number;
  ideWidth: number;
  ideHeight: number;
}

export interface IAppDataContext {
  appData: IAppData;
  updateAppData: (data: IAppData) => void;
}

export interface IVQBodySettingsContext {
  vqBodySettingsData: IVQBodySettings;
  updateAppData: (data: IAppData) => void;
}
