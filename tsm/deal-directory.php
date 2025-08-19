<!doctype html>
<html lang="en">

<head>
	<?php include_once "../partials/head.php"; ?>
	<title>E-ISA | Deal Directory</title>
</head>

<body class="hide">
	<?php include_once "../partials/navbar-tsm.php"; ?>

	<main class="mb-5 ml-5 mr-5">

		<div class="table-header mb-2 font-weight-bold bg-dark text-white">DEAL DIRECTORY</div>

		<div class="cb-search">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000a61c415ef11d4f71b5f0/emb"></script>
		</div>

		<div class="cb-report mb-3 cb-deal-directory" id="cb-deal-directory-tsm"></div>
		<div class="text-center">
			<div class="spinner-border text-primary" role="status"></div>
		</div>

		<div class="mb-3" id="cb-deal-directory">
			<!-- <script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000169c29e76727470db971/emb"></script> -->
			<!-- <script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550009b4423d2683543168fc8/emb"></script> -->
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000b6d70f7d2e2a434eb356/emb"></script>
		</div>

		<div id="cb-modal" class="modal" tabindex="-1" role="dialog">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="cb-modal-title">Modal title</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span> </button>
					</div>
					<div class="modal-body">
						<div class="col-12">
							<div id="cb-modal-body" class="cb-form-fluid"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>

	<link rel="stylesheet" href="../css/deal-directory-tsm.css">
	<script src="../js/dashboard-relate-accounts.js"></script>
	<script src="../js/deal-directory-tsm.js"></script>

	<script>
		$('#nav-dd').addClass('active');
	</script>
	<style>
		.header {
			width: 100%;
			text-align: center;
			padding: 5px;
			background: black;
			color: white;
			padding: 10px;
			font-weight: bold;
		}

		.cb-report {
			overflow: auto;
		}

		.cb-report tr[data-cb-name="data"] td,
		.cb-report tr[data-cb-name="header"] th,
		.cb-report a {
			font-size: 12px !important;
			padding: 5px;
			text-align: left;
		}

		.cb-report tr[data-cb-name="header"] a,
		.cb-report tr[data-cb-name="data"] a:not(.btn) {
			padding: 0px;
		}

		.cb-execution-work section[data-cb-name="cbTable"],
		#execute-isa-iframe {
			height: 0px;
			overflow: hidden;
			padding: 0px;
			margin: 0px;
			position: absolute;
		}

		.table-header {
			width: 100%;
			text-align: center;
			padding: 5px;
			background: #027FAA;
			color: #000;
			font-weight: bold;
			padding: 10px;
			font-size: 12px;
		}

		.cb-dealdirectory tr[data-cb-name="data"]>*:nth-child(3) {
			max-width: 200px;
			min-width: 200px;
			white-space: initial;
			word-wrap: break-word;
			text-align: left;
		}

		.cb-dealdirectory tr[data-cb-name="data"]>*:nth-child(1),
		.cb-dealdirectory tr[data-cb-name="data"]>*:nth-child(2) {
			text-align: center;
		}

		#cb-modal-frame {
			height: 400px !important;
		}
	</style>

	<script>
		$(document).on('click', '.cb-customer-number-btn', function(e) {
			var isaId = $(this).attr('cb-data-isa-id');
			var customerNumber = $(this).attr('cb-data-customer-number');
			viewCustomerDetails(isaId, customerNumber)
			e.preventDefault();
		});

		function viewCustomerDetails(isaId, customerNumber) {
			openModal_v2('ISA ' + isaId + ' - Customer Number ' + customerNumber, 'https://' + accountId + '/dp/' + appKeyPrefix + '4b64dd49bf784ad7bb92/emb?ISA_ID=' + isaId + '&Customer_Number=' + customerNumber, '95%', 'Y');
		}

		var caretup = '<i class="fas fa-caret-up" style="color:green;font-size:35px;"></i>';
		var caretdown = '<i class="fas fa-caret-down" style="color:red;font-size:35px;"></i>';
		var dash = '<i class="fas fa-minus" style="font-size:35px;"></i>';

		document.addEventListener("DataPageReady", function(e) {
			console.log(e)
			if (e.detail.appKey.includes("d0744c037b244933ae60")) {
				salesTrendIcon()
			}
		})

		function salesTrendIcon() {
			$('#tsm-account-related *[data-cb-name="data"] td:nth-child(8)').each(function() {

				if ($(this).attr('data-has-icon') == 'Y') {
					return true;
				}

				var percentage = ($(this).html() || '').toString().trim();
				percentage = Number(percentage) * 100;

				if (percentage > 1) {
					$(this).html(caretup + '<div>' + percentage.toFixed(2).toString() + '%</div>');
				} else if (percentage < -1.1) {
					$(this).html(caretdown + '<div>' + percentage.toFixed(2).toString() + '%</div>');
				} else {
					$(this).html(dash + '<div>' + percentage.toFixed(2).toString() + '%</div>');
				}

				$(this).attr('data-has-icon', 'Y');
			});
		}
	</script>
</body>

</html>