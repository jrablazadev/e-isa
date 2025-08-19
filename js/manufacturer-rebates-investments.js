var exclamationIcon = '<i class="fas fa-exclamation-circle cb-danger-icon" title="Required"></i>';
var autonumericid = 0;

//CR-21939
var changeColorInputWithValues = ['.mfr-participation[data-investmentid="8"]', '.participation[data-investmentid="43"]'];

document.addEventListener('DataPageReady', function (event){
	
	/* Investments Entry */
	if((event.detail.appKey).search('51ba494d753f49b0a82e') >= 0)
	{
		$('.qty, .participation, .mfr-participation, .customer-participation').each(function(){
			autonumericid++;
			$(this).addClass('autonumeric');
			$(this).attr({ 'id' : 'autonumeric-' + autonumericid });
			$('#autonumeric-' + autonumericid).autoNumeric('init', {mDec : 10, vMin : 0, aSep : '', aPad : false});

			if ($("#section8-entry .cbResultSetCalculatedField").eq(1).text() == 'Pricing ONLY DEAL - Customer Does not have a Contract') {

				$(".participation[data-investmentid=8]").attr("disabled", "disabled")
				$(".participation[data-investmentid=8]").val(0)
				$("button[class*=notesbtn][data-investmentid=8]").hide()
				$("button[class*=nocontactbtn][data-investmentid=8]").show()

				$(".participation[data-investmentid=43]").attr("disabled", "disabled")
				$(".participation[data-investmentid=43]").val(0)
				$("button[class*=notesbtn][data-investmentid=43]").hide()
				$("button[class*=nocontactbtn][data-investmentid=43]").show()

				$(".participation[data-investmentid=9]").attr("disabled", "disabled")

				if($.trim($("#section8-entry .cbResultSetCalculatedField").eq(2).text()).length != 0){
					if($(".participation[data-investmentid=9]").val() == ""){
						$(".participation[data-investmentid=9]").val(0)
					}
					if($(".participation[data-investmentid=9]").val() == ""){
						$(".participation[data-investmentid=9]").val()
					}
					isTriggerStopped();	
				} else{
					$(".participation[data-investmentid=9]").val(0)
					$("button[class*=notesbtn][data-investmentid=9]").hide()
					$("button[class*=nocontactbtn][data-investmentid=9]").show()
				}
			}

			// CR-22205
			$(".participation[data-investmentid=3]").attr("disabled", "disabled")
			$(".participation[data-investmentid=4]").attr("disabled", "disabled")

			// CR-25682
			$(".customer-participation[data-investmentid=3]").attr("disabled", "disabled")
			$(".customer-participation[data-investmentid=4]").attr("disabled", "disabled")
		});
		
		// change_notesBtn_color();
		notes_btn_validation();

		var selector = changeColorInputWithValues.join(', ');
		
		$(selector).each(function() {
			colorInputRed(this);
		});

		support_fee_btn();
		
	}
});

const isTriggerStopped = () => {
	if($("#section8-entry .cbResultSetCalculatedField").eq(6).text() == 'True'){
		$('div#dummy-amount[data-investmentid="9"]').addClass("gray-background")
	}
}

$(document).on('click', '.nextbtn', function(){

	var has_error = false;

	$('input[type="text"].autonumeric').each(function(){
		if(isNaN(Number(this.value)))
		{
			has_error = true;
			return false;
		}
	});

	if(has_error)
	{
		jc_error_msg('Investments', 'Numeric values only');
		return false;
	}

	if(validate_qty() == false)
	{
		$('.nextbtn').removeClass('disabled');
		$('.nextbtn').prop('disabled', false);
		return false;
	}

	// return false;

	get_values();
});

$(document).on('keyup, change', '.participation, .mfr-participation', function(){
	// change_notesBtn_color();
	notes_btn_validation();
});

