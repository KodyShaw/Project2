
var AddItemForm = function (){

    var _this = this;
    
    _this.submitFormToDB = function () {
        console.debug(arguments.callee.name);
    
        let inputs = _this.getInputsFromForm();
    
        if (_this.isValidInput(inputs)) {
            baseAPI.postBaseAPI("/api/v1/items", inputs, _this.nextStep);
        }
    };
    
    _this.getInputsFromForm = function (){
        return inputs = {
            name: $("#itemName").val(),
            description: $("#description").val(),
            category: $("#category").val(),
            quantity: $("#quantity").val()
        };
    };
    
    _this.isValidInput = function (inputs){
        if (inputs.name === ""
        || inputs.description === ""
        || inputs.category === ""
        || inputs.quantity === "")
            return false;
        return true;
    };
    
    _this.nextStep = function(){
        console.log("After post msg");
    };
};
