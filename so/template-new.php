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
		<?php include_once "../partials/navbar-so.php"; ?>
		<main role="main" class="container">
			<?php include_once "../partials/progressbar.php"; ?>
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550005a1f6380977a4144b939/emb?Last_Approver_ID=31"></script>
		</main>

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

		<div id="cb-modal-related-customer" class="modal" tabindex="-1" role="dialog">
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
							<div id="network_customer_selection">
								<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000edc4f77ac2ba4148bfa1/emb"></script>
							</div>
						</div>
						<div id="cb-modal-error" class="d-none alert alert-danger"></div>
					</div>
				</div>
			</div>
		</div>

		<link rel="stylesheet" href="../css/template.css?v=<?php echo date('YmdHis'); ?>">
		<script src="../js/template-new.js?v=<?php echo date('YmdHis'); ?>"></script>
	</body>
</html>
