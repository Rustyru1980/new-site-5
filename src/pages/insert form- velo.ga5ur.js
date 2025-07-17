import wixData from "wix-data";

$w.onReady(function () {
  $w('#button1').onClick((event) => {
    let toInsert = {
      firstName: $w("#firstName").value,
      lastName: $w("#lastName").value,
      employeeId: $w("#employeeId").value,
      isVeloTrained: true
    };

    wixData
      .insert("EmployeesData", toInsert)
      .then((item) => {
     $w('#successMessage').show();
        $w('#errorMessage').hide();
        
      })
      .catch((error) => {
        console.error("Signup failed: " + error.message);
        $w('#errorMessage').text = "Signup failed. Please try again.";
        $w('#errorMessage').show();
        $w('#successMessage').hide();

	  })

  })
})