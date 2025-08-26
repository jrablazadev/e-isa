<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?> 
		<title>E-ISA</title>
		<link rel="stylesheet" href="../css/section-1.css" media="screen" title="no title" charset="utf-8">
	</head>

	<body class="hide">
		<?php include_once "../partials/navbar-ap.php"; ?>
		
		<main role="main" class="container">
			<div class="d-none">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000288517adb7084773b2e2/emb"></script> <!-- navigation bar container -->
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000b8fc270763644165bbcd/emb"></script> <!-- Check invoice discounts -->
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000483a6d402d214367b0ff/emb"></script> <!-- Check notes -->
			</div>

			<?php include_once "../partials/progressbar.php"; ?>

			<h5 class="cb-att-label">Attachments</h5>

			<div class="cb-vda">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000141e51ebb5ea495b8a68/emb"></script>
			</div>

			<div class="cb-attachments">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000302eb8396c21404d87ad/emb"></script>
			</div>

			<div class="cb-attachments-validations d-none">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000a17dc14b742e4ccca6a1/emb"></script>
			</div>

			<hr>

			<div id="cb-attachments-form">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000edd4c28ef31e44839963/emb"></script>
			</div>

			<hr>

			<!-- <div class="accounts_related_it_container" style="display: none">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500093e7b910fe384cc88bf3/emb"></script>
			</div> -->

			<h5>E-ISA Account Related</h5>

			<div class="mb-3 accounts_related_container">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550002bf5df7a1b2345ffb0ae/emb"></script>
			</div>

			<hr>

			<h5>Old E-ISA Account Related</h5>

			<div class="mb-3">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000a6fdb232954e42fe9454/emb"></script>
			</div>

			<div class="mb-3 calc-summary-container">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000e6fa8ea67191406f98e4/emb"></script>
			</div>

			<div class="mb-3">
				<!-- COMMENTS SECTION -->
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000f80be512f9f14c39ba69/emb"></script>
			</div>
		</main>

		<div id="cb-modal" class="modal" tabindex="-1" role="dialog">
			<div class="modal-dialog" role="document" style="width: 800px !important">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="cb-modal-title">Network Customers</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div id="cb-modal-body">
							<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000d424fe7ab6ae4af9896a/emb"></script>
						</div>
						<div id="cb-modal-error" class="d-none alert alert-danger"></div>
					</div>
				</div>
			</div>
		</div>

		<style>
			img[alt="Calendar"]
			{
				margin-left:-40px !important;
			}

			.progressbar a.disabled
			{
				cursor:not-allowed;
			}
		</style>

		<script src="../js/attachments.js?v=<?php echo date('YmdHis'); ?>"></script>
	</body>
</html>
