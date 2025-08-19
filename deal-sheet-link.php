<?php include_once "./partials/config.php"; ?>

<!doctype html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">


	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
	<script src="./lib/jquery-3.3.1.min.js"></script>
	<script src="./js/common.js?v=<?php echo date('YmdHis'); ?>"></script>
	<link rel="stylesheet" href="./css/common.css" media="screen" title="no title" charset="utf-8">
	<title>E-ISA | Deal Sheet Phase Link</title>
	<style>
		.headers {
			background-color: black;
			color: white;
			font-weight: bold;
			padding: 10px;
			text-align: center;
		}

		tr[data-cb-name="header"] th,
		tr[data-cb-name="data"] td,
		tr[data-cb-name="grand_total"] td {
			text-align: left !important;
			padding: 5px !important;
		}

		table[data-cb-name="cbTable"] td,
		table[data-cb-name="cbTable"] th,
		table[data-cb-name="cbTable"] tr {
			border-top: none !important;
			border-bottom: none !important;
			border-bottom: 1px #dedede solid !important;
		}

		tr[data-cb-name="header"] a {
			padding: 0px;
		}

		tr[data-cb-name="header"] th,
		tr[data-cb-name="header"] a,
		tr[data-cb-name="data"] td,
		tr[data-cb-name="grand_total"] td,
		section[data-cb-name="cbTable"] * {
			font-size: 10px !important;
		}

		tr[data-cb-name="grand_total"] td:first-child {
			text-align: right !important;
		}

		.contract-1 .cbFormLabelCell {
			padding: 5px !important;
		}

		section[data-cb-name="cbTable"] {
			border-style: none;
			-webkit-box-shadow: none;
		}

		section[data-cb-name="cbTable"] hr {
			margin-top: 0px;
		}

		/* mpo details */
		#mpo-details-container .SelectAllTxt {
			font-size: .875rem;
			font-family: Arial, sans-serif;
		}

		#mpo-details-container {
			font-size: 10px
		}

		#mpo-details-container td,
		#mpo-details-container th {
			font-size: 8px
		}
	</style>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.5/jspdf.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
</head>

