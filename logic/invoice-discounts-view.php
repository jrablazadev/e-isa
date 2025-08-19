<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?> 
		<title>E-ISA</title>
	</head>
	<style>
		.container1 tr[data-cb-name="data"] > td:nth-child(2),
		.container1 tr[data-cb-name="data"] > td:nth-child(4)
		{
			background-color:lightblue !important;
		}

		.container1
		{
			margin-bottom:10px;
		}
	</style>

	<body class="hide">
		<?php include_once "../partials/navbar-logic.php"; ?>

		<main role="main" class="container mb-5">
			<?php include_once "../partials/progressbar-user-group-view.php"; ?>

			<div class="mb-3 pnt-mfc-con">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500033c47c0e5ae64cc79462/emb"></script>
			</div>

			<div class="mb-3 section-container container1 grid-edit cb-invoice-discounts">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000d3e8f98b087d439a918e/emb"></script>
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
		</style>
		<script>
			update_progressbar(4);

			// function percent_columns()
			// {
			// 	$('.percentbusiness').each(function(){
			// 		var val = Number(this.value);
			// 		val = val.toFixed(2).toString() + '%';
			// 		$(this).closest('tr').children('td:nth-child(2)').html(val);
			// 	});

			// 	$('.ttinvoicediscount').each(function(){
			// 		var val = Number(this.value);
			// 		$(this).closest('tr').children('td:nth-child(4)').html(val.toFixed(2).toString() + '%');
			// 	});
			// }

			document.addEventListener('DataPageReady', function (event) {
				// percent_columns();

				$('.nextbtn').html('next');
				$('.nextbtn').attr('href', './statement-rebates.php?ISA_ID=<?php echo $_GET['ISA_ID']; ?>&Section_ID=5');
			});
		</script>
	</body>
</html>