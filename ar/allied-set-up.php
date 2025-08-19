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
		<?php include_once "../partials/navbar-ar.php"; ?>

		<main role="main" class="container">

			<div class="d-none">
				<!-- navigation bar container -->
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000288517adb7084773b2e2/emb"></script>

				<!-- Check invoice discounts -->
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000b8fc270763644165bbcd/emb"></script>

				<!-- Check notes -->
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000483a6d402d214367b0ff/emb"></script>

				<!-- Accounts Related - GLID -->
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500054df91e58b964ecb86f5/emb"></script>
			</div>

			<?php include_once "../partials/progressbar.php"; ?>

			<div class="mb-3 related-customer">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000c0582048f13d4abfbe2b/emb"></script>
			</div>

			<div class="mb-3 manufacturer-rebates">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000c6a9c748d9e84a979c74/emb"></script>
				<!-- Manufacturer Rebates-->
				<div id="manufacturer-rebates-embed" style="display: none">
					<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550000439bae402fd4caa97d6v/emb"></script>
				</div>
				<!-- End Manufacturer Rebates-->
			</div>
		
			<div class="mb-3 alied-eq-rebates">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550001e11d9afeca0466ba85d/emb"></script>
			</div>

			<div class="mb-3 invoice-discount">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500076381cd9d5f440bdbca8/emb"></script>
			</div>

			<div class="mb-3 attributes">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500008e5623f21844e5abb49/emb"></script>
			</div>
			<br>

			<div class="mb-3">
				<!-- Hot Buttons -->
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550000a8b607e420c4fcebf8a/emb"></script>
			</div>

			<div class="mb-3 calc-summary-container">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000e6fa8ea67191406f98e4/emb"></script>
			</div>

			<div class="mb-3">
				<!-- COMMENTS SECTION -->
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000f80be512f9f14c39ba69/emb"></script>
			</div>
		</main>
	</body>
</html>