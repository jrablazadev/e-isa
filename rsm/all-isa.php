<!doctype html>
<html lang="en">

<head>
	<?php include_once "../partials/head.php"; ?>
	<title>E-ISA | Search All E-ISA</title>
</head>

<body class="hide">
	<?php include_once "../partials/navbar-rsm.php"; ?>

	<main role="main" class="container-fluid mt-2 mb-5">

		<div class="cb-headers bg-dark text-uppercase text-center text-white font-weight-bold p-2">Search All E-ISA</div>

		<div class="cb-results">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550009be3072c7119479493ab/emb"></script>
		</div>
	</main>

	<script>
		$('#nav-allisa').addClass('active');
	</script>

	<script>
		<?php echo file_get_contents('../js/dashboard-relate-accounts.js'); ?>
	</script>
</body>

</html>