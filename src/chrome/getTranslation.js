function isElementVisible(element) {
	return element.getAttribute('style') != 'display: none;';
}

function catchTranslation() {
	if (isElementVisible(definitionsElement)) {	
		var sourceElement = document.querySelector('#source');
		var source = sourceElement.value;
		var resultElement = document.querySelector('span.tlid-translation.translation > span');
		var result = resultElement.innerText;
		if (source !== "") {
			chrome.storage.sync.get({"translations" : {}}, function(storageResponse) {
				var translations = storageResponse.translations;
				if (translations[source]!==result) {
					translations[source]=result;
					chrome.storage.sync.set(storageResponse);
				}
			});
		}
	}
}

var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

var definitionsElement = document.querySelector('div.gt-cd.gt-cd-mmd');

var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type == "attributes") {
		catchTranslation();
    }
  });
});

observer.observe(definitionsElement, {
  attributes: true
});

catchTranslation();