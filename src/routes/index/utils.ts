/**
 * @file @/routes/index/utils.ts
 * @description Boilerplate utils for the "/"  route.
 */

/**
 * Gets a string with the name and age.
 * @param {string} name - name of the user
 * @param {number} age - age of the user
 * @returns {string} - name and age string for the user
 */
function getNameAndAgeString(name: string, age: number): string {
  return `Hello ${name}, you are ${age} years old.`;
}

export { getNameAndAgeString };
