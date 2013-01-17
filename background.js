chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.pageurl == "hello"){
		//console.log(request.greeting);
		sendResponse({state: "goodbye"});
    }else
		console.log(request.pageurl);
		sendResponse({}); // snub them.
  }
);