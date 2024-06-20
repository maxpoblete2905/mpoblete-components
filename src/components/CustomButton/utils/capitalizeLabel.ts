/**
 * Utility functions for string manipulation.
 */
export const textUtilitiesString = {
  /**
   * Capitalizes the first letter of a string and makes the rest lowercase.
   * @param str - The input string.
   * @returns The capitalized string.
   */
  capitalizeString: function (str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  },

  /**
   * Converts a string to lowercase.
   * @param str - The input string.
   * @returns The lowercase string.
   */
  lowercaseString: function (str: string): string {
    return str.toLowerCase();
  },

  /**
   * Converts a string to uppercase.
   * @param str - The input string.
   * @returns The uppercase string.
   */
  uppercaseString: function (str: string): string {
    return str.toUpperCase();
  },

  /**
   * Reverses the characters of a string.
   * @param str - The input string.
   * @returns The reversed string.
   */
  reverseString: function (str: string): string {
    return str.split("").reverse().join("");
  },

  /**
   * Truncates a string to a specified maximum length and appends "..." if truncated.
   * @param str - The input string.
   * @param maxLength - The maximum length of the truncated string.
   * @returns The truncated string.
   */
  truncateString: function (str: string, maxLength: number): string {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + "...";
    }
    return str;
  },

  /**
   * Counts the occurrences of a substring within a string.
   * @param str - The input string.
   * @param subString - The substring to search for.
   * @returns The number of occurrences of the substring in the string.
   */
  countOccurrences: function (str: string, subString: string): number {
    if (!subString) return 0;
    const regex = new RegExp(subString, "gi");
    return (str.match(regex) || []).length;
  },

  /**
   * Checks if a string is empty or consists only of whitespace characters.
   * @param str - The input string.
   * @returns True if the string is empty or consists only of whitespace characters, otherwise false.
   */
  isEmpty: function (str: string): boolean {
    return str.trim().length === 0;
  },
};
