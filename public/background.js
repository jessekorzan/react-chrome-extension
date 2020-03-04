let _on = false, // extension isn't on
    _react = "asset-manifest.json"; // react manifest

let readTextFile = (file, callback) => {
    // file has to be in the root (/public)
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
let disable = (tab) => {
    let code = `document.querySelector('#jk--chrome--extension').remove()`;

	chrome.tabs.executeScript(tab.id, {code: code});
    chrome.browserAction.setBadgeText({text: '', tabId: tab.id});
}
let enable = (tab) => {
    // get the REACT manifest
    readTextFile(_react, function(text) {
        let _data = JSON.parse(text),
            _keys = Object.keys(_data.files),
            _js = [_data.files['main.js'],_data.files[_keys[3]],_data.files[_keys[5]]];
    	
    	// inject all the JS files required
    	_js.forEach(file => {
    	    chrome.tabs.executeScript(tab.id, {
    		    file: file
        	});
        })
        // inject styles
    	chrome.tabs.insertCSS(tab.id, {
        	file: _data.files['main.css']
    	});
    	
    	// badge
        chrome.browserAction.setBadgeText({text: 'ON', tabId: tab.id});
        chrome.browserAction.setBadgeBackgroundColor({color: 'crimson'});
	});
}

// extension clicked on/off
chrome.browserAction.onClicked.addListener((tab) => {
    (_on) ? disable(tab) : enable(tab);
    _on = !_on;
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        sendResponse({ message : Math.floor(Math.random() * 10 + 1) });
        return true;
    }
);