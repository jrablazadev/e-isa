/*
	this is a shared js file in the ff. php files:
	shared/log1c-fee-summary.php
	shared/mfr-fee-summary.php
*/

let isa_status_id = 0;
let is_isa_team = 0;
let multiple_subs_accts = '';
let report_loaded = 0;
let isa_details_loaded = 0;
let apply_btn_container = document.querySelector('.cb-btn-contaier')

const display_apply_changes_btn = () => {
	apply_btn_container.innerHTML = `<button type="button" class="btn btn-sm btn-info" onclick="apply_changes_page7()">Apply changes to Page 7</button>`
}

const apply_changes_page7 = () => {
	var pathname = window.location.pathname;
	var sales_text = pathname.includes('mfr-fee') ? 'Computer Support Sales Price' : 'Log1c Sale Price';
	var file_name = window.location.pathname.split('/').pop().split('.').shift();


	// added validation upon button click
	Swal.fire({
		title: "Are you sure?",
		html: `The value on the <strong>${sales_text}</strong> column will update the <strong>Customer Participation</strong> values on page 7.`,
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Confirm",
	}).then((result) => {
		if (result.isConfirmed) {
			var page_origin = getUrlVars()['page_origin'] || '';
			let redir_url = `${globalDataPagePrefix}831251ee9f054232905a?ISA_ID=${isa_id}&page_origin=${page_origin}&subsc_type=${file_name}`;
			// let redir_url = `${globalDataPagePrefix}831251ee9f054232905a?ISA_ID=${isa_id}&page_origin=${page_origin}`;
			if(page_origin == 'manufacturer-color-subscription-hub' || page_origin == 'log1c-support-hub'){
				// Open a new tab
				let newTab = window.open(redir_url, "_blank");
				if (newTab) {
					setTimeout(() => {
						window.focus(); // Bring the original tab back to focus
					}, 100)// Bring the original window back into focus
						try {
							if (newTab.document.readyState === "complete") {
								Swal.fire({
									//title: "Success!",
									html: `Applied changes to Page 7 successfully!`,
									icon: "success",
									showCancelButton: false,
									confirmButtonColor: "#3085d6",
									cancelButtonColor: "#d33",
									confirmButtonText: "Close",
								})
							}
						} catch (e) {
							console.error("Cross-origin restriction prevents checking tab status.");
						}

				}		
			}else{
				window.parent.location.href = redir_url;
			}
		}
	})
}
					
const validation_subs = (subs_startDate,subs_cancelDate) => {
	var subs_startDate  = ($('*[action*="171bb4baaf5a49b68b5e"]').length > 0 ) ? $('*[action*="171bb4baaf5a49b68b5e"] input[name$="Subscription_Start_Date"]') : $('*[action*="fe071b40a6c14593929a"] input[name$="Subscription_Start_Date"]')
	var subs_cancelDate = ($('*[action*="171bb4baaf5a49b68b5e"]').length > 0 ) ? $('*[action*="171bb4baaf5a49b68b5e"] input[name$="Subscription_Cancellation_Date"]') : $('*[action*="fe071b40a6c14593929a"] input[name$="Subscription_Cancellation_Date"]')
	var d_startDate = (subs_startDate.val()!='')? new Date(subs_startDate.val()) : new Date('1900-01-01')
	var d_cancelDate = (subs_cancelDate.val()!='')? new Date(subs_cancelDate.val()) : new Date('1900-01-01')
	
	if(d_cancelDate <= d_startDate && subs_cancelDate.val() != ''){
	 alert('Subscription Cancellation Date should be greater than Subscription Start Date')
	 subs_cancelDate.val('')
	}
	
	return false;
}
const callMasking = (elem) => {
	const config_disc = {
		alias: 'numeric',
		min: 0, // Minimum value allowed
		max: 100, // Maximum value allowed
		digits: 1, // Allow only one decimal place
		placeholder: "", // No placeholder character
		radixPoint: ".", // Decimal separator
		allowMinus: false, // Disallow negative values
	}
	Inputmask(config_disc).mask(elem);
}

const refreshDP = (appKey) => {
	for (var key in window.dataPageManagerObj.dataPages)
	{
		if ((key.toLowerCase()).search(appKey.toLowerCase()) != -1)
		{
			console.log('refresh -> ' + appKey);
			window.dataPageManagerObj.dataPages[key].refresh();
		}
	}
}

const deployDP = (elem, dataPageSrc) => {
	var dataPageScript = document.createElement("script");
	dataPageScript.src = dataPageSrc;
	document.querySelector(elem).appendChild(dataPageScript);
}

const getUrlVars = () => {
	var vars = [],
		hash;
	var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

	for (var i = 0; i < hashes.length; i++) {
		hash = hashes[i].split('=');
		hash[1] = decodeURIComponent(hash[1]); // Replace unescape with decodeURIComponent
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}

	return vars;
}

