<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?> 
		<title>E-ISA</title>
	</head>
	<body class="hide">

		<?php include_once "../partials/navbar-vp.php"; ?>

		<main role="main" class="container">

			<?php include_once "../partials/progressbar-cfo-vp-coo.php"; ?>

			<!-- Section 6 : ISA EQ Rebates -->
			<div class="marginbot20px section-container container1 grid-edit cb-eq-rebate">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000c1f9eeccc6c548a2b303/emb"></script>
			</div>

			<div class="marginbot20px calc-summary-container">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000e6fa8ea67191406f98e4/emb"></script>
			</div>

			<!-- COMMENTS SECTION -->
			<div class="marginbot20px">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000f80be512f9f14c39ba69/emb"></script>
			</div>
		</main>
		<script>
			update_progress_bar_cfo_vp_coo(6);

			// var timer = setInterval(function(){
			// 	$(' \
			// 		.HeadCtnr table[class="Table"] > tbody > tr:nth-child(1) > th, \
			// 		.BodyCtnr table[class="Table"] > thead > tr > th, \
			// 		.BodyCtnr table[class="Table"] > tbody > tr > td div \
			// 	').css('width', 'auto');

			// 	$('select').css('width', 'auto');
			// }, 1000);

			document.addEventListener('DataPageReady', function (event) {
				$('.nextbtn').html('next');
				$('.nextbtn').attr('href', './manufacturer-rebates-investments.php?ISA_ID=<?php echo $_GET['ISA_ID']; ?>&Section_ID=7');
			});
		</script>
	</body>
</html>