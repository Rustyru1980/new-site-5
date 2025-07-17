import {item} from 'wix-data';

$w.onReady(function () {
  // Wait for the dataset to be ready
  $w('#employeeDataset').onReady(() => {
    const currentItem = $w('#employeeDataset').getCurrentItem();
    
    // Display current names on page load
    $w('#text4').text = currentItem.firstName;
    $w('#lastNameText').text = currentItem.lastName;
  });

  $w('#button3').onClick(() => {
    // Get the current item from the dataset
    let currentItem = $w('#employeeDataset').getCurrentItem();

    // Get new last name from the input field
    let newLastName = $w('#newLastname').value;

    if (!newLastName) {
      console.warn("Please enter a new last name.");
      return;
    }

    // Update the lastName field
    currentItem.lastName = newLastName;

    // Use wixData to update the collection
    wixData.update("Employees", currentItem)
      .then((updatedItem) => {
        console.log("Update successful:", updatedItem);

        // Optionally refresh dataset to show updated data
        $w('#employeeDataset').refresh();

        // Update the text element on the page
        $w('#lastNameText').text = updatedItem.lastName;
      })
      .catch((err) => {
        console.error("Update failed:", err);
      });
  });
});



