var accountId = "caspio.thenetwork-crm.com";
var appKeyPrefix = "25d55000";

var resubmitToExecutionPopup;
var denyByCEOPopup;
var denyByKNPopup;
var denyByCOOPopup;
var denyByRVPOPopup;
var denyByRVPSPopup;
var denyByIsaTeamPopup;

$(document).on(
	"click",
	'.invoice-discount tr[data-cb-name="data"] td:nth-child(3)',
	function () {
		var row_params = $(this).closest("tr").find(".row-params");
		var price_ex = row_params.attr("data-price_ex");
		var manufacturer = row_params.attr("data-manufacturer");
		var product_line = row_params.attr("data-product_line");
		var invoice_discount = row_params.attr("data-invoice_discount");
		var price_level = row_params.attr("data-price_level");

		price_example_popup(
			price_ex,
			manufacturer,
			product_line,
			invoice_discount,
			price_level
		);
	}
);

document.addEventListener("DataPageReady", function (event) {
	if (
		event.detail.appKey.toUpperCase() ==
		"25d55000596f88aa63cf4078b538".toUpperCase()
	) {
		// Re-submit to execution
		$("#cb-resubmit-to-exec-wq .spinner-border").remove();
		$('#cb-resubmit-to-exec-wq *[name="Mod0EditRecord"]').val(
			"Submit"
		);
		$('#cb-resubmit-to-exec-wq *[name="Mod0EditRecord"]').attr(
			"onclick",
			"resubmitExecWqShowLoading();"
		);

		if (
			$(
				'#cb-resubmit-to-exec-wq *[data-cb-name="HeaderErrorMsg"]'
			).length
		) {
			$("#cb-resubmit-to-exec-wq article").show();
		}
	}

	if (
		event.detail.appKey.toUpperCase() ==
		"25d550006acc0c733f0e45b89590".toUpperCase()
	) {
		// Re-submit to execution - OLD ISA
		$("#cb-resubmit-to-exec-wq .spinner-border").remove();
		$('#cb-resubmit-to-exec-wq *[name="Submit"]').val("Submit");
		$('#cb-resubmit-to-exec-wq *[name="Submit"]').attr(
			"onclick",
			"resubmitExecWqShowLoading();"
		);

		if (
			$(
				'#cb-resubmit-to-exec-wq *[data-cb-name="HeaderErrorMsg"]'
			).length
		) {
			$("#cb-resubmit-to-exec-wq article").show();
		}
	}

	// show loading on submit of denial popup
	if ($('.cb-deny-isa-cn *[data-cb-name="HeaderErrorMsg"]').length) {
		$(".cb-deny-isa-cn article").show();
	}

	$('.cb-deny-isa-cn *[name="Submit"]').attr(
		"onclick",
		"denyPopupLoading();"
	);
});

function resubmitExecWqShowLoading() {
	$("#cb-resubmit-to-exec-wq article").hide();
	$("#cb-resubmit-to-exec-wq").append(
		'<div class="spinner-border text-info" role="status"></div>'
	);
}

function denyPopupLoading() {
	$(".cb-deny-isa-cn article").hide();
	$(".cb-deny-isa-cn").append(
		'<div class="spinner-border text-info" role="status"></div>'
	);
}

function price_example_popup(
	price_ex,
	manufacturer,
	product_line,
	invoice_discount,
	price_level
) {
	var url_param = "";
	url_param += "Manufacturer=" + encodeURIComponent(manufacturer);

	if (product_line != "-All-") {
		url_param +=
			"&Product_Line=" + encodeURIComponent(product_line);
	}

	url_param +=
		"&Invoice_Discount=" + encodeURIComponent(invoice_discount);
	url_param += "&Price_Level=" + encodeURIComponent(price_level);

	$.confirm({
		type: "secondary",
		columnClass: "col-md-6 col-md-offset-3",
		icon: "",
		title: price_ex,
		theme: "material",
		content:
			'<iframe src="./allied-set-up-price-ex.php?' +
			url_param +
			'" onload="iframe_autoresize(this)"></iframe>',
		backgroundDismiss: true,
		buttons: false,
		boxWidth: "80%",
		useBootstrap: false,
	});
}

function iframe_autoresize(elem) {
	var $iframe = $(elem).length ? $(elem) : window.parent.$(elem);
	var padding = 10;

	$iframe.css("height", "0px");
	var height =
		$iframe.get(0).contentWindow.document.body.scrollHeight +
		padding;
	$iframe.css("height", height + 70 + "px");
}

// Disabled Approve / Denied buttons once either one of them
// are clicked, so it will prevent clicking multiple times
var findButtons = setInterval(function () {
	// console.log("setup pending")
	if ($(".cb-hotbuttons :button").length >= 2) {
		$(
			".cb-hotbuttons :button:not(.cb-app-prod-line-btn):not(.cb-error-report-btn)"
		).click(function () {
			// Exclude Buttons: Error Report, Approved Product Lines - Jun
			$(".cb-hotbuttons :button").attr("disabled", true);
			// console.log("disabling done")
		});
		// console.log("setup done")
		clearInterval(findButtons);
	}
}, 800);

