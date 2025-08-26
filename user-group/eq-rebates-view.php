<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?> 
		<title>E-ISA</title>
	</head>
	<body class="hide">

		<?php include_once "../partials/navbar-user-group.php"; ?>

		<main role="main" class="container mb-5">

			<?php include_once "../partials/progressbar-user-group-view.php"; ?>

			<div class="mb-3 section-container container1 grid-edit cb-eq-rebate">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000e0efc4665b5344579a28/emb"></script>
			</div>

			<div class="mb-3 calc-summary-container">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000e6fa8ea67191406f98e4/emb"></script>
			</div>
		</main>
		<style>
			a[data-cb-name="GridEditButton"],
			.cb-back-next-btn
			{
				display:none !important;
			}
		</style>
		<script>
			update_progressbar(6);

			// var timer = setInterval(function(){
			// 	$(' \
			// 		.HeadCtnr table[class="Table"] > tbody > tr:nth-child(1) > th, \
			// 		.BodyCtnr table[class="Table"] > thead > tr > th, \
			// 		.BodyCtnr table[class="Table"] > tbody > tr > td div \
			// 	').css('width', 'auto');

			// 	$('select').css('width', 'auto');
			// }, 1000);
		</script>
	</body>
</html>