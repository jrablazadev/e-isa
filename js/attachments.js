const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
//to retain input  values when Documents are added/deleted
var attachmentsFormData = {
	EditRecordSigned_Personal_Guarantee: "",
	EditRecordNo_Personal_Guarantee_Reason: "",
	EditRecordSigned_UCC_Filling: "",
	EditRecordNo_UCC_Filling_Reason: "",
	EditRecordProrate_NSC_SSI_Contract: "",
	EditRecordNo_Prorate_NSC_Contract_Reason: "",
	EditRecordContract_Is_Prorated_After: "",

	EditRecordHas_MFG_Contract: "",
	EditRecordNo_MFG_Contract_Reason: "",

	EditRecordHas_MFG_Prorated_Contract: "",
	EditRecordMFG_Contract_Pro_Description: "",
	EditRecordNo_MFG_Prorated_Contract_Reason: "",

	EditRecordDate_Pricing_Take_Effect: "",
	EditRecordDate_Contract: "",
	EditRecordDate_Check: "",
	EditRecordManufacturer_Name: "",
	EditRecordManufacturer_Email: "",
	EditRecordManufacturer_Deal_ID: "",
};

var timer = setInterval(function () {
	storeAttachmentsFormData();
	// console.log(attachmentsFormData);
}, 100);

var attachmentsFormDPLoad = 0;

var mfgContractAttachment;
var changedMfgContract;

$(document).on(
	"change",
	'*[name="EditRecordMFG_Contract_Pro_Attachment"]',
	function (event) {
		console.log(
			$(
				'*[name="EditRecordMFG_Contract_Pro_Attachment"]'
			).val()
		);

		mfgContractAttachment = event.target.files[0].name;
		changedMfgContract = mfgContractAttachment;
		console.log(mfgContractAttachment);
		console.log(event.target.files[0]);
	}
);

document.addEventListener("DataPageReady", function (event) {
	// console.log( (event.detail.appKey).toUpperCase() == ('25d55000edd4c28ef31e44839963').toUpperCase() );

	if (
		event.detail.appKey.toUpperCase() ==
		"25d55000edd4c28ef31e44839963".toUpperCase()
	) {
		if (attachmentsFormDPLoad) {
			setAttachmentsFormValues();
		}

		$(
			'form[action*="edd4c28ef31e44839963"] input[name="cbParamVirtual5"]'
		).change(function () {
			if (Number(this.value) == 0) {
				redirect_to_section_2();
				$(this).unbind();
			}
		});

		attachmentsFormDPLoad++;
	}

	// console.log(attachmentsFormDPLoad);
});

// $(document).on('click', '.nextbtn', function(e){

//         if(attachments_validation() == false)
//         {
// 		setTimeout(function(){
// 			$('#cb-attachments-form #fake_save_and_next').removeClass('disabled');
// 			$('#cb-attachments-form #fake_save_and_next').prop('disabled', false);
// 		}, 500);
//                 e.preventDefault();
//         }
// });

// redirect to section 2 if there are no related accounts
function redirect_to_section_2() {
	add_related_account_pop_up = $.confirm({
		scrollToPreviousElement: false,
		scrollToPreviousElementAnimate: false,
		// , columnClass : 'col-md-6 col-md-offset-3'
		icon: "",
		title: "",
		theme: "material",
		type: "red",
		content: ' \
                            <div class="mb-5"> \
                    <div class="text-center"> \
                        Add Related Account before proceeding \
                    </div> \
                            </div>',
		backgroundDismiss: false,
		buttons: {
			buttonYes: {
				text: "Ok",
				btnClass: "btn-danger add_related_btn",
				action: function () {
					window.location.href =
						"./customer-sales-no-growth.php?ISA_ID=" +
						urlParams.get("ISA_ID") +
						"&Section_ID=2";
				},
			},
		},
	});
}

$(document).on("click", ".nextbtn", function (e) {
	if (attachments_validation() == false) {
		setTimeout(function () {
			$(
				"#cb-attachments-form #fake_save_and_next"
			).removeClass("disabled");
			$("#cb-attachments-form #fake_save_and_next").prop(
				"disabled",
				false
			);
		}, 500);
		return e.preventDefault();
	}

	if (
		changedMfgContract &&
		$('*[name="EditRecordMFG_Contract_Pro_Attachment"]').val() == ""
	) {
		alert(`Kindly reattach ${mfgContractAttachment}`);
		setTimeout(function () {
			$(
				"#cb-attachments-form #fake_save_and_next"
			).removeClass("disabled");
			$("#cb-attachments-form #fake_save_and_next").prop(
				"disabled",
				false
			);
		}, 500);
		e.preventDefault();
	}
});

function attachments_validation() {
	var atta_vali = [
		["Vendor Approval", "cbParamVirtual1"],
		["3 Year P & L", "cbParamVirtual2"],
		["Comcept Purchase Verification", "cbParamVirtual3"],
		["Credit App", "cbParamVirtual4"],
		["MPO Purchase Verfication", "cbParamVirtual5"],
	];

	for (i = 0; i < atta_vali.length; i++) {
		if (
			Number(
				$(
					'.cb-attachments-validations *[name="' +
						atta_vali[i][1] +
						'"]'
				).val()
			) == 1
		) {
			alert(atta_vali[i][0] + " Attachment Required.");
			return false;
		}
	}
}

function storeAttachmentsFormData() {
	$.each(attachmentsFormData, function (key, val) {
		attachmentsFormData[key] = $('*[name="' + key + '"]').val();
	});
}

function setAttachmentsFormValues() {
	$.each(attachmentsFormData, function (key, val) {
		$('*[name="' + key + '"]').val(val);
	});
}

// when dates are selected, change to 1st day of the month
$(document).on("change", '*[name="EditRecordDate_Contract"]', function () {
	var date = this.value;
	var date_s = date.split("/");

	if (date_s.length == 3) {
		$(this).val(date_s[0] + "/01/" + date_s[2]);
	}
});

//-------------------------------------------------------------> archived, cant used local/sessionStorage due to file size limit of 5MB
//     // saving file upload value in Session storage
//     $(document).on('change', '*[name="EditRecordMFG_Contract_Pro_Attachment"]', function(){
//         var mfgContractAttachment = $('*[name="EditRecordMFG_Contract_Pro_Attachment"]').val();
//         const reader = new FileReader();
//         reader.addEventListener("load", function(){
//                 console.log('checking reader.result----')
//                 console.log(reader.result)
//                 // sessionStorage.removeItem('recent-file');
//                 sessionStorage.setItem("recent-file", reader.result);
//         })
//         reader.readAsDataURL(this.files[0]);
// });

// --------------------------------------------------------------> Archived / Not used

// function toggle_existing_eisa()
// {
//         $('*[name="InsertRecordhave_Existing_ISA"]').val('');
//         $('*[name="InsertRecordhave_Existing_ISA"]').closest('tr').addClass('isHidden');

//         if($('*[name="InsertRecordNew_Existing"]').val() == 'Existing')
//         {
//                 $('*[name="InsertRecordhave_Existing_ISA"]').closest('tr').removeClass('isHidden');
//         }
// }
