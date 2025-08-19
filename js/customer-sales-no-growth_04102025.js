var selectedAccountsRidArr = [];
var selectedAccountsRid = '';

var relateAllAccountsPopup;
var deleteRelatedAccountsPopup;

var urlVars = getUrlVars();
var isaId = urlVars.ISA_ID || '';

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
			deployDP('cb-relate-all-accounts-add', 'https://' + accountId + '/dp/' + appKeyPrefix + 'd424fe7ab6ae4af9896a/emb?ISA_ID=' + isaId);
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
	delete_related_accounts(relatedAccountId);
});

$(document).on('click', '#cb-relate-all-accounts-add .cb-account-checkbox', function(){
	store_selected_accounts();
});

document.addEventListener('DataPageReady', function (event) {

	$('.spinner-border').remove();

	if((event.detail.appKey).toUpperCase() == (appKeyPrefix+'c00e9414db644c4fbb7f').toUpperCase()) // section 2 submission form
	{
		$('*[name="EditRecordMonthly_Liquid"]').autoNumeric('init', {mDec : 10, vMin : 0, aSep : '', aPad : false});
		$('*[name="EditRecordMonthly_Allied"]').autoNumeric('init', {mDec : 10, vMin : 0, aSep : '', aPad : false});
		$('*[name="EditRecordTeam_Deal_Months"]').autoNumeric('init', {mDec : 0, vMin : 0, aSep : ''});
		setTimeout(function(){ 
		if(Number($('form[action*="c00e9414db644c4fbb7f"] input[name="cbParamVirtual11"]').val()) == 0){
			// console.log(Number($('form[action*="c00e9414db644c4fbb7f"] input[name="cbParamVirtual11"]').val()))
			add_related_account();
		}else{
			// console.log(Number($('form[action*="c00e9414db644c4fbb7f"] input[name="cbParamVirtual11"]').val()))
		}
		}, 2000);
	}

	if((event.detail.appKey).toUpperCase() == (appKeyPrefix+'d424fe7ab6ae4af9896a').toUpperCase()) // add related accounts
	{
		$.each(selectedAccountsRidArr, function(key, value){
			$('.cb-account-checkbox[value="' + value + '"]').prop('checked', true);
		});

		add_main_checkbox();
		toggle_main_checkbox();
	}
});

//for Related Accounts
document.addEventListener("DataPageReady", function(e){
	if(e.detail.appKey.includes("d424fe7ab6ae4af9896a")){
		// console.log('related accounts loaded')

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
				relAcctCb.css("display","none");
			}
			//with attachments but different manufacturer
			if(result == 2){
				$(this).html(circleContainer + yellowCircle + '</div>')
			}
		})

		document.querySelector("div[class*='jconfirm-closeIcon']").addEventListener("click", function() {
			// console.log("test");
			location.reload();
		})

	}


})
function view_attached_ISAs(rnd_id)
{
openModal_v2('Deal Info', 'https://' + accountId + '/dp/' + appKeyPrefix + '9fdcabfa2ecc487a8d4f/emb?RND_ID=' + rnd_id, '95%', 'Y');
}


function add_related_account()
{
	add_related_account_pop_up = $.confirm({
		scrollToPreviousElement: false
		, scrollToPreviousElementAnimate: false
		, icon : ''
		, title : ''
		, theme : 'material'
		, type : 'blue'
		, content : `
			<div class="mb-5"> 
				<div class="text-center"> 
					Don't forget to load your related accounts before E-ISA submission.
				</div> 
			</div>`
		, backgroundDismiss : false
		, buttons:
		{
			buttonYes :
			{
				text : 'Ok'
				, btnClass : 'btn-primary'
				, action: function (){}
			}
		}
		, onOpenBefore : () => {
			$('.jconfirm-buttons').addClass('text-center');
		}
	});
}

