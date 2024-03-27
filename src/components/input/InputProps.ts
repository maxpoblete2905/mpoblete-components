import { IconOpcion } from "@types-data/icon";
import {
    BorderRadiusOption,
    BoxShadowOption,
    ColorOption,
    FontWeightOption,
    FontSizeOption,
    MarginOption,
    PaddingOption,
    Scaleoption,
    InputWidth
} from "@types-data/index";

export interface InputProps {
    label: string;
    icon?: IconOpcion;
    type?: "text" | "password" | "number" | "email"; // Tipos de input comunes, puedes ajustar según tus necesidades
    value?: string | number; // Valor del input
    placeholder?: string; // Placeholder del input
    color?: ColorOption; // Color del texto del input
    fontSize?: FontSizeOption; // Tamaño de fuente del input
    fontWeight?: FontWeightOption; // Peso de la fuente del input
    margin?: MarginOption; // Margen del input
    padding?: PaddingOption; // Padding del input
    borderRadius?: BorderRadiusOption; // Borde del input
    boxShadow?: BoxShadowOption; // Sombra del input
    backgroundColor?: ColorOption; // Color de fondo del input
    hoverBackground?: ColorOption; // Color de fondo al pasar el ratón sobre el input
    hoverColor?: ColorOption; // Color del texto al pasar el ratón sobre el input
    hoverScale?: Scaleoption; // Escala al pasar el ratón sobre el input
    inputWidth?: InputWidth;
    labelColor?: ColorOption;
    // NEW
    disabled?: boolean; // Indica si el input está deshabilitado
    onChange?: (value: string) => void; // Función de cambio de valor
    onFocus?: () => void; // Función cuando el input obtiene el foco
    onBlur?: () => void; // Función cuando el input pierde el foco
    required?: boolean; // Indica si el input es obligatorio
    min?: number; // Valor mínimo permitido para inputs numéricos
    max?: number; // Valor máximo permitido para inputs numéricos
    step?: number; // Incremento para inputs numéricos
    pattern?: string; // Expresión regular que debe coincidir con el valor del input
    maxLength?: number; // Longitud máxima permitida para el valor del input
    readOnly?: boolean; // Indica si el input es de solo lectura
    autoFocus?: boolean; // Indica si el input debe recibir automáticamente el foco cuando se monta el componente
    autoComplete?: "on" | "off"; // Control del autocompletado del input
    name?: string; // Nombre del input
    id?: string; // Identificador único del input
}
