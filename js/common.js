var jqueryConfirm;
var accountId = "caspio.thenetwork-crm.com";
var appKeyPrefix = "25d55000";

var updateLastSectionNoPopup;
var createNewDealPopup;
var cloneIsaPopup;
var mfgApprovalDetailsPopup;

var cbAccountId = accountId; // 8 character ID
var cbAppKeyPrefix = appKeyPrefix; // 8 character Prefix
var cbDomain = "https://" + cbAccountId;
var cbDataPagePrefix = cbDomain + "/dp/" + cbAppKeyPrefix;

var saveToReturns = "SAVE TO ESTIMATED RETURNS";

function deployDP_v2(containerID, appKey, params) {
	var params = params || "";

	var dataPageScript = "";

	var container = document.getElementById(containerID);

	container.innerHTML = "";

	//for multiple DataPages

	const appKeys = appKey.split(",");

	for (i = 0; i < appKeys.length; i++) {
		dataPageScript = document.createElement("script");

		dataPageScript.src =
			cbDataPagePrefix + appKeys[i].trim() + "/emb" + params;
		container.appendChild(dataPageScript);
	}
}
//open modal v4
function openModal_v4(modalTitle, appKey, params, size) {
	$("#cb-modal-body").html("");

	if (size) {
		$("#cb-modal .modal-dialog")
			.removeClass("modal-sm modal-md modal-lg modal-xl")

			.addClass(size);
	}

	deployDP_v2("cb-modal-body", appKey, params);

	$("#cb-modal-title").html(modalTitle);

	$("#cb-modal").modal({
		backdrop: "static",

		keyboard: false,
	});

	// draggable modal

	$(".modal-header").on("mousedown", function (mousedownEvt) {
		var $draggable = $(this);

		var x = mousedownEvt.pageX - $draggable.offset().left,
			y = mousedownEvt.pageY - $draggable.offset().top;

		$("body").on("mousemove.draggable", function (mousemoveEvt) {
			$draggable.closest(".modal-content").offset({
				left: mousemoveEvt.pageX - x,

				top: mousemoveEvt.pageY - y,
			});
		});

		$("body").one("mouseup", function () {
			$("body").off("mousemove.draggable");
		});

		$draggable.closest(".modal").one("bs.modal.hide", function () {
			$("body").off("mousemove.draggable");
		});
	});
}

// function - set iframe height on load
function iframeLoaded(elementId) {
	setTimeout(function () {
		var $iframe = $("#" + elementId).length
			? $("#" + elementId)
			: window.parent.$("#" + elementId);
		var padding = -12;

		$iframe.css("height", "0px");
		var height =
			$iframe.get(0).contentWindow.document.body
				.scrollHeight + padding;
		$iframe.css("height", height + 20 + "px");
	}, 50);
}

function iframeLoaded_related_acct(elementId, height) {
	var elem = "#" + elementId;
	var height = $(elem).contents().find("html").height();
	var padding = 50;
	$(elem).height(height + padding);
}
// function - create iframe
function openModal(modalTitle, iframeSrc) {
	if ($("#cb-modal").length == 0) {
		$("body").load("../partials/modal.php");
	}

	$("#cb-modal-title").html(modalTitle);
	$("#cb-modal-error").addClass("d-none");
	$("#cb-modal-body").html(
		'<iframe frameborder="0" scrolling="no" id="cb-modal-frame" src="' +
			iframeSrc +
			'"></iframe>'
	);
	$("#cb-modal-frame").on("load", function () {
		iframeLoaded(this.id);
	});
	$("#cb-modal").modal();
}
// function - get URL Vars
function getUrlVars() {
	var vars = [],
		hash;
	var hashes = window.location.href
		.slice(window.location.href.indexOf("?") + 1)
		.split("&");

	for (var i = 0; i < hashes.length; i++) {
		hash = hashes[i].split("=");
		hash[1] = unescape(hash[1]);
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}

	return vars;
}
// var urlVars = getUrlVars();

function update_progress_bar() {
	var LastSectionNo = Number($("#NPC_LastSectionNo").val());
	var CurrentSectionNo = Number($("#NPC_CurrentSectionNo").val());

	CurrentSectionNo = isNaN(CurrentSectionNo) ? 0 : CurrentSectionNo;

	if (CurrentSectionNo == 0) {
		$(".progressbar a").addClass("disabled");
		$(".progressbar a").attr("href", "javascript:void(0)");

		$("#progressbar-template-new").addClass("active");
		$("#progressbar-template-update").addClass("active");
		$("#progressbar-customer-sales-no-growth").addClass("disabled");
	} else {
		$(".progressbar li").each(function (i) {
			// console.log((i), CurrentSectionNo, LastSectionNo, this);

			if (i + 1 <= CurrentSectionNo) {
				// console.log(2);

				$(this).addClass("active");

				// console.log('active');
			} else {
				// skip when direction to pay
				if ($(this).hasClass("cb-d2p")) {
					if (CurrentSectionNo == 11) {
						$(this).addClass("disabled");
					}

					return true;
				}

				if (i + 1 > LastSectionNo) {
					$(this)
						.find("a")
						.attr(
							"href",
							"javascript:void(0)"
						);
					$(this).find("a").addClass("disabled");
				}

				$(this).addClass("disabled");
			}
		});
	}

	// $('#progressbar-d2p').removeClass('disabled');
	// $('#progressbar-d2p a').removeClass('disabled');
}

