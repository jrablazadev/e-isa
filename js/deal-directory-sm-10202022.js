var caretup = '<i class="fas fa-caret-up" style="color:green;font-size:35px;"></i>';
var caretdown = '<i class="fas fa-caret-down" style="color:red;font-size:35px;"></i>';
var dash = '<i class="fas fa-minus" style="font-size:35px;"></i>';

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
		sales_trend_icon();


		// float_header_and_scrollbar();
	}
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
	$('#cb-deal-directory *[data-cb-name="data"] td:nth-child(5)').each(function () {
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
	$('#cb-deal-directory *[data-cb-name="data"] td:nth-child(6)').each(function () {
		if ($(this).attr('data-has-link') == 'Y') {
			return true;
		}

		var total = ($(this).html() || '').toString().trim();
		var customer_id = ($(this).closest('tr').find('.cb-cog').attr('data-customer-id') || '');

		$(this).html('<a href="https://caspio.thenetwork-crm.com/dp/25d55000afcb918573cf4edcbf14?Customer_ID=' + customer_id + '" target="_blank">' + total + '</a>');

		$(this).attr('data-has-link', 'Y');
	});

}

function sales_trend_icon() {
	$('#cb-deal-directory *[data-cb-name="data"] td:nth-child(9)').each(function () {

		if ($(this).attr('data-has-icon') == 'Y') {
			return true;
		}

		var percentage = ($(this).html() || '').toString().trim();
		console.log("a", percentage)
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
