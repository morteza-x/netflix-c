import { v4 as uuidv4 } from "uuid";

/**
 * A helper object with various utility methods and properties.
 *
 */
export type THelper = {
  username: string;
  /**
   * a method to generate a unique identifier
   *
   * @returns {string} - a unique identifier
   */
  generateId: () => string;
  shuffleArray: (array: any) => any;
};

let helper: THelper = {
  username: "",

  generateId(): string {
    return uuidv4();
  },

  shuffleArray(array: any[]): any {
    // be sure an array is passed in
    if (!Array.isArray(array)) return array;

    // copy the original array
    const copyArr = [...array];
    for (let i = copyArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Pick a random index
      [copyArr[i], copyArr[j]] = [copyArr[j], copyArr[i]]; // Swap elements
    }

    return copyArr;
  },
};

export default helper;
