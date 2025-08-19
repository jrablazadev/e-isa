
var autonumericid = 0;

// var timer = setInterval(function(){
	// change_notesBtn_color();
// }, 1000);

document.addEventListener('DataPageReady', function (event) {
	if (event.detail.appKey == '25D5500051ba494d753f49b0a82e')
	{
		$('.qty, .participation, .mfr-participation, .customer-participation').each(function(){
			autonumericid++;
			
			$(this).addClass('autonumeric');
			$(this).attr({ 'id' : 'autonumeric-' + autonumericid });
			$('#autonumeric-' + autonumericid).autoNumeric('init', {mDec : 10, vMin : 0, aSep : '', aPad : false});
		});
		
		change_notesBtn_color();
	}
});

$(document).on('click', '.nextbtn', function(){

	var has_error = false;

	$('input[type="text"]').each(function(){
		if(isNaN(Number(this.value)))
		{
			has_error = true;
			return false;
		}
	});
	
	if(has_error)
	{
		alert('Numeric values only');
		return false;
	}
	
	if(validate_qty() == false)
	{
		return false;
	}
	
	// return false;

	get_values();
});

$(document).on('keyup', '.participation, .mfr-participation', function(){
	change_notesBtn_color();
});

function get_values()
{
	var investment_id = '';
	var qty = '';
	var participation = '';
	var mfr_participation = '';
	var custom_part = '';

	$('.qty').each(function(){                      investment_id       += $(this).attr('data-investmentid').padStart(10, '0') + '|' });
	$('.qty').each(function(){                      qty                 += numeric_padding(this.value) + '|' });
	$('.participation').each(function(){            participation       += numeric_padding(this.value) + '|' });
	$('.mfr-participation').each(function(){        mfr_participation   += numeric_padding(this.value) + '|' });
	$('.customer-participation').each(function(){   custom_part         += numeric_padding(this.value) + '|' });

	$('*[name="InsertRecordInvestment_ID"]').val(investment_id);
	$('*[name="InsertRecordQty"]').val(qty);
	$('*[name="InsertRecordParticipation"]').val(participation);
	$('*[name="InsertRecordMFR_Participation"]').val(mfr_participation);
	$('*[name="InsertRecordCustomer_Participation"]').val(custom_part);

	$('#entryraw-container *[type="submit"]').click();
}

function numeric_padding(str)
{
	str = str.split('.');

	var whole = (str[0] || '').toString();
	var decimal = (str[1] || '').toString();

	whole = whole.padStart(16, '0');
	decimal = decimal.padEnd(10, '0');

	return whole + '.' + decimal;
}

function info_popup(id, title)
{
	$.confirm({
			type : 'secondary',
			columnClass : 'col-md-6 col-md-offset-3',
			icon : '',
			title : title,
			theme : 'material',
			content : '<iframe src="./investments-info.php?ID=' + id + '" onload="iframe_autoresize(this)"></iframe>',
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
			content : '<iframe src="./investments-notes.php?ID=' + id + '" onload="iframe_autoresize(this)"></iframe>',
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
			case 3:
			case 4:
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
					alert('Required Qty for Monthly "' + title + '"');
					output = false;
					return false;
				}
				
				break;
		}
	});
	
	return output;
}

function change_notesBtn_color()
{
	$('.qty').each(function(){
		var investment_id = Number($(this).attr('data-investmentid'));
		var row = $(this).closest('tr');
		// var title = (row.find('td').eq(1).html() || '').toString().trim();
		var notesbtn = row.find('.notesbtn');
		var notescount = Number(notesbtn.attr('data-notescount') || '');
		notescount = isNaN(notescount) ? 0 : notescount;
		
		// console.log(investment_id, notescount);
		
		// if(notescount > 0)
		// {
			// return;
		// }

		switch(investment_id)
		{
			case 12: // Shop Equipment
			case 45: // Logic Set Up Expenses
			case 17: // LB Inventory
			case 13: // Non LB Inventory
			case 18: // Set up Supplies
			case 25: // Fixed Dollar Rebate
			case 10: // Journal Adjustment Requested
			case 7: // Front loaded Equipment Fund
				
				var participation = Number(row.find('.participation').val());
				var mfr_participation = Number(row.find('.mfr-participation').val());
				var qty = Number(row.find('.qty').val());
				
				if(notescount == 0 && (participation > 0 || mfr_participation > 0))
				{
					// console.log(1);
					
					notesbtn.removeClass('btn-primary');
					notesbtn.addClass('btn-danger');
					notesbtn.html('Notes Required');
				}
				else
				{
					// console.log(2);
					
					notesbtn.removeClass('btn-danger');
					notesbtn.addClass('btn-primary');
					notesbtn.html('Notes');
				}
				
				break;
		}
	});
}