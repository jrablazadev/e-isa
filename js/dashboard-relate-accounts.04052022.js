var selectedAccountsRidArr = [];
var selectedAccountsRid = '';

var relateAllAccountsPopup;
var deleteRelatedAccountsPopup;

var urlVars = getUrlVars();
var isaId = urlVars.ISA_ID || '';

function relate_all_accounts_popup(isaId)
{
	selectedAccountsRidArr = [];

        relateAllAccountsPopup = $.confirm({
		scrollToPreviousElement: false,
    		scrollToPreviousElementAnimate: false,
		type : 'secondary',
		columnClass : 'col-md-6 col-md-offset-3',
		icon : '',
		title : 'ISA ' + isaId ,
		theme : 'material',
		content : ' \
			<div id="cb-relate-all-accounts-main"> \
			<span style="font-size:22px; font-weight:bold;">Related Accounts</span> \
			<div id="cb-relate-all-accounts"><div class="spinner-border text-info" role="status"></div></div> \
			<hr> \
			<span style="font-size:22px; font-weight:bold;">Add Accounts</span> \
			<div id="cb-relate-all-accounts-add"><div class="spinner-border text-info" role="status"></div></div> \
			<div><button type="button" class="btn btn-primary btn-sm mb-5 d-none cb-relate-all-accounts-submit-btn" onclick="relate_all_accounts_submit(' + isaId + ')">Submit</button> </div> \
			<div id="cb-relate-all-accounts-submit"></div> \
			<input type="hidden" class="cb-cancel-reload"> \
			</div> ',
		backgroundDismiss : false,
		buttons : false,
		boxWidth: '80%',
		useBootstrap: false,
		onOpen : function()
		{
			deployDP('cb-relate-all-accounts', 'https://' + accountId + '/dp/' + appKeyPrefix + 'c36bdfdc8896457e8efa/emb?ISA_ID=' + isaId);
			deployDP('cb-relate-all-accounts-add', 'https://' + accountId + '/dp/' + appKeyPrefix + 'd424fe7ab6ae4af9896a/emb?ISA_ID=' + isaId);
		}
	});
}

function relate_all_accounts_viewonly_popup(isaId)
{
	selectedAccountsRidArr = [];

        relateAllAccountsPopup = $.confirm({
		scrollToPreviousElement: false,
    		scrollToPreviousElementAnimate: false,
		type : 'secondary',
		columnClass : 'col-md-6 col-md-offset-3',
		icon : '',
		title : 'ISA ' + isaId ,
		theme : 'material',
		content : ' \
			<div id="cb-relate-all-accounts-main"> \
			<span style="font-size:22px; font-weight:bold;">Related Accounts</span> \
			<div id="cb-relate-all-accounts"><div class="spinner-border text-info" role="status"></div></div> \
		',
		backgroundDismiss : false,
		buttons : false,
		boxWidth: '80%',
		useBootstrap: false,
		onOpen : function()
		{
			deployDP('cb-relate-all-accounts', 'https://' + accountId + '/dp/' + appKeyPrefix + '3e3ba698601043499ed2/emb?ISA_ID=' + isaId);
		}
	});
}

function relate_all_accounts_submit(isaId)
{
	$('#cb-relate-all-accounts-submit').html('<iframe src="../shared/add-related-accounts.php?ISA_ID=' + isaId + '&Network_Customer_IDs=' + selectedAccountsRid + '"></iframe>');
	$('#cb-relate-all-accounts-main > span').hide();
	$('#cb-relate-all-accounts-main > div').hide();
	$('#cb-relate-all-accounts-main > hr').hide();
	$('#cb-relate-all-accounts-main').append('<div class="spinner-border text-info" role="status"></div>');
}

function delete_related_accounts(relatedAccountId)
{
	deleteRelatedAccountsPopup = $.confirm({
		scrollToPreviousElement: false
    		, scrollToPreviousElementAnimate: false
		// , columnClass : 'col-md-6 col-md-offset-3'
		, icon : ''
		, title : ' '
		, theme : 'material'
		, type : 'red'
		, content : ' \
			<div class="mb-5"> \
			<div class="text-center"> \
				Are you sure you want to delete this records <i class="fas fa-question-circle text-danger"></i> \
				<div class="cb-delete-account-related-spinner"><div class="spinner-border text-info" role="status"></div></div> \
			</div> \
			<div id="cb-delete-related-account-cn" class="d-none"></div> \
			<input type="hidden" class="cb-cancel-reload"> \
			</div>'
		, backgroundDismiss : false
		, buttons:
		{
			buttonYes :
			{
			    	text : 'No'
			    	, btnClass : 'btn-default'
				, action: function (){ }
			},
			buttonNo :
			{
			    	text : 'Yes'
			    	, btnClass : 'btn-danger'
				, action: function ()
				{
					$('.cb-delete-account-related-spinner').append('<div class="spinner-border text-info" role="status"></div>');

					this.buttons.buttonNo.disable();
					this.buttons.buttonYes.disable();

					$('#cb-delete-relate-account-fr').contents().find('*[name="Submit"]').click();
					return false;
			    	}
			},
		}
		, onOpen : function()
		{
			this.buttons.buttonNo.disable();
			this.buttons.buttonYes.disable();

			$('#cb-delete-related-account-cn').html('<iframe id="cb-delete-relate-account-fr" src="../shared/delete-related-accounts.php?ID=' + relatedAccountId + '&ISA_ID=' + isaId + '"></iframe>');
		}
	});
}

$(document).on('click', '.cb-delete-related-acct-btn', function(){
	var relatedAccountId = $(this).attr('data-related-account-id');
	delete_related_accounts(relatedAccountId);
});

$(document).on('click', '#cb-relate-all-accounts-add .cb-account-checkbox', function(){

	if(this.checked)
	{
		if(selectedAccountsRidArr.indexOf(this.value) !== -1) // check account if already exist
		{
			// don't store
		}
		else
		{
			selectedAccountsRidArr.push(this.value);
		}
	}
	else
	{
		selectedAccountsRidArr.splice(selectedAccountsRidArr.indexOf(this.value), 1);
	}

	selectedAccountsRid = selectedAccountsRidArr.join(',');

	if(selectedAccountsRid == '')
	{
		$('.cb-relate-all-accounts-submit-btn').addClass('d-none');
	}
	else
	{
		$('.cb-relate-all-accounts-submit-btn').removeClass('d-none');
	}
});


document.addEventListener('DataPageReady', function (event) {
	$('.spinner-border').remove();

	if((event.detail.appKey).toUpperCase() == ('25d55000d424fe7ab6ae4af9896a').toUpperCase()) // add related accounts
	{
		$.each(selectedAccountsRidArr, function(key, value){
			$('.cb-account-checkbox[value="' + value + '"]').prop('checked', true);
		});
	}
});