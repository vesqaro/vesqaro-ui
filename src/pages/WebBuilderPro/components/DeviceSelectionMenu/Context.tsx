export interface IDropdownMenuList {
  options: [
    {
      id: number;
      icon: string;
      text: string;
    },
    {
      id: number;
      icon: string;
      text: string;
    },
    {
      id: number;
      icon: string;
      text: string;
    },
    {
      id: number;
      icon: string;
      text: string;
    },
    {
      id: number;
      icon: string;
      text: string;
    },
    {
      id: number;
      icon: string;
      text: string;
    },
    {
      id: number;
      icon: string;
      text: string;
    }
  ]
}

export const dropdownMenuListData: IDropdownMenuList = {
  options: [
    {
      id: 0,
      icon: "bi bi-fullscreen",
      text: "auto"
    },
    {
      id: 1,
      icon: "bi bi-display",
      text: "desktop"
    },
    {
      id: 2,
      icon: "bi bi-tablet",
      text: "tablet portrait"
    },
    {
      id: 3,
      icon: "bi bi-tablet-landscape",
      text: "tablet landscape"
    },
    {
      id: 4,
      icon: "bi bi-phone",
      text: "mobile portrait"
    },
    {
      id: 5,
      icon: "bi bi-phone-landscape",
      text: "mobile landscape",
    },
    {
      id: 6,
      icon: "bi bi-input-cursor",
      text: "custom"
    }
  ]
}
