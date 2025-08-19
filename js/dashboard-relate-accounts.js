var selectedAccountsRidArr = [];
var selectedAccountsRid = '';

var relateAllAccountsPopup;
var deleteRelatedAccountsPopup;

var urlVars = getUrlVars();
var isaId = urlVars.ISA_ID || '';

var caretup = '<i class="fas fa-caret-up" style="color:green;font-size:35px;"></i>';
var caretdown = '<i class="fas fa-caret-down" style="color:red;font-size:35px;"></i>';
var dash = '<i class="fas fa-minus" style="font-size:35px;"></i>';

// --- for Related Accounts: red, green, yellow circles ---
var circleContainer = '<div class="circle-container">'
var greenCircle = '<div class="result-circle rounded-circle" value="0" data-toggle="tooltip" title="Not related to another deal for this paint company in the Deal Directory" style="background-color: #00FF00; border: 1px solid black; width: 20px; height: 20px">'
var yellowCircle = '<div class="result-circle rounded-circle" value="2" data-toggle="tooltip" title="There is a deal in the Deal Directory for another paint brand. Contact the Deal Desk with questions if you have any." style="background-color: #FFFF00; border: 1px solid black; width: 20px; height: 20px">'
var redCircle = '<div class="result-circle rounded-circle" value="1" data-toggle="tooltip" title="There is a deal in the Deal Directory for the same paint brand. Create a New Deal from the Deal Directory." style="background-color: #FF0000; border: 1px solid black; width: 20px; height: 20px">'

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
			<div id="cb-relate-all-accounts" class="cb-related-accounts-20220325"><iframe src="../shared/related-accounts.php?ISA_ID=' + isaId + '" id="cb-related-accounts-iframe-' + isaId + '"></iframe></div> \
			<hr> \
			<span style="font-size:22px; font-weight:bold;">Add Accounts</span> \
			<div id="cb-relate-all-accounts-legend"> \
			<table>\
			<!--green--> \
			<tr class="my-1">\
				<td class="circle-container">\
					<span class="rounded-circle green-circle" style="background-color: #00FF00; border: 1px solid black; width: 15px; height: 15px;"></span>\
				</td>\
				<td style="font-size: 12px;">\
					Not related to another deal for this paint company in the deal Directory.\
				</td>\
			</tr>\
			<!--yellow-->\
			<tr class="my-1">\
				<td class="circle-container">\
					<span class="rounded-circle yellow-circle" style="background-color: #FFFF00; border: 1px solid black; width: 15px; height: 15px;"></span>\
				</td>\
				<td style="font-size: 12px;">\
					There is a deal in the Deal Directory for another paint brand. Contact the Deal Desk with questions if you have any.\
				</td>\
			</tr>\
			<!--red-->\
			<tr class="my-1">\
				<td class="circle-container red-circle">\
					<span class="rounded-circle red-circle" style="background-color: #FF0000; border: 1px solid black; width: 15px; height: 15px;"></span>\
				</td>\
				<td style="font-size: 12px;">\
					There is a deal in the Deal Directory for the same paint brand. Create a New Deal from the Deal Directory.\
				</td>\
			</tr>\
		</table>\
			</div>\
			<div id="cb-relate-all-accounts-add"><div class="spinner-border text-info" role="status"></div></div> \
			<div><button type="button" class="btn btn-primary btn-sm mb-5 d-none cb-relate-all-accounts-submit-btn" onclick="relate_all_accounts_submit(' + isaId + ')">Submit</button> </div> \
			<div id="cb-relate-all-accounts-submit"></div> \
			<input type="hidden" class="cb-cancel-reload"> \
			</div> ',
		backgroundDismiss : false,
		buttons : false,
		boxWidth: '98%',
		useBootstrap: false,
		onOpen : function()
		{
			deployDP('cb-relate-all-accounts-add', 'https://' + accountId + '/dp/' + appKeyPrefix + 'd424fe7ab6ae4af9896a/emb?ISA_ID=' + isaId);		},
		onClose : function()
		{
			$('.cb-cog').show();
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
			<div id="cb-relate-all-accounts" class="cb-related-accounts-20220325"><div class="spinner-border text-info" role="status"></div></div> \
			<div id="cb-relate-all-accounts-add"><div class="spinner-border text-info" role="status"></div></div> \
			<div id="cb-relate-all-accounts-submit"></div> \
			</div> ',
		backgroundDismiss : false,
		buttons : false,
		boxWidth: '98%',
		useBootstrap: false,
		onOpen : function()
		{
			deployDP('cb-relate-all-accounts', 'https://' + accountId + '/dp/' + appKeyPrefix + '3e3ba698601043499ed2/emb?ISA_ID=' + isaId);
		},
		onClose : function()
		{
			$('.cb-cog').show();
		}
	});
}

