<?php
	$ISA_ID = isset($_GET['ISA_ID']) ? $_GET['ISA_ID'] : null;
	header( 'Location: ./template-update.php?ISA_ID='.$ISA_ID.'&Section_ID=1' ) ;
	die();
?>

<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?> 
		<title>E-ISA</title>
		<link rel="stylesheet" href="../css/section-8.css" media="screen" title="no title" charset="utf-8">
		<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.2/jquery-confirm.min.css">
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.2/jquery-confirm.min.js"></script> -->
		<script src="../js/investments-entry.js"></script>
		<script src="../lib/autonumeric/autoNumeric.js"></script>
		<link rel="stylesheet" href="../css/floating-header.css" media="screen" title="no title" charset="utf-8">
		<script src="../js/floating-header.js"></script>
	</head>
    <style>
        input[type="text"]
        {
            width:100px;
            float:right;
            text-align:center;
        }

        .qty[data-investmentid="7"],
        .qty[data-investmentid="8"],
        .qty[data-investmentid="9"],
        .qty[data-investmentid="10"],
        .qty[data-investmentid="25"],
        .qty[data-investmentid="26"],
        .qty[data-investmentid="43"],
        .customer-participation[data-investmentid="7"],
        .customer-participation[data-investmentid="8"],
        .customer-participation[data-investmentid="9"],
        .customer-participation[data-investmentid="10"],
        .customer-participation[data-investmentid="25"],
        .customer-participation[data-investmentid="26"],
        .customer-participation[data-investmentid="43"],
        .mfr-participation[data-investmentid="26"],
        #entryraw-container,
		tr[data-cb-name="data"] > td:first-child
        {
            display:none;
        }
		
		.investmentname
		{
			width:150px;
			display:block;
		}
		
    </style>

	<body class="hide">

		<?php include_once "../partials/navbar-users.php"; ?>
		
		<main role="main" class="container">

			<div class="ishidden">
				<!-- navigation bar container -->
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000288517adb7084773b2e2/emb"></script>
			</div>
			
			<div style="display:none;">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000b8fc270763644165bbcd/emb"></script>
			</div>

			<?php include_once "../partials/progressbar.php"; ?>

            <div class="marginbot20px" id="float">
                <script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500051ba494d753f49b0a82e/emb"></script>
            </div>

            <div id="entryraw-container">
                <script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000d45ec1ea789448e29b84/emb"></script>
            </div>

            <div class="marginbot20px calc-summary-container">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000e6fa8ea67191406f98e4/emb"></script>
			</div>

			<div class="marginbot20px">
				<!-- COMMENTS SECTION -->
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000f80be512f9f14c39ba69/emb"></script>
			</div>

        </main>
	</body>
</html>