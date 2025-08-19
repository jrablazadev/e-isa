document.addEventListener('DataPageReady', (event) => { // investment table
	if((event.detail.appKey).toLowerCase().includes(('51ba494d753f49b0a82e').toLowerCase()))
	{
		custom_finalized_asset_form();	
		compute_prebate_asset();
		compute_equipment_asset();

		var params = getUrlVars();
		var isa_id = params.ISA_ID || '';

		deployDP_v2('entryraw-container', 'd45ec1ea789448e29b84', `?ISA_ID=${isa_id}`);
	}
});

let custom_form_loaded = 0;

const custom_finalized_asset_form = () => {

	if(custom_form_loaded)
	{
		return false;
	}

	var form = $('form[action*="51ba494d753f49b0a82e"]');
	var last_field = form.find('input[data-investmentid="26"]');
	var tbody = last_field.closest('tbody');

	tbody.append(`
		<tr class="finalized-asset-row d-none">>
			<td colspan="8">
				<hr>
			</td>
		</tr>
		<tr class="finalized-asset-row d-none">>
			<td colspan="3"></td>
			<td class="text-center">NCS <br/> Calculated <br/> Cost</td>
			<td class="text-center">Finalized Value <br/> for Asset <br/> Creation <input type="checkbox" class="finalized-checkbox"></td>
		</tr>
		<tr class="finalized-asset-row d-none">
			<td class="text-right">Total Prebate to <br/> be shown on Contract</td>
			<td class="text-right"><input type="text" class="total-bdf" readonly></td>
			<td class="text-right">Total Prebate Asset</td>
			<td class="text-center"><input type="text" class="prebate-asset-calc" readonly></td>
			<td class="text-center"><input type="text" class="prebate-asset-final"></td>
		</tr>
		<tr class="finalized-asset-row d-none">
			<td colspan="2"></td>
			<td class="text-right">Total Equipment Asset</td>
			<td class="text-center"><input type="text" class="equipment-asset-calc" readonly></td>
			<td class="text-center"><input type="text" class="equipment-asset-final"></td>
		</tr>
	`);

	custom_form_loaded = 1;
}

const compute_prebate_asset = () => {

	var form = $('form[action*="51ba494d753f49b0a82e"]');

	let investment_ids = [
		'7' // Front loaded Equipment Fund
		, '8' // Check Issued by NCS
		, '43' // Check Issued by Manufacturer
		, '10' // Journal Adjustment Request/$ Amount
	];

	var total = 0;

	$.each(investment_ids, function(i, val){

		var field = form.find(`.participation[data-investmentid="${val}"]`);

		total += Number(field.val());

		field.addClass('prebate-asset');
	});

	$('.prebate-asset-calc').val(total);

	if($('.finalized-checkbox').prop('checked') == false)
	{
		$('.prebate-asset-final').val(total);
	}

	cascade_finalized_values();
};

const compute_equipment_asset = () => {

	var form = $('form[action*="51ba494d753f49b0a82e"]');

	let investment_ids = [
		'11' // Mixing Machine
		, '12'  // Shop Equipment
		, '13' // Non LB Inventory (Toners)
		, '14' // Computer System
		, '45' // Logic Set Up Expenses
		, '15' // Color Camera
		, '16' // Color Box
		, '18' // Set up Supplies
	];

	var total = 0;

	$.each(investment_ids, function(i, val){
		var field = form.find(`.participation[data-investmentid="${val}"]`);

		total += Number(field.val());

		field.addClass('equipment-asset');
	});

	// Fixes for I-26006
	// round to 2 decimal places
	var rTotal = total.toFixed(2);
	$('.equipment-asset-calc').val(rTotal);

	if($('.finalized-checkbox').prop('checked') == false)
	{
		$('.equipment-asset-final').val(rTotal);
	}

	cascade_finalized_values();
};