function filenameTimestamp() {
	let today = new Date();
	let year = today.getFullYear();
	let month = today.getMonth() + 1;
	let day = today.getDate();
	let hour = today.getHours();
	let minute = today.getMinutes();
	let sec = today.getSeconds();
	let r =
		year +
		"-" +
		month +
		"-" +
		day +
		"__" +
		hour +
		"-" +
		minute +
		"-" +
		sec;
	console.log(r);
	return r;
}

function openModal_v2(title, dataPageSrc, boxWidth, cancelReload) {
	var cancelReladElem = "";

	if (cancelReload == "Y") {
		cancelReladElem =
			'<input type="hidden" class="cb-cancel-reload"> ';
	}

	jqueryConfirm = $.confirm({
		scrollToPreviousElement: false,
		scrollToPreviousElementAnimate: false,
		type: "secondary",
		columnClass: "col-md-6 col-md-offset-3",
		title: title,
		boxWidth: boxWidth,
		theme: "material",
		content:
			'<div class="spinner-border text-info" role="status"><span class="sr-only">Loading...</span></div><div id="cb-jc-body"></div>' +
			cancelReladElem,
		buttons: false,
		useBootstrap: false,
		onOpen: function () {
			var dataPageScript = document.createElement("script");
			dataPageScript.src = dataPageSrc;
			document.getElementById("cb-jc-body").appendChild(
				dataPageScript
			);

			$(".cb-cog").hide();
		},
		onClose: function () {
			$(".cb-cog").show();
		},
	});
}

function openModal_v3(
	title,
	dataPageSrc,
	boxWidth,
	cancelReload,
	calcManually,
	calcNotes
) {
	var cancelReladElem = "";

	if (cancelReload == "Y") {
		cancelReladElem =
			'<input type="hidden" class="cb-cancel-reload"> ';
	}

	jqueryConfirm = $.confirm({
		scrollToPreviousElement: false,
		scrollToPreviousElementAnimate: false,
		type: "secondary",
		columnClass: "col-md-6 col-md-offset-3",
		title: title,
		boxWidth: boxWidth,
		theme: "material",
		content:
			'<div class="spinner-border text-info" role="status"><span class="sr-only">Loading...</span></div><div id="cb-jc-body"></div>' +
			cancelReladElem,
		buttons: false,
		useBootstrap: false,
		onOpen: function () {
			var dataPageScript = document.createElement("script");
			dataPageScript.src = dataPageSrc;
			document.getElementById("cb-jc-body").appendChild(
				dataPageScript
			);

			document.addEventListener(
				"DataPageReady",
				function (event) {
					var calcManuallyCB =
						document.getElementById(
							"InsertRecordCalculate_Manually_CB"
						);
					var calcNotesCB =
						document.getElementById(
							"InsertRecordManual_Calculation_Notes_CB"
						);

					if (calcManually === "No") {
						console.log(
							"checking if-else..."
						);
						console.log(
							calcManually === "No"
						);
						$(
							"#InsertRecordCalculate_Manually"
						).prop("checked", false);
					} else {
						$(
							"#InsertRecordCalculate_Manually"
						).prop("checked", true);
					}

					if (calcNotes !== "") {
						$(
							"#InsertRecordManual_Calculation_Notes"
						).val(calcNotes);
					}

					//event listeners for CB
					document.getElementById(
						"InsertRecordCalculate_Manually"
					).addEventListener(
						"change",
						function () {
							console.log(
								"Calculate Manually is changed"
							);
							calcManuallyCB.checked = true;
						}
					);

					document.getElementById(
						"InsertRecordManual_Calculation_Notes"
					).addEventListener(
						"keydown",
						function () {
							console.log(
								"Calculate Notes is changed"
							);
							calcNotesCB.checked = true;
						}
					);
				}
			); //end of DataPageReady function
		}, //end of onOpen function
	});
} // end of openModal_v3

function deployDP(containerId, dataPageSrc) {
	var dataPageScript = document.createElement("script");
	dataPageScript.src = dataPageSrc;
	document.getElementById(containerId).appendChild(dataPageScript);
}

function view_comments(isaId) {
	$.confirm({
		scrollToPreviousElement: false,
		scrollToPreviousElementAnimate: false,
		type: "secondary",
		columnClass: "col-md-6 col-md-offset-3",
		icon: "fa fa-th-list",
		title: "ISA " + isaId + " - Comment Log",
		theme: "material",
		content: '<div id="cb-comments"></div> <input type="hidden" class="cb-cancel-reload">',
		backgroundDismiss: false,
		buttons: false,
		boxWidth: "70%",
		useBootstrap: false,
		onOpen: function () {
			$("#cb-comments").load(
				"../shared/comment-log-2.php?ISA_ID=" + isaId
			);

			$(".cb-cog").hide();
		},
		onClose: function () {
			$(".cb-cog").show();
		},
	});
}

