$('#nav-createisa').addClass('active');

var search_customer_popup;

$('.progressbar a').attr('href', 'javascript:void(0)');
$('.progressbar a').addClass('disabled');

document.addEventListener('DataPageReady', function (event) {
	$('#InsertRecordCredit_Limit').autoNumeric('init', {mDec : 10, vMin : 0, aSep : '', aPad : false});
	update_progress_bar();

	show_MPO_Details();

	$('*[name$="RecordCurrent_EISA_No"]').prop('readonly', true);
});

$(document).on('click', '.cb-rl-eisa-id', function(){

	var this_checkbox = this;

	$.confirm({
		type : 'secondary',
		columnClass: 'col-md-6 col-md-offset-3',
		icon : '',
		title : 'Select E-ISA ID',
		theme : 'material',
		content : 'Are sure you want to select this E-ISA ID?',
		backgroundDismiss : false,
		buttons : {
			NO : function (){
				this_checkbox.checked = false;
			},
			YES :
			{
				text: 'YES',
				btnClass: 'btn-green',
				action: function()
				{
					$('*[name$="RecordCurrent_EISA_No"]').val(this_checkbox.value);
					$('#cb-modal .close').click();
				}
			}
		}
	});
});

$(document).on('change', '*[name="InsertRecordCompany"], *[name="InsertRecordPaint_Manufacturer"], *[name="InsertRecordMPO_Based"]', function(){
	$('*[name$="RecordMPO_Details"]').val('');
	show_MPO_Details();
});

function show_MPO_Details()
{
	var URL_Param = '?cbResetParam=1';
	URL_Param += '&Company=' + $('*[name="InsertRecordCompany"]').val();
	URL_Param += '&Manufacturer=' + $('*[name="InsertRecordPaint_Manufacturer"]').val();
	URL_Param += '&Selected=' + $('*[name="InsertRecordMPO_Details"]').val();

	if($('*[name="InsertRecordCompany"]').val() == '' || $('*[name="InsertRecordPaint_Manufacturer"]').val() == '' || $('*[name="InsertRecordMPO_Based"]').val() == '')
	{
		$('#MPO_Details_Iframe').removeAttr('src');
		return false;
	}

	$('#MPO_Details_Iframe').attr({ 'src' : './mpo-details.php' + URL_Param });
}

function iframe_autoresize(elem)
{
	var $iframe = $(elem).length ? $(elem) : window.parent.$(elem);
	var padding = 10;

	$iframe.css( 'height', '0px' );
	var height = $iframe.get(0).contentWindow.document.body.scrollHeight + padding;
	$iframe.css( 'height', (height + 70) + 'px' );
}

function related_accounts_popup(ISAId)
{
	$.confirm({
		type : 'secondary',
		columnClass : 'col-md-6 col-md-offset-3',
		icon : '',
		title : ' Related Accounts | E-ISA ID: ' + ISAId,
		theme : 'material',
		content : '<iframe frameBorder="0" src="./related-accounts.php?ISA_ID=' + ISAId + '" onload="iframe_autoresize(this)" style="width:100%;"></iframe>',
		backgroundDismiss : true,
		buttons : false,
		boxWidth: '800px',
		useBootstrap: false,
	});
}