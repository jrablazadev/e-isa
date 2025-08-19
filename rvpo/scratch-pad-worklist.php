<!doctype html>
<html lang="en">
<head>
	<?php include_once "../partials/head.php"; ?>
	<title>E-ISA: Dashboard</title>
</head>

<body class="hide">
	<?php include_once "../partials/navbar-rvpo.php"; ?>
	<main role="main" class="container">

		<div class="headers bg-dark text-uppercase">STEP 1 WORK LIST (Scratch Pad, Calculator)</div>
		<div id="scratch-pad-container" class="cb-report">
			<script type="text/javascript" src="<?= $cb_datapage_prefix ?>4e653244f64741aabc44/emb"></script>
		</div>

		<div class="headers bg-dark mb-2">STEP 2 APPROVALS</div>
		<div>

			<div class="table-header mb-2"><strong>My Approval Needed</strong></div>
			<div class="overflow-auto cb-report mb-3 cb-myapproval">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>fc4bbd7c6efd42d8a054/emb"></script>
			</div>

			<div class="table-header mb-2"><strong>Upcoming Approvals</strong></div>
			<div class="overflow-auto cb-report mb-3 cb-upcoming">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>3ef9a47811644199a23c/emb"></script>
			</div>

			<div class="table-header mb-2"><strong>Approved ISAs List</strong></div>
			<div class="overflow-auto cb-report mb-3 cb-approved">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>a1bbaaf274dd4f81815b/emb"></script>
			</div>

			<div class="table-header mb-2"><strong>ISAs in Deal Sheet Phase</strong></div>
			<div class="overflow-auto cb-report mb-3 cb-dealsheet">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>a59019ad599e4c3da886/emb"></script>
			</div>

			<div class="table-header mb-2"><strong>ISAs in Contract Phase</strong></div>
			<div class="overflow-auto cb-report mb-3 cb-contractphase">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>4f85b00edc674c508671/emb"></script>
			</div>

			<div class="table-header mb-2"><strong>Execution Work Queue</strong></div>
			<div class="overflow-auto cb-report mb-3 cb-execution-work">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>2988a6ec8518489d83a4/emb"></script>
			</div>

			<div class="cb-report mb-3">
				<div class="table-header mb-2"><strong>Breach/Deal Termination Work Queue</strong></div>
				<div class="overflow-auto" id="cb-team-breach">
					<script type="text/javascript" src="<?= $cb_datapage_prefix ?>0e4ea070622a487ebc5e/emb"></script>
				</div>
			</div>

			<div class="cb-report mb-3">
				<div class="table-header mb-2"><strong>Document Exception Report</strong></div>
				<div class="overflow-auto" id="cb-doc-exep-report">
					<script type="text/javascript" src="<?= $cb_datapage_prefix ?>27b1a68209c846f4b953/emb"></script>
				</div>
			</div>

		</div>
	</main>

	<script src="../js/dashboard-relate-accounts.js?v=<?php echo date('YmdHis'); ?>"></script>
	<script src="../js/dashboard-metrics.js?v=<?php echo date('YmdHis'); ?>"></script>
	<script src="../js/scratchpad-filter.js?v=<?php echo date('YmdHis'); ?>"></script>
	<script src="../js/dashboard-deal-work-queue.js?v=<?php echo date('YmdHis'); ?>"></script>
	<link rel="stylesheet" href="../css/dashboard-metrics.css">

	<script>
		// Dashboard metrics
		var bucketApp_Keys = [
			`${cbAppKeyPrefix}fc4bbd7c6efd42d8a054`,
			`${cbAppKeyPrefix}3ef9a47811644199a23c`,
			`${cbAppKeyPrefix}a1bbaaf274dd4f81815b`,
			`${cbAppKeyPrefix}a59019ad599e4c3da886`,
			`${cbAppKeyPrefix}4f85b00edc674c508671`,
			`${cbAppKeyPrefix}2988a6ec8518489d83a4`,
			`${cbAppKeyPrefix}0e4ea070622a487ebc5e`,
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
			makeDashboardMetric(".container", bucketLabels, "dashboard-metrics-content-md")
		})
	</script>

	<script>
		$('#nav-dashboard').addClass('active');

		// inactive_isa([@field:ISA_ISA_ID])
		function inactive_isa(ISA_ID)
		{
			$.confirm({
				type : 'secondary',
				columnClass: 'col-md-6 col-md-offset-3',
				icon: 'fa fa-warning',
				title : 'Inactivate ISA',
				theme : 'material',
				content : 'Are you sure you would like to inactivate this record? <br/> This record will be removed from the list.',
				backgroundDismiss : true,
				buttons : {
					NO : function (){},
					YES :
					{
						text: 'YES',
						btnClass: 'btn-green',
						action: function()
						{
							window.location.href = './scratch-pad-delete.php?ISA_ID=' + ISA_ID;
						}
					}
				}
			});
		}

		document.addEventListener('DataPageReady', function (event) {
			if(event.detail.appKey == `${cbAppKeyPrefix}27b1a68209c846f4b953`)
			{
				highlight_doc_exeption_report();
			}
		});

		function highlight_doc_exeption_report()
		{
			$('#cb-doc-exep-report tr[data-cb-name="data"]').each(function(){
				var lb_amount = Number($(this).find('.cb-cog').attr('data-lb-amount'));
				var lb_attachments = Number($(this).find('.cb-cog').attr('data-lb-attachments'));
				var requested_credit_limit = Number($(this).find('.cb-cog').attr('data-requested-credit-limit'));
				var credit_app_attachments = Number($(this).find('.cb-cog').attr('data-credit-app-attachments'));
				var upfront_cash = Number($(this).find('.cb-cog').attr('data-upfront-cash'));
				var w9_attachments = Number($(this).find('.cb-cog').attr('data-w9-attachments'));
				var agreement_type = $(this).find('.cb-cog').attr('data-agreement-type');
				var signed_contract_lou_attachments = Number($(this).find('.cb-cog').attr('data-signed-contract-lou-attachments'));

				if( lb_amount > 0 && lb_attachments == 0 )
				{
					$(this).children('td').eq(10).addClass('cb-red'); // LB Attachment Count
				}

				if( requested_credit_limit > 0 && credit_app_attachments == 0 )
				{
					$(this).children('td').eq(11).addClass('cb-red'); // Credit App Attachment Count
				}

				if( upfront_cash > 0 && w9_attachments == 0 )
				{
					$(this).children('td').eq(12).addClass('cb-red'); // W9 Attachment Count
				}

				if( (agreement_type == 'NCS/SSI Contract or Contract Amendment' || agreement_type == 'Letter of Understanding (LOU)') && signed_contract_lou_attachments == 0 )
				{
					$(this).children('td').eq(14).addClass('cb-red'); // Signed LOU Attachment Count
				}
			});
		}
	</script>

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
			border-top:1px #dedede solid;
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
		.cb-myapproval tr[data-cb-name="data"] > *:nth-child(4),
		.cb-upcoming tr[data-cb-name="data"] > *:nth-child(5),
		.cb-approved tr[data-cb-name="data"] > *:nth-child(4),
		.cb-dealsheet tr[data-cb-name="data"] > *:nth-child(2),
		.cb-contractphase tr[data-cb-name="data"] > *:nth-child(2)
		{
			max-width:150px;
			min-width:150px;
			white-space: initial;
			word-wrap:break-word !important;
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

		#cb-doc-exep-report tr[data-cb-name="header"] th a
		{
			display: block;
			white-space: initial;
		}

		#cb-doc-exep-report .cb-red
		{
			color:red;
		}

		#cb-doc-exep-report tr[data-cb-name="header"] th:nth-child(11) a
		{
			width:70px;
		}

		#cb-doc-exep-report tr[data-cb-name="header"] th:nth-child(12) a,
		#cb-doc-exep-report tr[data-cb-name="header"] th:nth-child(14) a,
		#cb-doc-exep-report tr[data-cb-name="header"] th:nth-child(15) a
		{
			width:75px;
		}

		#cb-doc-exep-report tr[data-cb-name="header"] th:nth-child(13) a
		{
			width:55px;
		}
	</style>

</body>
</html>