function relate_all_accounts_submit(isaId)
{
	if(selectedAccountsRidArr.length === 0)
	{
		return false;
	}

	if(selectedAccountsRidArr.length > 100)
	{
		alert("A Maximum of 100 accounts can only be submitted at the same time.");
		return false;
	}

	$('#cb-relate-all-accounts-submit').html('<iframe src="../shared/add-related-accounts.php?ISA_ID=' + isaId + '&Network_Customer_IDs=' + selectedAccountsRid + '"></iframe>');
	$('#cb-relate-all-accounts-main > span').hide();
	$('#cb-relate-all-accounts-main > div').hide();
	$('#cb-relate-all-accounts-main > hr').hide();
	$('#cb-relate-all-accounts-main').append('<div class="spinner-border text-info" role="status"></div>');
}
if (typeof window.parent.delete_related_accounts !== "function") {
	function delete_related_accounts(relatedAccountId)
	{	
		//console.log('dashboard-relate-accounts.js');
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
			},
			onClose : function()
			{
				$('.cb-cog').show();
			}
		});
	}
}


function related_accouts_view_approvers_20220325(isaId) 
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
			<div id="cb-relate-all-accounts-view-approvers-20220325" class="cb-related-accounts-20220325"><div class="spinner-border text-info" role="status"></div></div> \
		',
		backgroundDismiss : false,
		buttons : false,
		boxWidth: '80%',
		useBootstrap: false,
		onOpen : function()
		{
			deployDP('cb-relate-all-accounts-view-approvers-20220325', 'https://' + accountId + '/dp/' + appKeyPrefix + 'be9f18ed3f184111a6a7/emb?ISA_ID=' + isaId);
		},
		onClose : function()
		{
			$('.cb-cog').show();
		}
	});
}

function related_accouts_sales_trend_icon_20220325(position, appKey)
{
	$(`.cb-related-accounts-20220325 form[action*=${appKey}] *[data-cb-name="data"] td:nth-child(${position})`).each(function() {

		if ($(this).attr('data-has-icon') == 'Y') {
			return true;
		}

		var percentage = ($(this).html() || '').toString().trim();
		percentage = Number(percentage) * 100;

		if (percentage > 1) {
			$(this).html(caretup + '<div>' + percentage.toFixed(2).toString() + '%</div>');
		} else if (percentage < -1.1) {
			$(this).html(caretdown + '<div>' + percentage.toFixed(2).toString() + '%</div>');
		} else {
			$(this).html(dash + '<div>' + percentage.toFixed(2).toString() + '%</div>');
		}

		$(this).attr('data-has-icon', 'Y');
	});
}


function related_accouts_sales_view_only_trend_icon()
{
	$('.cb-related-accounts-20220325 *[data-cb-name="header"] th:nth-child(15)').hide()
	$('.cb-related-accounts-20220325 *[data-cb-name="data"] td:nth-child(15)').hide()
	$('.cb-related-accounts-20220325 *[data-cb-name="data"] td:nth-child(9)').each(function() {

		if ($(this).attr('data-has-icon') == 'Y') {
			return true;
		}

		var percentage = ($(this).html() || '').toString().trim();
		percentage = Number(percentage) * 100;
		console.log($(this).html() )

		if (percentage > 1) {
			$(this).html(caretup + '<div>' + percentage.toFixed(2).toString() + '%</div>');
		} else if (percentage < -1.1) {
			$(this).html(caretdown + '<div>' + percentage.toFixed(2).toString() + '%</div>');
		} else {
			$(this).html(dash + '<div>' + percentage.toFixed(2).toString() + '%</div>');
		}

		$(this).attr('data-has-icon', 'Y');
	});
}

function customer_no_address_popup_20220325(isa_id, customer_no)
{
	openModal_v2('ISA ' + isa_id + ' - Customer Number ' + customer_no, 'https://' + accountId + '/dp/' + appKeyPrefix + '4b64dd49bf784ad7bb92/emb?ISA_ID=' + isa_id + '&Customer_Number=' + customer_no, '95%', 'Y');
}

function add_main_checkbox()
{
	$('form[action*="d424fe7ab6ae4af9896a"] table[data-cb-name="cbTable"] tr[data-cb-name="header"] th:first').html('<input type="checkbox" class="main-cb" onclick="select_all_checkboxes(this)">');
}

function select_all_checkboxes(elem)
{
	$('form[action*="d424fe7ab6ae4af9896a"] table[data-cb-name="cbTable"] input[type="checkbox"]').prop('checked', elem.checked);
	store_selected_accounts();
}

