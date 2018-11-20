function main() {
  console.log("started project");
}

function submitFormToDB() {
    console.debug(arguments.callee.name);

    let inputs = getInputsFromForm();

    if (isValidInput(inputs)) {
        baseAPI.postBaseAPI("/api/v1/items", inputs, nextStep);
    }
}

function getInputsFromForm(){
    return inputs = {
        name: $("#itemName").val(),
        description: $("#description").val(),
        category: $("#category").val(),
        quantity: $("#quantity").val()
    };
}

function isValidInput(inputs){
    if (inputs.name === ""
    || inputs.description === ""
    || inputs.category === ""
    || inputs.quantity === "")
        return false;
    return true;
}

function nextStep(){
    console.log("After post msg");
}