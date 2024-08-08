//Problem 5

//Create a simple polyfill for the Array.includes method by the name of customIncludes
//ans>>

// Polyfill for Array.prototype.includes
if (!Array.prototype.customIncludes) {
    Array.prototype.customIncludes = function (element, fromIndex) {
        // Convert 'this' to an array
        const array = this;

        // Handle the optional fromIndex argument
        const startIndex = fromIndex || 0;

        // Iterate over the array from the startIndex
        for (let i = startIndex; i < array.length; i++) {
            // Check if the current element matches the search element
            if (array[i] === element) {
                return true;
            }
        }

        // Return false if the element is not found
        return false;
    };
}

// Example usage
const arr = [1, 2, 3, 4, 5];

console.log(arr.customIncludes(3));     // Output: true
console.log(arr.customIncludes(6));     // Output: false
console.log(arr.customIncludes(4, 4));  // Output: false (search starts from index 4)
console.log(arr.customIncludes(5, -1)); // Output: false (search starts from the last element)
