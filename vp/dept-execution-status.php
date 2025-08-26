<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?>
		<title>E-ISA</title>
	</head>
	<body class="hide">
		<?php include_once "../partials/navbar-vp.php"; ?>
		<main role="main" class="container mt-5">
			<h5>ISA Pricing Execution Work Queue</h5>
			<div class="cb-report cb-pricing">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000d114c9a4a0e64f50a3de/emb"></script>
			</div>

			<hr>

			<h5>ISA Finance Execution Work Queue</h5>
			<div class="cb-report cb-finance">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500012e12e6db4a64568957e/emb"></script>
			</div>

			<hr>

			<h5>ISA Credit Execution Work Queue</h5>
			<div class="cb-report cb-credit-exe">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000be97f5320e1f4f9c925d/emb"></script>
			</div>

			<hr>

			<h5>ISA Procurement Execution Work Queue</h5>
			<div class="cb-report cb-procurement">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000170e92039dea4be29a47/emb"></script>
			</div>
		</main>
	</body>
	<style>
		.cb-report tr[data-cb-name="data"] td,
		.cb-report tr[data-cb-name="header"] th,
		.cb-report a
		{
			font-size:12px !important;
			padding:5px;
			text-align:left;
		}
	</style>
</html>