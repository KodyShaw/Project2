

$(document).ready(function () {

  const addItemForm = new AddItemForm();

  $(document).on("click", "#submitBtn", function () {
    addItemForm.submitFormToDB();
  });

  /* $(document).on("click", getHTML("updateBtn", false), function () {
    updateItem($(this).attr("data-key"));
  }); */

});