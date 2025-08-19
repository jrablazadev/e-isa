<!doctype html>
<html lang="en">
	<head>
		<title>Comcept Pricing</title>

		<script src="../lib/jquery-3.3.1.min.js"></script>

		<link rel="stylesheet" href="../lib/bootstrap-4.4.1/bootstrap-4.4.1.min.css">
		<script src="../lib//bootstrap-4.4.1/bootstrap-4.4.1.min.js"></script>

		<?php $show = isset($_GET['Show']) ? $_GET['Show'] : ''; ?>
	</head>
	<body class="hide">
		<?php if($show == 'Y'): ?>

		<div class="m-3">

			<h2>Customer Special Pricing (Overrides the Base Price Profile)</h2>
			<div class="cb-report">
				<div class="spinner-border text-info"></div>
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000799e243c1ac04e51bf24/emb"></script>
			</div>

			<hr>

			<h2>Base Price Profile</h2>
			<div class="cb-report">
				<div class="spinner-border text-info"></div>
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550001ac8ef97874943bdb367/emb"></script>
			</div>
		</div>

		<?php else: ?>
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000e25ebf9f840246f8bf67/emb"></script>
		<?php endif; ?>

		<script>
			document.addEventListener('DataPageReady', function (event) {
				$('form[action*="' + event.detail.appKey + '"]').closest('.cb-report').find('.spinner-border').remove();
			});
		</script>
	</body>
</html>