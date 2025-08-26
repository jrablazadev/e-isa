$("#nav-reports").addClass("active");

document.addEventListener("DataPageReady", function (event) {
	if (event.detail.appKey == "25d550003f26307cea88482b9ac9") {
		moveCogAndCustomerName();
		showTotalAmortized();
	}
});

function moveCogAndCustomerName() {
	$('.cb-deal-amortization tr[data-cb-name="group2"]').each(function () {
		var nextRow = $(this).next();
		var cogBtn = nextRow.find(".cb-cog");
		var isaId = cogBtn.attr("data-isa-id");
		var legalName = cogBtn.attr("data-legal-name");
		var city = cogBtn.attr("data-city");
		var state = cogBtn.attr("data-state");

		$(this)
			.find('*[data-cb-name="groupLabelCell2"]')
			.prepend(cogBtn);
		$(this)
			.find('*[data-cb-name="groupLabelCell2"]')
			.append(
				' | \
			<span class="cb-customer-name"> \
			E-ISA ' +
					isaId +
					' \
			<span class="cb-legal-name" data-value="' +
					legalName +
					'">, ' +
					legalName +
					' </span> \
			<span class="cb-city" data-value="' +
					city +
					'">, ' +
					city +
					' </span> \
			<span class="cb-state" data-value="' +
					state +
					'">, ' +
					state +
					" </span> \
			</span> \
		"
			);
	});

	$('.cb-deal-amortization tr[data-cb-name="data"] .cb-cog').remove();
}

function showTotalAmortized() {
	// Show in ISA grouping
	$('.cb-deal-amortization tr[data-cb-name="group2"]').each(function () {
		var nextRow = $(this).next();
		var amortizedElem = nextRow.find(".cb-total-amortized");
		var totalAmortizedByIsa =
			amortizedElem.attr("data-sum-by-isa-id");

		$(this).children("td").eq(4).addClass("text-right");
		$(this).children("td").eq(4).html(totalAmortizedByIsa);
	});

	// Show in GLID grouping
	$('.cb-deal-amortization tr[data-cb-name="group1"]').each(function () {
		var nextRow = $(this).next().next();
		var amortizedElem = nextRow.find(".cb-total-amortized");
		var totalAmortizedByGlid =
			amortizedElem.attr("data-sum-by-glid");

		console.log($(this).children("td").eq(3));
		console.log(nextRow);

		$(this).children("td").eq(3).addClass("text-right");
		$(this).children("td").eq(3).html(totalAmortizedByGlid);
	});
}
