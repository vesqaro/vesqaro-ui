export interface IVQBodyData {
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
