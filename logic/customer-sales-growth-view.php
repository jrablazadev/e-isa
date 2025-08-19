<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?> 
		<title>E-ISA</title>
	</head>

	<body class="hide">
		<?php include_once "../partials/navbar-logic.php"; ?>

		<main role="main" class="container mb-5">
			<?php include_once "../partials/progressbar-user-group-view.php"; ?>

			<div class="mb-3">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550006507e741edc747bfba14/emb"></script>
			</div>

			<div class="mb-3 calc-summary-container">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000e6fa8ea67191406f98e4/emb"></script>
			</div>
		</main>
		<style>
			.backbtn,
			.nextbtn
			{
				display:none !important;
			}
		</style>

		<script>
			update_progressbar(3);
		</script>
	</body>
</html>