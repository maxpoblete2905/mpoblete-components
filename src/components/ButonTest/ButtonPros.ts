import { IconOpcion } from "@types-data/icon";
import {
    BorderRadiusOption,
    BoxShadowOption,
    ColorOption,
    FontWeightOption,
    FontSizeOption,
    MarginOption,
    PaddingOption,
} from "@types-data/index";

export interface ButtonProps {
    label: string;
    color?: ColorOption;
    backgroundColor?: ColorOption;
    fontSize?: FontSizeOption;
    fontWeight?: FontWeightOption;
    margin?: MarginOption;
    padding?: PaddingOption;
    borderRadius?: BorderRadiusOption;
    boxShadow?: BoxShadowOption;
    hoverColor?: string;
    icon?: IconOpcion;
}