function get_values()
{
	if($('form[action*="51ba494d753f49b0a82e"] .notesbtn.btn-danger').length)
	{
		let notes_btn = $('form[action*="51ba494d753f49b0a82e"] .notesbtn.btn-danger').eq(0);
		let investments_desc = notes_btn.closest('tr').find('.investmentname').attr('data-name');

		jc_error_msg(investments_desc, 'Notes Required');
		return false;
	}

	var investment_id = '';
	var qty = '';
	var participation = '';
	var mfr_participation = '';
	var custom_part = '';
	var amount_contract = '';

	$('.qty').each(function(){                      investment_id       += $(this).attr('data-investmentid') + '|' });
	$('.qty').each(function(){                      qty                 += (this.value).toString() + '|' });
	$('.participation').each(function(){            participation       += (this.value).toString() + '|' });
	$('.mfr-participation').each(function(){        mfr_participation   += (this.value).toString() + '|' });
	$('.customer-participation').each(function(){   custom_part         += (this.value).toString() + '|' });
	$('.amount-contract').each(function(){   	amount_contract     += (this.value).toString() + '|' });

	$('*[name="InsertRecordInvestment_ID"]').val(investment_id);
	$('*[name="InsertRecordQty"]').val(qty);
	$('*[name="InsertRecordParticipation"]').val(participation);
	$('*[name="InsertRecordMFR_Participation"]').val(mfr_participation);
	$('*[name="InsertRecordCustomer_Participation"]').val(custom_part);
	$('*[name="InsertRecordAmount_Contract"]').val(amount_contract);

	cascade_finalized_values();

	$('#entryraw-container *[type="submit"]').click();
}

function info_popup(id, title)
{
	var url_src = '';
	if(Number(id)===15){
		url_src = `../shared/investments-color-camera-info.php`
	}else if(Number(id)===16){
		url_src = `../shared/investments-color-box-info.php`
	}
	else{
		url_src = `../shared/investments-info.php?ID=${id}`
	}
	$.confirm({
			type : 'secondary',
			columnClass : 'col-md-6 col-md-offset-3',
			icon : '',
			title : title,
			theme : 'material',
			content : `<iframe src="./${url_src}" onload="iframe_autoresize(this)"></iframe>`,
			backgroundDismiss : true,
			buttons : false,
			boxWidth: '700px',
			useBootstrap: false,
	});
}

function comments_popup(id, title)
{
	$.confirm({
		type : 'secondary',
		columnClass : 'col-md-6 col-md-offset-3',
		icon : '',
		title : title,
		theme : 'material',
		content : `<iframe src="../shared/investments-notes.php?ID=${id}" onload="iframe_autoresize(this)"></iframe>`,
		backgroundDismiss : true,
		buttons : false,
		boxWidth: '50%',
		useBootstrap: false,
	});
}

function iframe_autoresize(elem)
{
	var $iframe = $(elem).length ? $(elem) : window.parent.$(elem);
	var padding = 10;

	$iframe.css( 'height', '0px' );
	var height = $iframe.get(0).contentWindow.document.body.scrollHeight + padding;
	$iframe.css( 'height', (height + 70) + 'px' );
}

function validate_qty()
{
	var output = true;

	$('.qty').each(function(){
		var investment_id = Number($(this).attr('data-investmentid'));
		var row = $(this).closest('tr');
		var title = (row.find('.investmentname').attr('data-name') || '').toString().trim();

		switch(investment_id)
		{
			// case 3: -- NF-22199 support fee btn
			// case 4: -- NF-22199 support fee btn
			case 11:
			case 12:
			case 13:
			case 14:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 44:
				
				var participation = Number(row.find('.participation').val());
				var mfr_participation = Number(row.find('.mfr-participation').val());
				var qty = Number(row.find('.qty').val());
				
				// console.log(title, qty, participation, mfr_participation);
				
				if(qty == 0 && (participation > 0 || mfr_participation > 0))
				{
					jc_error_msg(title, 'Required Qty');
					output = false;
					return false;
				}
				
				break;
		}
	});

	return output;
}

