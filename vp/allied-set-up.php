<!doctype html>
<html lang="en">
<head>
	<?php include_once "../partials/head.php"; ?> 
	<title>E-ISA</title>
	<script src="../js/allied-set-up.js?v=<?php echo date('YmdHis'); ?>"></script>
	<style>
		img[alt="Calendar"]
		{
			margin-left:-40px !important;
		}

		.progressbar a.disabled
		{
			cursor:not-allowed;
		}

		.isHidden
		{
			display:none;
		}

		.invoice-discount tr[data-cb-name="data"] td:nth-child(3)
		{
			color:blue;
			cursor:pointer;
		}

		.invoice-discount tr[data-cb-name="data"] td:nth-child(3):hover
		{
			text-decoration:underline;
		}
	</style>
</head>
<body class="hide">
	<?php include_once "../partials/navbar-vp.php"; ?>

	<main role="main" class="container">

		<?php include_once "../partials/progressbar-cfo-vp-coo.php"; ?>

		<div class="d-none cb-acct-related-glid">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500054df91e58b964ecb86f5/emb"></script>
		</div>

		<div class="mb-3 related-customer">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000b2d636362cf94d158bf8/emb"></script>
		</div>

		<div class="mb-3 manufacturer-rebates">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550004cbc069672c64ce1b61a/emb"></script>
		</div>

		<div class="mb-3 invoice-discount">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000b0182e225c0048c8a011/emb"></script>
		</div>
		<div class="mb-3 attributes">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500008e5623f21844e5abb49/emb"></script>
		</div>
		<br>

		<div class="mb-3">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500052cd80a852d84a14ab75/emb"></script>
		</div>

		<div class="mb-3 calc-summary-container">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000e6fa8ea67191406f98e4/emb"></script>
		</div>

		<div class="mb-3">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000f80be512f9f14c39ba69/emb"></script>
		</div>
	</main>

	<script>
		update_progress_bar_cfo_vp_coo(11);
	</script>
</body>
</html>
