$(document).ready(function () {

    const itemForm = new ItemForm();
  
    
    $(document).on("click", "#submitBtn", function () {
      itemForm.submitFormToDB();
    });
    
    $(document).on("click", "#updateBtn", function () {
      itemForm.updateFormToDB();
    });
  
  
  });