export const capitalizeLabel = (label: string, capitalized: boolean): string => {
    return capitalized ? label?.toUpperCase() : label?.toLowerCase();
}