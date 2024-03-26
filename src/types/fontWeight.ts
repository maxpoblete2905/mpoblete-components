export type FontWeightOption =
    | 'normal'
    | 'bold'
    | 'bolder'
    | 'lighter'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';

// Ejemplo de uso:
// let fontWeight: FontWeightOption = 'bold'; // Válido
// let invalidFontWeight: FontWeightOption = 'extrabold'; // Esto dará un error de tipo
