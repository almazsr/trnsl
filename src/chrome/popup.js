$(function() {
	chrome.storage.sync.get({"translations" : {}}, function(storageResponse) {
	  var translations = storageResponse.translations;
	  Object.keys(translations).forEach(function(key, index) {
		  $('#translations').append(`<div style='margin: 2px;'><img src="remove.png" style="width: 16px; vertical-align:middle"/> <span class='source'>${key}</span> - <span class='result'>${translations[key]}</span></div>`);
	  });	
		$("#translations > div > img").click(function (){			
			var source = $(this).parent().find('span.source').html();
			delete translations[source];
			chrome.storage.sync.set(storageResponse);
			$(this).parent().remove();
		});
	});
});