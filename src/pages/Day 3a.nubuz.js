import wixData from "wix-data";

$w.onReady(function () {


let toInsert = {
  firstName: "Ru2",
  lastName: "Test",
  employeeId : 6445,
  isVeloTrained: true 
};

wixData
  .insert("EmployeesData", toInsert)
  .then((item) => {
    console.log(item); //see item below
  })
  .catch((err) => {
    console.log(err);
  })
});