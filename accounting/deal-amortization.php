<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?>
		<title>E-ISA</title>
	</head>
	<body class="hide">
		<?php include_once "../partials/navbar-accounting.php"; ?>

		<main class="mb-5 ml-5 mr-5">
			<div class="table-header mb-2 font-weight-bold bg-dark text-white">DEAL AMORTIZATION</div>
			<div class="cb-report cb-results mb-3 overflow-auto cb-deal-amortization">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000eceb3babc05f41dcad98/emb"></script>
			</div>
		</main>

		<link rel="stylesheet" href="../css/deal-amortization.css?v=<?php echo date('YmdHis'); ?>">
		<script src="../js/deal-amortization.js?v=<?php echo date('YmdHis'); ?>"></script>
	</body>
</html>