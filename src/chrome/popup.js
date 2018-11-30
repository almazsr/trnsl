$(function() {
	chrome.storage.sync.get({"translations" : {}}, function(storageResponse) {
	  var translations = storageResponse.translations;
	  Object.keys(translations).forEach(function(key, index) {
		  $('#translations').append(`<div style='margin: 2px;'><button>X</button> <span class='source'>${key}</span> - <span class='result'>${translations[key]}</span></div>`);
	  });	
		$("#translations > div > button").click(function (){			
			var source = $(this).parent().find('span.source').html();
			delete translations[source];
			chrome.storage.sync.set(storageResponse);
			$(this).parent().remove();
		});
	});
});