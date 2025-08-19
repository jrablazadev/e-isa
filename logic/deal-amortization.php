<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?>
		<title>E-ISA</title>
	</head>
	<body class="hide">
		<?php include_once "../partials/navbar-logic.php"; ?>

		<main class="mb-5 ml-5 mr-5">
			<div class="table-header mb-2 font-weight-bold bg-dark text-white">DEAL AMORTIZATION</div>
			<div class="cb-report cb-results mb-3 overflow-auto cb-deal-amortization">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550003f26307cea88482b9ac9/emb"></script>
			</div>
		</main>

		<link rel="stylesheet" href="../css/deal-amortization.css?v=<?php echo date('YmdHis'); ?>">
		<script src="../js/deal-amortization-isa-team.js?v=<?php echo date('YmdHis'); ?>"></script>
	</body>
</html>