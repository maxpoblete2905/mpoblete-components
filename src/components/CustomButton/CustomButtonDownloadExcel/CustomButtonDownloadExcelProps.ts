export type DataItem = {
    [key: string]: unknown;
  };
  
  export interface CustomButtonProps {
    label: string;
    data: DataItem[];
    header: string[];
  } 