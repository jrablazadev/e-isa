<?php $ISA_ID = isset($_GET['ISA_ID']) ? $_GET['ISA_ID'] : null; ?>

<!doctype html>
<html lang="en">
	<head>
		<title>E-ISA</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
		<script src="https://kit.fontawesome.com/d771d0e0bd.js" crossorigin="anonymous"></script>

                <script src="../lib/jquery-3.3.1.min.js"></script>
	</head>
	<body class="hide">
		<?php include_once "../partials/navbar-srf.php"; ?>
		<main role="main" class="container">

			<div class="ishidden2">
                                <div class="cb-changelog"></div>
                                <div class="cb-sendemail-toadmin"></div>
			</div>

			<div class="cb-msg text-center mt-5"></div>
		</main>

                <script src="../js/done.js"></script>

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