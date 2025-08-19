<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
		<script src="https://kit.fontawesome.com/d771d0e0bd.js" crossorigin="anonymous"></script>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<title>E-ISA</title>
	</head>

	<body class="hide">
		<?php include_once "./partials/navbar-public.php"; ?>
		<main role="main" class="container mt-5 mb-5">
			<div class="card mt-5 mb-5 margin-auto cb-containers">
				<div class="card-header"><i class="fas fa-sign-in-alt"></i> Login - Admin</div>
				<div class="card-body">
					<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000d8e6e97145ca45dc871a/emb"></script>
				</div>
			</div>
		</main>

		<style>
			#caspioform > div
			{
				margin:auto;
			}

			.pointer-event-none
			{
				pointer-events: none;
			}

			.cb-containers
			{
				width:500px;
				margin:auto;
			}

			input[type="submit"]
			{
				width: 100%;
				padding: 0px !important;
				margin: 0px !important;
			}

			@media (max-width: 550px)
			{
				.cb-containers
				{
					width:100% !important;
				}
			}
		</style>
	</body>
</html>
