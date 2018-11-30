chrome.tabs.onUpdated.addListener(function
(tabId, changeInfo, tab) {
	if (changeInfo.status == 'complete' && tab.url.startsWith("https://translate.google.com/")) {
	  chrome.tabs.executeScript(null, {
		file: "getTranslation.js"
	  });
  }
});