var caretup = '<i class="fas fa-caret-up" style="color:green;font-size:35px;"></i>';
var caretdown = '<i class="fas fa-caret-down" style="color:red;font-size:35px;"></i>';
var dash = '<i class="fas fa-minus" style="font-size:35px;"></i>';

// --- for % Complete column ---
var dataValue = '<div class="progress mx-2">';
var progressLeft = '<span class="progress-left">';
var leftProgressBar = '<span class="progress-bar border-primary"></span>'
var progressRight = '<span class="progress-right">';
var rightProgressBar = '<span class="progress-bar border-primary"></span>'
var progressValue = '<div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">'
var progressPercent = '<div class="progress-percent">'


// --- for Deal Tracking Score ---
var circleContainer = '<div class="circle-container">'
var greenScore = '<div class="rounded-circle" style="background-color: #FFFFFF; border: 8px solid #93c47d; width: 70px; height: 70px; display: flex; justify-content: center; align-items: center">';
var yellowScore = '<div class="rounded-circle" style="background-color: #FFFFFF; border: 8px solid #ffd966; width: 70px; height: 70px; display: flex; justify-content: center; align-items: center">';
var redScore = '<div class="rounded-circle" style="background-color: #FFFFFF; border: 8px solid #e06666; width: 70px; height: 70px; display: flex; justify-content: center; align-items: center">';


$('#nav-dd').addClass('active');

document.addEventListener('DataPageReady', function (event) {
	if (
		event.detail.appKey.includes('25d55000ba77fd397d0447618aa9') // sm - deal directory
		|| event.detail.appKey.includes('25d550004a8f0b79a16c4b589987') // sm - deal directory
	) {
		// var sales_trend_col = $('*[data-cb-name="data"] td:nth-child(8)');
		// var total_amp_col = $('*[data-cb-name="data"] td:nth-child(5)');

		// return false;

		total_amp_link();
		my_amp_link();
		percent_complete_graph();
		deal_tracking_score();
		sales_trend_icon();
		actual_gp_link()


		// float_header_and_scrollbar();
	}
	// center text when no records found
	$('*[class^="cbResultSetRecordMessage"]').addClass('text-center pt-3');

});

document.addEventListener("DataPageReady", function (e) {
	if (
		e.detail.appKey.includes("a61c415ef11d4f71b5f0") ||
		e.detail.appKey.includes("ed645c249cf748e5b2ba")
	) {
		initMultiSelect('*[name="cbParamVirtual10"]', '*[name="cbParamVirtual13"]');
		$('.cb-search').show();
	}

	// Format Actual GP Percentage
	if (document.querySelectorAll("#actual-gp-percentage").length) {
		var actual_gp_percentage = document.querySelectorAll("#actual-gp-percentage")
		for (let index = 0; index < actual_gp_percentage.length; index++) {
			const element = actual_gp_percentage[index];
			element.innerText = parseFloat(element.innerText).toFixed(1)+"%"
		}
	}

})

function total_amp_link() {
	$('#cb-deal-directory *[data-cb-name="data"] td:nth-child(7)').each(function () {
		if ($(this).attr('data-has-link') == 'Y') {
			return true;
		}

		// console.log( $(this).html() );

		var total = ($(this).html() || '').toString().trim();
		var customer_id = ($(this).closest('tr').find('.cb-cog').attr('data-customer-id') || '');

		$(this).html('<a href="https://caspio.thenetwork-crm.com/dp/25d55000f336c6057fbd4dc5b678?Customer_ID=' + customer_id + '" target="_blank">' + total + '</a>');

		$(this).attr('data-has-link', 'Y');
	});

}

function my_amp_link() {
	$('#cb-deal-directory *[data-cb-name="data"] td:nth-child(8)').each(function () {
		if ($(this).attr('data-has-link') == 'Y') {
			return true;
		}

		var total = ($(this).html() || '').toString().trim();
		var customer_id = ($(this).closest('tr').find('.cb-cog').attr('data-customer-id') || '');

		$(this).html('<a href="https://caspio.thenetwork-crm.com/dp/25d55000afcb918573cf4edcbf14?Customer_ID=' + customer_id + '" target="_blank">' + total + '</a>');

		$(this).attr('data-has-link', 'Y');
	});

}

