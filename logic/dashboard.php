<!doctype html>
<html lang="en">

<head>
	<?php include_once "../partials/head.php"; ?>
	<title>E-ISA</title>
</head>

<body class="hide">
	<?php include_once "../partials/navbar-logic.php"; ?>

	<div class="d-none">
		<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550000db191f2f38d401bb173/emb"></script>
	</div>

	<main role="main" class="container">
		<ul class="nav nav-tabs" id="cb-tab" role="tablist"></ul>
		<div class="tab-content" id="cb-tab-content">
			<div class="mb-5">
				<div class="dashboard-metrics-logic"></div>
				<div class="header bg-dark mb-2">Log1c ICS Execution Work Queue</div>
				<div class="cb-report" id="cb-logicics-exec-work-queue"></div>

				<hr>

				<div class="header bg-dark mb-2">Log1c ICS Breach/Deal Termination Work Queue</div>
				<div class="cb-report" id="cb-logicics-breach"></div>
			</div>

			<script>
				deployDP('cb-logicics-exec-work-queue', 'https://caspio.thenetwork-crm.com/dp/25d550001ded9b7819d34c5894a5/emb');
				deployDP('cb-logicics-breach', 'https://caspio.thenetwork-crm.com/dp/25d5500054dd726bcf644b4bb4fb/emb');
			</script>

		</div>

	</main>

	<script src="../js/dashboard-metrics.js"></script>
	<link rel="stylesheet" href="../css/dashboard-metrics.css">

	<script>
		// Dashboard metrics
		var bucketApp_Keys_Logic = [
			"1ded9b7819d34c5894a5",
			"54dd726bcf644b4bb4fb",
		]

		var bucketLabels = [
			"Execution <br>Phase",
			"Deal <br>Terminations",
		]

		document.addEventListener("DataPageReady", function(event) {

			if (event.detail.appKey.includes("1ded9b7819d34c5894a5") || event.detail.appKey.includes("54dd726bcf644b4bb4fb")) {
				makeDashboardMetricForISATeamGroup(".dashboard-metrics-logic", bucketApp_Keys_Logic, bucketLabels, 'logic')
			}
		})
	</script>


	<script src="../js/dashboard-relate-accounts.js?v=<?php echo date('YmdHis'); ?>"></script>

	<script>
		<?php echo file_get_contents('../js/isa-team-dashboard.js'); ?>
	</script>

	<style>
		.header {
			width: 100%;
			text-align: center;
			padding: 5px;
			background: black;
			color: white;
			padding: 10px;
			font-weight: bold;
		}

		.tab-content *:not(.font-initial) {
			font-size: 12px;
		}

		.cbResultSetLabelLink:hover,
		.cbResultSetActionsLinks:hover {
			font-size: 12px !important;
		}

		.tab-content td,
		.tab-content th {
			padding: 5px !important;
		}

		#cb-team-scratchpad tr[data-cb-name="data"]>*:nth-child(2),
		#cb-team-myapproval tr[data-cb-name="data"]>*:nth-child(2),
		#cb-team-upcoming tr[data-cb-name="data"]>*:nth-child(3),
		#cb-team-approved tr[data-cb-name="data"]>*:nth-child(2),
		#cb-team-dealsheet tr[data-cb-name="data"]>*:nth-child(2),
		#cb-team-contratphase tr[data-cb-name="data"]>*:nth-child(2),
		#cb-team-exec tr[data-cb-name="data"]>*:nth-child(2),
		#cb-team-breach tr[data-cb-name="data"]>*:nth-child(3),
		#cb-pricing-breach tr[data-cb-name="data"]>*:nth-child(3),
		#cb-credit-breach tr[data-cb-name="data"]>*:nth-child(3),
		#logicics-breach tr[data-cb-name="data"]>*:nth-child(3),
		#cb-procurement-breach tr[data-cb-name="data"]>*:nth-child(3),
		#cb-logicics-breach tr[data-cb-name="data"]>*:nth-child(3) {
			max-width: 180px;
			min-width: 180px;
			white-space: initial;
			word-wrap: break-word;
			text-align: left;
		}
	</style>
	<script>
		$('#nav-dashboard').addClass('active');

		document.addEventListener('DataPageReady', function(v_event) {

			var appKey = v_event.detail.appKey;

			if (typeof(window.cbAjaxEventHandler) !== "undefined") {
				window.cbAjaxEventHandler.addEventListener('UpdateRow', function(v_event) {
					if (v_event) {
						var v_row = document.getElementById('DataRow' + v_event.data.dataRowsIds[0] + v_event.data.UniqueSuffix);
						if (v_row) {
							for (var key in window.dataPageManagerObj.dataPages) {
								if (key.search(appKey) != -1) {
									window.dataPageManagerObj.dataPages[key].refresh();
								}
							}

						}
					}
				});
			}
		});
	</script>
</body>

</html>