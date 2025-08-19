<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?> 
		<title>E-ISA</title>
		<link rel="stylesheet" href="../css/section-8.css" media="screen" title="no title" charset="utf-8">
		<link rel="stylesheet" href="../css/floating-header.css" media="screen" title="no title" charset="utf-8">
		<script src="../js/floating-header.js"></script>
	</head>
	<style>
		tr[data-cb-name="data"] > td
		{
			border:1px #dedede solid;
		}

		.isright
		{
			text-align:right;
		}

		.bgblack td,
		.bgblack
		{
			background-color:black !important;
			color:white  !important;
		}
	</style>
	<body class="hide">
		<?php include_once "../partials/navbar-vp.php"; ?>

		<main role="main" class="container">

			<?php include_once "../partials/progressbar-cfo-vp-coo.php"; ?>

			<div id="float">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D5500018feccb46df84e28a0e4/emb"></script>
			</div>

			<div class="cb-nav-btn text-center">
				<a href="./manufacturer-rebates-investments.php?ISA_ID=<?php echo $_GET['ISA_ID']; ?>&Section_ID=7" class="cb-back-btn">Back</a>
				<a href="./estimated-returns.php?ISA_ID=<?php echo $_GET['ISA_ID']; ?>&Section_ID=9" class="cb-next-btn">Next</a>
			</div>

			<div class="cb-cgr mb-3">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000cb0a25708d8f4efd9c6f/emb"></script>
			</div>


			<div class="marginbot20px calc-summary-container">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000e6fa8ea67191406f98e4/emb"></script>
			</div>

			<!-- COMMENTS SECTION -->
			<div class="marginbot20px">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000f80be512f9f14c39ba69/emb"></script>
			</div>

			<script src="../lib/autonumeric/autoNumeric.js"></script>
			<script src="../js/investments-2.js"></script>

			<style>
				*[name="Mod0EditRecord"]
				{
					display:none !important;
				}

				.cb-next-btn,
				.cb-back-btn,
				.cb-back-btn:hover,
				.cb-next-btn:hover
				{
					color: #FFFFFF ;
					font-size: 15px ;
					font-family: Arial, Helvetica, sans-serif ;
					font-weight: 400 ;
					text-transform: uppercase ;
					text-align: center ;
					min-width: 180px ;
					padding: 15px 20px ;
					display: inline-block ;
					background: #027FAA ;
					border: none ;
					-webkit-border-radius: 3px ;
					-moz-border-radius: 3px ;
					border-radius: 3px ;
					margin: 0px 10px ;
				}

				.cb-back-btn,
				.cb-back-btn:hover
				{
					background: #A9A9A9;
				}
			</style>

			<script>
				update_progress_bar_cfo_vp_coo(8);

				document.addEventListener('DataPageReady', function (event) {

					$('#iframe_moved_fields').remove();

					if((event.detail.appKey).search('18feccb46df84e28a0e4') >= 0)
					{
						deal_total_css();
						monthly_amounts_css();
						qty_css();
						participation_css();
						mfrparticipation_css();
						customerparticipation_css();
					}
				});
			</script>

        	</main>
	</body>
</html>