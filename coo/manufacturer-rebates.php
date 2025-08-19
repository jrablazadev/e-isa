<?php
	$ISA_ID = isset($_GET['ISA_ID']) ? $_GET['ISA_ID'] : null;
	header( 'Location: ../template-update.php?ISA_ID='.$ISA_ID.'&Section_ID=1' ) ;
	die();
?>

<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?> 
		<title>E-ISA</title>
	</head>
    <style>
            .container1 tr[data-cb-name="data"] > td:nth-child(1n+3)
            {
                    background-color:lightblue !important;
            }
			.container1 tr[data-cb-name="data"] > td:nth-child(5)
            {
                    background-color:white !important;
            }
    </style>

	<body class="hide">
		<?php include_once "../partials/navbar-coo.php"; ?>
		
		<main role="main" class="container">
			
			<div class="ishidden">
				<!-- navigation bar container -->
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000288517adb7084773b2e2/emb"></script>
			</div>
			
			<div style="display:none;">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000b8fc270763644165bbcd/emb"></script>
			</div>
		
            <?php include_once "../partials/progressbar.php"; ?>

			<div class="marginbot20px section-container container1 grid-edit">                
                <!-- Section 7 : ISA Manufacture Rebates -->
                <script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D5500042421c167a5944c7b0b2/emb"></script>
            </div>
			
            <div class="marginbot20px calc-summary-container">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000e6fa8ea67191406f98e4/emb"></script>
			</div>
			
			<div class="marginbot20px">
				<!-- COMMENTS SECTION -->
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000f80be512f9f14c39ba69/emb"></script>
			</div>

		</main>

		<style>
			.HeadCtnr table[class="Table"] > tbody > tr:nth-child(1) > th,
			.BodyCtnr table[class="Table"] > thead > tr > th,
			.BodyCtnr table[class="Table"] > tbody > tr > td div
			{
				width:150px !important;
			}

			.HeadCtnr table[class="Table"] > tbody > tr:nth-child(1) > th:nth-child(1),
			.BodyCtnr table[class="Table"] > thead > tr > th:nth-child(1),
			.BodyCtnr table[class="Table"] > tbody > tr > td:nth-child(1) div
			{
				width:350px !important;
			}

			.cbResultSetGridNonEditableColumnNumberDate .Data,
			.Data,
			input[name^="InlineEdit"]
			{
				text-align:left !important;
			}

			.section-container
			{
				overflow:auto;
			}

			.cbResultSetGridHeaderCellNumberDate
			{
				text-transform:none !important;
			}

		</style>

		<script>
			var timer = setInterval(function(){
				$(' \
					.HeadCtnr table[class="Table"] > tbody > tr:nth-child(1) > th, \
					.BodyCtnr table[class="Table"] > thead > tr > th, \
					.BodyCtnr table[class="Table"] > tbody > tr > td div \
				').css('width', 'auto');

				$('select').css('width', 'auto');
			}, 1000);

		</script>
	</body>
</html>