function notes_btn_validation(){

	console.log('notes validation ------------->');

	const ncs_cost_required_notes = [
		12 // Shop Equipment
		, 45 // Logic Set Up Expenses
		, 17 // LB Inventory
		, 13 // Non LB Inventory
		, 18 // Set up Supplies
		, 25 // Fixed Dollar Rebate
		, 10 // Journal Adjustment Requested
		, 7 // Front loaded Equipment Fund
	];

	const mfg_participation_required_notes = [
		12 // Shop Equipment
		, 45 // Logic Set Up Expenses
		, 17 // LB Inventory
		, 13 // Non LB Inventory
		, 18 // Set up Supplies
		, 25 // Fixed Dollar Rebate
		, 10 // Journal Adjustment Requested
		, 7 // Front loaded Equipment Fund
	];

	$('form[action*="51ba494d753f49b0a82e"] .notesbtn').each(function(){
		const row = $(this).closest('tr');
		const notes_btn = $(this);

		let notes_count = Number(notes_btn.attr('data-notescount') || '');
		notes_count = isNaN(notes_count) ? 0 : notes_count;

		const investment_id = Number(notes_btn.attr('data-investmentid'));
		const amount_contract = Number(row.find('.amount-contract').val());
		const ncs_cost = Number(row.find('.participation').val());
		const mfr_participation = Number(row.find('.mfr-participation').val());
		const agreement_Type = $('form[action*="d45ec1ea789448e29b84"] *[name="cbParamVirtual3"]').val();

		notes_btn.removeClass('btn-danger');
		notes_btn.addClass('btn-primary');
		
		// console.log({notes_count});

		if(notes_count === 0)
		{
			// console.log({
			// 	investment_id,
			// 	ncs_cost_validation : ncs_cost_required_notes.includes(investment_id),
			// 	ncs_cost
			// });

			// -----------------------------------------------------------------------> NCS Cost - required notes 
			if(ncs_cost_required_notes.includes(investment_id) && ncs_cost > 0)
			{
				console.log('required notes for ' + investment_id);

				notes_btn.removeClass('btn-primary');
				notes_btn.addClass('btn-danger');
				return true; // continue to next loop
			}

			// -----------------------------------------------------------------------> MFG Participation - required notes 
			if(mfg_participation_required_notes.includes(investment_id) && mfr_participation > 0)
			{
				notes_btn.removeClass('btn-primary');
				notes_btn.addClass('btn-danger');
				return true; // continue to next loop
			}

			// -----------------------------------------------------------------------> Amount on Contract - required notes
			if(
				agreement_Type != 'Pricing ONLY DEAL - Customer Does not have a Contract'
				&& [
					17 // skip validation - LB Inventory
					, 26 // Prompt Pay %
				].includes(investment_id) == false
				&& Number(amount_contract) != Number(ncs_cost) && notes_count == 0
			) 
			{
				notes_btn.removeClass('btn-primary');
				notes_btn.addClass('btn-danger');
				// return true; // continue to next loop
			}
		}
	});
}

function percent_columns()
{
	$('.row-mfr-rebate').each(function(){
		var column = $(this).attr('data-column');
		var val = Number(this.value);
		val = val.toFixed(2).toString() + '%';


		$(this).closest('tr').children('td:nth-child(' + column + ')').html(val);
	});
}

function jc_error_msg(title, content)
{
	$.confirm({
		type : 'secondary',
		columnClass: 'col-md-6 col-md-offset-3',
		icon: ' ',
		title : title,
		theme : 'material',
		type : 'red',
		content : content,
		backgroundDismiss : false,
		buttons : {
			OK :
			{
				text: 'OK',
				btnClass: 'btn-danger',
				action: function()
				{
					// window.location.href = redirect_to;
				}
			}
		},
		onClose : function()
		{
			$('.nextbtn').removeClass('disabled');
			$('.nextbtn').prop('disabled', false);
		}
	});
}

function colorInputRed(e){
	$(e).removeClass('bg-danger text-white');
	if(Number(e.value) != 0)
	{
		$(e).addClass('bg-danger text-white');
	}
}

function support_fee_btn()
{
	// NF-23118
	// remove input fields in Monthly Computer Support Fees
	// append Support Fees btn

	// CR-23529
	// new buttons

	const form = $('form[action*="51ba494d753f49b0a82e"]');
	const comp_support_fees = form.find('.qty[data-investmentid="3"]')
	const logic_ics_fees = form.find('.qty[data-investmentid="4"]')

	comp_support_fees.hide();
	comp_support_fees.parent().append(`
		<button type="button" class="btn btn-sm btn-info cb-mfg-support-fees-btn">
			Edit MFG Software Subscription
		</button>
	`);

	logic_ics_fees.hide();
	logic_ics_fees.parent().append(`
		<button type="button" class="btn btn-sm btn-info cb-log1c-support-fees-btn">
			Edit Log1c Subscription
		</button>
	`);

	// Support Fee modal
	const url_params = getUrlVars();
	const isa_id = url_params.ISA_ID || '';

	$('.cb-mfg-support-fees-btn').click(function(){
		jc_open_iframe(`<div class="mb-2">ISA ${isa_id}</div><div>Manufacturer Subscription Fee Summary</div>`, `../shared/mfr-fee-summary.php?ISA_ID=${isa_id}`);
	});

	$('.cb-log1c-support-fees-btn').click(function(){
		jc_open_iframe(`<div class="mb-2">ISA ${isa_id}</div><div>Log1c Subscription Fee Summary</div>`, `../shared/log1c-fee-summary.php?ISA_ID=${isa_id}`);
	});
}

