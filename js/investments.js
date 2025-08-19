function deal_total_css()
{
	$('.dealtotal').each(function(){
		var investment_id = Number($(this).attr('data-investmentid'));
		var value = Number($(this).attr('data-value'));
		
		// console.log(investment_id);
		
		switch(investment_id)
		{
			case 1:
			case 2:
			case 5:
			case 6:
			case 19:
			case 22:
			case 29:
			case 20:
			case 47:
				$(this).closest('tr').addClass('bgblack');
				break;
		}
		
		
		switch(investment_id)
		{
			case 1:
			case 3:
			case 4:
			case 5:
			case 43:
			case 45:
				format_amount(this);
				break;
				
			case 39:
				$(this).html(parseInt(value));
				break;
				
			case 48:
			case 49:
				format_percentage(this);
				break;

			default:
				if(investment_id >= 7 && investment_id <= 28 && investment_id != 20)
				{
					format_amount(this);
				}
				
				if(investment_id >= 33 && investment_id <= 38 || investment_id == 40)
				{
					format_percentage(this);
				}
		}
	});
}

function monthly_amounts_css()
{
	$('.monthlyamounts').each(function(){
		var investment_id = Number($(this).attr('data-investmentid'));
		var value = Number($(this).attr('data-value'));
		

		switch(investment_id)
		{
			case 1:
			case 3:
			case 4:
			case 5:
			case 30:
			case 40:
			case 43:
			case 46:
			case 45:
			case 48:
			case 49:
				format_amount(this);
				break;

			default:
				if(((investment_id >= 7 && investment_id <= 28) || (investment_id >= 30 && investment_id <= 38))  && investment_id != 20 )
				{
					format_amount(this);
				}
		}
	});
}

function qty_css()
{
	$('.qty').each(function(){
		var investment_id = Number($(this).attr('data-investmentid'));
		var value = Number($(this).attr('data-value'));
		
		switch(investment_id)
		{
			// case 3:
			// case 4:
			case 36:
				format_amount(this);
				break;
				
			case 3:
			case 4:
			case 11:
			case 12:
			case 13:
			case 14:
			case 45:
			case 15:
			case 16:
			case 17:
			case 18:
			// case 36:
				$(this).html(value);
				break;
			
			case 39:
			case 40:
			case 43:
			case 46:
			case 48:
			case 49:
				$(this).closest('td').addClass('bgblack');
				break;
				
			case 37:
				var text = "No upfront Investment";

				// if(value > 0)
				// {
					text = value.toFixed(2).toString() + "% is Upfront Investment";
				// }
			
				$(this).html(text);
				break;
			
			case 38:
				
				var text = "No Transaction Discount";
			
				// if(value > 0)
				// {
					text = value.toFixed(2).toString() + "% is Transaction Discount";
				// }
				
				$(this).html(text);
				break;
			
			default:
				if((investment_id >= 7 && investment_id <= 10) || (investment_id >= 23 && investment_id <= 27) || (investment_id >= 30 && investment_id <= 35))
				{
					$(this).closest('td').addClass('bgblack');
				}
				
				if((investment_id >= 11 && investment_id <= 18))
				{
					format_amount(this);
				}
		}
	});
}

function participation_css()
{
	$('.participation').each(function(){
		var investment_id = Number($(this).attr('data-investmentid'));
		var value = Number($(this).attr('data-value'));
		
		switch(investment_id)
		{
			case 1:
			case 3:
			case 4:
			case 5:
			case 22:
			case 24:
			case 25:
			case 20:
			case 28:
			case 43:
			case 23:	
			case 47:	
			case 45:	
				format_amount(this);
				break;
			
			case 2:
			case 6:
				format_percentage(this);
				break;
				
			case 19:
				format_amount(this);
				$(this).closest('td').addClass('bgblack');
				break;
				
			case 21:
			case 46:
			case 48:
			case 49:
				$(this).closest('td').addClass('bgblack');
				break;
				
			case 26:
				value = value / 100;
				$(this).attr('data-value', value);
				format_percentage(this);
				break;
				
			case 27:
			case 29:
				format_percentage(this);
				break;
			
			default:
				if((investment_id >= 7 && investment_id <= 18))
				{
					format_amount(this);
				}
				
				if((investment_id >= 30 && investment_id <= 40))
				{
					$(this).closest('td').addClass('bgblack');
				}
				
				// if((investment_id >= 11 && investment_id <= 18))
				// {
					// format_amount(this);
				// }
		}
	});
}

function mfrparticipation_css()
{
	$('.mfrparticipation').each(function(){
		var investment_id = Number($(this).attr('data-investmentid'));
		var value = Number($(this).attr('data-value'));
		
		switch(investment_id)
		{
			case 1:
			case 3:
			case 4:
			case 5:
			case 22:
			
			case 25:
			case 28:
			case 20:
			case 43:
			case 47:
			case 45:
				format_amount(this);
				break;
			
			// case 22:
			// case 24:
			// case 25:
			// case 28:
				// format_amount(this);
				// break;
			
			case 2:
			case 6:
			case 29:
				format_percentage(this);
				break;
				
			case 21:
			case 24:
			case 26:
			case 27:
			case 23:
			case 46:
			case 48:
			case 49:
				// format_amount(this);
				$(this).closest('td').addClass('bgblack');
				break;
				
			default:
				if((investment_id >= 7 && investment_id <= 18))
				{
					format_amount(this);
				}
				
				if((investment_id >= 30 && investment_id <= 40))
				{
					$(this).closest('td').addClass('bgblack');
				}
			
				
		}
	});
}