const cascade_finalized_values = () => {

	let prebate_asset_final = $('.prebate-asset-final').val();
	let equipment_asset_final = $('.equipment-asset-final').val();

	var form = $('form[action*="d45ec1ea789448e29b84"]');

	form.find('*[name="InsertRecordPrebate_Asset"]').val(prebate_asset_final);
	form.find('*[name="InsertRecordEquipment_Asset"]').val(equipment_asset_final);
};

$(document).on('keyup', '.prebate-asset', compute_prebate_asset);
$(document).on('keyup', '.equipment-asset', compute_equipment_asset);

$(document).on('change', '.prebate-asset-final, .equipment-asset-final', () => {
	cascade_finalized_values();

	$('.finalized-checkbox').prop('checked', true);

	$('form[action*="d45ec1ea789448e29b84"] *[name="InsertRecordFinalized_Asset"]').val(1);
});

$(document).on('click', '.finalized-checkbox', function(){

	var editable = $(`form[action*="d45ec1ea789448e29b84"] *[name="cbParamVirtual1"]`);

	if(Number(editable.val()) == 0|| window.location.href.indexOf("/user-group/") < 0)
	{
		return false;
	}

	var finalized_checkbox = $('form[action*="d45ec1ea789448e29b84"] *[name="InsertRecordFinalized_Asset"]');

	if($(this).prop('checked'))
	{
		cascade_finalized_values();

		finalized_checkbox.val(1);
	}
	else
	{
		compute_prebate_asset();
		compute_equipment_asset();

		cascade_finalized_values();

		finalized_checkbox.val(0);
	}
});

var timer = setInterval(() => {

	var form = $(`form[action*="d45ec1ea789448e29b84"]`);
	var finalized = form.find('*[name="InsertRecordFinalized_Asset"]').val();
	var prebate_asset = form.find('*[name="InsertRecordPrebate_Asset"]').val();
	var equipment_asset = form.find('*[name="InsertRecordEquipment_Asset"]').val();

	// console.log(finalized);
	// console.log(prebate_asset);
	// console.log(equipment_asset);

	if(finalized > '' && prebate_asset > '' && equipment_asset > '')
	{
		if(Number(finalized))
		{
			$('.prebate-asset-final').val(prebate_asset);
			$('.equipment-asset-final').val(equipment_asset);
			$('.finalized-checkbox').prop('checked', true);
		}

		$('.finalized-asset-row').removeClass('d-none');

		clearInterval(timer);
	}

	// console.log(1);

	
}, 1000);

$(document).on('change', 'form[action*="d45ec1ea789448e29b84"] *[name="cbParamVirtual1"]', () => {

	var form = $(`form[action*="d45ec1ea789448e29b84"]`);
	var editable = form.find('*[name="cbParamVirtual1"]');

	// console.log(Number(editable.val()));

	
	console.log({
		'editable' : Number(editable.val()),
		'url check' : window.location.href.indexOf("/user-group/")
	});

	// not editable
	if(
		Number(editable.val()) == 0 // still editable (not yet passed execution)
		|| window.location.href.indexOf("/user-group/") < 0) // not isa team
	{
		$('.prebate-asset-final').prop('readonly', true);
		$('.equipment-asset-final').prop('readonly', true);
		$('.finalized-checkbox').addClass('disabled');
	}

	// if(Number(editable.val()) == 0)
	// {
	// 	$('.prebate-asset-final').prop('readonly', true);
	// 	$('.equipment-asset-final').prop('readonly', true);
	// 	$('.finalized-checkbox').addClass('disabled');
	// }
});

// check if agreement type = 
$(document).on('change', 'form[action*="d45ec1ea789448e29b84"] *[name="cbParamVirtual3"]', (e) => {

	var val = e.currentTarget.value;

	if(val == 'Pricing ONLY DEAL - Customer Does not have a Contract')
	{
		var form = $('form[action*="51ba494d753f49b0a82e"]')

		form.find('.total-bdf').closest('tr').hide();
		form.find('*[data-cb-name="header"] th:nth-child(3)').hide();
		form.find('*[data-cb-name="data"] td:nth-child(3)').hide();
	}
});
