<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?> 
		<title>E-ISA</title>
		<link rel="stylesheet" href="../css/section-1.css" media="screen" title="no title" charset="utf-8">
		<script src="../lib/autonumeric/autoNumeric.js"></script>

		<link rel="stylesheet" href="../lib/floating-scroll-master/dist/jquery.floatingscroll.css" media="screen" title="no title" charset="utf-8">
		<script type="text/javascript" src="../lib/floating-scroll-master/dist/jquery.floatingscroll.min.js"></script>
	</head>
	<body class="hide">
		<?php include_once "../partials/navbar-rsm.php"; ?>
		
		<main role="main" class="container">
		
			<div class="ishidden">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000288517adb7084773b2e2/emb?Section_ID=1"></script>
			</div>
		
			<?php include_once "../partials/progressbar.php"; ?>

            		<!-- SECTION 1 : ISA Template -->
			<div class="part1">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500086d1ebc230c74a9182dc/emb"></script>
			</div>
			
			<div class="part1 calc-summary-container">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000e6fa8ea67191406f98e4/emb"></script>
			</div>
			
			<div id="cb-modal" class="modal" tabindex="-1" role="dialog">
				<div class="modal-dialog" role="document" style="width: 80% !important; max-width: 80%; height:30%;">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="cb-modal-title">Relate E-ISA</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<div id="cb-modal-body">
								<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550001efb2a47c1974536a144/emb"></script>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Network Customer Selection/Fill up -->
			<div id="cb-modal-related-customer" class="modal" tabindex="-1" role="dialog">
				<div class="modal-dialog" role="document"style="width: 80% !important; max-width: 80%;">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="cb-modal-title">Network Customers</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<div id="cb-modal-body">
								<div id="network_customer_selection">
									<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000edc4f77ac2ba4148bfa1/emb"></script>
								</div>
							</div>
							<div id="cb-modal-error" class="d-none alert alert-danger"></div>
						</div>
					</div>
				</div>
			</div>
			<!-- ./Network Customer Selection/Fill up -->
		</main>

		<link rel="stylesheet" href="../css/template.css">
		<script type="text/javascript" src="../js/template-update.js?v=<?php echo date('YmdHis'); ?>"></script>
	</body>
</html>
