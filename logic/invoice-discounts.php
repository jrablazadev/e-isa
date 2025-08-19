<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?> 
		<title>E-ISA</title>
	</head>
	<body class="hide">
		<?php include_once "../partials/navbar-logic.php"; ?>

		<main role="main" class="container">
			<div class="d-none">
				<!-- navigation bar parameters container -->
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000288517adb7084773b2e2/emb?Section_ID=4"></script>
			</div>

            		<?php include_once "../partials/progressbar.php"; ?>

			<div class="mb-3 pnt-mfc-con">
				<!-- Manufacturer -->
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500033c47c0e5ae64cc79462/emb"></script>
			</div>

			<div class="mb-3 section-container container1 grid-edit cb-invoice-discounts">
				<!-- Section 4 : ISA Invoice Discounts -->
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000d3e8f98b087d439a918e/emb"></script>
			</div>

			<div class="mb-3 calc-summary-container">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000e6fa8ea67191406f98e4/emb"></script>
			</div>

			<div class="mb-3">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000f80be512f9f14c39ba69/emb"></script>
			</div>
		</main>

		<style>
			.cbResultSetGridNonEditableColumnNumberDate .Data,
			.Data,
			input[name^="InlineEdit"]
			{
				text-align:left !important;
			}

			.cbResultSetGridHeaderCellNumberDate
			{
				text-transform:none !important;
			}

			.pnt-mfc-con
			{
				margin-bottom:20px;
			}

			.pnt-mfc-con td
			{
				padding:0px !important;
			}

		</style>

		<script>
			// var timer = setInterval(function(){
			// 	$(' \
			// 		.HeadCtnr table[class="Table"] > tbody > tr:nth-child(1) > th, \
			// 		.BodyCtnr table[class="Table"] > thead > tr > th, \
			// 		.BodyCtnr table[class="Table"] > tbody > tr > td div \
			// 	').css('width', 'auto');

			// 	$('select').css('width', 'auto');
			// }, 1000);

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

			// document.addEventListener('DataPageReady', function (event) {
			// 	percent_columns();
			// });
		</script>
	</body>
</html>