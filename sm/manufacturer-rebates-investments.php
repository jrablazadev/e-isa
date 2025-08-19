<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?> 
		<title>E-ISA</title>

		<!-- Library: autoNumeric -->
		<script src="../lib/autonumeric/autoNumeric.js"></script>

		<style>
			<?php echo file_get_contents('../css/manufacturer-rebates-investments.css'); ?>
		</style>
	</head>
	<body class="hide">
		<?php include_once "../partials/navbar-sm.php"; ?>

		<main role="main" class="container">

			<?php include_once "../partials/progressbar-cfo-vp-coo.php"; ?>

			<!-- Manufacture Rebates -->
			<div class="cb-mfr-rebates section-container container1 grid-edit">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>fa5df8c486334d8da532/emb"></script>
			</div>

			<hr>

			<!-- Fixed Dollar Rebates -->
			<div class="cb-fixed-dollar mb-5">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>62898b9681374c338c8b/emb"></script>
			</div>

			<hr>

			<div class="cb-mfg-support mb-5">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>443ef2c03e584e0d8f5b/emb"></script>
			</div>

			<hr>

			<!-- Investments Entry -->
			<div class="cb-investments-entry marginbot20px" id="float">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>51ba494d753f49b0a82e/emb"></script>
			</div>

			<!-- Quick Analysis -->
			<div class="marginbot20px calc-summary-container">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>e6fa8ea67191406f98e4/emb"></script>
			</div>

			<!-- Comments -->
			<div class="marginbot20px">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>f80be512f9f14c39ba69/emb"></script>
			</div>
		</main>

		<style>
			a[data-cb-name="GridEditButton"]
			{
				display:none;
			}

			.cb-investments-entry .qty,
			.cb-investments-entry .participation,
			.cb-investments-entry .mfr-participation,
			.cb-investments-entry .customer-participatio
			{
				cursor:not-allowed;
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
				padding: 15px 20px !important;
				display: inline-block !important;
				background: #027FAA !important;
				border: none !important;
				-webkit-border-radius: 3px !important;
				-moz-border-radius: 3px !important;
				border-radius: 3px !important;
				margin: 0px 10px !important;
			}

			.nextbtn
			{
				display:none !important;
			}

			.cb-fixed-dollar a[data-cb-name="InlineEdit"]
			{
				display:none;
			}
		</style>
		<script>
			update_progress_bar_cfo_vp_coo(7);

			document.addEventListener('DataPageReady', function (event) {

				if (event.detail.appKey == '25d5500051ba494d753f49b0a82e')
				{
					$('.cb-investments-entry').find('.qty, .participation, .mfr-participation, .customer-participation').prop('disabled', true);
					$('.nextbtn').closest('div').append('<a href="./investments.php?ISA_ID=<?php echo $_GET['ISA_ID']; ?>&Section_ID=8" class="cb-next-btn">Next</a>');
				}

			});
		</script>
	</body>
</html>