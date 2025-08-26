var caretup =
	'<i class="fas fa-caret-up" style="color:green;font-size:35px;"></i>';
var caretdown =
	'<i class="fas fa-caret-down" style="color:red;font-size:35px;"></i>';
var dash = '<i class="fas fa-minus" style="font-size:35px;"></i>';

$("#nav-dd").addClass("active");

document.addEventListener("DataPageReady", function (event) {
	if (
		event.detail.appKey == "25d55000da025f6ccee643b7821a" || // shared - deal directory
		event.detail.appKey == "25d55000136439fb7aec407cbed5" || // rvpo - deal directory
		event.detail.appKey == "25d55000bac4985cc0ac485797ae" || // rvps - deal directory
		event.detail.appKey == "25d55000498c7df29bdc4cc492ef" || // dsm - deal directory
		event.detail.appKey == "25d5500025262312258a45e3ae1e" || // dom - deal directory
		event.detail.appKey == "25d55000f0197819e0bb48ac81f8" || // rsm - deal directory
		// || event.detail.appKey == '25d55000ba77fd397d0447618aa9' // sm - deal directory
		event.detail.appKey == "25d550009813a8444b764f8590ac" || // users - deal directory
		event.detail.appKey == "25d5500063f217cac0c847ad8a1b" || // isa team - deal directory
		event.detail.appKey == "25d550003cba56b852da4645ac6b" || // isa finance - deal directory
		// Deal Directory 2
		event.detail.appKey == "25d550001fcfbe0ec9a442fda5e7" || // DSM
		event.detail.appKey == "25d55000addcd06cf8594dfba8b4" || // DOM
		event.detail.appKey == "25d55000cc670d6248c74a58b3f7" || // RVPS
		event.detail.appKey == "25d55000fbd0edcb06834f76b169" || // RVPO
		event.detail.appKey == "25d5500047bbef748cce468fb668" || // KN, CEO, CFO, COO
		event.detail.appKey == "25d550002381f2265d35423f8a95" || // RSM
		event.detail.appKey == "25d550004a8f0b79a16c4b589987" || // SM
		event.detail.appKey == "25d550007229fa8e5f50432da038" || // isa team
		event.detail.appKey == "25d550000faff3f982f24ec8a871" // Logic
	) {
		// var sales_trend_col = $('*[data-cb-name="data"] td:nth-child(8)');
		// var total_amp_col = $('*[data-cb-name="data"] td:nth-child(5)');

		// return false;

		total_amp_link();
		my_amp_link();
		sales_trend_icon();

		float_header_and_scrollbar();
	}
});

function total_amp_link() {
	$('#cb-deal-directory *[data-cb-name="data"] td:nth-child(5)').each(
		function () {
			if ($(this).attr("data-has-link") == "Y") {
				return true;
			}

			// console.log( $(this).html() );

			var total = ($(this).html() || "").toString().trim();
			var isa_id =
				$(this)
					.closest("tr")
					.find(".cb-cog")
					.attr("data-isa-id") || "";

			$(this).html(
				'<a href="https://caspio.thenetwork-crm.com/dp/25d55000139908d8e36e4e9f81e8?ISA_ID=' +
					isa_id +
					'" target="_blank">' +
					total +
					"</a>"
			);

			$(this).attr("data-has-link", "Y");
		}
	);
}

function my_amp_link() {
	$('#cb-deal-directory *[data-cb-name="data"] td:nth-child(6)').each(
		function () {
			if ($(this).attr("data-has-link") == "Y") {
				return true;
			}

			var total = ($(this).html() || "").toString().trim();
			var isa_id =
				$(this)
					.closest("tr")
					.find(".cb-cog")
					.attr("data-isa-id") || "";

			$(this).html(
				'<a href="https://caspio.thenetwork-crm.com/dp/25d55000786546b9a3324c0083dd?ISA_ID=' +
					isa_id +
					'" target="_blank">' +
					total +
					"</a>"
			);

			$(this).attr("data-has-link", "Y");
		}
	);
}

