const breach_dps_fields = {
	"3eb46814cace4cfd9c7a": {
		// breach team
		// source field, virtual field
		status: ["Value7_1", "cbParamVirtual1"],
		termination_step: ["Value8_1", "cbParamVirtual2"],
	},
	"6395b6c851194e1c9291": {
		// isa credit
		// source field, virtual field
		status: ["Value7_1", "cbParamVirtual1"],
		termination_step: ["Value8_1", "cbParamVirtual2"],
	},
	"4715d70e3b0049f9977e": {
		// isa team
		// source field, virtual field
		status: ["Value7_1", "cbParamVirtual1"],
		termination_step: ["Value8_1", "cbParamVirtual2"],
	},
	d8053e16d8d14ecf8c21: {
		// isa pricing
		// source field, virtual field
		status: ["Value6_1", "cbParamVirtual1"],
		termination_step: ["Value7_1", "cbParamVirtual2"],
	},
	"7446581508a7475095a0": {
		// isa finance
		// source field, virtual field
		status: ["Value6_1", "cbParamVirtual1"],
		termination_step: ["Value7_1", "cbParamVirtual2"],
	},
	"54dd726bcf644b4bb4fb": {
		// isa log1c ICS
		// source field, virtual field
		status: ["Value6_1", "cbParamVirtual1"],
		termination_step: ["Value7_1", "cbParamVirtual2"],
	},
};

let breach_dps_arr = [];

for (const appkey in breach_dps_fields) {
	breach_dps_arr.push(appkey);
}

document.addEventListener("DataPageReady", function (event) {
	const appkey = event.detail.appKey;
	const appkey_withoutprefix = appkey
		.substring(8, appkey.length)
		.toLowerCase();

	if (breach_dps_arr.includes(appkey_withoutprefix)) {
		const form = $(`form[action*="${appkey}"]`);
		const [status_source, status_virtual] =
			breach_dps_fields[appkey_withoutprefix]["status"] || {};
		const [term_step_source, term_step_virtual] =
			breach_dps_fields[appkey_withoutprefix][
				"termination_step"
			] || {};

		//--------------------------------------------------------------> Status Dropdown

		let status = form.find(`*[name="${status_source}"]`).val();
		status = status.split(" OR ");

		// assign default value
		form.find(`*[name="${status_virtual}"]`)
			.attr("multiple", true)
			.val(status);

		// multiselect
		form.find(`*[name="${status_virtual}"]`)
			.attr("title", "-- Status --")
			.attr("data-selected-text-format", "count")
			.selectpicker();

		//--------------------------------------------------------------> Termination Dropdown

		let termination_step = form
			.find(`*[name="${term_step_source}"]`)
			.val();
		termination_step = termination_step.split(" OR ");

		// assign default value
		form.find(`*[name="${term_step_virtual}"]`)
			.attr("multiple", true)
			.val(termination_step);

		// multiselect
		form.find(`*[name="${term_step_virtual}"]`)
			.attr("title", "-- Termination Steps --")
			.attr("data-selected-text-format", "count")
			.selectpicker();

		//--------------------------------------------------------------> multiselect - fix UI issue
		form.find(
			"div.dropdown.bootstrap-select.show-tick.cbFormSelect"
		).removeClass("cbFormSelect");

		$(
			`form[action*="${appkey_withoutprefix}"] .btn.dropdown-toggle.btn-light.bs-placeholder`
		).css({ color: "initial" });

		//--------------------------------------------------------------> hide submit button
		// console.log(
		// 	$(
		// 		`form[action*="${appkey_withoutprefix}"] .cbSearchButtonContainer`
		// 	)
		// );
		$(
			`form[action*="${appkey_withoutprefix}"] .cbSearchButtonContainer`
		).hide();
	}
});

document.addEventListener("BeforeFormSubmit", function (event) {
	const appkey = event.detail.appKey;
	const appkey_withoutprefix = appkey
		.substring(8, appkey.length)
		.toLowerCase();

	if (breach_dps_arr.includes(appkey_withoutprefix)) {
		const form = $(`form[action*="${appkey}"]`);
		const [status_source, status_virtual] =
			breach_dps_fields[appkey_withoutprefix]["status"] || {};
		const [term_step_source, term_step_virtual] =
			breach_dps_fields[appkey_withoutprefix][
				"termination_step"
			] || {};

		// Get value of Status Dropdown
		let status = form
			.find(`select[name="${status_virtual}"]`)
			.val();
		form.find(`*[name="${status_source}"]`).val(
			status.join(" OR ")
		);

		// Get value of Status Dropdown
		let termination_step = form
			.find(`select[name="${term_step_virtual}"]`)
			.val();
		form.find(`*[name="${term_step_source}"]`).val(
			termination_step.join(" OR ")
		);
	}
});

function reset_breach_search(appkey) {
	const form = $(`form[action*="${appkey}"]`);
	form.find("select").val("");
	form.find('input[name="cbParamVirtual5"]').val("");
	form.find('input[name="cbParamVirtual6"]').val("");
	form.find(".ct-filter-btn").click();
}
