$(document).ready(function () {

    const baseAPI = new BaseAPI();
    const htmlFactory = new HtmlFactory();
    baseAPI.getBaseAPI("/api/v1/items/expired", populateExpiredItemsTable);

});

function populateExpiredItemsTable(records){
    console.debug(arguments.callee.name);
    populateTable(records, buildExpiredItemsHtmlJson);
}

function buildExpiredItemsHtmlJson(snapshot) {
    return htmlJson = [
        htmlFactory.htmlBasicPartial("<td>", snapshot["name"], "name"),
        htmlFactory.htmlBasicPartial("<td>", snapshot["sku"], "sku"),
        htmlFactory.htmlBasicPartial("<td>", snapshot["price"], "price"),
        htmlFactory.htmlBasicPartial("<td>", snapshot["category"], "category"),
        htmlFactory.htmlBasicPartial("<td>", snapshot["quantity"], "quantity"),
        htmlFactory.htmlBasicPartial("<td>", snapshot["expirationDate"], "expirationDate"),
        htmlFactory.htmlBasicPartial("<Button>", "Edit", "btn btn-primary editBtn"),
        htmlFactory.htmlBasicPartial("<Button>", "X", "btn btn-primary deleteBtn")
    ];
}