// --- for % Complete column ---
function percent_complete_graph(){
	$('#cb-deal-directory *[data-cb-name="data"] td:nth-child(10)').each(function () {

		var rawNumber = $(this).html() || '';
		if (rawNumber === "&nbsp;" ){
			rawNumber = "0.0";
		}

		var percentage = (rawNumber*100).toFixed(1);
		if (percentage == 0){
			percentage = "0.0";
		}

		$(this).html(
			dataValue
			+ progressLeft
			+ leftProgressBar
			+ '</span>'
			+ progressRight
			+ rightProgressBar
			+ '</span>'
			+ progressValue
			+ progressPercent
			+ percentage
			+ '%</div> </div> </div>'
		);

		var left = $(this).find('.progress-left .progress-bar');
		var right = $(this).find('.progress-right .progress-bar');

		$(this).attr('onclick', 'open_mpo_detail_report(this)');

		if (percentage > 0) {
			if (percentage <= 49.9) {
			  if(percentage >=0 && percentage <= 9.9){
				return right.css('transform', 'rotate(' + percentageToDegrees(0) + 'deg)')
			  }

			  if(percentage >=10 && percentage <= 19.9){
				return right.css('transform', 'rotate(' + percentageToDegrees(10) + 'deg)')
			  }

			  if(percentage >=20 && percentage <= 29.9){
				return right.css('transform', 'rotate(' + percentageToDegrees(20) + 'deg)')
			  }

			  if(percentage >=30 && percentage <= 39.9){
				return right.css('transform', 'rotate(' + percentageToDegrees(30) + 'deg)')
			  }

			  if(percentage >= 40 && percentage <= 49.9){
				return right.css('transform', 'rotate(' + percentageToDegrees(40) + 'deg)')
			  }


			} else {
			  right.css('transform', 'rotate(180deg)')
			   if(percentage >= 50 && percentage <= 59.9){
				   return left.css('transform', 'rotate(' + percentageToDegrees(50 - 50) + 'deg)')
			  }

			  if(percentage >= 60 && percentage <= 69.9){
				   return left.css('transform', 'rotate(' + percentageToDegrees(60 - 50) + 'deg)')
			  }

			  if(percentage >= 70 && percentage <= 79.9){
				   return left.css('transform', 'rotate(' + percentageToDegrees(70 - 50) + 'deg)')
			  }

			  if(percentage >= 80 && percentage <= 89.9){
				   return left.css('transform', 'rotate(' + percentageToDegrees(80 - 50) + 'deg)')
			  }

					  if(percentage >= 90 && percentage <= 99.9){
				   return left.css('transform', 'rotate(' + percentageToDegrees(90 - 50) + 'deg)')
			  }

					  if(percentage >= 100){
				   return left.css('transform', 'rotate(' + percentageToDegrees(100 - 50) + 'deg)')
			  }

			}
		  }

		function percentageToDegrees(percentage) {

			return percentage / 100 * 360

		  }

	})//end of each function
} //end of percent_complete_graph()

// --- for Deal Tracking Score column ---
function deal_tracking_score(){
	$('#cb-deal-directory *[data-cb-name="data"] td:nth-child(11)').each(function () {
		var rawNumber = $(this).html() || '';
		if (rawNumber === "&nbsp;" ){
			rawNumber = "0.0";
		}

		var percentage = (rawNumber*100).toFixed(1);
		if (percentage == 0){
			percentage = "0.0";
		}

		// console.log(percentage);

		//red
		if(percentage <= -10.1) {
			return $(this).html(circleContainer + redScore + percentage + '%</div></div>');
		}

		//green
		if(percentage >= 0) {
			return $(this).html(circleContainer + greenScore + percentage + '%</div></div>');
		}

		//yellow
		if(percentage <= -0.01 ||  percentage >= -10){
			return $(this).html(circleContainer + yellowScore + percentage + '%</div></div>');
		}


	})
}

function sales_trend_icon() {
	$('#cb-deal-directory *[data-cb-name="data"] td:nth-child(12)').each(function () {
		var rawNumber = $(this).html() || '';

		console.log(rawNumber)

		if ($(this).attr('data-has-icon') == 'Y') {
			return true;
		}

		var percentage = ($(this).html() || '').toString().trim();
		// console.log("a", percentage)
		percentage = Number(percentage) * 100;

		if (percentage > 1) {
			$(this).html(caretup + '<div>' + percentage.toFixed(2).toString() + '%</div>');
		}
		else if (percentage < -1.1) {
			$(this).html(caretdown + '<div>' + percentage.toFixed(2).toString() + '%</div>');
		}
		else {
			$(this).html(dash + '<div>' + percentage.toFixed(2).toString() + '%</div>');
		}

		$(this).attr('data-has-icon', 'Y');
	});
}

function open_mpo_detail_report(elem) {
	let row = $(elem).closest('tr');
	let isa_id = row.find('.cb-cog').attr('data-isa-id');

	console.log(isa_id);

	window.open(`https://caspio.thenetwork-crm.com/dp/25d55000d73be61d9bb142c8b3bd?cbResetParam=1&ID=${isa_id}`, '_blank');
}

function actual_gp_link(){
	$('#cb-deal-directory *[data-cb-name="data"] td:nth-child(19)').each(function () {
		if ($(this).attr('data-has-link') == 'Y') {
			return true;
		}

		var percentage = (Number($(this).html())*100).toFixed(1);
		console.log(percentage);
		var isa_id = ($(this).closest('tr').find('.cb-cog').attr('data-isa-id') || '');

		$(this).html('<a href="https://caspio.thenetwork-crm.com/dp/25d55000f55f7f0f540c43efa447?ISA_ID=' + isa_id + '" target="_blank">' + percentage + '%</a>');

		$(this).attr('data-has-link', 'Y');

	})
}


function float_header_and_scrollbar() {
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - floating scroll
	$('#cb-deal-directory table[data-cb-name="cbTable"]').closest('div').addClass('overflow-auto cb-freezeheader');
	$('#cb-deal-directory table[data-cb-name="cbTable"]').closest('div').floatingScroll();

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - freeze header
	$('#cb-deal-directory table[data-cb-name="cbTable"]').closest('div').freezeTable();

	try {
		setTimeout(function () {
			$('.cb-freezeheader').freezeTable('update');
		}, 1000);
	} catch (err) {
		console.log('re-initiate freeze header');
	}
}

function initMultiSelect(virtualElementSelector, selector) {
	$(virtualElementSelector).prop('multiple', true);

	if ($(selector).val()) {
		$(virtualElementSelector).val($(selector).val().split(' OR '));
	} else {
		$(virtualElementSelector).val('');
	};

	$(virtualElementSelector).selectpicker({
		noneSelectedText: '-Any-',
		actionsBox: true,
	});

	$(virtualElementSelector).on('changed.bs.select', function () {
		$(selector).val($(this).val().join(' OR '));
	});
}
