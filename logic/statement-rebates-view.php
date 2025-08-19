<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?> 
		<title>E-ISA</title>
	</head>
	<body class="hide">
		<?php include_once "../partials/navbar-logic.php"; ?>

		<main role="main" class="container mb-5">
			<?php include_once "../partials/progressbar-user-group-view.php"; ?>

			<div class="mb-3 section-container container1 grid-edit cb-statement-rebate">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550000acbae05d7954542a1cd/emb"></script>
			</div>

			<div class="mb-3 calc-summary-container">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000e6fa8ea67191406f98e4/emb"></script>
			</div>
		</main>
		<style>
			a[data-cb-name="GridEditButton"],
			.backbtn,
			.nextbtn
			{
				display:none !important;
			}

			.progressbar li a
			{
				pointer-events: none;
			}
		</style>
		<script>
			update_progressbar(5);

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