
var baseAPI = {
  getBaseAPI: function (queryURL, callBackFunction) {
    queryURL = baseAPI.cleanSearchString(queryURL);
      
    $.ajax({
      url: queryURL,
      method: "Get"
    })
      .then(function (response) {
        console.debug("baseAPI and results:");
        console.debug(response);
        callBackFunction(response);
      }).catch(function (err) {
        console.debug(err.responseText);
      });
  },
        
  postBaseAPI: function (queryURL, body, callBackFunction) {
    queryURL = baseAPI.cleanSearchString(queryURL);

    $.ajax({
      url: queryURL,
      method: "Post",
      data: body
    })
      .then(function (response) {
        console.debug("baseAPI and results:");
        console.debug(response);
        callBackFunction(response);
      }).catch(function (err) {
        console.debug(err.responseText);
      });
  },

  cleanSearchString: function (str) {
    try {
        let returnWord = str.trim();
        returnWord = returnWord.replace(/ /g, "");
        return returnWord;
    } catch{
        return null;
    }
}
};