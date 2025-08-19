<!doctype html>
<html lang="en">
	<head>
		<title>E-ISA</title>
		<script src="../lib/jquery-3.3.1.min.js"></script>
		<link rel="stylesheet" href="../lib/bootstrap-4.4.1/bootstrap-4.4.1.min.css">
	</head>
	<body class="hide">
		<main role="main">	
			<div class="d-none">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550002713d79af8ef48c29caf/emb"></script>	
			</div>

			<div class="m-5">
				<div class="spinner-border text-info" role="status"></div>
			</div>
		</main>

		<script>
			<?php echo file_get_contents('../js/compute-all.js'); ?>
		</script>
	</body>
</html>