// This is for the Deny Modal pop up Cancel Button
// Once the user cancel it it should enable all buttons again
var findCancelButton = setInterval(function () {
	if ($(".jconfirm-closeIcon").length) {
		$(".jconfirm-closeIcon").click(function () {
			$(".cb-hotbuttons button")
				.prop("disabled", false)
				.removeClass("disabled");
		});
	}
}, 800);

function resubmitToExecutionWQ(isaId, hasRecordInDealExecution) {
	if (hasRecordInDealExecution == 0) {
		resubmitToExecutionWQOldIsa(isaId);
		return false;
	}

	resubmitToExecutionPopup = $.confirm({
		scrollToPreviousElement: false,
		scrollToPreviousElementAnimate: false,
		type: "secondary",
		columnClass: "col-md-6 col-md-offset-3",
		icon: "",
		title: "ISA " + isaId + " - Re-submit to Execution Work Queue",
		theme: "material",
		content: '<div id="cb-resubmit-to-exec-wq"><div class="spinner-border text-info" role="status"></div></div>',
		backgroundDismiss: false,
		buttons: false,
		onOpen: function () {
			deployDP(
				"cb-resubmit-to-exec-wq",
				"https://" +
					accountId +
					"/dp/" +
					appKeyPrefix +
					"596f88aa63cf4078b538/emb?ISA_ID=" +
					isaId
			);
		},
	});
}

function resubmitToExecutionWQOldIsa(isaId) {
	resubmitToExecutionPopup = $.confirm({
		scrollToPreviousElement: false,
		scrollToPreviousElementAnimate: false,
		type: "secondary",
		columnClass: "col-md-6 col-md-offset-3",
		icon: "",
		title: "ISA " + isaId + " - Re-submit to Execution Work Queue",
		theme: "material",
		content: '<div id="cb-resubmit-to-exec-wq"><div class="spinner-border text-info" role="status"></div></div>',
		backgroundDismiss: false,
		buttons: false,
		onOpen: function () {
			deployDP(
				"cb-resubmit-to-exec-wq",
				"https://" +
					accountId +
					"/dp/" +
					appKeyPrefix +
					"6acc0c733f0e45b89590/emb?ISA_ID=" +
					isaId
			);
		},
	});
}

function denyByCEO(isaId, lastApproverRoleId) {
	statusId = 27; // Denied By CEO

	denyByCEOPopup = $.confirm({
		scrollToPreviousElement: false,
		scrollToPreviousElementAnimate: false,
		type: "secondary",
		columnClass: "col-md-6 col-md-offset-3",
		icon: "",
		title: "ISA " + isaId + " - Deny",
		theme: "material",
		type: "red",
		content: '<div id="cb-deny-by-ceo" class="mb-5 cb-deny-isa-cn"><div class="spinner-border text-info" role="status"></div></div>',
		backgroundDismiss: false,
		buttons: false,
		onOpen: function () {
			deployDP(
				"cb-deny-by-ceo",
				"https://" +
					accountId +
					"/dp/" +
					appKeyPrefix +
					"e9af141cfe924e169925/emb?ISA_ID=" +
					isaId +
					"&Last_Role_ID=" +
					lastApproverRoleId +
					"&Status_ID=" +
					statusId
			);
		},
	});
}

function denyByKN(isaId, lastApproverRoleId) {
	statusId = 9; // Denied by Tom Blawusch

	denyByKNPopup = $.confirm({
		scrollToPreviousElement: false,
		scrollToPreviousElementAnimate: false,
		type: "secondary",
		columnClass: "col-md-6 col-md-offset-3",
		icon: "",
		title: "ISA " + isaId + " - Deny",
		theme: "material",
		type: "red",
		content: '<div id="cb-deny-by-kn" class="mb-5 cb-deny-isa-cn"><div class="spinner-border text-info" role="status"></div></div>',
		backgroundDismiss: false,
		buttons: false,
		onOpen: function () {
			deployDP(
				"cb-deny-by-kn",
				"https://" +
					accountId +
					"/dp/" +
					appKeyPrefix +
					"a271fc321d49401286ea/emb?ISA_ID=" +
					isaId +
					"&Last_Role_ID=" +
					lastApproverRoleId +
					"&Status_ID=" +
					statusId
			);
		},
	});
}