const isa_details_init = () => {
	isa_status_id = $('.isa-status-id').val();
	is_isa_team = $('.is-isa-team').val();
	

	msg_multiple_accts();

	if(report_loaded == 0)
	{
		console.log('location: ', window.location.href )
	
		if (window.location.href.indexOf("shared/log1c-fee-summary.php") > -1)
		{
			if($('form[action*="fe071b40a6c14593929a"]').length == 0){
				deployDP('.cb-container', `${globalDataPagePrefix}fe071b40a6c14593929a/emb`);
			}
			
		}

		if (window.location.href.indexOf("shared/mfr-fee-summary.php") > -1)
		{
			if($('form[action*="171bb4baaf5a49b68b5e"]').length == 0){
			deployDP('.cb-container', `${globalDataPagePrefix}171bb4baaf5a49b68b5e/emb`);
			}
		}
	}
}

const msg_multiple_accts = () => {
	$('.cb-alert').html('');
	$('.cb-alert').addClass('d-none');

	// added validation
	if ($('.multiple-accts-log1c').length > 0 || $('.multiple-accts-mfr').length > 0) {
		multiple_subs_accts = (window.location.href.indexOf("shared/log1c-fee-summary.php") > -1) ? $('.multiple-accts-log1c').val() : $('.multiple-accts-mfr').val();
		multiple_subs_accts = multiple_subs_accts.substring(2, multiple_subs_accts.length);
	
		if(multiple_subs_accts != '')
		{	
			const accts = multiple_subs_accts.split('||');
	
			$('.cb-alert').html('');
			$('.cb-alert').removeClass('d-none');
	
			for (let i = 0; i < accts.length; i++)
			{
				const [acct, count] = accts[i].split('|');
	
				if(acct == '' || Number(count) == 0)
				{
					continue;
				}
	
				$('.cb-alert').append(`
					<div>There are ${count} subscriptions on account ${acct}.</div>
				`);
			}
		}
	}

	
}

const report_init = (appkey, isa_id) => {
	window.parent.$('#jc-iframe').css({ 'height' : $(window.parent).height() });

	// validation to prevent users to edit when the it is already in the deal directory and the user is isa team
	if(Number(isa_status_id) == 29 && Number(is_isa_team) == 0)
	{
		var form = $(`form[action*="${appkey}"]`);
		//totally removed innerHTML to avoid modifying elements via dev tools
		form.find('*[data-cb-name="inlineaddrow"]').html('');
		form.find('*[data-cb-name="InlineDelete"]').parent().html('');
		form.find('*[data-cb-name="GridEditButton"]').parent().html('');
		$('.hub_note_NF28696').not('.d-none').addClass('d-none');

	} else {
		display_apply_changes_btn();
		$('.hub_note_NF28696').removeClass('d-none');
		//override hidden field workaround due to production issue Bug #9275
		var isaID = document.querySelector(`form[action*="${appkey}"] input[name="InlineAddISA_ID"]`)
		if(isaID){
			isaID.value = isa_id;
			var event = new Event("input")
			isaID.dispatchEvent(event)
		}
	}
}

const new_ncs_cost = (appkey) => {
	var ncsCostContainer = document.querySelector(`form[action*="${appkey}"] [data-cb-aggregation="Aggregate1"] td:nth-child(3)`)
	var newSum = document.querySelector(`form[action*="${appkey}"] tr.cbResultSetTotalsRow[data-cb-aggregation="Aggregate2"]`)
	var ncsCost = document.querySelector(`form[action*="${appkey}"] [data-cb-aggregation="Aggregate2"] td:nth-child(2)`).innerHTML
	newSum.style.cssText = "display: none;"
	ncsCostContainer.innerHTML = ncsCost
	ncsCostContainer.classList += ' text-right'
	
}

const urlVars = getUrlVars();
const isa_id = urlVars.ISA_ID || '';

document.addEventListener('DataPageReady', function(event) {

	if (
		event.detail.appKey.includes('fe071b40a6c14593929a') //Log1c Subscription Fee Summary
		|| event.detail.appKey.includes('171bb4baaf5a49b68b5e') //Manufacturer Subscription Fee Summary
	)
	{
		report_init(event.detail.appKey, isa_id);
		new_ncs_cost(event.detail.appKey)
		report_loaded++;
	}

	if (event.detail.appKey.includes('4e131507b75047b990ed'))
	{
		isa_details_init();
	}
});

$(document).on('focus', '*[action*="fe071b40a6c14593929a"] *[name$="Log1c_Cx_Disc"]', function(){
	callMasking(this);
});

$(document).on('focus', '*[action*="171bb4baaf5a49b68b5e"] *[name$="Color_Software_Discount"]', function(){
	callMasking(this);
});


window.onload = function(){
	if (typeof(window.cbAjaxEventHandler) !== "undefined"){

		window.cbAjaxEventHandler.addEventListener('DeleteRow', function(v_event){
			if (v_event){
				refreshDP('4e131507b75047b990ed');
			}
		});

		window.cbAjaxEventHandler.addEventListener('SwitchMode', function(v_event){
			if (v_event){
				refreshDP('4e131507b75047b990ed');
				setInterval(function() {
					validation_subs();
				}, 500);
			}
		});
	}
};