function view_comments_of_isa_breach(isaId, GroupId) {
	$.confirm({
		scrollToPreviousElement: false,
		scrollToPreviousElementAnimate: false,
		type: "secondary",
		columnClass: "col-md-6 col-md-offset-3",
		icon: "fa fa-th-list",
		title: "ISA " + isaId + " - Comment Log",
		theme: "material",
		content: '<div id="cb-comments"></div> <input type="hidden" class="cb-cancel-reload">',
		backgroundDismiss: false,
		buttons: false,
		boxWidth: "fit-content",
		useBootstrap: false,
		onOpen: function () {
			if (GroupId != null) {
				$("#cb-comments").load(
					"../shared/comment-log-2-breach.php?ISA_ID=" +
						isaId +
						"&GroupId=" +
						GroupId
				);
			} else {
				$("#cb-comments").load(
					"../shared/comment-log-2-breach-view-only.php?ISA_ID=" +
						isaId
				);
			}

			$(".cb-cog").hide();
		},
		onClose: function () {
			$(".cb-cog").show();
		},
	});
}

function reset_isa(ISA_ID) {
	$.confirm({
		scrollToPreviousElement: false,
		scrollToPreviousElementAnimate: false,
		type: "secondary",
		columnClass: "col-md-6 col-md-offset-3",
		icon: "fa fa-warning",
		title: "Reset ISA",
		theme: "material",
		content: "Are you sure you would like to reset this record? <br/> This record will return to the submitter's work list.",
		backgroundDismiss: true,
		buttons: {
			NO: function () {},
			YES: {
				text: "YES",
				btnClass: "btn-green",
				action: function () {
					window.location.href =
						"./scratch-pad-reset.php?ISA_ID=" +
						ISA_ID;
				},
			},
		},
	});
}

function create_new_deal(isaId) {
	createNewDealPopup = $.confirm({
		scrollToPreviousElement: false,
		scrollToPreviousElementAnimate: false,
		type: "secondary",
		columnClass: "col-md-6 col-md-offset-3",
		// , icon: 'far fa-question-circle'
		title: " ",
		theme: "material",
		content: ' \
			<div class="cb-create-new-deal-cn mb-5 text-center"> \
				<div>Are you sure you want to create new Deal?</div> \
			</div>',
		backgroundDismiss: false,
		buttons: {
			buttonNo: {
				text: "NO",
			},
			buttonYes: {
				text: "YES",
				btnClass: "btn-green",
				action: function () {
					sessionStorage.setItem(
						"cb-isa-cnd-last-location",
						window.location.href
					);
					sessionStorage.setItem(
						"cb-isa-cnd-run",
						"Y"
					);

					window.location.href =
						"../shared/create-new-deal.php?ISA_ID=" +
						isaId;
				},
			},
		},
	});
}

function create_new_deal_tsm(isaId) {
	createNewDealPopup = $.confirm({
		scrollToPreviousElement: false,
		scrollToPreviousElementAnimate: false,
		type: "secondary",
		columnClass: "col-md-6 col-md-offset-3",
		// , icon: 'far fa-question-circle'
		title: " ",
		theme: "material",
		content: ' \
			<div class="cb-create-new-deal-cn mb-5 text-center"> \
				<div>Are you sure you want to create new Deal? <br> DSM will be notified when New deal is created.</div> \
			</div>',
		backgroundDismiss: false,
		buttons: {
			buttonNo: {
				text: "NO",
			},
			buttonYes: {
				text: "YES",
				btnClass: "btn-green",
				action: function () {
					sessionStorage.setItem(
						"cb-isa-cnd-last-location",
						window.location.href
					);
					sessionStorage.setItem(
						"cb-isa-cnd-run",
						"Y"
					);

					window.location.href =
						"../shared/create-new-deal.php?ISA_ID=" +
						isaId;
				},
			},
		},
	});
}

function attachments_popup(isaId) {
	openModal_v2(
		"ISA " + isaId + " - Attachments",
		"https://" +
			accountId +
			"/dp/" +
			appKeyPrefix +
			"9bc1d07cd64e4db5af1f/emb?ISA_ID=" +
			isaId +
			"",
		"95%",
		"Y"
	);
}

function allocate_assets(isaId) {
	openModal_v2(
		"ISA " + isaId + " - Assets",
		"https://" +
			accountId +
			"/dp/" +
			appKeyPrefix +
			"90cd9d8472e949049ca8/emb?isa_id=" +
			isaId +
			"",
		"95%",
		"Y"
	);
}

function allocate_assets_viewonly(isaId) {
	var link_AES =
		'<a target="_blank" id="deal-amor-details-link" href="./deal-assets-view-details.php?ISA_ID=' +
		isaId +
		'" style="font-size: 14px; text-decoration: underline;">Amortization Expense Summary</a>';
	openModal_v2(
		"ISA " + isaId + " - Allocate Assets " + link_AES,
		"https://" +
			accountId +
			"/dp/" +
			appKeyPrefix +
			"fa862bb9b4b046c1a858/emb?isa_id=" +
			isaId +
			"",
		"95%",
		"Y"
	);
}

