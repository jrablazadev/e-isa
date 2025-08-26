<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?> 
		<title>E-ISA</title>
		<link rel="stylesheet" href="../css/section-8.css" media="screen" title="no title" charset="utf-8">
		<link rel="stylesheet" href="../css/floating-header.css" media="screen" title="no title" charset="utf-8">
		<script src="../js/floating-header.js"></script>
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
	</head>
	<body class="hide">
		<?php include_once "../partials/navbar-user-group.php"; ?>

		<main role="main" class="container mb-5">

			<?php include_once "../partials/progressbar-user-group-view.php"; ?>

			<div id="float">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500018feccb46df84e28a0e4/emb"></script>
			</div>

			<div class="cb-nav-btn text-center">
				<a href="./manufacturer-rebates-investments.php?ISA_ID=<?php echo $_GET['ISA_ID']; ?>&Section_ID=7" class="cb-back-btn">Back</a>
				<a href="./estimated-returns.php?ISA_ID=<?php echo $_GET['ISA_ID']; ?>&Section_ID=9" class="cb-next-btn">Next</a>
			</div>

			<div class="cb-cgr mb-3">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000cb0a25708d8f4efd9c6f/emb"></script>
			</div>


			<div class="mb-3 calc-summary-container">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000e6fa8ea67191406f98e4/emb"></script>
			</div>


			<script src="../lib/autonumeric/autoNumeric.js"></script>
			<script src="../js/investments-2.js"></script>

			<style>
				*[name="Mod0EditRecord"],
				.cb-next-btn,
				.cb-back-btn
				{
					display:none !important;
				}
			</style>

			<script>
				update_progressbar(8);

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