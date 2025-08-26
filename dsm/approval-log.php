<!doctype html>
<html lang="en">
<head>
	<?php include_once "../partials/head.php"; ?> 
	<title>E-ISA: Dashboard</title>
</head>

<body class="hide">
	<?php include_once "../partials/navbar-dsm.php"; ?>
	<main role="main" class="container">

		<div class="table-header mb-2"><strong>Approval Log</strong></div>
		<div class="overflow-auto cb-report mb-3 cb-approval-log">
		<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500014325d0a0bf94ee8ac37/emb"></script>
		</div>
			
	</main>

	<style>
		.cbFormPassword
		{
			width:100%;
		}

		#caspioform > div
		{
			/*margin:auto;*/
		}

		.headers
		{
			background-color:black;
			color:white;
			font-weight:bold;
			padding:10px;
			text-align:center;
			font-size:12px;
		}

		.table-header
		{
			width: 100%;
			text-align: center;
			padding: 5px;
			padding: 10px;
			font-size:12px;
			text-decoration:underline;
		}

		.cb-report tr[data-cb-name="data"] td,
		.cb-report tr[data-cb-name="header"] th,
		.cb-report a
		{
			font-size:12px !important;
			padding:5px;
			text-align:left;
		}

		.cb-report tr[data-cb-name="header"] a,
		.cb-report tr[data-cb-name="data"] a:not(.btn)
		{
			padding:0px;
		}

		#scratch-pad-container tr[data-cb-name="data"] > *:nth-child(2),
		.cb-approved tr[data-cb-name="data"] > *:nth-child(4)
		{
			max-width:150px;
			min-width:150px;
			white-space: initial;
			word-wrap:break-word;
			text-align:left;
		}

		#scratch-pad-container input[type="text"]
		{
			padding:3px;
		}

		#searchButton,
		#reset-filter
		{
			font-size:12px;
			padding:4px;
		}


	</style>
</body>
</html>
