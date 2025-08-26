<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?> 
		<title>E-ISA</title>
		<link rel="stylesheet" href="../css/section-1.css" media="screen" title="no title" charset="utf-8">
		<script src="../lib/autonumeric/autoNumeric.js"></script>

		<link rel="stylesheet" href="../lib/floating-scroll-master/dist/jquery.floatingscroll.css" media="screen" title="no title" charset="utf-8">
		<script type="text/javascript" src="../lib/floating-scroll-master/dist/jquery.floatingscroll.min.js"></script>
		
		<style>
			.cbFormRequiredMarker
			{
				color:red !important;
			}

			img[alt="Calendar"]
			{
				margin-left:-40px !important;
			}

			.isHidden,
			.cbUpdateButton
			{
				display:none !important;
			}
			
			.part1
			{
				margin-bottom:20px;
			}
			
			#cb-modal-body *
			{
				font-size:12px !important;
			}
			
			.cb-relate-eisa
			{
				height: 70vh;
			}
			
			*[name$="RecordCurrent_EISA_No"]
			{
				background-color:#dedede !important;
			}
			
			.progressbar a.disabled,
			*[name$="RecordCurrent_EISA_No"]
			{
				cursor:not-allowed;
			}

			.cb-search-customer
			{
				background-color:#dedede;
				border-color:#c5b5b5;
			}

			#MPO_Details_Iframe
			{
				width:500px;
			}

			.cb-next-btn
			{
				color: #FFFFFF !important;
				font-size: 15px !important;
				font-family: Arial, Helvetica, sans-serif !important;
				font-weight: 400 !important;
				text-transform: uppercase !important;
				text-align: center !important;
				min-width: 180px !important;
				min-height: 51px !important;
				padding: 15px 20px !important;
				display: inline-block !important;
				background: #027FAA !important;
				border: none !important;
				-webkit-border-radius: 3px !important;
				-moz-border-radius: 3px !important;
				border-radius: 3px !important;
				margin: 0px 10px !important;
			}
		</style>
	</head>
	<body class="hide">
		<?php include_once "../partials/navbar-vp.php"; ?>

		<main role="main" class="container">

			<?php include_once "../partials/progressbar-cfo-vp-coo.php"; ?>

            		<!-- SECTION 1 : ISA Template -->
			<div class="part1">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000c664a42cebf343b29ee2/emb"></script>
			</div>

			<div class="part1 calc-summary-container">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000e6fa8ea67191406f98e4/emb"></script>
			</div>

			<!-- COMMENTS SECTION -->
			<div class="part1">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000f80be512f9f14c39ba69/emb"></script>
			</div>

			<script>
				function iframe_autoresize(elem)
				{
					var $iframe = $(elem).length ? $(elem) : window.parent.$(elem);
					var padding = 10;

					$iframe.css( 'height', '0px' );
					var height = $iframe.get(0).contentWindow.document.body.scrollHeight + padding;
					$iframe.css( 'height', (height + 70) + 'px' );
				}

				update_progress_bar_cfo_vp_coo(1);
			</script>

			<!-- Network Customer Selection/Fill up -->
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
		<!-- ./Network Customer Selection/Fill up -->

		</main>
	</body>
</html>
