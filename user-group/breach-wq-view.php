<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?>
		<title>E-ISA</title>
	</head>
	<body class="hide">
		<?php include_once "../partials/navbar-user-group.php"; ?>
		<main role="main" class="container mt-5 mb-5">
			<h5>Pricing Breach/Deal Termination Work Queue</h5>
			<div class="cb-report cb-pricing">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>674a460286db484c8ccf/emb"></script>
			</div>

			<hr>

			<h5>Finance Breach/Deal Termination Work Queue</h5>
			<div class="cb-report cb-finance">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>9c120573a4c444cbaec9/emb"></script>
			</div>

			<hr>

			<h5>Credit Breach/Deal Termination Work Queue</h5>
			<div class="cb-report cb-credit-exe">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>bb41c46fda0e4b5fa1dc/emb"></script>
			</div>

			<hr>

			<h5>Log1c ICS Breach/Deal Termination Work Queue</h5>
			<div class="cb-report cb-log1c-ics">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>d15fa2fd5873457f9aa2/emb"></script>
			</div>
		</main>
	</body>
	<style>
		.cb-report tr[data-cb-name="data"] td,
		.cb-report tr[data-cb-name="header"] th,
		.cb-report a
		{
			font-size:12px !important;
			padding:5px;
			text-align:left;
		}

		.cb-pricing table[data-cb-name="cbTable"] thead tr th,
		.cb-finance table[data-cb-name="cbTable"] thead tr th,
		.cb-credit-exe table[data-cb-name="cbTable"] thead tr th,
		.cb-procurement table[data-cb-name="cbTable"] thead tr th,
		.cb-log1c-ics table[data-cb-name="cbTable"] thead tr th
		{
			white-space: initial;
		}
	</style>
	<script>
        <?php echo file_get_contents('../js/dept-execution-status.js'); ?>
    </script>

</html>