function sales_trend_icon() {
	$('#cb-deal-directory *[data-cb-name="data"] td:nth-child(9)').each(
		function () {
			if ($(this).attr("data-has-icon") == "Y") {
				return true;
			}

			var percentage = ($(this).html() || "")
				.toString()
				.trim();

			// console.log({
			//  string : percentage,
			//  number : Number(percentage) * 100
			// });

			percentage = Number(percentage) * 100;

			if (percentage > 1) {
				$(this).html(
					caretup +
						"<div>" +
						percentage
							.toFixed(2)
							.toString() +
						"%</div>"
				);
			} else if (percentage < -1.1) {
				$(this).html(
					caretdown +
						"<div>" +
						percentage
							.toFixed(2)
							.toString() +
						"%</div>"
				);
			} else {
				$(this).html(
					dash +
						"<div>" +
						percentage
							.toFixed(2)
							.toString() +
						"%</div>"
				);
			}

			$(this).attr("data-has-icon", "Y");
		}
	);
}

function float_header_and_scrollbar() {
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - floating scroll
	$('#cb-deal-directory table[data-cb-name="cbTable"]')
		.closest("div")
		.addClass("overflow-auto cb-freezeheader");
	$('#cb-deal-directory table[data-cb-name="cbTable"]')
		.closest("div")
		.floatingScroll();

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - freeze header
	$('#cb-deal-directory table[data-cb-name="cbTable"]')
		.closest("div")
		.freezeTable();

	try {
		setTimeout(function () {
			$(".cb-freezeheader").freezeTable("update");
		}, 1000);
	} catch (err) {
		console.log("re-initiate freeze header");
	}
}

//START: Update for deal-directory result tabular report: 20220223
function deployTable(containerID, appKey, params) {
	var cbAccountId = accountId; //'caspio.thenetwork-crm.com';
	var cbAppKeyPrefix = appKeyPrefix; //'25d55000';
	var cbDomain = "https://" + cbAccountId;
	var cbDataPagePrefix = cbDomain + "/dp/" + cbAppKeyPrefix;

	var params = params || "";
	var dataPageScript = document.createElement("script");
	var container = document.getElementById(containerID);
	dataPageScript.src = cbDataPagePrefix + appKey + "/emb" + params;

	if (container) {
		container.innerHTML = "";
		container.appendChild(dataPageScript);
	}
}

$(document).on("click", ".cb-customer-number-btn", function (e) {
	var isaId = $(this).attr("cb-data-isa-id");
	var customerNumber = $(this).attr("cb-data-customer-number");
	viewCustomerDetails(isaId, customerNumber);
	e.preventDefault();
});

$(document).on("keydown", '.cb-search input[type="text"]', function (e) {
	return e.which !== 13;
});

