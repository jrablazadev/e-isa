<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?> 
		<title>E-ISA</title>
		<script src="../lib/autonumeric/autoNumeric.js"></script>
	</head>

	<body class="hide">
		<?php include_once "../partials/navbar-vp.php"; ?>

		<main role="main" class="container">
			<?php include_once "../partials/progressbar-cfo-vp-coo.php"; ?>

			<div class="marginbot20px">
				<!-- Section 2 : ISA Calculator -->
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D550009b0053f4adbd4725abd3/emb"></script>
			</div>

			<div class="marginbot20px calc-summary-container">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000e6fa8ea67191406f98e4/emb"></script>
			</div>

			<div class="marginbot20px">
				<!-- COMMENTS SECTION -->
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000f80be512f9f14c39ba69/emb"></script>
			</div>
		</main>
		<script>
			document.addEventListener('DataPageReady', function (event) {
				if (event.detail.appKey == '25D550009b0053f4adbd4725abd3')
				{
					$('*[name="EditRecordMonthly_Liquid"]').autoNumeric('init', {mDec : 10, vMin : 0, aSep : '', aPad : false}).prop('disabled', true);
					$('*[name="EditRecordMonthly_Allied"]').autoNumeric('init', {mDec : 10, vMin : 0, aSep : '', aPad : false}).prop('disabled', true);
					$('*[name="EditRecordTeam_Deal_Months"]').autoNumeric('init', {mDec : 0, vMin : 0, aSep : ''}).prop('disabled', true);
				}
			});

			update_progress_bar_cfo_vp_coo(2);
		</script>
		<style>
			input:disabled
			{
				cursor:not-allowed;
				background:#dedede !important;
			}
		</style>
	</body>
</html>
