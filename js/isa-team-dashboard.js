var jqueryConfirm_ExecuteISA;
var jQueryConfirm_ReturnToContractPhase;

// clone_isa([@field:ISA_ISA_ID])
function execute_isa(ISA_ID) {
	jqueryConfirm_ExecuteISA = $.confirm({
		type: "secondary",
		columnClass: "col-md-6 col-md-offset-3",
		icon: "fa fa-warning",
		title: "Execute ISA",
		theme: "material",
		content:
			'<iframe id="execute-isa-iframe" src="./execute-isa.php?ISA_ID=' +
			ISA_ID +
			'" style="height:120px;"></iframe>',
		backgroundDismiss: false,
		closeIcon: false,
		buttons: {
			No_Btn: {
				text: "NO",
				btnClass: "btn-default",
				action: function () {},
			},
			Yes_Btn: {
				text: "YES",
				btnClass: "btn-green",
				action: function () {
					jqueryConfirm_ExecuteISA.buttons.No_Btn.disable();
					jqueryConfirm_ExecuteISA.buttons.Yes_Btn.disable();

					$("#execute-isa-iframe")
						.contents()
						.find(".cb-spinner")
						.html(
							' <div class="spinner-border text-primary" role="status"></div> <div>Saving please wait..</div> '
						);
					$("#execute-isa-iframe")
						.contents()
						.find(".cb-dp-container")
						.hide();

					$("#execute-isa-iframe")
						.contents()
						.find(
							'*[name="Mod0EditRecord"]'
						)
						.click();

					return false;
				},
			},
			Ok_Btn: {
				text: "Ok",
				btnClass: "btn-default",
				action: function () {},
			},
		},
		contentLoaded: function () {
			jqueryConfirm_ExecuteISA.buttons.No_Btn.hide();
			jqueryConfirm_ExecuteISA.buttons.Yes_Btn.hide();
			jqueryConfirm_ExecuteISA.buttons.Ok_Btn.hide();
		},
		onOpen: function () {
			// $('.jconfirm-buttons').hide();

			jqueryConfirm_ExecuteISA.buttons.No_Btn.hide();
			jqueryConfirm_ExecuteISA.buttons.Yes_Btn.hide();
			jqueryConfirm_ExecuteISA.buttons.Ok_Btn.hide();
		},
		onClose: function () {
			// refresh
		},
	});
}

// inactive_isa([@field:ISA_ISA_ID])
function inactive_isa(ISA_ID) {
	$.confirm({
		type: "secondary",
		columnClass: "col-md-6 col-md-offset-3",
		icon: "fa fa-warning",
		title: "Inactivate ISA",
		theme: "material",
		content: "Are you sure you would like to inactivate this record? <br/> This record will be removed from the list.",
		backgroundDismiss: true,
		buttons: {
			NO: function () {},
			YES: {
				text: "YES",
				btnClass: "btn-green",
				action: function () {
					window.location.href =
						"./scratch-pad-delete.php?User_Group=Y&ISA_ID=" +
						ISA_ID;
				},
			},
		},
	});
}

function exect_work_queue_view(isa_id) {
	var refresh = false;

	jqueryConfirm_ExecuteISA = $.confirm({
		type: "secondary",
		columnClass: "col-md-6 col-md-offset-3",
		icon: "far fa-eye",
		title: "Execution Work Queue - View",
		theme: "material",
		content:
			'<iframe id="cb-exectqueue-view-iframe" src="./dept-execution-status.php?ISA_ID=' +
			isa_id +
			'" style="height:70vh;"></iframe>',
		backgroundDismiss: false,
		buttons: false,
		boxWidth: "70%",
		useBootstrap: false,
		onClose: function () {
			if (refresh) {
				$(".cb-execution-work .cbSearchButton")
					.eq(0)
					.click();
			}
		},
	});
}

function refresh_exec_wq() {
	for (var key in window.dataPageManagerObj.dataPages) {
		if (key.search("25d550002374e8f1c2ba439fa800") != -1) {
			window.dataPageManagerObj.dataPages[key].refresh();
		}
	}
}

function refresh_contract_phase() {
	// console.log( 'refresh contract phase' );

	for (var key in window.dataPageManagerObj.dataPages) {
		if (key.search("25d55000fdddd86086af4c4bad51") != -1) {
			window.dataPageManagerObj.dataPages[key].refresh();
		}
	}
}

function return_to_contact_phase(isa_id) {
	jQueryConfirm_ReturnToContractPhase = $.confirm({
		scrollToPreviousElement: false,
		scrollToPreviousElementAnimate: false,
		type: "secondary",
		columnClass: "col-md-6 col-md-offset-3",
		icon: "",
		title: "ISA " + isa_id + " - Return to Contract Phase",
		theme: "material",
		content: '<div id="cb-return-to-contract-phase"><div class="spinner-border text-info" role="status"></div></div>',
		backgroundDismiss: false,
		buttons: false,
		onOpen: function () {
			deployDP(
				"cb-return-to-contract-phase",
				"https://caspio.thenetwork-crm.com/dp/25d55000694e8349e835424b8c23/emb?ISA_ID=" +
					isa_id
			);
		},
	});
}