document.addEventListener("DataPageReady", function (e) {
	var tabularAppKey = "da025f6ccee643b7821a"; //search form in Deal Directory Page
	var tabularAppKey2 = "47bbef748cce468fb668"; //search form in Deal Directory 2 Page
	var tabularReport2_logic = "0faff3f982f24ec8a871"; // Logic Deal Directory 2 Page

	// for the corporate view 1 users
	if (
		e.detail.appKey.toLowerCase() ==
			(appKeyPrefix + "a61c415ef11d4f71b5f0").toLowerCase() ||
		e.detail.appKey.toLowerCase() ==
			(appKeyPrefix + "b642df38aaec431392bb").toLowerCase() ||
		e.detail.appKey.toLowerCase() ==
			(appKeyPrefix + "ed645c249cf748e5b2ba").toLowerCase()
	) {
		initMultiSelect(
			'*[name="cbParamVirtual10]',
			'*[name="cbParamVirtual13"]'
		);

		var url = new URL(window.location.href);
		var resetParamFlag = url.searchParams.get("cbResetParam");

		if (resetParamFlag == 1) {
			$("#tabularReport").html(
				'<div class="text-center pt-3" styl>** Enter at least 1 search criteria to show the records **</div>'
			);
			$("#tabularReport2").html(
				'<div class="text-center pt-3" styl>** Enter at least 1 search criteria to show the records **</div>'
			);
			$("#tabularReport2_logic").html(
				'<div class="text-center pt-3" styl>** Enter at least 1 search criteria to show the records **</div>'
			);
		} else {
			var paramGLID = $("*[name=cbParamVirtual1]").val();
			var paramDSM = $("*[name=cbParamVirtual2]").val();
			var paramEISAID = $("*[name=cbParamVirtual3]").val();
			var paramEISAName = $("*[name=cbParamVirtual4]").val();
			var paramEISAPM = $("*[name=cbParamVirtual7]").val();
			var paramEISAREG = $("*[name=cbParamVirtual8]").val();
			var paramEISADSM = $("*[name=cbParamVirtual9]").val();
			var paramEISAAT = $("*[name=cbParamVirtual10]").val();
			var paramEISACT = $("*[name=cbParamVirtual11]").val();

			if (
				paramGLID == "" &&
				paramDSM == "" &&
				paramEISAID == "" &&
				paramEISAName == "" &&
				paramEISAPM == "" &&
				paramEISAREG == "" &&
				paramEISADSM == "" &&
				paramEISAAT == "" &&
				paramEISACT == ""
			) {
				$("#tabularReport").html(
					'<div class="text-center pt-3" styl>** Enter at least 1 search criteria to show the records **</div>'
				);
				$("#tabularReport2").html(
					'<div class="text-center pt-3" styl>** Enter at least 1 search criteria to show the records **</div>'
				);
				$("#tabularReport2_logic").html(
					'<div class="text-center pt-3" styl>** Enter at least 1 search criteria to show the records **</div>'
				);
			} else {
				console.log("as");
				if ($("#tabularReport").length) {
					deployTable(
						"tabularReport",
						tabularAppKey,
						""
					);
				}
				if ($("#tabularReport2").length) {
					// DD 2
					deployTable(
						"tabularReport2",
						tabularAppKey2,
						""
					);
				}
				if ($("#tabularReport2_logic").length) {
					// DD 2 Logic
					deployTable(
						"tabularReport2_logic",
						tabularReport2_logic,
						""
					);
				}
			}
		}
	}

	// center text when no records found
	$('*[class^="cbResultSetRecordMessage"]').addClass("text-center pt-3");
});
//END: Update for deal-directory result tabular report: 20220223

document.addEventListener("DataPageReady", function (e) {
	if (
		e.detail.appKey.includes("a61c415ef11d4f71b5f0") ||
		e.detail.appKey.includes("05dabd8ea2034ffd9a0d") ||
		e.detail.appKey.includes("b642df38aaec431392bb") ||
		e.detail.appKey.includes("ed645c249cf748e5b2ba")
	) {
		initMultiSelect(
			'*[name="cbParamVirtual10"]',
			'*[name="cbParamVirtual13"]'
		);
		$(".cb-search").show();
	}

	// Format Actual GP Percentage
	if (document.querySelectorAll("#actual-gp-percentage").length) {
		var actual_gp_percentage = document.querySelectorAll(
			"#actual-gp-percentage"
		);
		for (
			let index = 0;
			index < actual_gp_percentage.length;
			index++
		) {
			const element = actual_gp_percentage[index];
			element.innerText =
				parseFloat(element.innerText).toFixed(1) + "%";
		}
	}
});

function initMultiSelect(virtualElementSelector, selector) {
	$(virtualElementSelector).prop("multiple", true);

	if ($(selector).val()) {
		$(virtualElementSelector).val($(selector).val().split(" OR "));
	} else {
		$(virtualElementSelector).val("");
	}

	$(virtualElementSelector).selectpicker({
		noneSelectedText: "-Any-",
		actionsBox: true,
	});

	$(virtualElementSelector).on("changed.bs.select", function () {
		$(selector).val($(this).val().join(" OR "));
	});
}
