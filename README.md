# The Reading Tracker

**Author:** Mukwaya Lwere  
**Class:** CS 81 JavaScript  
**Module:** 4A – Review readingTracker.js  
**Date:** July 4, 2025

---

## The Project Summary:

- I was able to link JavaScript logic with everyday tasks thanks to this assignment. 
- It taught me how to write functions that not only function but also provide context for the data. 
- I'm now more comfortable building practical tools with arrays, loops, and objects.

---

## The Project Files:

| File                | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| `readingTracker.js` | JavaScript file containing the reading log and all related functions        |
| `REFLECTION.md`     | A reflection on the coding process, challenges, and key takeaways           |

---

## The Functions Overview are:

### `addReadBook(day, bookTitle, minutesRead)`
Adds a new reading entry to the log.  
**Parameters:**  
- `day` (string): The day of the week  
- `bookTitle` (string): The title of the book  
- `minutesRead` (number): Minutes spent reading  
**Returns:** Nothing (updates the log directly)

### `totalReadingMinutes(log)`
Calculates the total minutes read across all entries.  
**Parameters:**  
- `log` (array): The reading log  
**Returns:** Total minutes (number)

### `mostReadBook(log)`
Finds the book that appears most frequently in the log.  
**Parameters:**  
- `log` (array): The reading log  
**Returns:** Book title (string)

### `printDailySummary(log)`
Prints a summary of each day’s reading activity.  
**Parameters:**  
- `log` (array): The reading log  
**Returns:** Nothing (outputs to console)

---

## The Example Output:
- Monday: 30 mins reading "Dune"
- Tuesday: 20 mins reading "1984"
- Wednesday: 25 mins reading "Dune"
- Thursday: 40 mins reading "The Hobbit"
- Friday: 15 mins reading "1984"
- Saturday: 50 mins reading "Dune"
- Sunday: 35 mins reading "Brave New World"
- The Total minutes read are: 215
- The Most read book is: Dune
---

## The Key Takeaways are:

- Acquired the ability to iterate through arrays of objects in order to extract valuable insights.  
- Using descriptive variable names like `bookTitle` and `minutesRead` improved the readability of the code.  
- Writing modular functions that mimic real-world behavior was practiced. 
- Accuracy and flexibility were ensured by testing functions with fresh data.

---

## The Potential Enhancements are:

- Make sure `minutesRead` is a positive number by adding validation. 
- For persistence, store reading data in a JSON file or localStorage.  
- Allow for the tracking of several books per day or reading sessions; use charts or graphs to visualize reading trends.

---

## How to Run the Program

1. Make a clone of the repository:
   ```bash
   git clone https://github.com/mlwere1977/cs81-module4a-reading.git