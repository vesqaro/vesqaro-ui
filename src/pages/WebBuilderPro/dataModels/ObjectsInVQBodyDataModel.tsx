export interface IObjectInVQBodyData {
  id: number;
  objId: string;
  icon: string;
  iconType: string;
  rect: {
    x: number;
    y: number;
    width: number;
    height: number;
  }
}

export interface IObjectsInVQBodyDataContext {
  objectsInVQBodyData: IObjectInVQBodyData[];
  updateObjectsInVQBodyData: (action: string, id: number, data: IObjectInVQBodyData) => void;
}
