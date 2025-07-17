import wixData from 'wix-data';

$w.onReady(function () {
  $w("#updateButton").onClick(() => {
    // Get the current item from the dataset
    let currentItem = $w("#dynamicDataset").getCurrentItem();

    // Get the new last name from the input field
    let newLastName = $w("#lastName").value;
    // Update the current item object
    currentItem.lastName = newLastName;

    // Use wixData.update() to update the item in the collection
    wixData.update("EmployeesData", currentItem)
      .then((result) => {
        console.log("Update successful:", result);
        // Optional: Refresh dataset to show updated text immediately
        $w("#dynamicDataset").refresh();
      })
      .catch((err) => {
        console.error("Update failed:", err);
      });
  });
});
