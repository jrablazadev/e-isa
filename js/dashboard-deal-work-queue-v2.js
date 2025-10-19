const dashboard_dealWorkQueue = {
	dataPage_fields: [
		`form[action*="${appKeyPrefix}4715d70e3b0049f9977e"] tr[data-cb-name="data"] td:nth-child(12)`, // isa team
		`form[action*="${appKeyPrefix}ef0488b6fd5a42668381"] tr[data-cb-name="data"] td:nth-child(12)`, //  ism / so / ar / ap / accounting
		`form[action*="${appKeyPrefix}7e78bfffce2140e897e4"] tr[data-cb-name="data"] td:nth-child(12)`, // dsm
		`form[action*="${appKeyPrefix}c0cd16c2b63a4409bfc4"] tr[data-cb-name="data"] td:nth-child(10)`, // rsm
		`form[action*="${appKeyPrefix}004eeaea2c7745e5ae04"] tr[data-cb-name="data"] td:nth-child(10)`, // bdm
		`form[action*="${appKeyPrefix}802dc2840bea43189488"] tr[data-cb-name="data"] td:nth-child(12)`, // csm / as
		`form[action*="${appKeyPrefix}baa1a7d4eeb04876b12a"] tr[data-cb-name="data"] td:nth-child(12)`, // vpcs / vpas / srf
		`form[action*="${appKeyPrefix}f91c845405554b4f85f7"] tr[data-cb-name="data"] td:nth-child(12)`, // dom
		`form[action*="${appKeyPrefix}618c4b059e5940538a50"] tr[data-cb-name="data"] td:nth-child(12)`, // SM
		`form[action*="${appKeyPrefix}3f9f6daf53f7485298ba"] tr[data-cb-name="data"] td:nth-child(12)`, // RVPS
		`form[action*="${appKeyPrefix}0e4ea070622a487ebc5e"] tr[data-cb-name="data"] td:nth-child(12)`, // RVPO
		`form[action*="${appKeyPrefix}ffc1c7c866bc4df4b5af"] tr[data-cb-name="data"] td:nth-child(12)`, // Tom Blawusch / CFO / COO / CEO
		`form[action*="${appKeyPrefix}6395b6c851194e1c9291"] tr[data-cb-name="data"] td:nth-child(12)`, // ADMIN / ISA CREDIT
		`form[action*="${appKeyPrefix}d8053e16d8d14ecf8c21"] tr[data-cb-name="data"] td:nth-child(12)`, // ISA PRICING
		`form[action*="${appKeyPrefix}7446581508a7475095a0"] tr[data-cb-name="data"] td:nth-child(12)`, // ISA FINANCE
		// `form[action*="${appKeyPrefix}a850778d63474cd98958"] tr[data-cb-name="data"] td:nth-child(12)`, // ISA PROCUREMENT
		`form[action*="${appKeyPrefix}54dd726bcf644b4bb4fb"] tr[data-cb-name="data"] td:nth-child(12)`, // logic
		`form[action*="${appKeyPrefix}372cdb98ea0342b0b0ca"] tr[data-cb-name="data"] td:nth-child(12)`, // tsm
		`form[action*="${appKeyPrefix}3eb46814cace4cfd9c7a"] tr[data-cb-name="data"] td:nth-child(12)`, // breach tab
	],

	percent_complete_graph: function (elem) {
		const dataValue = '<div class="progress mx-2">';
		const progressLeft = '<span class="progress-left">';
		const leftProgressBar =
			'<span class="progress-bar border-primary"></span>';
		const progressRight = '<span class="progress-right">';
		const rightProgressBar =
			'<span class="progress-bar border-primary"></span>';
		const progressValue =
			'<div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">';
		const progressPercent = '<div class="progress-percent">';

		// console.log(elem);
		// console.log($(elem));

		$(elem).each(function () {
			// skip
			if ($(this).attr("data-modified") == "Y") {
				return true;
			}

			let rawNumber = $(this).html().split("<")[0] || "";

			if (rawNumber === "&nbsp;") {
				rawNumber = "0.0";
			}

			let percentage = (rawNumber * 100).toFixed(1);

			if (percentage == 0) {
				percentage = "0.0";
			}

			$(this).html(
				dataValue +
					progressLeft +
					leftProgressBar +
					"</span>" +
					progressRight +
					rightProgressBar +
					"</span>" +
					progressValue +
					progressPercent +
					percentage +
					"%</div> </div> </div>"
			);

			let left = $(this).find(".progress-left .progress-bar");
			let right = $(this).find(
				".progress-right .progress-bar"
			);

			$(this).attr(
				"onclick",
				"dashboard_dealWorkQueue.open_mpo_detail_report(this)"
			);
			$(this).addClass("cb-mpo-completion");

			if (percentage > 0) {
				if (percentage <= 49.9) {
					if (
						percentage >= 0 &&
						percentage <= 9.9
					) {
						return right.css(
							"transform",
							"rotate(" +
								dashboard_dealWorkQueue.percentageToDegrees(
									0
								) +
								"deg)"
						);
					}

					if (
						percentage >= 10 &&
						percentage <= 19.9
					) {
						return right.css(
							"transform",
							"rotate(" +
								dashboard_dealWorkQueue.percentageToDegrees(
									10
								) +
								"deg)"
						);
					}

					if (
						percentage >= 20 &&
						percentage <= 29.9
					) {
						return right.css(
							"transform",
							"rotate(" +
								dashboard_dealWorkQueue.percentageToDegrees(
									20
								) +
								"deg)"
						);
					}

					if (
						percentage >= 30 &&
						percentage <= 39.9
					) {
						return right.css(
							"transform",
							"rotate(" +
								dashboard_dealWorkQueue.percentageToDegrees(
									30
								) +
								"deg)"
						);
					}

					if (
						percentage >= 40 &&
						percentage <= 49.9
					) {
						return right.css(
							"transform",
							"rotate(" +
								dashboard_dealWorkQueue.percentageToDegrees(
									40
								) +
								"deg)"
						);
					}
				} else {
					right.css(
						"transform",
						"rotate(180deg)"
					);

					if (
						percentage >= 50 &&
						percentage <= 59.9
					) {
						return left.css(
							"transform",
							"rotate(" +
								dashboard_dealWorkQueue.percentageToDegrees(
									50 - 50
								) +
								"deg)"
						);
					}

					if (
						percentage >= 60 &&
						percentage <= 69.9
					) {
						return left.css(
							"transform",
							"rotate(" +
								dashboard_dealWorkQueue.percentageToDegrees(
									60 - 50
								) +
								"deg)"
						);
					}

					if (
						percentage >= 70 &&
						percentage <= 79.9
					) {
						return left.css(
							"transform",
							"rotate(" +
								dashboard_dealWorkQueue.percentageToDegrees(
									70 - 50
								) +
								"deg)"
						);
					}

					if (
						percentage >= 80 &&
						percentage <= 89.9
					) {
						return left.css(
							"transform",
							"rotate(" +
								dashboard_dealWorkQueue.percentageToDegrees(
									80 - 50
								) +
								"deg)"
						);
					}

					if (
						percentage >= 90 &&
						percentage <= 99.9
					) {
						return left.css(
							"transform",
							"rotate(" +
								dashboard_dealWorkQueue.percentageToDegrees(
									90 - 50
								) +
								"deg)"
						);
					}

					if (percentage >= 100) {
						return left.css(
							"transform",
							"rotate(" +
								dashboard_dealWorkQueue.percentageToDegrees(
									100 - 50
								) +
								"deg)"
						);
					}
				}
			}

			$(this).attr("data-modified", "Y");
		});
	},

	percentageToDegrees: function (percentage) {
		return (percentage / 100) * 360;
	},

	open_mpo_detail_report: function (elem) {
		let row = $(elem).closest("tr");
		let isa_id = row.find(".cb-cog").attr("data-isa-id");

		window.open(
			`${cbDataPagePrefix}d73be61d9bb142c8b3bd?cbResetParam=1&ID=${isa_id}`,
			"_blank"
		);
	},

	dataPageReady: function () {
		document.addEventListener("DataPageReady", function (event) {
			dashboard_dealWorkQueue.dataPage_fields.map((i) => {
				if (
					i
						.toLowerCase()
						.contains(
							event.detail.appKey.toLowerCase()
						)
				) {
					dashboard_dealWorkQueue.percent_complete_graph(
						i
					);
				}
			});
		});
	},
};

dashboard_dealWorkQueue.dataPageReady();
