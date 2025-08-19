<?php $ISA_ID = isset($_GET['ISA_ID']) ? $_GET['ISA_ID'] : null; ?>

<!doctype html>
<html lang="en">
	<head>
		<title>E-ISA</title>
		<?php include_once "../partials/head.php"; ?> 
	</head>
	<body class="hide">
		<?php include_once "../partials/navbar-sm.php"; ?>
		<main role="main" class="container">

			<div class="ishidden2">
				<!-- Change Log -->
				<iframe src="https://caspio.thenetwork-crm.com/dp/25D550001815674c8f034d74bfe7?ISA_ID=<?php echo $ISA_ID; ?>"></iframe>
			</div>

			<div class="ishidden2">
				<!-- Update ISA Status -->
				<iframe src="https://caspio.thenetwork-crm.com/dp/25D55000c5ca893373d74398a481?ISA_ID=<?php echo $ISA_ID; ?>&Status=For Approval&Next_Approver=2"></iframe>
			</div>

			<div class="text-center" style="margin-top:50px;">
				Successfully submitted to Approver
			</div>
		</main>

		<style>
			table[role="presentation"]
			{
				margin:auto;
			}

			.ishidden2
			{
				height: 0px;
				overflow: hidden;
			}
		</style>
	</body>
</html>