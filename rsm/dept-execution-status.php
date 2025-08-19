<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?>
		<title>E-ISA</title>
	</head>
	<body class="hide">
		<?php include_once "../partials/navbar-rsm.php"; ?>
		<main role="main" class="container mt-5">
			<h5>ISA Pricing Execution Work Queue</h5>
			<div class="cb-report cb-pricing">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>d114c9a4a0e64f50a3de/emb"></script>
			</div>

			<hr>

			<h5>ISA Finance Execution Work Queue</h5>
			<div class="cb-report cb-finance">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>12e12e6db4a64568957e/emb"></script>
			</div>

			<hr>

			<h5>ISA Credit Execution Work Queue</h5>
			<div class="cb-report cb-credit-exe">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>be97f5320e1f4f9c925d/emb"></script>
			</div>

			<hr>

			<h5>Log1c ICS Execution Work Queue</h5>
			<div class="cb-report cb-log1c">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>67c13687dc274a8d8850/emb"></script>
			</div>
			
		</main>
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
	</body>
</html>