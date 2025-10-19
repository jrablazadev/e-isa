document.addEventListener(
	"DataPageReady",
	function dp_ready_9a9640504e0a458aa791(event) {
		if (!event) {
			return false;
		}

		const appkey = event.detail.appKey;
		const appkey_withoutprefix = appkey
			.substring(8, appkey.length)
			.toLowerCase();

		if (["9a9640504e0a458aa791"].includes(appkey_withoutprefix)) {
			breach_comments_email_users.dp_ready();

			document.removeEventListener(
				"DataPageReady",
				dp_ready_9a9640504e0a458aa791
			);
		}
	}
);

document.addEventListener(
	"BeforeFormSubmit",
	function dp_submit_9a9640504e0a458aa791(event) {
		if (!event) {
			return false;
		}

		const appkey = event.detail.appKey;
		const appkey_withoutprefix = appkey
			.substring(8, appkey.length)
			.toLowerCase();

		if (["9a9640504e0a458aa791"].includes(appkey_withoutprefix)) {
			breach_comments_email_users.dp_submit();

			event.preventDefault();
		}
	}
);

const breach_comments_email_users = {
	dp_ready: function () {
		$("#caspioform").hide();

		$("#caspioform > div").addClass("m-auto");

		$('*[name="Submit"]').val("Send email to selected users");

		breach_comments_email_users.get_users_from_glid();
	},

	resize_parent_iframe: function () {
		window.parent.$("#jc-iframe").css({
			height: $(window.parent).height(),
		});
	},

	get_users_from_glid: function () {
		// retrieve data in dropdown
		const dropdowns = [
			"cbParamVirtual8", // DSM
			"cbParamVirtual4", // RVPS
			"cbParamVirtual6", // RVPO
			"cbParamVirtual7", // DOM
			"cbParamVirtual9", // RSM
			"cbParamVirtual10", // BDM
			"cbParamVirtual11", // SM
		];

		let dropdown_loaded = 0;
		let data = {};

		$.each(dropdowns, function (i, field) {
			const elem = $(`*[name="${field}"]`);

			// cascading dropdown
			elem.change(function () {
				$(this)
					.find("option")
					.each(function () {
						data[$(this).html().trim()] =
							$(this).val();
						dropdown_loaded++;

						// once all dropdown data has been loaded, construct dropdown
						if (
							dropdowns.length ==
							dropdown_loaded
						) {
							breach_comments_email_users.construct_dropdown_user_from_glid(
								data
							);
							breach_comments_email_users.multiselect(
								"cbParamVirtual1"
							);
							breach_comments_email_users.multiselect(
								"cbParamVirtual2"
							);
							breach_comments_email_users.multiselect(
								"cbParamVirtual3"
							);
							breach_comments_email_users.resize_parent_iframe();
							$("#caspioform").show();
						}
					});
			});
		});
	},

	construct_dropdown_user_from_glid: function (data) {
		// return false;

		let dropdown_options = "";

		$.each(data, function (name, id) {
			if (!id) {
				return true;
			}

			dropdown_options += `<option value="${id}">${name}</option>`;
		});

		$('*[name="cbParamVirtual2"]').html(dropdown_options);
	},

	multiselect: function (elem) {
		$(`*[name="${elem}"]`).attr("multiple", true).val([]);

		// multiselect
		$(`*[name="${elem}"]`)
			// .attr("data-actions-box", "true")
			.attr("title", "-- Select --")
			.attr("data-selected-text-format", "count")
			.attr("data-live-search", "true")
			.selectpicker();

		$(
			"div.dropdown.bootstrap-select.show-tick.cbFormSelect"
		).removeClass("cbFormSelect");
	},

	dp_submit: function () {
		const users_breach = $('*[name="cbParamVirtual1"]').val();
		const users_glid = $('*[name="cbParamVirtual2"]').val();
		const users_all = $('*[name="cbParamVirtual3"]').val();
		let selected_users = [].concat(
			users_breach,
			users_glid,
			users_all
		);

		selected_users = [...new Set(selected_users)];

		$(".ctFormError").remove();

		// console.log({
		// 	users_breach,
		// 	users_glid,
		// 	users_all,
		// 	selected_users,
		// });

		if (selected_users.length == 0) {
			$('*[name="Submit"]')
				.parent()
				.append(
					breach_comments_email_users.error_msg(
						"Select users to email"
					)
				);
			return false;
		}

		if (selected_users.length >= 20) {
			$('*[name="Submit"]')
				.parent()
				.append(
					breach_comments_email_users.error_msg(
						"Only 20 users are allowed to be selected"
					)
				);
			return false;
		}

		window.parent
			.$(
				'form[action*="ed41e5780e824c65afb7"] *[name="InlineAddUsers_To_Email"]'
			)
			.val("|" + selected_users.join("|") + "|");

		window.parent
			.$(
				'form[action*="ed41e5780e824c65afb7"] *[name="Mod0InlineAdd"]'
			)
			.click();

		window.parent.$(".jconfirm-closeIcon:last").click();
	},

	error_msg: function (msg) {
		return `
                        <span class="cbFormError ctFormError">
                                <span class="cbFormErrorMarker">
                                        <img src="https://${globalAccountId}/images/error_icon_exclamation_disc.gif" alt="Exclamation-disc" style="border: 0px;" width="14" height="14">
                                </span>
                                ${msg}
                        </span>
                `;
	},
};
