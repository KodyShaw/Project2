const htmlFactory = new HtmlFactory();
    
function populateTable(records, customTableBuildFunction){
    console.debug(arguments.callee.name);
    
    records.sort(sort_by('name', true, function(a){return a.toUpperCase()}));
    records.forEach(record => {
        buildTableRecordJson(record, record["uuid"], customTableBuildFunction);
    });
}

var sort_by = function(field, reverse, primer){
    var key = primer ? 
        function(x) {return primer(x[field])} : 
        function(x) {return x[field]};
    reverse = !reverse ? 1 : -1;
    return function (a, b) {
        return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
      } 
 }

 function buildTableRecordJson(snapshot, key, customTableBuildFunction) {
    var trDiv = $("<tr>");
    trDiv.attr("id", key)
    let jsonElements = customTableBuildFunction(snapshot);
    htmlFactory.createByArrayOfJson(trDiv,jsonElements);
    $("#results").append(trDiv);
}