function append_home_run_btn(appKey) {
	var urlVars = getUrlVars();
	var isaId = urlVars["ISA_ID"];
	var sectionId = urlVars["Section_ID"];

	var btn = "";

	var subfolder =
		window.parent.location.href.split("/")[
			window.parent.location.href.split("/").length - 2
		];
	// if(subfolder == 'sm' || subfolder == 'dom' || subfolder == 'tsm' || subfolder == 'users')
	// {
	//         return false;
	// }

	switch (appKey.toLowerCase()) {
		case (appKeyPrefix + "86d1ebc230c74a9182dc").toLowerCase(): // Section 1
			btn =
				'<a href="javascript:void(0)" onclick="home_run_update(' +
				sectionId +
				')" class="btn-success cb-home-run-btn-update">' +
				saveToReturns +
				"</a>";
			// if ($('.cb-home-run-btn').length) { $('.cb-home-run-btn').remove(); }
			if ($(".cb-home-run-btn-update").length) {
				$(".cb-home-run-btn-update").remove();
			}

			// $('*[name="AppKey"][value="' + appKey + '"]').closest('form').find('*[name="Mod0EditRecord"]').prepend(btn);

			$(btn).insertBefore(
				$('*[name="AppKey"][value="' + appKey + '"]')
					.closest("form")
					.find('*[name="Mod0EditRecord"]')
			);

			break;

		case (appKeyPrefix + "c00e9414db644c4fbb7f").toLowerCase(): // Section 2
			btn =
				'<a href="javascript:void(0)" onclick="home_run(' +
				sectionId +
				')" class="btn-success cb-home-run-btn">' +
				saveToReturns +
				"</a>";
			if ($(".cb-home-run-btn").length) {
				$(".cb-home-run-btn").remove();
			}

			// $('.cbBackButtonContainer .cb-save-n-next-btn').insertAfter(btn);

			setTimeout(function () {
				$(btn).insertBefore(
					$(
						'form[action*="' +
							appKey.toLowerCase() +
							'"] .cbBackButtonContainer .cb-save-n-next-btn'
					)
				);
			}, 1000);

			break;

		case (appKeyPrefix + "e67cd6ecfba94394a8b7").toLowerCase(): // Section 3
			btn =
				'<a href="javascript:void(0)" onclick="home_run(' +
				sectionId +
				')" class="btn-success cb-home-run-btn">' +
				saveToReturns +
				"</a>";
			if ($(".cb-home-run-btn").length) {
				$(".cb-home-run-btn").remove();
			}

			// $('.cb-cswgf-btns').prepend(btn);

			$(btn).insertBefore($(".cb-cswgf-btns .nextbtn"));
			break;

		case (appKeyPrefix + "d3e8f98b087d439a918e").toLowerCase(): // Section 4
			btn =
				'<a href="javascript:void(0)" onclick="updateLastSectionNo(' +
				isaId +
				', 9)" class="btn-success cb-home-run-btn">' +
				saveToReturns +
				"</a>";
			if ($(".cb-home-run-btn").length) {
				$(".cb-home-run-btn").remove();
			}

			// $('.cb-invoice-discounts-btns').prepend(btn);

			$(btn).insertBefore(
				$(".cb-invoice-discounts-btns .nextbtn")
			);

			break;

		case (appKeyPrefix + "0acbae05d7954542a1cd").toLowerCase(): // Section 5
			btn =
				'<a href="javascript:void(0)" onclick="updateLastSectionNo(' +
				isaId +
				', 9)" class="btn-success cb-home-run-btn">' +
				saveToReturns +
				"</a>";
			if ($(".cb-home-run-btn").length) {
				$(".cb-home-run-btn").remove();
			}

			// $('.cb-statement-rebates-btns').prepend(btn);

			$(btn).insertBefore(
				$(".cb-statement-rebates-btns .nextbtn")
			);

			break;

		case (appKeyPrefix + "e0efc4665b5344579a28").toLowerCase(): // Section 6
			btn =
				'<a href="javascript:void(0)" onclick="updateLastSectionNo(' +
				isaId +
				', 9)" class="btn-success cb-home-run-btn">' +
				saveToReturns +
				"</a>";
			if ($(".cb-home-run-btn").length) {
				$(".cb-home-run-btn").remove();
			}
			// $('.cb-eq-rebates-btns').prepend(btn);

			$(btn).insertBefore($(".cb-eq-rebates-btns .nextbtn"));

			break;

		case (appKeyPrefix + "51ba494d753f49b0a82e").toLowerCase(): // Section 7
			btn =
				'<a href="javascript:void(0)" onclick="home_run(' +
				sectionId +
				')" class="btn-success cb-home-run-btn">' +
				saveToReturns +
				"</a>";
			if ($(".cb-home-run-btn").length) {
				$(".cb-home-run-btn").remove();
			}
			// $('.cb-investments-btns').prepend(btn);

			$(btn).insertBefore($(".cb-investments-btns .nextbtn"));

			break;
	}

	// ./home-run.php?ISA_ID=' + isaId + '&Section_ID=' + (sectionId + 1) + '
}

function home_run(sectionId) {
	$(".cb-home-run-btn").prop("disabled", true);
	$(".cb-home-run-btn").addClass("disabled");

	switch (sectionId) {
		case 1:
			$(
				'form[action*="86d1ebc230c74a9182dc"] *[name="EditRecordLast_Section_No"]'
			).val("9");
			$(
				'form[action*="86d1ebc230c74a9182dc"] *[name="Mod0EditRecord"]'
			).click();
			break;

		case 2:
			$(
				'form[action*="c00e9414db644c4fbb7f"] *[name="EditRecordLast_Section_No"]'
			).val("9");
			$(
				'form[action*="c00e9414db644c4fbb7f"] *[name="Mod0EditRecord"]'
			).click();

			break;

		case 3:
			$("div.cb-cswgf-btns a.nextbtn")
				.addClass("disabled")
				.prop("disabled", true);
			$('*[name="EditRecordLast_Section_No"]').val("9");
			document.querySelector(
				"#cswogf-container #caspioform"
			).submit();
			break;

		case 7:
			$("div.cb-cswgf-btns a.nextbtn")
				.addClass("disabled")
				.prop("disabled", true);
			$(
				'form[action*="d45ec1ea789448e29b84"] *[name="InsertRecordLast_Section_No"]'
			).val("9");
			$(".cb-investments-btns .nextbtn").click();
			break;
	}
}

