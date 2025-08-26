<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?> 
		<title>E-ISA</title>
	</head>
	<style>
		
	</style>

	<body class="hide">
		<?php include_once "../partials/navbar-vp.php"; ?>
		
		<main role="main" class="container">

			<?php include_once "../partials/progressbar-cfo-vp-coo.php"; ?>

			<div class="marginbot20px pnt-mfc-con">
				<!-- Manufacturer -->
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500033c47c0e5ae64cc79462/emb"></script>
			</div>

			<!-- Section 4 : ISA Invoice Discounts -->
			<div class="marginbot20px section-container container1 grid-edit cb-invoice-discounts">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000d3e8f98b087d439a918e/emb"></script>
			</div>

			<div class="marginbot20px calc-summary-container">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000e6fa8ea67191406f98e4/emb"></script>
			</div>

			<div class="marginbot20px">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000f80be512f9f14c39ba69/emb"></script>
			</div>
		</main>

		<style>
			a[data-cb-name="GridEditButton"]
			{
				display:none;
			}
			
			/* .container1 tr[data-cb-name="data"] > td:nth-child(2),
			.container1 tr[data-cb-name="data"] > td:nth-child(4)
			{
				background-color:lightblue !important;
			} */

			.container1
			{
				margin-bottom:10px;
			}
		</style>

		<script>
			update_progress_bar_cfo_vp_coo(4);

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