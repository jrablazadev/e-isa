<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?> 
		<title>E-ISA</title>
		<link rel="stylesheet" href="../css/section-8.css" media="screen" title="no title" charset="utf-8">
		<link rel="stylesheet" href="../css/floating-header.css" media="screen" title="no title" charset="utf-8">
		<script src="../js/floating-header.js"></script>
	</head>
	<body class="hide">
		<?php include_once "../partials/navbar-dom.php"; ?>
		<main role="main" class="container">
				
			<div class="d-none">
				<!-- navigation bar container -->
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000288517adb7084773b2e2/emb"></script>

				<!-- Check invoice discounts -->
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000b8fc270763644165bbcd/emb"></script>
				
				<!-- Check notes -->
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000483a6d402d214367b0ff/emb"></script>
			</div>

			<?php include_once "../partials/progressbar.php"; ?>

			<div class="mb-3" id="float">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500018feccb46df84e28a0e4/emb"></script>
			</div>

			<div class="mb-3 cb-cagr-entry-container">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000ebfefbcce6ab41508f8c/emb"></script>
			</div>
            
            		<div class="mb-3 calc-summary-container">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000e6fa8ea67191406f98e4/emb"></script>
			</div>

			<div class="mb-3">
				<!-- COMMENTS SECTION -->
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000f80be512f9f14c39ba69/emb"></script>
			</div>	
			
			<script src="../lib/autonumeric/autoNumeric.js"></script>
			<script src="../js/investments-2.js"></script>
			
			<script>
				document.addEventListener('DataPageReady', function (event) {
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