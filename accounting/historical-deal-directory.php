<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?>
		<title>E-ISA | Historical Deal Directory</title>
	</head>
	<body class="hide">
		<?php include_once "../partials/navbar-accounting.php"; ?>

		<main class="mb-5 ml-5 mr-5">
			<div class="cb-table-header mb-2">HISTORICAL DEAL DIRECTORY</div>
			<div class="cb-report mb-3 overflow-auto" id="cb-historical-deal-directory">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550001fe1ec21b4a5407f9a47/emb"></script>
			</div>
		</main>

		<link rel="stylesheet" href="../css/hdd.css?v=<?php echo date('YmdHis'); ?>">

		<script src="../lib/jquery-freeze-table-master/dist/js/freeze-table.min.js"></script>

		<link rel="stylesheet" href="../lib/floating-scroll-master/dist/jquery.floatingscroll.css" media="screen" title="no title" charset="utf-8">
		<script src="../lib/floating-scroll-master/dist/jquery.floatingscroll.min.js"></script>
		<script>
		$('#nav-hdd').addClass('active');

		<?php echo file_get_contents('../js/deal-directory.js'); ?>
		</script>
	</body>
</html>