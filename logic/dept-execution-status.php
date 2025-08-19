<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?>
		<title>E-ISA</title>
	</head>
	<body class="hide">
		<?php include_once "../partials/navbar-logic.php"; ?>
		<main role="main" class="container mt-5">
			<h5>ISA Pricing Execution Work Queue</h5>
			<div class="cb-report cb-pricing">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>28ede3d0d68d4fa2ae72/emb"></script>
			</div>

			<hr>

			<h5>ISA Finance Execution Work Queue</h5>
			<div class="cb-report cb-finance">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>637b3043909e4b489c72/emb"></script>
			</div>

			<hr>

			<h5>ISA Credit Execution Work Queue</h5>
			<div class="cb-report cb-credit-exe">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>75c6498963c3486882fd/emb"></script>
			</div>

			<hr>

			<h5>Log1c ICS Execution Work Queue</h5>
			<div class="cb-report cb-log1c">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>901357a9a3d14288823c/emb"></script>
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