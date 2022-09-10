export interface IVQBodyData {
  currentView: number;
  translateX: number;
  translateY: number;
  currentScale: number;
  ideWidth: number;
  ideHeight: number;
}

export interface IVQBodyDataContext {
  vqBodyData: IVQBodyData;
  updateVQBodyData: (data: IVQBodyData) => void;
}
