<!doctype html>
<html lang="en">
<head>
	<?php include_once "../partials/head.php"; ?>
	<title>E-ISA | Deal Sheet Phase Link</title>
	<style>
		.headers
		{
			background-color:black;
			color:white;
			font-weight:bold;
			padding:10px;
			text-align:center;
		}
	</style>
</head>

<body class="hide">
	<?php include_once "../partials/navbar-coo.php"; ?>

	<main role="main" class="container">

		<div class="cb-report mb-3">
			<div class="headers">Equipment and Services</div>
			<div class="cb-forapproval">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D550001a4f940dc8f74657850a/emb"></script>
			</div>
		</div>

		<div class="cb-report mb-3">
			<div class="headers">Discount Structure</div>
			<div class="cb-forapproval">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D5500065334175fbb9412088d0/emb"></script>
			</div>
			<div class="cb-forapproval">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D550002b079560ac5546b39d18/emb"></script>
			</div>
			<div class="cb-forapproval">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D5500062a3ac5939ab4a16af6d/emb"></script>
			</div>
		</div>

		<div class="cb-report mb-3">
			<div class="headers">Contract Details</div>
			<div class="cb-forapproval">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D550002a0d68575d844961919f/emb"></script>
			</div>
		</div>

	</main>
	
	<script src="../lib/autonumeric/autoNumeric.js"></script>
	<script src="../js/investments-2.js"></script>

	<script>
		document.addEventListener('DataPageReady', function (event) {
			deal_total_css();
			monthly_amounts_css();
			qty_css();
			participation_css();
			mfrparticipation_css();
			customerparticipation_css();
		});
	</script>
</body>
</html>