function customerparticipation_css()
{
	$('.customerparticipation').each(function(){
		var investment_id = Number($(this).attr('data-investmentid'));
		var value = Number($(this).attr('data-value'));
		
		switch(investment_id)
		{
			case 1:
			case 3:
			case 4:
			case 5:
			// case 22:
			// case 23:
			// case 25:
			case 28:
			case 45:
				format_amount(this);
				break;
			
			// case 22:
			// case 24:
			// case 25:
			// case 28:
				// format_amount(this);
				// break;
			
			case 2:
			case 6:
			case 29:
				format_percentage(this);
				break;
			
			case 43:
			case 46:
			case 48:
			case 49:
				$(this).closest('td').addClass('bgblack');
				break;
			
			// case 21:
			// case 22:
			// case 23:
			// case 26:
			// case 27:
				// format_amount(this);
				// $(this).closest('td').addClass('bgblack');
				// break;
				
			default:
				if((investment_id >= 7 && investment_id <= 10))
				{
					$(this).closest('td').addClass('bgblack');
				}
				
				if((investment_id >= 11 && investment_id <= 18))
				{
					format_amount(this);
				}
				
				if((investment_id >= 19 && investment_id <= 27) || (investment_id >= 30 && investment_id <= 40))
				{
					$(this).closest('td').addClass('bgblack');
				}
			
				
		}
	});
}

function format_amount(elem)
{
	var value = Number($(elem).attr('data-value'));
	$(elem).autoNumeric('init', {mDec : 2, vMin : -99999999}).autoNumeric('set', value);
	
	if(($(elem).html()).search('-') >= 0)
	{
		$(elem).html('($' + $(elem).html().replace('-', '') + ')');
	}
	else
	{
		$(elem).html('$' + $(elem).html());
	}
}

function format_percentage(elem)
{
	var value = Number($(elem).attr('data-value'));
	value = ((value * 100).toFixed(2)).toString() + '%';
	$(elem).html(value);
}


// Description: Append 'Comcept Commission Rate from Invoice Price' in section9 below 'Commission Rate'
// Last update: Khurt Russel
// Laste update date: June 11 2020
function appendInvoicePrice() 
{
	var v1 = setInterval(function () {
		if (document.querySelector("input[id^='EditRecordCalculated_Field_7']")) {
		
			var amount = document.querySelector("input[id^='EditRecordCalculated_Field_7']").previousSibling.innerHTML
			var percent = document.querySelector("input[id^='EditRecordCalculated_Field_4']").previousSibling.innerHTML

			var items = $("#investments-container table[id^='cbTable'] tr")
			var items_last = items[items.length-1];

			var new_tr = document.createElement("tr")
			new_tr.classList.add("cbResultSetDataRow")
			new_tr.classList.add("cbResultSetEvenRow")
			new_tr.setAttribute("data-cb-name", "data")

			var td1 = document.createElement("td")
			td1.classList.add("cbResultSetData")
			td1.classList.add("cbResultSetTableCell")
			td1.innerHTML = "Comcept Commission Rate from Invoice Price"
			new_tr.append(td1)

			var td2 = document.createElement("td")
			td2.classList.add("cbResultSetData")
			td2.classList.add("cbResultSetTableCell")
			td2.classList.add("isright")
			td2.innerHTML = (percent * 100).toFixed(2) + "%"
			new_tr.append(td2)

			var td3 = document.createElement("td")
			td3.classList.add("cbResultSetData")
			td3.classList.add("cbResultSetTableCell")
			td3.classList.add("isright")
			td3.innerHTML = amount
			new_tr.append(td3)

			var td4 = document.createElement("td")
			td4.classList.add("cbResultSetData")
			td4.classList.add("cbResultSetTableCell")
			td4.classList.add("bgblack")
			new_tr.append(td4)

			var td5 = document.createElement("td")
			td5.classList.add("cbResultSetData")
			td5.classList.add("cbResultSetTableCell")
			td5.classList.add("bgblack")
			new_tr.append(td5)
			
			var td6 = document.createElement("td")
			td6.classList.add("cbResultSetData")
			td6.classList.add("cbResultSetTableCell")
			td6.classList.add("bgblack")
			new_tr.append(td6)
			
			var td7 = document.createElement("td")
			td7.classList.add("cbResultSetData")
			td7.classList.add("cbResultSetTableCell")
			td7.classList.add("bgblack")
			new_tr.append(td7)

			items_last.parentNode.appendChild(new_tr)

			clearInterval(v1)
		} 
		
	}, 500)
}