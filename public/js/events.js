$(document).ready(function () {

  main();

  $(document).on("click", "#submitBtn", function () {
    submitFormToDB();
  });

  /* $(document).on("click", getHTML("updateBtn", false), function () {
    updateItem($(this).attr("data-key"));
  }); */

});