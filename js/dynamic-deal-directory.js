document.addEventListener("DataPageReady", function (event) {
	if (event.detail.appKey == "25d550006e10f81c92774367b9fe") {
		if ($('.cb-dynamic-dd .cb-group-id[value="1"]').length) {
			// isa team
			deployDP(
				"cb-deal-directory",
				"https://caspio.thenetwork-crm.com/dp/25d5500063f217cac0c847ad8a1b/emb"
			);
		} else if ($('.cb-dynamic-dd .cb-group-id[value="4"]').length) {
			// isa finance
			deployDP(
				"cb-deal-directory",
				"https://caspio.thenetwork-crm.com/dp/25d550003cba56b852da4645ac6b/emb"
			);
		} else {
			deployDP(
				"cb-deal-directory",
				"https://caspio.thenetwork-crm.com/dp/25d55000da025f6ccee643b7821a/emb"
			);
		}
	}
});
