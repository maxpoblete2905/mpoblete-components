import {
    BorderRadiusOption,
    BoxShadowOption,
    ColorOption,
    FontWeightOption,
    FontSizeOption,
    MarginOption,
    PaddingOption,
    Scaleoption,
    IconOpcion
} from "@types-data/index";

export interface ButtonProps {
    label: string;
    icon?: IconOpcion;
    color?: ColorOption;
    fontSize?: FontSizeOption;
    fontWeight?: FontWeightOption;
    margin?: MarginOption;
    padding?: PaddingOption;
    borderRadius?: BorderRadiusOption;
    boxShadow?: BoxShadowOption;
    backgroundColor?: ColorOption;
    hoverBackground?: ColorOption;
    hoverColor?: ColorOption;
    hoverScale?:Scaleoption;
    allCaps?: boolean;
    disabled?: boolean;
    onClick: () => void;
}
