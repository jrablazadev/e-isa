<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title></title>

		<?php include_once "../partials/config.php" ?>
		<?php include_once "../partials/head.php"; ?>
	</head>
	<body>
		<div class="container mt-3">
			<div class="row">
				<div class="col-sm"></div>
				<div class="col-sm">
					<div id="ct-user-list"></div>
				</div>
				<div class="col-sm"></div>
			</div>
		</div>
		<script type="text/javascript" src="<?= $cb_datapage_prefix ?>9a9640504e0a458aa791/emb"></script>
		<script type="text/javascript" src="../js/breach-comments-email-users.js"></script>

		<style>
			.btn.dropdown-toggle .filter-option
			{
				font-size:14px !important;
				color:black;
			}

			#ct-user-list thead tr th
			{
				background-color:#027FAA;
				color:#FFFFFF;
			}

			#ct-user-list th,
			#ct-user-list td
			{
				font-size:14px;
			}
		</style>
	</body>
</html>