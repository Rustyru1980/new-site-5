import wixData from 'wix-data';

$w.onReady(function () {
  $w('#subscribeButton').onClick(() => {
    const emailToInsert = $w('#emailInput').value;

    if (!emailToInsert) {
      $w('#errorMessage').text = "Please enter your email.";
      $w('#errorMessage').show();
      $w('#successMessage').hide();
      return;
    }

    const itemToInsert = { email: emailToInsert };

    wixData.insert("NewsletterSubscriptions", itemToInsert)
      .then((insertedItem) => {
        console.log("Signup successful! Item ID: " + insertedItem._id);
        $w('#successMessage').show();
        $w('#errorMessage').hide();
        $w('#emailInput').value = "";
      })
      .catch((error) => {
        console.error("Signup failed: " + error.message);
        $w('#errorMessage').text = "Signup failed. Please try again.";
        $w('#errorMessage').show();
        $w('#successMessage').hide();
      });
  });
});
