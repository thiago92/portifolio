export interface CustomButtonProps {
    text: string; 
    type?: "button" | "submit" | "reset" | "download"; 
    href?: string;
    tooltip?: string;
    onClick?: () => void;
    disabled?: boolean;
  }
  