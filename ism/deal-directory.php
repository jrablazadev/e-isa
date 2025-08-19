<!doctype html>
<html lang="en">

<head>
	<?php include_once "../partials/head.php"; ?>
	<title>E-ISA | Deal Directory</title>
</head>

<body class="hide">
	<?php include_once "../partials/navbar-ism.php"; ?>

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
			<!-- <script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000fe0e6382d2444a2bacd2/emb"></script> -->
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500069b133f4c3f548deae74/emb"></script>
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

	<style><?php echo file_get_contents('../css/deal-directory.css'); ?></style>
	<script src="../js/dashboard-relate-accounts.js"></script>
	<script src="../js/deal-directory-ism.js"></script>

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
</body>

</html>