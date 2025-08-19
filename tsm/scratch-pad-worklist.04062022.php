<!doctype html>
<html lang="en">

<head>
	<?php include_once "../partials/head.php"; ?>
	<title>E-ISA: Dashboard</title>
</head>

<body class="hide">
	<?php include_once "../partials/navbar-tsm.php"; ?>
	<main role="main" class="container">

		<div class="headers bg-dark text-uppercase">STEP 1 WORK LIST (Scratch Pad, Calculator)</div>
		<div id="scratch-pad-container" class="cb-report mb-3">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D550008ee50769a0604cedb505/emb"></script>
		</div>

		<div class="headers bg-dark mb-2">STEP 2 APPROVALS</div>
		<div>

			<div class="table-header mb-2"><strong>Approved ISAs List</strong></div>
			<div class="overflow-auto cb-report mb-3 cb-approved">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D550001185f2ac033f4e328f6d/emb"></script>
			</div>

			<div class="table-header mb-2"><strong>ISAs in Deal Sheet Phase</strong></div>
			<div class="overflow-auto cb-report mb-3">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D550009a536459cb524a21a164/emb"></script>
			</div>

			<!-- Step 3 -->
			<div class="table-header mb-2"><strong>ISAs in Contract Phase</strong></div>
			<div class="overflow-auto cb-report mb-3">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D550000a2f719017544bc4b36c/emb"></script>
			</div>

			<!-- Step 4 -->
			<div class="table-header mb-2"><strong>Execution Work Queue</strong></div>
			<div class="overflow-auto cb-report mb-3 cb-execution-work">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D550002223af6dd1c9488e8f06/emb"></script>
			</div>

			<div class="cb-report mb-3">
				<div class="table-header mb-2"><strong>Breach/Deal Termination Work Queue</strong></div>
				<div class="overflow-auto" id="cb-team-breach"></div>
			</div>

		</div>
	</main>

	<script>
		deployDP('cb-team-breach', 'https://caspio.thenetwork-crm.com/dp/25D55000ef0488b6fd5a42668381/emb');
	</script>
	<script src="../js/dashboard-relate-accounts.js?v=<?php echo date('YmdHis'); ?>"></script>

	<script src="../js/dashboard-metrics.js"></script>
	<link rel="stylesheet" href="../css/dashboard-metrics.css">
	
	<script>
		// Dashboard metrics
		var bucketApp_Keys = [
			"1185f2ac033f4e328f6d",
			"9a536459cb524a21a164",
			"0a2f719017544bc4b36c",
			"2223af6dd1c9488e8f06",
			"ef0488b6fd5a42668381",
		]
		
		document.addEventListener("DataPageReady", function () {
			// Provide the parent Div
			makeDashboardMetric(".container")
		})
	</script>
	
	<script>
		
		$('#nav-dashboard').addClass('active');

		function inactive_isa(ISA_ID) {
			$.confirm({
				type: 'secondary',
				columnClass: 'col-md-6 col-md-offset-3',
				icon: 'fa fa-warning',
				title: 'Inactivate ISA',
				theme: 'material',
				content: 'Are you sure you would like to inactivate this record? <br/> This record will be removed from the list.',
				backgroundDismiss: true,
				buttons: {
					NO: function() {},
					YES: {
						text: 'YES',
						btnClass: 'btn-green',
						action: function() {
							window.location.href = './scratch-pad-delete.php?ISA_ID=' + ISA_ID;
						}
					}
				}
			});
		}
	</script>

	<style>
		.cbFormPassword {
			width: 100%;
		}

		#caspioform>div {
			/*margin:auto;*/
		}

		.headers {
			background-color: black;
			color: white;
			font-weight: bold;
			padding: 10px;
			text-align: center;
			font-size: 12px;
		}

		.table-header {
			width: 100%;
			text-align: center;
			padding: 5px;
			padding: 10px;
			font-size: 12px;
			text-decoration: underline;
			border-top: 1px #dedede solid;
		}

		.cb-report tr[data-cb-name="data"] td,
		.cb-report tr[data-cb-name="header"] th,
		.cb-report a {
			font-size: 12px !important;
			padding: 5px;
			text-align: left;
		}

		.cb-report tr[data-cb-name="header"] a,
		.cb-report tr[data-cb-name="data"] a:not(.btn) {
			padding: 0px;
		}

		#scratch-pad-container tr[data-cb-name="data"]>*:nth-child(2),
		.cb-approved tr[data-cb-name="data"]>*:nth-child(4) {
			max-width: 150px;
			min-width: 150px;
			white-space: initial;
			word-wrap: break-word;
			text-align: left;
		}

		#scratch-pad-container input[type="text"] {
			padding: 3px;
		}

		#searchButton,
		#reset-filter {
			font-size: 12px;
			padding: 4px;
		}
	</style>
</body>

</html>