function denyByCOO(isaId, lastApproverRoleId) {
	statusId = 36; // Denied by COO

	denyByCOOPopup = $.confirm({
		scrollToPreviousElement: false,
		scrollToPreviousElementAnimate: false,
		type: "secondary",
		columnClass: "col-md-6 col-md-offset-3",
		icon: "",
		title: "ISA " + isaId + " - Deny",
		theme: "material",
		type: "red",
		content: '<div id="cb-deny-by-coo" class="mb-5 cb-deny-isa-cn"><div class="spinner-border text-info" role="status"></div></div>',
		backgroundDismiss: false,
		buttons: false,
		onOpen: function () {
			deployDP(
				"cb-deny-by-coo",
				"https://" +
					accountId +
					"/dp/" +
					appKeyPrefix +
					"0ab81875689b44458f50/emb?ISA_ID=" +
					isaId +
					"&Last_Role_ID=" +
					lastApproverRoleId +
					"&Status_ID=" +
					statusId
			);
		},
	});
}

function denyByCFO(isaId, lastApproverRoleId) {
	statusId = 34; // Denied by CFO

	denyByCOOPopup = $.confirm({
		scrollToPreviousElement: false,
		scrollToPreviousElementAnimate: false,
		type: "secondary",
		columnClass: "col-md-6 col-md-offset-3",
		icon: "",
		title: "ISA " + isaId + " - Deny",
		theme: "material",
		type: "red",
		content: '<div id="cb-deny-by-cfo" class="mb-5 cb-deny-isa-cn"><div class="spinner-border text-info" role="status"></div></div>',
		backgroundDismiss: false,
		buttons: false,
		onOpen: function () {
			deployDP(
				"cb-deny-by-cfo",
				"https://" +
					accountId +
					"/dp/" +
					appKeyPrefix +
					"d93ae631b90443ae8880/emb?ISA_ID=" +
					isaId +
					"&Last_Role_ID=" +
					lastApproverRoleId +
					"&Status_ID=" +
					statusId
			);
		},
	});
}

function denyByRVPO(isaId, lastApproverRoleId) {
	statusId = 7; // Denied by RVPO

	denyByRVPOPopup = $.confirm({
		scrollToPreviousElement: false,
		scrollToPreviousElementAnimate: false,
		type: "secondary",
		columnClass: "col-md-6 col-md-offset-3",
		icon: "",
		title: "ISA " + isaId + " - Deny",
		theme: "material",
		type: "red",
		content: '<div id="cb-deny-by-rvpo" class="mb-5 cb-deny-isa-cn"><div class="spinner-border text-info" role="status"></div></div>',
		backgroundDismiss: false,
		buttons: false,
		onOpen: function () {
			deployDP(
				"cb-deny-by-rvpo",
				"https://" +
					accountId +
					"/dp/" +
					appKeyPrefix +
					"7d8ed459a4a04e4995ee/emb?ISA_ID=" +
					isaId +
					"&Last_Role_ID=" +
					lastApproverRoleId +
					"&Status_ID=" +
					statusId
			);
		},
	});
}

function denyByRVPS(isaId, lastApproverRoleId) {
	statusId = 5; // Denied by RVPS

	denyByRVPSPopup = $.confirm({
		scrollToPreviousElement: false,
		scrollToPreviousElementAnimate: false,
		type: "secondary",
		columnClass: "col-md-6 col-md-offset-3",
		icon: "",
		title: "ISA " + isaId + " - Deny",
		theme: "material",
		type: "red",
		content: '<div id="cb-deny-by-rvps" class="mb-5 cb-deny-isa-cn"><div class="spinner-border text-info" role="status"></div></div>',
		backgroundDismiss: false,
		buttons: false,
		onOpen: function () {
			deployDP(
				"cb-deny-by-rvps",
				"https://" +
					accountId +
					"/dp/" +
					appKeyPrefix +
					"3f2f9b6da3834f518919/emb?ISA_ID=" +
					isaId +
					"&Last_Role_ID=" +
					lastApproverRoleId +
					"&Status_ID=" +
					statusId
			);
		},
	});
}

function denyByIsaTeam(isaId, lastApproverRoleId) {
	statusId = 17; // Denied by ISA Team

	denyByIsaTeamPopup = $.confirm({
		scrollToPreviousElement: false,
		scrollToPreviousElementAnimate: false,
		type: "secondary",
		columnClass: "col-md-6 col-md-offset-3",
		icon: "",
		title: "ISA " + isaId + " - Deny",
		theme: "material",
		type: "red",
		content: '<div id="cb-deny-by-isateam" class="mb-5 cb-deny-isa-cn"><div class="spinner-border text-info" role="status"></div></div>',
		backgroundDismiss: false,
		buttons: false,
		onOpen: function () {
			deployDP(
				"cb-deny-by-isateam",
				"https://" +
					accountId +
					"/dp/" +
					appKeyPrefix +
					"7cddacbfeab74528a6f0/emb?ISA_ID=" +
					isaId +
					"&Last_Role_ID=" +
					lastApproverRoleId +
					"&Status_ID=" +
					statusId
			);
		},
	});
}
