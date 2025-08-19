<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?> 
		<title>E-ISA</title>
		<script src="../lib/autonumeric/autoNumeric.js"></script>
	</head>

	<body class="hide">
		<?php include_once "../partials/navbar-user-group.php"; ?>

		<main role="main" class="container mb-5">

			<?php include_once "../partials/progressbar-user-group-view.php"; ?>

			<div class="marginbot20px">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D550009b0053f4adbd4725abd3/emb"></script>
			</div>

			<div class="marginbot20px calc-summary-container">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000e6fa8ea67191406f98e4/emb"></script>
			</div>
		</main>
		<script>
			update_progressbar(2);

			document.addEventListener('DataPageReady', function (event) {
				if (event.detail.appKey == '25D550009b0053f4adbd4725abd3')
				{
					$('*[name="EditRecordMonthly_Liquid"]').autoNumeric('init', {mDec : 10, vMin : 0, aSep : '', aPad : false}).prop('disabled', true);
					$('*[name="EditRecordMonthly_Allied"]').autoNumeric('init', {mDec : 10, vMin : 0, aSep : '', aPad : false}).prop('disabled', true);
					$('*[name="EditRecordTeam_Deal_Months"]').autoNumeric('init', {mDec : 0, vMin : 0, aSep : ''}).prop('disabled', true);
				}
			});
		</script>
		<style>
			input:disabled
			{
				cursor:not-allowed;
				background:#dedede !important;
			}

			.cbBackButtonContainer
			{
				display:none;
			}
		</style>
	</body>
</html>