//for template-update section 1 only
function home_run_update(sectionId) {
	var mpoDetails = $('*[name="EditRecordMPO_Details"]').val();
	console.log(mpoDetails);
	if (mpoDetails == "") {
		alert("MPO Details is required, please select 1 or more item");
		$(".cb-home-run-btn-update").removeClass("disabled");
		// location.reload();
		// $('.cb-home-run-btn').removeAttr('href');
	} else {
		$(".cb-home-run-btn-update").prop("disabled", true);
		$(".cb-home-run-btn-update").addClass("disabled");

		switch (sectionId) {
			case 1:
				$(
					'form[action*="86d1ebc230c74a9182dc"] *[name="EditRecordLast_Section_No"]'
				).val("9");
				$(
					'form[action*="86d1ebc230c74a9182dc"] *[name="Mod0EditRecord"]'
				).click();
				break;

			case 2:
				$(
					'form[action*="c00e9414db644c4fbb7f"] *[name="EditRecordLast_Section_No"]'
				).val("9");
				$(
					'form[action*="c00e9414db644c4fbb7f"] *[name="Mod0EditRecord"]'
				).click();
				break;

			case 3:
				$("div.cb-cswgf-btns a.nextbtn")
					.addClass("disabled")
					.prop("disabled", true);
				$('*[name="EditRecordLast_Section_No"]').val(
					"9"
				);
				document.querySelector(
					"#cswogf-container #caspioform"
				).submit();
				break;

			case 7:
				$("div.cb-cswgf-btns a.nextbtn")
					.addClass("disabled")
					.prop("disabled", true);
				$(
					'form[action*="d45ec1ea789448e29b84"] *[name="InsertRecordLast_Section_No"]'
				).val("9");
				$(".cb-investments-btns .nextbtn").click();
				break;
		}
	}
}

function report_error(isaId) {
	window.open(
		"https://" +
			accountId +
			"/dp/" +
			appKeyPrefix +
			"629411a11f9145949327?ISA_ID=" +
			isaId
	);

	setTimeout(function () {
		$(".cb-hotbuttons button").removeClass("disabled");
		$(".cb-hotbuttons button").prop("disabled", false);
	}, 1000);
}

function returnToDealDirectory(vendorId) {
	$.confirm({
		scrollToPreviousElement: false,
		scrollToPreviousElementAnimate: false,
		type: "secondary",
		columnClass: "col-md-6 col-md-offset-3",
		title: " ",
		theme: "material",
		content: "Are you sure you want to return this to the Deal Directory?",
		backgroundDismiss: true,
		buttons: {
			NO: function () {},
			YES: {
				text: "YES",
				btnClass: "btn-green",
				action: function () {
					// alert(1);
					openModal_v2(
						"",
						"https://" +
							accountId +
							"/dp/" +
							appKeyPrefix +
							"d60b69de2051463b9f78/emb?Vendor_ID=" +
							vendorId,
						"500px",
						"Y"
					);
				},
			},
		},
	});
}

function comCept12monthPurchaseReport(isaId) {
	window.open(
		"https://" +
			accountId +
			"/dp/" +
			appKeyPrefix +
			"dee2f83f2ae4434a99e5?ID=" +
			isaId
	);
}

function view_comment_log(isa_id) {
	jqueryConfirm_ExecuteISA = $.confirm({
		type: "secondary",
		columnClass: "col-md-6 col-md-offset-3",
		icon: "fa fa-th-list",
		title: "Comment Log",
		theme: "material",
		content:
			'<iframe id="cb-comment-log-div" src="./comment-log.php?ISA_ID=' +
			isa_id +
			'" style="height:70vh;"></iframe>',
		backgroundDismiss: false,
		buttons: false,
		boxWidth: "70%",
		useBootstrap: false,
	});
}

function updateLastSectionNo(isaId, lastSectionNo) {
	updateLastSectionNoPopup = $.confirm({
		scrollToPreviousElement: false,
		scrollToPreviousElementAnimate: false,
		closeIcon: false,
		icon: "",
		title: " ",
		theme: "material",
		type: "blue",
		content: ' \
			<div class="mb-5"> \
			<div class="text-center"> \
				Saving \
				<div class="cb-delete-account-related-spinner"><div class="spinner-border text-info" role="status"></div></div> \
			</div> \
			<div id="cb-update-last-section-no-cn" class="d-none"></div> \
			</div>',
		backgroundDismiss: false,
		buttons: false,
		onOpen: function () {
			deployDP(
				"cb-update-last-section-no-cn",
				"https://" +
					accountId +
					"/dp/" +
					appKeyPrefix +
					"2b273abde5a34f36b9a6/emb?ISA_ID=" +
					isaId +
					"&Last_Section_No=" +
					lastSectionNo
			);
		},
	});
}

