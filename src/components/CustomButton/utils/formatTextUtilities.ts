import { textUtilitiesString } from "./capitalizeLabel";

/**
 * Formats a label string based on the specified text utility.
 * @param textUtilities - The text utility to apply: "capitalize", "lowercase", or "uppercase".
 * @param label - The label string to be formatted.
 * @returns The formatted label string based on the specified text utility.
 */
export const formatTextUtilities = (
  textUtilities: "capitalize" | "lowercase" | "uppercase",
  label: string
): string => {
  switch (textUtilities) {
    case "capitalize":
      return textUtilitiesString.capitalizeString(label);
    case "lowercase":
      return textUtilitiesString.lowercaseString(label);
    case "uppercase":
      return textUtilitiesString.uppercaseString(label);
    default:
      return label;
  }
};
