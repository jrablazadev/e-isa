
let is_loaded_6e10f81c92774367b9fe = 0;

document.addEventListener('DataPageReady', function (event) {
	if(event.detail.appKey.includes('6e10f81c92774367b9fe') && is_loaded_6e10f81c92774367b9fe == 0)
	{
		if($('.cb-dynamic-dd .cb-group-id[value="1"]').length) // isa team
		{
			deployDP('cb-deal-directory', `${globalDataPagePrefix}7229fa8e5f50432da038/emb`);
			
		}
		else if($('.cb-dynamic-dd .cb-group-id[value="1"]').length == 0 //avoid displaying for isa team
		&& $('.cb-dynamic-dd .cb-group-id[value="4"]').length) // isa finance
		{
			deployDP('cb-deal-directory', `${globalDataPagePrefix}8604295b600d4e91baa4/emb`);
			deployDP('cb-search', `${globalDataPagePrefix}05dabd8ea2034ffd9a0d/emb`);
		}
		else
		{
			deployDP('cb-deal-directory', `${globalDataPagePrefix}47bbef748cce468fb668/emb`);
			deployDP('cb-search', `${globalDataPagePrefix}05dabd8ea2034ffd9a0d/emb`);

		}

		is_loaded_6e10f81c92774367b9fe++;
	}
});