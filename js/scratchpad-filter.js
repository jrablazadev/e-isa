//I-23241
/* if filter/reset in scratchpad is clicked:
- caspioteam: prevent .load() in 0db191f2f38d401bb173 
- all role groups: prevent updating dashboard metrics 
*/

document.addEventListener("DataPageReady", function(event){
	var scratchPadContainer =  document.querySelector('#cb-team-scratchpad') || document.querySelector('#scratch-pad-container')
	if(scratchPadContainer){
		var appKeyFormat = /(.{12})\/emb/;
		var appKeyLoaded = scratchPadContainer.querySelector('script').getAttribute('src')
		appKeyLoaded = appKeyLoaded.match(appKeyFormat)
		appKeyLoaded = appKeyLoaded ? appKeyLoaded[1]  : '';
	}

	if(event.detail.appKey.includes(appKeyLoaded)){
		document.querySelector(`form[action*="${appKeyLoaded}"] #searchButton`).addEventListener('click', function() {
			shouldLoadTabContent = false; 
		});
	}

})