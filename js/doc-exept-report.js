document.addEventListener("DataPageReady", function (event) {
	// search dp
	if (event.detail.appKey == "25d55000c736d9fd7ac94c7ba720") {
		highlight_doc_exeption_report();

		initMultiSelect(
			'*[name="cbParamVirtual7"]',
			'*[name="cbParamVirtual9"]'
		);
		initMultiSelect(
			'*[name="cbParamVirtual8"]',
			'*[name="cbParamVirtual10"]'
		);

		$(".dropdown.bootstrap-select.show-tick").addClass("p-0");
		$('*[name="cbParamVirtual7"], *[name="cbParamVirtual8"]')
			.closest("div")
			.find(".btn.dropdown-toggle")
			.css({
				"font-size": "14px",
				padding: "3px 6px",
			});

		$(".cb-search").show();
	}

	// result DP
	if (
		event.detail.appKey == "25d5500019b3877ad27a414e9e23" || // all users
		event.detail.appKey == "25d550009151f78f74d948f8b8be" // dom
	) {
		highlight_doc_exeption_report();
	}
});

function highlight_doc_exeption_report() {
	$('#cb-doc-exep-report tr[data-cb-name="data"]').each(function () {
		var lb_amount = Number(
			$(this).find(".cb-cog").attr("data-lb-amount")
		);
		var lb_attachments = Number(
			$(this).find(".cb-cog").attr("data-lb-attachments")
		);
		var requested_credit_limit = Number(
			$(this)
				.find(".cb-cog")
				.attr("data-requested-credit-limit")
		);
		var credit_app_attachments = Number(
			$(this)
				.find(".cb-cog")
				.attr("data-credit-app-attachments")
		);
		var upfront_cash = Number(
			$(this).find(".cb-cog").attr("data-upfront-cash")
		);
		var w9_attachments = Number(
			$(this).find(".cb-cog").attr("data-w9-attachments")
		);
		var agreement_type = $(this)
			.find(".cb-cog")
			.attr("data-agreement-type");
		var signed_contract_lou_attachments = Number(
			$(this)
				.find(".cb-cog")
				.attr("data-signed-contract-lou-attachments")
		);

		if (lb_amount > 0 && lb_attachments == 0) {
			$(this)
				.children("td")
				.eq(15)
				.addClass(
					"cb-red font-weight-bold alert-warning"
				); // LB Attachment Count
		}

		if (requested_credit_limit > 0 && credit_app_attachments == 0) {
			$(this)
				.children("td")
				.eq(16)
				.addClass(
					"cb-red font-weight-bold alert-warning"
				); // Credit App Attachment Count
		}

		if (upfront_cash > 0 && w9_attachments == 0) {
			$(this)
				.children("td")
				.eq(17)
				.addClass(
					"cb-red font-weight-bold alert-warning"
				); // W9 Attachment Count
		}

		if (
			(agreement_type ==
				"NCS/SSI Contract or Contract Amendment" ||
				agreement_type ==
					"Letter of Understanding (LOU)") &&
			signed_contract_lou_attachments == 0
		) {
			$(this)
				.children("td")
				.eq(18)
				.addClass(
					"cb-red font-weight-bold alert-warning"
				); // Signed LOU Attachment Count
		}
	});
}

function initMultiSelect(virtualElementSelector, selector) {
	$(virtualElementSelector).prop("multiple", true);

	if ($(selector).val()) {
		$(virtualElementSelector).val($(selector).val().split(" OR "));
	} else {
		$(virtualElementSelector).val("");
	}

	$(virtualElementSelector).selectpicker({
		noneSelectedText: "-- Any --",
		actionsBox: true,
	});

	$(virtualElementSelector).on("changed.bs.select", function () {
		$(selector).val($(this).val().join(" OR "));
	});
}
