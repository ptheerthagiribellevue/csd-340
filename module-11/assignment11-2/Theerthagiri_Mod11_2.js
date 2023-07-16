// Array to store entries
var entries = [];

// Function to add an element to the array
function addEntry() {
    var entryInput = document.getElementById("entryInput");
    var entryValue = entryInput.value;

    // Add the entry to the array
    entries.push(entryValue);

    // Clear the input field
    entryInput.value = "";

    // Show alert with the added item
    var message = "Item " + entries.length + " = " + entryValue;
    alert(message);
    displayEntries();
}

// Function to delete an entry from the array
function deleteEntry() {
    if (entries.length === 0) {
        alert("No entries to delete.");
        return;
    }

    var entryIndex = prompt("Enter the index of the entry to delete (1-" + entries.length + "):");
    entryIndex = parseInt(entryIndex);

    if (isNaN(entryIndex) || entryIndex < 1 || entryIndex > entries.length) {
        alert("Invalid entry index. Please try again.");
        return;
    }

    entries.splice(entryIndex - 1, 1);
    displayEntries();
}

// Function to display the contents of the array
function displayEntries() {
    // Get the display area element
    var displayArea = document.getElementById("displayArea");

    // Clear the display area
    displayArea.innerHTML = "";

    // Iterate over the entries and display each entry with the correct numbering
    for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];

        // Create a new paragraph element
        var paragraph = document.createElement("p");
        paragraph.textContent = "Item " + (i + 1) + " = " + entry;

        // Append the paragraph to the display area
        displayArea.appendChild(paragraph);
    }
}

  