function liquidReturnsIRR(liquidReturnsId) {
	openModal_v2(
		"",
		"https://" +
			accountId +
			"/dp/" +
			appKeyPrefix +
			"527fa41138894755ab55/emb?id=" +
			liquidReturnsId,
		"80%"
	);
}

function totalReturnsIRR(totalReturnsId) {
	openModal_v2(
		"",
		"https://" +
			accountId +
			"/dp/" +
			appKeyPrefix +
			"ec33712ba5a4443bb08b/emb?id=" +
			totalReturnsId,
		"80%"
	);
}

function dealAssets(isaId) {
	jqueryConfirm = $.confirm({
		scrollToPreviousElement: false,
		scrollToPreviousElementAnimate: false,
		type: "secondary",
		columnClass: "col-md-6 col-md-offset-3",
		title: "",
		boxWidth: "80%",
		theme: "material",
		content:
			'<iframe id="cb-deal-assets-iframe" src="../shared/deal-assets.php?ISA_ID=' +
			isaId +
			'" style="height:500px;"></iframe>',
		buttons: false,
		useBootstrap: false,
		onOpen: function () {
			$(".cb-cog").hide();
		},
		onClose: function () {
			$(".cb-cog").show();
		},
	});
}

//for viewing deal assets of Old Isa
function viewDealAssets(isaId) {
	jqueryConfirm = $.confirm({
		scrollToPreviousElement: false,
		scrollToPreviousElementAnimate: false,
		type: "secondary",
		columnClass: "col-md-6 col-md-offset-3",
		title: "<h2>Carryover from previous investment</h2>",
		boxWidth: "80%",
		theme: "material",
		content:
			'<iframe id="cb-deal-assets-iframe" src="../shared/deal-assets.php?ISA_ID=' +
			isaId +
			'" style="height:500px;"></iframe>',
		buttons: false,
		useBootstrap: false,
		onOpen: function () {
			$(".cb-cog").hide();
		},
		onClose: function () {
			$(".cb-cog").show();
		},
	});
}

function dealAssetsDetails(isaId) {
	jqueryConfirm = $.confirm({
		scrollToPreviousElement: false,
		scrollToPreviousElementAnimate: false,
		type: "secondary",
		columnClass: "col-md-6 col-md-offset-3",
		title: "",
		boxWidth: "80%",
		theme: "material",
		content:
			'<iframe id="cb-deal-assets-iframe" src="../shared/deal-assets-view-details.php?ISA_ID=' +
			isaId +
			'" style="height:500px;"></iframe>',
		buttons: false,
		useBootstrap: false,
		onOpen: function () {
			$(".cb-cog").hide();
		},
		onClose: function () {
			$(".cb-cog").show();
		},
	});
}

function clone_isa(isaId) {
	cloneIsaPopup = $.confirm({
		type: "secondary",
		columnClass: "col-md-6 col-md-offset-3",
		icon: "fa fa-warning",
		title: "Clone ISA",
		theme: "material",
		content: ' \
			<div class="cb-clone-isa-cn mb-5 text-center"> \
				<div>Are you sure you want to clone this E-ISA? </div> \
			</div>',
		backgroundDismiss: false,
		buttons: {
			buttonNo: {
				text: "NO",
			},
			buttonYes: {
				text: "YES",
				btnClass: "btn-green",
				action: function () {
					sessionStorage.setItem(
						"cb-isa-clone-last-location",
						window.location.href
					);
					sessionStorage.setItem(
						"cb-isa-clone-run",
						"Y"
					);

					window.location.href =
						"../shared/clone-isa.php?ISA_ID=" +
						isaId;
				},
			},
		},
	});
}

function mfg_logs(isa_id) {
	jqueryConfirm && jqueryConfirm.close();

	openModal_v2(
		"MFG Approval Details - ISA ID " + isa_id,
		"https://" +
			accountId +
			"/dp/" +
			appKeyPrefix +
			"8d1e784c69a74648a456/emb?ISA_ID=" +
			isa_id,
		"80%"
	);
}

function mfg_logs_details(mfg_log_id) {
	jqueryConfirm && jqueryConfirm.close();

	openModal_v2(
		"",
		"https://" +
			accountId +
			"/dp/" +
			appKeyPrefix +
			"299e98bb214c4249ad80/emb?MFG_Log_ID=" +
			mfg_log_id,
		"80%"
	);
}

function mfg_logs_details_deal_termination(mfg_log_id) {
	jqueryConfirm && jqueryConfirm.close();

	openModal_v2(
		"",
		"https://" +
			accountId +
			"/dp/" +
			appKeyPrefix +
			"bb0b67c6b69b4290b6e6/emb?MFG_Log_ID=" +
			mfg_log_id,
		"80%"
	);
}

