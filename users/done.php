<?php $ISA_ID = isset($_GET['ISA_ID']) ? $_GET['ISA_ID'] : null; ?>

<!doctype html>
<html lang="en">
	<head>
		<title>E-ISA</title>
                <link rel="stylesheet" href="../lib/bootstrap-4.4.1/bootstrap-4.4.1.min.css">
		<script src="../js/fontawesome.js" crossorigin="anonymous"></script>
                <script src="../lib/jquery-3.3.1.min.js"></script>
	</head>
	<body class="hide">
		<?php include_once "../partials/navbar-users.php"; ?>
		<main role="main" class="container text-center mt-5">
			<div>Your E-ISA approval submission is complete.</div>
			<div>The next person to approve this E-ISA is DSM</div>
		</main>

		<style>
			table[role="presentation"]
			{
				margin:auto;
			}

			.cb-text-grey
			{
				color:rgba(255,255,255,.5);
			}
		</style>
	</body>
</html>