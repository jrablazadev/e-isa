document.addEventListener(
	"DataPageReady",
	function db_ed41e5780e824c65afb7(event) {
		if (!event) {
			return false;
		}

		const appkey = event.detail.appKey;
		const appkey_withoutprefix = appkey
			.substring(8, appkey.length)
			.toLowerCase();

		if (["ed41e5780e824c65afb7"].includes(appkey_withoutprefix)) {
			breach_comments.dp_ready();

			// document.removeEventListener(
			// 	"DataPageReady",
			// 	db_ed41e5780e824c65afb7
			// );
		}
	}
);

var breach_comments = {
	dp_ready: function () {
		// create custom button
		breach_comments.add_custom_btn();
		breach_comments.parse_emails_to_sent();
		breach_comments.assign_default_termination_step();
	},

	assign_default_termination_step: function (delay = true) {
		const form = $('form[action*="ed41e5780e824c65afb7"]');
		const form_url = form.attr("action");
		const url_params = new URLSearchParams(form_url);
		const default_termination_step_id = url_params.get(
			"Termination_Step_ID"
		);
		const termination_step_id_elem = form.find(
			`*[name="InlineAddTermination_Step_ID"]`
		);

		if (termination_step_id_elem.attr("data-modified") != "Y") {
			setTimeout(
				function () {
					termination_step_id_elem.val(
						default_termination_step_id
					);

					termination_step_id_elem.css({
						"pointer-events": "none",
						cursor: "not-allowed",
					});

					termination_step_id_elem.attr(
						"data-modified",
						"Y"
					);
				},
				delay ? 1000 : 0
			);
		}
	},

	add_custom_btn: function () {
		const form = $('form[action*="ed41e5780e824c65afb7"]');
		const btn = form.find('*[name="Mod0InlineAdd"]');

		if (btn.attr("data-custom-button-added") != "Y") {
			btn.hide();
			btn.parent().append(
				`<input type="button" class="cbResultSetAddButton" value="ADD" onclick="breach_comments.show_popup_users_to_email()">`
			);
			btn.attr("data-custom-button-added", "Y");
		}
	},

	show_popup_users_to_email: function () {
		const form = $('form[action*="ed41e5780e824c65afb7"]');
		const notes = form.find('*[name*="InlineAddComment"]');
		const isa_id = form.find('*[name*="InlineAddISA_ID"]').val();

		const erroricon = `
			<span class="cbFormError ctFormError">
				<span class="cbFormErrorMarker">
					<img src="https://${globalAccountId}/images/error_icon_exclamation_disc.gif" alt="Exclamation-disc" style="border: 0px;" width="14" height="14">
				</span>
				Required
			</span>
		`;

		// validate required fields
		if (notes.val() == "") {
			notes.parent().append(erroricon);
			return false;
		}

		// show datapage
		$.confirm({
			scrollToPreviousElement: false,
			scrollToPreviousElementAnimate: false,
			type: "secondary",
			columnClass: "col-md-6 col-md-offset-3",
			icon: "",
			title: false,
			theme: "material",
			content: `<div class="text-center">Would you like to send an email update?</div>`,
			backgroundDismiss: false,
			buttons: {
				NO: function () {
					breach_comments.assign_default_termination_step(
						false
					);
					$(
						'form[action*="ed41e5780e824c65afb7"] *[name="Mod0InlineAdd"]'
					).click();
				},
				YES: {
					text: "YES",
					btnClass: "btn-green",
					action: function () {
						breach_comments.assign_default_termination_step(
							false
						);
						jc_open_iframe(
							`ISA ${isa_id} - Select users to email`,
							`../shared/breach-comments-email-users.php?ISA_ID=${isa_id}`
						);
					},
				},
			},
			boxWidth: "30%",
			useBootstrap: false,
			onOpen: function () {},
		});
	},

	parse_emails_to_sent: function () {
		$(
			'form[action*="ed41e5780e824c65afb7"] tr[data-cb-name="data"] td:nth-child(4)'
		).each(function () {
			if ($(this).attr("data-parse") != "Y") {
				const val = $(this).html().split("|");
				let html = "<div>";

				$.each(val, function (i, v) {
					html += `<div>${v}</div>`;
				});

				html += "</div>";

				$(this).html(html);
				$(this).attr("data-parse", "Y");
			}
		});
	},
};

var auto_show_breach_comments = 0;

if (urlVars["Show_Breach_Comments"] == "Y" && auto_show_breach_comments == 0) {
	view_comments_of_isa_breach(
		urlVars["ISA_ID"],
		urlVars["Group_ID"],
		urlVars["Termination_Step_ID"]
	);

	auto_show_breach_comments++;
}