// Description: Amount valudation of MFG Support
$(document).on('focusout', '.cb-mfg-support *[name="InlineEditMFG_Support"], .cb-mfg-support *[name="InlineEditSupport_Fixed_Rebate_Date"]', function(){
	var mfg_support = Number(this.value);
	mfg_support = isNaN(mfg_support) ? 0 : mfg_support;

	var support_start_date = $('.cb-mfg-support *[name="InlineEditSupport_Fixed_Rebate_Date"]').val() || '';
	var notes_count = Number($('.cb-mfg-support .notesbtn').attr('data-notescount') || '');

	$('.cb-mfg-support *[name="Mod0InlineEdit"]').prop('disabled', false);
	$('.cb-mfg-support *[name="Mod0InlineEdit"]').removeClass('cb-disabled');

	$('.cb-mfg-support-required-msg').remove();

	if(mfg_support != 0 && support_start_date == '')
	{
		$('.cb-mfg-support *[name="Mod0InlineEdit"]').prop('disabled', true);
		$('.cb-mfg-support *[name="Mod0InlineEdit"]').addClass('cb-disabled');

		$('.cb-mfg-support *[name="InlineEditSupport_Fixed_Rebate_Date"]').closest('td').append(`<div class="text-center text-danger cb-mfg-support-required-msg">${exclamationIcon} Required</div>`);
	}

	if( mfg_support != 0 && notes_count == 0 )
	{
		$('.cb-mfg-support *[name="Mod0InlineEdit"]').prop('disabled', true);
		$('.cb-mfg-support *[name="Mod0InlineEdit"]').addClass('cb-disabled');

		$('.cb-mfg-support .notesbtn').closest('td').append(`<div class="text-center text-danger cb-mfg-support-required-msg">${exclamationIcon} Required Notes </div>`);
	}
});

$(document).on('mousemove', '.cb-mfg-support', function(){

	var mfg_support = Number( $('.cb-mfg-support *[name="InlineEditMFG_Support"]').val() );
	mfg_support = isNaN(mfg_support) ? 0 : mfg_support;

	var notes_count = Number($('.cb-mfg-support .notesbtn').attr('data-notescount') || '');

	$('.cb-mfg-support *[name="Mod0InlineEdit"]').prop('disabled', false);
	$('.cb-mfg-support *[name="Mod0InlineEdit"]').removeClass('cb-disabled');

	$('.cb-mfg-support-required-msg').remove();
	
	if( mfg_support != 0 && notes_count == 0 )
	{
		$('.cb-mfg-support *[name="Mod0InlineEdit"]').prop('disabled', true);
		$('.cb-mfg-support *[name="Mod0InlineEdit"]').addClass('cb-disabled');

		$('.cb-mfg-support .notesbtn').closest('td').append('<div class="text-center text-danger cb-mfg-support-required-msg">' + exclamationIcon + ' Required Notes</div>');
	}
});

$(document).on('keyup', changeColorInputWithValues.join(', '), function(){
    colorInputRed(this);
});

// highlight Monthly Logic ICS Fees when NCS GP is < 31%
var timer_e6fa8ea67191406f98e4 = setInterval(() => {

	var ncs_gp = $('.cb-form-fields[data-appkey*="e6fa8ea67191406f98e4"] .cb-ncs-gp');
	var monthly_logic_ics_fees = $('*[action*="51ba494d753f49b0a82e"] .participation[data-investmentid="4"]');

	if(ncs_gp.val() && monthly_logic_ics_fees)
	{
		if(Number(ncs_gp.val()) < 0.31)
		{
			colorInputRed(monthly_logic_ics_fees);
		}

		clearInterval(timer_e6fa8ea67191406f98e4);
	}
}, 1000);