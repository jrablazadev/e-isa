<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?> 
		<title>E-ISA</title>

		<!-- Library: autoNumeric -->
		<script src="../lib/autonumeric/autoNumeric.js"></script>

		<style>
			<?php echo file_get_contents('../css/manufacturer-rebates-investments.css'); ?>
		</style>	
	</head>
	<body class="hide">
		<?php include_once "../partials/navbar-kn.php"; ?>

		<main role="main" class="container">

			<div class="d-none">
				<!-- Validation: Active Section -->
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>288517adb7084773b2e2/emb"></script>

				<!-- Validation: Invoice Discount.Percentage of Business = 100% -->
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>b8fc270763644165bbcd/emb"></script>
			</div>

			<?php include_once "../partials/progressbar.php"; ?>

			<!-- Manufacture Rebates -->
			<div class="cb-mfr-rebates section-container container1 grid-edit">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>42421c167a5944c7b0b2/emb"></script>
			</div>

			<hr>

			<!-- Fixed Dollar Rebates -->
			<div class="cb-fixed-dollar mb-5">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>62898b9681374c338c8b/emb"></script>
			</div>

			<hr>

			<div class="cb-mfg-support mb-5">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>443ef2c03e584e0d8f5b/emb"></script>
			</div>

			<hr>

			<!-- Investments Entry -->
			<div class="cb-investments-entry marginbot20px" id="float">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>51ba494d753f49b0a82e/emb"></script>
			</div>

			<!-- HIDDEN: Change Manufacture Submit for Re-approval -->
			<div class="d-none">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>5d18061661ca4d5fbb69/emb"></script>
			</div>

			<!-- HIDDEN: Investments Entry  -->
			<div id="entryraw-container"></div>

			<!-- Quick Analysis -->
			<div class="marginbot20px calc-summary-container">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>e6fa8ea67191406f98e4/emb"></script>
			</div>

			<!-- Comments -->
			<div class="marginbot20px">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>f80be512f9f14c39ba69/emb"></script>
			</div>
		</main>

		<script>
			<?php echo file_get_contents('../js/manufacturer-rebates-investments.js'); ?>
			<?php echo file_get_contents('../js/finalized-asset.js'); ?>
			<?php echo file_get_contents('../js/amount-contract.js'); ?>
		</script>
	</body>
</html>