chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.pageurl == "hello"){
		console.log(request.greeting);
		sendResponse({farewell: "goodbye"});
    }else
      sendResponse({}); // snub them.
  }
);