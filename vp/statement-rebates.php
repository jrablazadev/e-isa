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

			<div class="mb-3 section-container container1 grid-edit cb-statement-rebate">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000e3e2f07160874db39321/emb"></script>
			</div>

			<div class="mb-3 calc-summary-container">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000e6fa8ea67191406f98e4/emb"></script>
			</div>

			<div class="mb-3">
				<!-- COMMENTS SECTION -->
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000f80be512f9f14c39ba69/emb"></script>
			</div>
		</main>
		<script>
			update_progress_bar_cfo_vp_coo(5);


			// function percent_columns()
			// {
			// 	$('.statement').each(function(){
			// 		var val = Number(this.value);
			// 		$(this).closest('tr').children('td:nth-child(4)').html(val.toFixed(2).toString() + '%');
			// 	});
			// }

			document.addEventListener('DataPageReady', function (event) {
				// percent_columns();

				$('.nextbtn').html('next');
				$('.nextbtn').attr('href', './eq-rebates.php?ISA_ID=<?php echo $_GET['ISA_ID']; ?>&Section_ID=6');
			});
		</script>
	</body>
</html>