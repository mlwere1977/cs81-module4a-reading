// Name: Mukwaya Lwere
// Class: CS 81 JavaScript
// Module 4 Assignment 4A: Review readingTracker.js
// Date: 07/04/2025

// Weekly reading log: each entry tracks the day, book title, and minutes read
const weeklyReadingLog = [
  { day: "Monday", bookTitle: "Dune", minutesRead: 30 },
  { day: "Tuesday", bookTitle: "1984", minutesRead: 20 },
  { day: "Wednesday", bookTitle: "Dune", minutesRead: 25 },
  { day: "Thursday", bookTitle: "The Hobbit", minutesRead: 40 },
  { day: "Friday", bookTitle: "1984", minutesRead: 15 }
];


// Function: addReadBook 
// Updates the weekly log with a new reading entry.
// Inputs: minutes, bookTitle, and day (string)Read (number) 
// None as an output (changes the log in place)
function addReadBook(day, bookTitle, minutesRead) {
  // Create a new reading entry object
  const newEntry = { day, bookTitle, minutesRead };
  // Add it to the end of the reading log
  weeklyReadingLog.push(newEntry);
}

// Use: totalReadingMinutes 
// Determines how many minutes a person spends reading each week.
// Log (array of reading entries) is the input.
// Output: total minutes (number)
function totalReadingMinutes(log) {
  let totalMinutes = 0;
  // Loop through each entry and add up the minutes
  for (let entry of log) {
    totalMinutes += entry.minutesRead;
  }
  return totalMinutes;
}


// Function: mostReadBook 
// identifies the book that was read the most during the week.
// Log (array of reading entries) is the input.
// Book title (string) is the output.
function mostReadBook(log) {
  const bookFrequency = {};

  // Count how many times each book appears in the log
  for (let entry of log) {
    if (!bookFrequency[entry.bookTitle]) {
      bookFrequency[entry.bookTitle] = 1;
    } else {
      bookFrequency[entry.bookTitle]++;
    }
  }

  // Find the book with the highest count
  let mostFrequentBook = null;
  let highestCount = 0;
  for (let title in bookFrequency) {
    if (bookFrequency[title] > highestCount) {
      mostFrequentBook = title;
      highestCount = bookFrequency[title];
    }
  }

  return mostFrequentBook;
}


// Function: printDailySummary 
// Outputs a daily reading activity summary.
// Output: none (prints to console) 
// Input: log (array of reading entries)
function printDailySummary(log) {
  // Loop through each entry and print a formatted summary
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutesRead} mins reading "${entry.bookTitle}"`);
  }
}


// A suggestion for improvement would be to make the names of the variables and functions more descriptive.
// For instance, `book` → `bookTitle` and `minutes` → `minutesRead`. 
// As a result, the code is simpler to read and update.

// New Test Case: Rerun the functions after adding a Sunday entry.
addReadBook("Saturday", "Dune", 50);
addReadBook("Sunday", "Brave New World", 35); // ← New test case

// Run the functions and print results
printDailySummary(weeklyReadingLog);
console.log(" The Total minutes read are:", totalReadingMinutes(weeklyReadingLog));
console.log("The Most read book are:", mostReadBook(weeklyReadingLog));