<body class="hide">
	<?php if (!isset($_GET['Recompute'])): ?>
		<div class="m-5">
			<div class="spinner-border text-info" role="status"><span class="sr-only">Loading...</span></div>
		</div>

		<div class="d-none cb-recompute-container">
			<script type="text/javascript" src="<?= $cb_datapage_prefix ?>b44f4573c9644cbd9f50/emb"></script>
		</div>
	<?php endif; ?>

	<?php if (isset($_GET['Recompute'])): ?>

		<main role="main" class="">
			<button class="btn btn-primary btn-sm" style="display: none" id="printPDF">Print</button>
			<button class="btn btn-primary btn-sm" style="display: none" id="downloadPDF">Save as PDF</button>
			<div class="mt-2" id="printDiv">
				<div class="row" style="padding: 0rem .5rem">
					<div class="col-md-2" style="padding: 1px !important;">
						<div class="cb-report mb-3">
							<div class="headers mb-2 bg-dark">Equipment and Services</div>
							<div class="cb-forapproval equip-1">
								<script type="text/javascript" src="<?= $cb_datapage_prefix ?>1a4f940dc8f74657850a/emb"></script>
							</div>
						</div>
					</div>
					<div class="col-md-7" style="padding: 1px !important;">
						<div class="cb-report mb-3">
							<div class="headers mb-2 bg-dark">Discount Structure</div>
							<div class="cb-forapproval  discount-1 mb-2">
								<script type="text/javascript" src="<?= $cb_datapage_prefix ?>65334175fbb9412088d0/emb"></script>
							</div>
							<div class="cb-forapproval  discount-2 mb-2">
								<script type="text/javascript" src="<?= $cb_datapage_prefix ?>2b079560ac5546b39d18/emb"></script>
							</div>
							<div class="cb-forapproval  discount-3 mb-2">
								<script type="text/javascript" src="<?= $cb_datapage_prefix ?>62a3ac5939ab4a16af6d/emb"></script>
							</div>
						</div>
					</div>
					<div class="col-md-3" style="padding: 1px !important;">
						<div class="cb-report mb-3">
							<div class="headers mb-2 bg-dark">Contract Details</div>
							<div class="cb-forapproval contract-1">
								<script type="text/javascript" src="<?= $cb_datapage_prefix ?>2a0d68575d844961919f/emb"></script>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	<?php endif; ?>

	<!--  -->
	<div id="html-content-holder" style=""></div>
	<div id="previewImage"></div>
	<script>
		$(document).ready(function() {
			downloadPDF("<?= $_GET['ISA_ID']; ?>")
		});

		var dp_counter = 0
		$("#downloadPDF, #printPDF").hide();

		document.addEventListener('DataPageReady', function(event) {
			deal_total_css();
			monthly_amounts_css();
			qty_css();
			participation_css();
			mfrparticipation_css();
			``
			customerparticipation_css();


			var appkey = (event.detail.appKey).toLowerCase()
			if (appkey.includes(("1a4f940dc8f74657850a").toLowerCase())) {
				dp_counter = dp_counter + 1;
				removeZerosEquip();
			}
			if (appkey.includes(("65334175fbb9412088d0").toLowerCase())) {
				dp_counter = dp_counter + 1;
				removeZerosDiscount1()
			}
			if (appkey.includes(("2b079560ac5546b39d18").toLowerCase())) {
				dp_counter = dp_counter + 1;
				removeZerosDiscount2()
			}
			if (appkey.includes(("62a3ac5939ab4a16af6d").toLowerCase())) {
				dp_counter = dp_counter + 1;
				removeZerosDiscount3()
			}
			if (appkey.includes(("2a0d68575d844961919f").toLowerCase())) {
				dp_counter = dp_counter + 1;

				show_MPO_Details();
			}

			if (appkey.includes(("df97571f43354dad8ec4").toLowerCase())) {
				dp_counter = dp_counter + 1;
				// MPO Details
				let v1 = setInterval(function() {
					if ($("#mpo-details-container .Manifacturer_ID")) {
						$("#mpo-details-container .Manifacturer_ID").prop("disabled", true)
					}
				}, 500);
			}

			if (dp_counter == 6) {
				setTimeout(function() {
					$("#downloadPDF, #printPDF").show()
				}, 1500)
			} else {
				$("#downloadPDF, #printPDF").hide()
			}

			resizing();
		});

		$('#printPDF').click(function() {
			window.open("./deal-sheet-link-print.php?ISA_ID=<?= $_GET['ISA_ID']; ?>")
		});

		function removeZerosEquip() {
			var equip_table_tr = $(".equip-1 table tr")
			for (var i = 0; i < equip_table_tr.length; i++) {
				var dealtotal = $(".equip-1 table tr").eq(i).find(".dealtotal").attr("data-value")
				var monthlyamounts = $(".equip-1 table tr").eq(i).find(".monthlyamounts").attr("data-value")
				if ((dealtotal == "0" || dealtotal == "") && (monthlyamounts == "0" || monthlyamounts == "")) {
					$(".equip-1 table tr").eq(i).css("display", "none")
				}
			}
		}

		function removeZerosDiscount1() {
			var equip_table_tr = $(".discount-1 table tr")
			for (var i = 0; i < equip_table_tr.length - 1; i++) {
				var business = $(".discount-1 table tr").eq(i).find(".cbResultSetTableCellNumberDate").eq(0)
				var sales = $(".discount-1 table tr").eq(i).find(".cbResultSetTableCellNumberDate").eq(1)
				var invoice_discount = $(".discount-1 table tr").eq(i).find(".cbResultSetTableCellNumberDate").eq(2)
				var invoice_price = $(".discount-1 table tr").eq(i).find(".cbResultSetTableCellNumberDate").eq(3)
				var discount = $(".discount-1 table tr").eq(i).find(".cbResultSetTableCellNumberDate").eq(4)

				// Check if this row has no undefined data
				// We will use business for now
				if (business.html() != "undefined") {
					business.html(business.html() + "%")
					invoice_discount.html(invoice_discount.html() + "%")
					// Now
					if (
						(business.html() == "0%" || business.html() == "undefined%") &&
						(sales.html() == "$0.00" || sales.html() == "") &&
						(invoice_discount.html() == "0%" || invoice_discount.html() == "undefined%") &&
						(invoice_price.html() == "$0.00" || invoice_price.html() == "") &&
						(discount.html() == "$0.00" || discount.html() == "")
					) {
						$(".discount-1 table tr").eq(i).css("display", "none")
					}
				}

			}
		}

		function removeZerosDiscount2() {
			var equip_table_tr = $(".discount-2 table tr")
			for (var i = 0; i < equip_table_tr.length - 1; i++) {
				var sales = $(".discount-2 table tr").eq(i).find(".cbResultSetTableCellNumberDate").eq(0)
				var state_discount = $(".discount-2 table tr").eq(i).find(".cbResultSetTableCellNumberDate").eq(1)
				var state_discount_total = $(".discount-2 table tr").eq(i).find(".cbResultSetTableCellNumberDate").eq(2)
				var discount_total = $(".discount-2 table tr").eq(i).find(".cbResultSetTableCellNumberDate").eq(3)

				// Check if this row has no undefined data
				// We will use business for now
				if (sales.html() != "undefined") {
					state_discount.html(state_discount.html() + "%")

					// Now
					if (
						(state_discount.html() == "0%" || state_discount.html() == "undefined%") &&
						(sales.html() == "$0.00" || sales.html() == "") &&
						(state_discount_total.html() == "$0.00" || state_discount_total.html() == "") &&
						(discount_total.html() == "$0.00" || discount_total.html() == "")
					) {
						$(".discount-2 table tr").eq(i).css("display", "none")
					}
				}

			}
		}

		function removeZerosDiscount3() {
			var equip_table_tr = $(".discount-3 table tr")
			for (var i = 0; i < equip_table_tr.length - 1; i++) {
				var sales = $(".discount-3 table tr").eq(i).find(".cbResultSetTableCellNumberDate").eq(0)
				var eq = $(".discount-3 table tr").eq(i).find(".cbResultSetTableCellNumberDate").eq(1)
				var net = $(".discount-3 table tr").eq(i).find(".cbResultSetTableCellNumberDate").eq(2)
				var discount = $(".discount-3 table tr").eq(i).find(".cbResultSetTableCellNumberDate").eq(3)

				// Check if this row has no undefined data
				// We will use business for now
				if (sales.html() != "undefined") {
					// console.log({
					// 	sales,
					// 	eq,
					// 	net,
					// 	discount
					// })
					// Now
					if (
						(eq.html() == "0.00%" || eq.html() == "undefined%") &&
						(sales.html() == "$0.00" || sales.html() == "") &&
						(net.html() == "$0.00" || net.html() == "") &&
						(discount.html() == "$0.00" || discount.html() == "")
					) {
						$(".discount-3 table tr").eq(i).css("display", "none")
					}
				}

			}
		}

		function show_MPO_Details() {
			var URL_Param = '?cbResetParam=1';
			URL_Param += '&Company=' + $('*[name="EditRecordCompany"]').val();
			URL_Param += '&Manufacturer=' + $('*[name="EditRecordPaint_Manufacturer"]').val();
			URL_Param += '&Selected=' + $('*[name="EditRecordMPO_Details"]').val();

			if ($('*[name="EditRecordCompany"]').val() == '' || $('*[name="EditRecordPaint_Manufacturer"]').val() == '' || $('*[name="EditRecordMPO_Based"]').val() == '') {
				return false;
			}

			// deploy the DP in MPO Details
			deployDP_v2('mpo-details-container', 'df97571f43354dad8ec4', URL_Param);
		}
	</script>

	<script src="./lib/autonumeric/autoNumeric.js"></script>
	<script src="./js/investments-2.js?v=<?php echo date('YmdHis'); ?>"></script>
	<script src="./js/deal-sheet-link.js?v=<?php echo date('YmdHis'); ?>"></script>
	<script src="./js/mpo-details.js?v=<?php echo date('YmdHis'); ?>"></script>
</body>

</html>