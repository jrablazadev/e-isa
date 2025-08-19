<!doctype html>
<html lang="en">

<head></head>

<body class="hide">
	<div class="mb-2 text-right">
		<a href="./template-new.php" class="btn btn-primary"><i class="fas fa-calculator"></i> Create E-ISA</a>
	</div>

	<div class="header bg-dark text-uppercase">STEP 1 WORK LIST (Scratch Pad, Calculator)</div>
	<div class="cb-report mb-3" id="cb-team-scratchpad"></div>

	<div class="header bg-dark mb-2">STEP 2 APPROVALS</div>

	<div class="cb-report mb-3">
		<div class="cb-step2-header mb-2">Deal Termination - My Approval Needed</div>
		<div class="cb-forapproval-dt" id="cb-team-myapproval-dt"></div>
	</div>

	<div class="cb-report mb-3">
		<div class="cb-step2-header mb-2">My Approval Needed</div>
		<div class="cb-forapproval" id="cb-team-myapproval"></div>
	</div>

	<div class="cb-report mb-3">
		<div class="cb-step2-header mb-2">Upcoming Approval</div>
		<div class="cb-upcoming-approval" id="cb-team-upcoming"></div>
	</div>

	<div class="cb-report mb-3">
		<div class="cb-step2-header mb-2">Approved ISAs List</div>
		<div class="cb-approved" id="cb-team-approved"></div>
	</div>

	<div class="cb-report mb-3">
		<div class="cb-step2-header mb-2">ISAs in Deal Sheet Phase</div>
		<div class="cb-approved" id="cb-team-dealsheet"></div>
	</div>

	<div class="cb-report mb-3">
		<div class="cb-step2-header mb-2">ISAs in Contract Phase</div>
		<div class="cb-approved" id="cb-team-contratphase"></div>
	</div>

	<div class="cb-report mb-3">
		<div class="cb-step2-header mb-2">Execution Work Queue</div>
		<div class="cb-execution-work" id="cb-team-exec"></div>
	</div>

	<div class="cb-report mb-3">
		<div class="cb-step2-header mb-2">ISA Team Breach/Deal Termination Work Queue</div>
		<div class="" id="cb-team-breach"></div>
	</div>

	<div id="cb-modal" class="modal" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title font-initial" id="cb-modal-title">Modal title</h5>
					<button type="button" class="close font-initial" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true" class="font-initial">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div class="col-12">
						<div id="cb-modal-body" class="cb-form-fluid"></div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<script>
		deployDP('cb-team-scratchpad', 'https://caspio.thenetwork-crm.com/dp/25d55000ef846788b6084c409415/emb');
		deployDP('cb-team-myapproval', 'https://caspio.thenetwork-crm.com/dp/25d55000a99169350b1b4db3a9ba/emb');
		deployDP('cb-team-upcoming', 'https://caspio.thenetwork-crm.com/dp/25d55000df39ad1f875242d2a00e/emb');
		deployDP('cb-team-approved', 'https://caspio.thenetwork-crm.com/dp/25d55000a09712dd599e4a3c8c6d/emb');
		deployDP('cb-team-dealsheet', 'https://caspio.thenetwork-crm.com/dp/25d550000819d4e46cda412c91cd/emb');
		deployDP('cb-team-contratphase', 'https://caspio.thenetwork-crm.com/dp/25d55000fdddd86086af4c4bad51/emb');
		deployDP('cb-team-exec', 'https://caspio.thenetwork-crm.com/dp/25d550002374e8f1c2ba439fa800/emb');
		deployDP('cb-team-myapproval-dt', 'https://caspio.thenetwork-crm.com/dp/25d55000f21b4c25029f4d0b8119/emb');
		deployDP('cb-team-breach', 'https://caspio.thenetwork-crm.com/dp/25d550004715d70e3b0049f9977e/emb');
	</script>
	
	<script src="../js/dashboard-metrics.js"></script>
	<link rel="stylesheet" href="../css/dashboard-metrics.css">
	
	<script>
		// Dashboard metrics
		var bucketApp_Keys = [
			"a99169350b1b4db3a9ba",
			"df39ad1f875242d2a00e",
			"a09712dd599e4a3c8c6d",
			"0819d4e46cda412c91cd",
			"fdddd86086af4c4bad51",
			"2374e8f1c2ba439fa800",
			"ffc1c7c866bc4df4b5af",
		]
		
		var bucketLabels = [
			"My Approval <br> Needed",
			"Upcoming <br> Approvals",
			"Approved <br> E-ISA’s",
			"Deal Sheet <br> Approvals Needed",
			"Contract <br>Phase",
			"Execution <br>Phase",
			"Deal <br>Terminations",
		]
		
		document.addEventListener("DataPageReady", function () {
			// Provide the parent Div
			makeDashboardMetric("#team-tab-content", bucketLabels, "dashboard-metrics-content-md")
		})
	</script>


	<style>
		.cb-step2-header
		{
			text-align: center;
			padding: 10px;
			font-weight: bold;
			text-decoration: underline;
			border-top: 1px #dedede solid;
		}

		#cb-team-breach table[data-cb-name="cbTable"] thead tr th
		{
			white-space: initial;
		}

		#cb-team-breach textarea
		{
			width:150px !important;
			height:100px !important;
		}

		#cb-team-breach input[type="text"]
		{
			width:120px !important;
		}

		#cb-team-contratphase select
		{
			width:150px !important;
		}
	</style>
</body>

</html>