function store_selected_accounts()
{
	$('form[action*="d424fe7ab6ae4af9896a"] table[data-cb-name="cbTable"] input[type="checkbox"]:not(.main-cb)').each(function(){

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
			if(selectedAccountsRidArr.indexOf(this.value) >= 0)
			{
				selectedAccountsRidArr.splice(selectedAccountsRidArr.indexOf(this.value), 1);
			}
		}

	});

	selectedAccountsRid = selectedAccountsRidArr.join(',');

	if(selectedAccountsRid == '')
	{
		$('.cb-relate-all-accounts-submit-btn').addClass('d-none');
	}
	else
	{
		$('.cb-relate-all-accounts-submit-btn').removeClass('d-none');
	}

	toggle_main_checkbox();
}

function toggle_main_checkbox()
{
	let table = $('form[action*="d424fe7ab6ae4af9896a"] table[data-cb-name="cbTable"]');
	table.find('.main-cb').prop('checked', ( table.find('.cb-account-checkbox').length === table.find('.cb-account-checkbox:checked').length ) );
}

$(document).on('click', '.cb-delete-related-acct-btn', function(){
	var relatedAccountId = $(this).attr('data-related-account-id');
	try {
		delete_related_accounts(relatedAccountId);
	} catch (error) {
		//console.log(error);
	}
	
});

$(document).on('click', '#cb-relate-all-accounts-add .cb-account-checkbox', function(){
	store_selected_accounts();
});

document.addEventListener('DataPageReady', function (event) {
	$('.spinner-border').remove();

	if((event.detail.appKey).toUpperCase() == (appKeyPrefix + 'd424fe7ab6ae4af9896a').toUpperCase()) // add related accounts
	{
		$.each(selectedAccountsRidArr, function(key, value){
			$('.cb-account-checkbox[value="' + value + '"]').prop('checked', true);
			// var $el = $('.cb-account-checkbox[value="' + value + '"]');

			// if (!$el.is('[style*="display: none"]')) {
			// 	$el.prop('checked', true);
			// }
		});

		add_main_checkbox();
		toggle_main_checkbox();

		//for Related Accounts
		console.log('related accounts loaded')

		$('#cb-relate-all-accounts-add *[data-cb-name="data"] td:nth-child(3)').each(function () {
			var result = $(this).html() || '';

			//no attachments
			if(result == 0){
				$(this).html(circleContainer + greenCircle + '</div>')
				var otherRelated = $(this).next().children('div');
				otherRelated.css("visibility","hidden");
				
			}
			//with attachments and the same manufacturer
			if(result == 1){
				$(this).html(circleContainer + redCircle + '</div>')
				var relAcctCb = $(this).prevAll().children('input')
				//relAcctCb.css("display","none");
				relAcctCb.remove();
			}
			//with attachments but different manufacturer
			if(result == 2){
				$(this).html(circleContainer + yellowCircle + '</div>')
			}
		})
	}


	// related accounts
	if (
		event.detail.appKey
			.toLowerCase()
			.includes("be9f18ed3f184111a6a7".toLowerCase()) || // related accounts
		event.detail.appKey
			.toLowerCase()
			.includes("d0744c037b244933ae60".toLowerCase()) // Deal Directory - ISM, TSM - Account Related - View Only
	) {
		related_accouts_sales_trend_icon_20220325(8, event.detail.appKey);
		// related_accouts_sales_trend_icon_20220325_dpEfa();
	}

	if (
		event.detail.appKey
			.toLowerCase()
			.includes("de68c8357bc94d299955".toLowerCase()) || // ISA Team - List - Related ISA Related Accounts 
		event.detail.appKey
			.toLowerCase()
			.includes("f2efc3c1a962429a987d".toLowerCase()) || // Deal Directory - ISM, TSM - List - Related ISA Related Accounts 
		event.detail.appKey
			.toLowerCase()
			.includes("f82f8b88518a443d8cea".toLowerCase()) || // Deal Directory - DSM, DOM, RVPS, RVPO, RSM, BDM - List - Related Accounts (RLS) 
		event.detail.appKey
			.toLowerCase()
			.includes("6692510839ef4e1e90cc".toLowerCase()) || // Deal Directory - CEO, COO, CFO, KN - List - Related ISA Related Accounts
		event.detail.appKey
			.toLowerCase()
			.includes("c36bdfdc8896457e8efa".toLowerCase()) // ISA - Attachments - ISA - Attach - Acct Related
	) {
		console.log('inside related accounts: ', event.detail.appKey)
		related_accouts_sales_trend_icon_20220325(9, event.detail.appKey);
	}

	// related accounts view only
	if(
		event.detail.appKey
			.toLowerCase()
			.includes("3e3ba698601043499ed2".toLowerCase()) // related accounts view only
	) {
		related_accouts_sales_view_only_trend_icon();
	}
});