document.addEventListener("DataPageReady", function (event) {
	if (event.detail.appKey == "25d55000118c55bd174340678d1f") {
		deploy_attachments();
		deploy_paintlines();
	}

	if (event.detail.appKey == "25d55000751158e2bf5d47c8916a") {
		console.log(1);

		$(".cb-attch-vendor-approval .cbResultSetRecordMessage").html(
			"No attachments."
		);
	}
});

$(document).on("click", ".cb-approve-btn", function () {
	approval_confirmation();
});

$(document).on("click", ".cb-denie-btn", function () {
	deny_confirmation();
});

function deploy_attachments() {
	var ISAID = document
		.querySelector(".cb-attch-vendor-approval")
		.getAttribute("data-isaid");

	var scriptElem = document.createElement("script");
	scriptElem.src =
		"https://caspio.thenetwork-crm.com/dp/25d55000751158e2bf5d47c8916a/emb?ISA_ID=" +
		ISAID;

	document.querySelector(".cb-attch-vendor-approval").appendChild(
		scriptElem
	);
}

function deploy_paintlines() {
	var ISAID = document
		.querySelector(".cb-attch-vendor-approval")
		.getAttribute("data-isaid");

	var scriptElem = document.createElement("script");
	scriptElem.src =
		"https://caspio.thenetwork-crm.com/dp/25d55000c40a9c6e6bee4795993f/emb?ISA_ID=" +
		ISAID;

	document.querySelector(".cb-paintlines").appendChild(scriptElem);
}

function approve(deal_approver) {
	$('*[name$="RecordApproval_Log"]').prop("checked", true);
	$('*[name$="RecordMFG_Deal_Approval"]').prop("checked", true);
	$('*[name$="RecordMFG_Deal_Status"]').val("Approved");
	$('*[name$="RecordMFG_Deal_Approver"]').val(deal_approver);

	switch ($('*[name$="Last_Approver_ID"]').val()) {
		case "2":
			$('*[name$="RecordNext_Approver_ID"]').val("3");
			$('*[name$="RecordStatus_ID"]').val("4"); // For Approval of RVPS
			break;

		case "3":
			$('*[name$="RecordNext_Approver_ID"]').val("4");
			$('*[name$="RecordStatus_ID"]').val("6"); // For Approval of RVPO
			break;

		case "4":
			$('*[name$="RecordNext_Approver_ID"]').val("5");
			$('*[name$="RecordStatus_ID"]').val("8"); // For Approval of John Byrne
			break;
	}

	$('*[name$="Last_Approver_ID"]').val(0);

	$('*[name="Mod0EditRecord"]').click();
}

function deny(deal_approver, comment) {
	$('*[name$="RecordApproval_Log"]').prop("checked", true);
	$('*[name$="RecordMFG_Deal_Approval"]').prop("checked", true);
	$('*[name$="RecordMFG_Deal_Status"]').val("Denied");
	$('*[name$="RecordMFG_Deal_Approver"]').val(deal_approver);
	$('*[name$="RecordMFG_Deal_Comment"]').val(comment);

	$('*[name$="RecordStatus_ID"]').val(24); // Manufacturer Denied
	$('*[name$="RecordNext_Approver_ID"]').val(
		$('*[name$="Last_Approver_ID"]').val()
	);
	$('*[name$="Last_Approver_ID"]').val(0);

	$('*[name="Mod0EditRecord"]').click();
}

function approval_confirmation() {
	$.confirm({
		type: "secondary",
		columnClass: "col-md-6 col-md-offset-3",
		icon: "",
		title: "Please enter Manufacturer Name",
		theme: "material",
		content: '<input type="text" class="form-control cb-popup-mfr-name" placeholder="Enter Manufacturer Name"><div class="text-center mt-2 req-mfr-name-text">Required Manufacturer Name</div>',
		backgroundDismiss: true,
		buttons: false,
		boxWidth: "400px",
		useBootstrap: false,
		buttons: {
			CANCEL: function () {},
			OK: {
				text: "OK",
				btnClass: "btn-green",
				action: function () {
					var mfr_name = $(".cb-popup-mfr-name")
						.val()
						.trim();

					if (mfr_name == "") {
						$(".req-mfr-name-text").show();
						return false;
					} else {
						approve(mfr_name);
					}
				},
			},
		},
	});
}

function deny_confirmation() {
	$.confirm({
		type: "secondary",
		columnClass: "col-md-6 col-md-offset-3",
		icon: "",
		title: "Please enter Manufacturer Name and Comments",
		theme: "material",
		content: '<input type="text" class="form-control cb-popup-mfr-name" placeholder="Enter Manufacturer Name"> <div class="text-center mt-2 req-mfr-name-text">Required Manufacturer Name</div> <br> <input type="text" class="form-control cb-popup-mfr-comment" placeholder="Comments"> <div class="text-center mt-2 req-mfr-comment-text">Required Comment Field</div>',
		backgroundDismiss: true,
		buttons: false,
		boxWidth: "400px",
		useBootstrap: false,
		buttons: {
			CANCEL: function () {},
			OK: {
				text: "OK",
				btnClass: "btn-green",
				action: function () {
					var mfr_name = $(".cb-popup-mfr-name")
						.val()
						.trim();
					var mfr_comment = $(
						".cb-popup-mfr-comment"
					)
						.val()
						.trim();

					if (mfr_name == "") {
						$(".req-mfr-name-text").show();
						return false;
					}
					if (mfr_comment == "") {
						$(
							".req-mfr-comment-text"
						).show();
						return false;
					}

					if (
						mfr_comment != "" &&
						mfr_name != ""
					) {
						deny(mfr_name, mfr_comment);
					}
				},
			},
		},
	});
}