function jc_open_iframe(title, iframe_src) {
	relateAllAccountsPopup = $.confirm({
		scrollToPreviousElement: false,
		scrollToPreviousElementAnimate: false,
		type: "secondary",
		columnClass: "col-md-6 col-md-offset-3",
		icon: "",
		title: title,
		theme: "material",
		content: `<iframe src="${iframe_src}" id="jc-iframe"></iframe>`,
		backgroundDismiss: false,
		buttons: false,
		boxWidth: "98%",
		useBootstrap: false,
		onOpen: function () {},
	});
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Disable button on click then submit form

// section 1 - Add
$(document).on(
	"click",
	'form[action*="86d1ebc230c74a9182dc"] input[class^="cbSubmitButton"]',
	function () {
		var mpoDetails = $('*[name="InsertRecordMPO_Details"]').val();
		if (mpoDetails == "") {
			alert(
				"MPO Details is required, please select 1 or more item"
			);
			$(this).prop("disabled", false);
			$(this)
				.closest("form")
				.submit(function () {
					return false;
				});
		} else {
			$(this).prop("disabled", true);
			$(this)[0].closest("form").submit();
		}
	}
);

// section 1 - Update
$(document).on(
	"click",
	'form[action*="86d1ebc230c74a9182dc"] input[name="Mod0EditRecord"]',
	function () {
		var mpoDetails = $('*[name="EditRecordMPO_Details"]').val();
		if (mpoDetails == "") {
			alert(
				"MPO Details is required, please select 1 or more item"
			);
			$(this)
				.closest("form")
				.submit(function () {
					return false;
				});
		} else {
			$(".cb-home-run-btn-update")
				.addClass("disabled")
				.prop("disabled", true);
			$(this).prop("disabled", true);
			$(this)[0].closest("form").submit();
			console.log($(this.closest("form")));
		}
	}
);

// section 2
$(document).on(
	"click",
	".cb-cagr-entry-container .cb-save-n-next-btn",
	function () {
		$(".cb-home-run-btn")
			.addClass("disabled")
			.prop("disabled", true);

		$(".cb-cagr-entry-container .cb-save-n-next-btn").prop(
			"disabled",
			true
		);
		$(this).addClass("disabled");
	}
);

// section 3
$(document).on("click", "div.cb-cswgf-btns a.nextbtn", function () {
	$(".cb-home-run-btn").addClass("disabled").prop("disabled", true);

	$(this).prop("disabled", true);
	$(this).addClass("disabled");
	$(this).removeAttr("onclick");
});

// section 4
$(document).on("click", ".cb-invoice-discounts-btns .nextbtn", function (e) {
	$(this).addClass("disabled");
	$(this).prop("disabled", true);
});

// section 5
$(document).on("click", ".cb-statement-rebates-btns .nextbtn", function (e) {
	$(this).addClass("disabled");
	$(this).prop("disabled", true);
});

// section 6
$(document).on("click", ".cb-eq-rebates-btns .nextbtn", function (e) {
	$(this).addClass("disabled");
	$(this).prop("disabled", true);
});

// section 7
$(document).on("click", ".cb-investments-btns .nextbtn", function () {
	$(".cb-home-run-btn").addClass("disabled").prop("disabled", true);

	$(".cb-investments-btns .nextbtn").prop("disabled", true);
	$(this).addClass("disabled");
});

// section 8
$(document).on("click", ".cb-old-eisa .cb-next-btn", function () {
	// console.log(11);
	$(".cb-old-eisa .cb-next-btn").prop("disabled", true);
	$(this).addClass("disabled");
});

$(document).on(
	"click",
	"#cb-attachments-form #fake_save_and_next",
	function () {
		$(this).addClass("disabled");
		$(this).prop("disabled", true);
	}
);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Disable buttons in allied setup on click

$(document).on("click", ".cb-hotbuttons button", function (e) {
	$(".cb-hotbuttons button").addClass("disabled");
	$(".cb-hotbuttons button").prop("disabled", true);

	e.preventDefault();
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Dashboard Buttons

// Delete Related Account
$(document).on("click", ".cb-db-delete-related-acct-btn", function () {
	var relatedAccountId = $(this).attr("data-related-account-id");
	dashboard_delete_related_accounts(relatedAccountId);
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Save to Page 9

//universal save to page 9
$(document).on("click", ".cb-home-run-btn", function () {
	$(".cb-home-run-btn").addClass("disabled").prop("disabled", true);

	$("div.cb-cswgf-btns a.nextbtn")
		.addClass("disabled")
		.prop("disabled", true);
	$(".cb-invoice-discounts-btns .nextbtn")
		.addClass("disabled")
		.prop("disabled", true);
	$(".cb-statement-rebates-btns .nextbtn")
		.addClass("disabled")
		.prop("disabled", true);
	$(".cb-eq-rebates-btns .nextbtn")
		.addClass("disabled")
		.prop("disabled", true);
	$(".cb-investments-btns .nextbtn")
		.addClass("disabled")
		.prop("disabled", true);
	$(".cb-old-eisa .cb-next-btn")
		.addClass("disabled")
		.prop("disabled", true);
	$("#cb-attachments-form #fake_save_and_next")
		.addClass("disabled")
		.prop("disabled", true);
});

//for template-update only
$(document).on("click", ".cb-home-run-btn-update", function () {
	// $('.cb-home-run-btn').addClass('disabled').prop('disabled', true);

	$("div.cb-cswgf-btns a.nextbtn")
		.addClass("disabled")
		.prop("disabled", true);
	$(".cb-invoice-discounts-btns .nextbtn")
		.addClass("disabled")
		.prop("disabled", true);
	$(".cb-statement-rebates-btns .nextbtn")
		.addClass("disabled")
		.prop("disabled", true);
	$(".cb-eq-rebates-btns .nextbtn")
		.addClass("disabled")
		.prop("disabled", true);
	$(".cb-investments-btns .nextbtn")
		.addClass("disabled")
		.prop("disabled", true);
	$(".cb-old-eisa .cb-next-btn")
		.addClass("disabled")
		.prop("disabled", true);
	$("#cb-attachments-form #fake_save_and_next")
		.addClass("disabled")
		.prop("disabled", true);
});

// - - - This event is used on Section 7
$(document).on("click", ".jconfirm-buttons .btn-danger", function () {
	$(".cb-home-run-btn").removeClass("disabled").prop("disabled", false);
});

document.addEventListener("DataPageReady", function (event) {
	append_home_run_btn(event.detail.appKey);

	// hide cog on modal open
	if ($(".jconfirm.jconfirm-material.jconfirm-open").length) {
		$(".cb-cog").hide();
	}
});

//--- deploy App Training button on each page
setTimeout(function () {
	if (window.location.href.includes("direction-to-pay")) {
		document.getElementById("app-training-btn").style.cssText =
			"display: none;";
	}

	var appTrainingBtn = document.getElementById("app-training-btn");
	var pageImgArr = {
		"template-new": "Page_1",
		"template-update": "Page_1",
		"customer-sales-no-growth": "Page_2",
		"customer-sales-growth": "Page_3",
		"invoice-discounts": "Page_4",
		"statement-rebates": "Page_5",
		"eq-rebates": "Page_6",
		"manufacturer-rebates-investments": "Page_7",
		investments: "Page_8",
		"estimated-returns": "Page_9",
		attachments: "Page_10",
		"allied-set-up": "Page_11",
	};

	if (appTrainingBtn) {
		appTrainingBtn.addEventListener("click", function () {
			var pageUrl = window.location.href;

			for (var pageKey in pageImgArr) {
				if (pageUrl.includes(pageKey)) {
					var pageName = pageImgArr[
						pageKey
					].replace(/_/g, " ");
					var imgUrl = `../partials/app-training-qr/${pageImgArr[pageKey]}.png`;
					openQR(pageName, imgUrl);
					break;
				}
			}
		});
	}
}, 1500);

function openQR(title, imgSrc, boxWidth, cancelReload) {
	var cancelReladElem = "";

	if (cancelReload == "Y") {
		cancelReladElem =
			'<input type="hidden" class="cb-cancel-reload"> ';
	}

	jqueryConfirm = $.confirm({
		scrollToPreviousElement: false,
		scrollToPreviousElementAnimate: false,
		type: "secondary",
		columnClass: "col-md-6 col-md-offset-3",
		title: title,
		boxWidth: boxWidth,
		theme: "material",
		content:
			'<div id="cb-jc-body" class="d-flex justify-content-center"></div>' +
			cancelReladElem,
		buttons: false,
		useBootstrap: false,
		onOpen: function () {
			var img = document.createElement("img");
			img.src = imgSrc;
			img.width = 300;
			img.height = 600;
			document.getElementById("cb-jc-body").appendChild(img);

			$(".cb-cog").hide();
		},
		onClose: function () {
			$(".cb-cog").show();
		},
	});
}

/*---deploy document hub redirection button in page 10*/
document.addEventListener("DataPageReady", function (e) {
	if (e.detail.appKey.includes("302eb8396c21404d87ad")) {
		loadDocuHubBtn();
	}
});

/*---deploy document hub redirection button in view details
    approval-view-details.php and deal-sheet-view.php
    */
setTimeout(function () {
	var docuHub = document.querySelector(".cb-document-hub");

	if (docuHub) {
		// console.log(docuHub)
		// console.log(1,docuHub.querySelector('img'))
		loadDocuHubBtn();
	}
}, 1500);

function loadDocuHubBtn() {
	var docuHub = document.querySelector(".cb-document-hub");
	var docu_area = docuHub.querySelector("area");
	var docu_img = docuHub.querySelector("img");
	var docu_map = docuHub.querySelector("map");
	if (docuHub) {
		const urlParams = new URLSearchParams(window.location.search);
		var docuIsaId = urlParams.get("ISA_ID");
		// alert(docuIsaId)
		var newImg = document.createElement("img");
		newImg.src = "../img/DH-view-edit.png";
		// newImg.style.width = '300px';
		newImg.style.width = "400px";
		newImg.useMap = "#cb-docu-redirect";
		newImg.classList.add("hover-overlay");

		var newMap = document.createElement("map");
		newMap.name = "cb-docu-redirect"; // Set the name of the map

		var newArea = document.createElement("area");
		newArea.shape = "rect";
		// newArea.coords = '10,180,100,250'; //for 300px
		newArea.coords = "10,230,120,290"; //for 400px
		newArea.href = `../shared/document-hub.php?ISA_ID=${docuIsaId}`;
		newArea.target = "_blank";

		if (!docu_area) {
			newMap.appendChild(newArea);
		}
		if (!docu_img) {
			docuHub.appendChild(newImg);
		}
		if (!docu_map) {
			docuHub.appendChild(newMap);
		}
	}
}

//--reset search filter
function reset_filter() {
	let url = new URL(window.location.href);
	let params = new URLSearchParams(url.search);

	if (!params.has("cbResetParam")) {
		params.append("cbResetParam", "1");
		url.search = params.toString();
	}

	window.location.href = url.toString();
}

// hide the page on load, the display when a DP is ready
document.addEventListener("DataPageReady", function (e) {
	var interval = setInterval(function () {
		$("body").removeClass("hide");
		clearInterval(interval);
	}, 500);
});
