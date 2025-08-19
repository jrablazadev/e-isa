<!doctype html>
<html lang="en">

<head>
	<?php include_once "../partials/head.php"; ?>
	<title>E-ISA | Search All E-ISA</title>
</head>

<body class="hide">
	<?php include_once "../partials/navbar-ism.php"; ?>

	<main role="main" class="container-fluid mt-2 mb-5">

		<div class="cb-headers bg-dark text-uppercase text-center text-white font-weight-bold p-2">Search All E-ISA</div>

		<div class="cb-results">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500071f1f8e38658430eb8ec/emb"></script>
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