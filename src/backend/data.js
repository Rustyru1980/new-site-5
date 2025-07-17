// File: backend/employees.js
import wixData from 'wix-data';

/**
 * A hook that runs before an item is updated in the Employees collection
 * @param {Object} item - The item being updated
 * @param {Object} context - Context for the operation
 * @returns {Object} - The modified item
 */
export function employees_beforeUpdate(item, context) {
  // Trim whitespace from the last name
  if (item.lastName && typeof item.lastName === 'string') {
    item.lastName = item.lastName.trim();

    // Capitalize the first letter of the last name
    item.lastName = item.lastName.charAt(0).toUpperCase() + item.lastName.slice(1).toLowerCase();
  }

  // Optional: Block empty last names
  if (!item.lastName) {
    throw new Error("Last name cannot be empty.");
  }

  return item;
}
