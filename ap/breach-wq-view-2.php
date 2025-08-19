<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?>
		<title>E-ISA</title>
	</head>
	<body class="hide">
		<?php include_once "../partials/navbar-ap.php"; ?>
		<main role="main" class="container mt-5 mb-5">
			<h5>Pricing Breach/Deal Termination Work Queue</h5>
			<div class="cb-report cb-pricing">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>d469c20f016645d480b3/emb"></script>
			</div>

			<hr>

			<h5>Finance Breach/Deal Termination Work Queue</h5>
			<div class="cb-report cb-finance">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>32596b15ca7b446e80ad/emb"></script>
			</div>

			<hr>

			<h5>Credit Breach/Deal Termination Work Queue</h5>
			<div class="cb-report cb-credit-exe">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>02d3779b5c8e4619bc7e/emb"></script>
			</div>

			<hr>

            <h5>Log1c ICS Breach/Deal Termination Work Queue</h5>
			<div class="cb-report cb-procurement">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>7b4b07517cef488bb9a0/emb"></script>
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
	</style>
	<script>
        <?php echo file_get_contents('../js/dept-execution-status.js'); ?>
    </script>
</html>