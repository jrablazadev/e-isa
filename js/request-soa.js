let loaded = 0;
const erroricon = `
        <span class="cbFormError ctFormError">
                <span class="cbFormErrorMarker">
                        <img src="https://${globalAccountId}/images/error_icon_exclamation_disc.gif" alt="Exclamation-disc" style="border: 0px;" width="14" height="14">
                </span>
                Required
        </span>
`;

document.addEventListener("DataPageReady", function (event) {
	if (loaded == 0) {
		resizeParentIframe();

		$("#caspioform").hide();

		$('*[name="cbParamVirtual7"]').change(function () {
			$(this).hide();
			$(this)
				.closest("div")
				.append(
					`<span class="cbFormLabel" style="font-weight:normal;">${$(
						this
					).val()}</span>`
				);

			resizeParentIframe();
			$("#caspioform").show();
		});

		// retrieve data in dropdown
		const dropdownSource = [
			"cbParamVirtual1", // Breach Team
			"cbParamVirtual3", // DSM
			"cbParamVirtual4", // DOM
			"cbParamVirtual5", // RVPS
			"cbParamVirtual6", // RVPO
		];

		let loadedDropdown = 0;
		let users = {};

		$.each(dropdownSource, function (i, field) {
			const elem = $(`*[name="${field}"]`);

			if (i == 0) {
				// dropdown
				elem.find("option").each(function () {
					users[$(this).html().trim()] =
						$(this).val();
				});
			} else {
				// cascading dropdown
				elem.change(function () {
					$(this)
						.find("option")
						.each(function () {
							users[
								$(this)
									.html()
									.trim()
							] = $(this).val();
							loadedDropdown++;

							// once all dropdown data has been retrieve, construct dropdown
							if (
								loadedDropdown ==
								4
							) {
								constructDropdownOptions(
									users
								);
								resizeParentIframe();
							}
						});
				});
			}

			elem.closest("div").hide();
			elem.closest("div").prev().hide();
		});

		$('*[name="Submit"]').val("Send Request");

		loaded++;
	}

	$("#caspioform > div").addClass("m-auto");
});

document.addEventListener("BeforeFormSubmit", function (event) {
	$(".ctFormError").remove();

	// get multi select value
	let data = $(`select[name="cbParamVirtual8"]`).val();
	$(`*[name$="RecordUsers_To_Email"]`).val(data.join() + ",");

	if ($('*[name$="RecordUsers_To_Email"]').val() == "") {
		$('*[name*="cbParamVirtual8"]')
			.closest("div")
			.append(erroricon);

		event.preventDefault();
	}

	if ($('*[name$="RecordNote"]').val() == "") {
		$('*[name$="RecordNote"]').closest("div").append(erroricon);

		event.preventDefault();
	}

	if ($('*[name="cbParamVirtual2"]').prop("checked") == false) {
		$('*[name="cbParamVirtual2"]').closest("div").append(erroricon);
		// console.log($('*[name="cbParamVirtual2"]').closest("div"));

		event.preventDefault();
	}
});

const resizeParentIframe = () => {
	window.parent.$("#jc-iframe").css({
		height: $(window.parent).height(),
	});
};

const constructDropdownOptions = (data) => {
	let dropdownOption = "";
	let requestorId = $('*[name$="RecordCreated_By"]').val();

	$.each(data, function (name, id) {
		console.log(requestorId, id);

		// skip requestor name in dropdown
		if (requestorId == id) {
			return;
		}

		dropdownOption += `<option value="${id}">${name}</option>`;
	});

	$('*[name="cbParamVirtual8"]').append(dropdownOption);

	usersToEmailMultiSelect();
};

const usersToEmailMultiSelect = () => {
	// let field = form.find(`*[name*="RecordUsers_To_Email"]`).val();
	// field = field.split(" OR ");

	// assign default value
	$(`*[name="cbParamVirtual8"]`).attr("multiple", true).val("");

	// multiselect
	$(`*[name="cbParamVirtual8"]`)
		.attr("data-actions-box", "true")
		.attr("title", "-- Select --")
		.attr("data-selected-text-format", "count")
		.selectpicker();

	$("div.dropdown.bootstrap-select.show-tick.cbFormSelect").removeClass(
		"cbFormSelect"
	);
};
