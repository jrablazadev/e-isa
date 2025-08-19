<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?>
		<title>E-ISA: Dashboard</title>
	</head>
	<body class="hide">
		<?php include_once "../partials/navbar-vp.php"; ?>
		<main role="main" class="container">

			<div id="scratch-pad-container">

				<div class="table-header mb-2"><strong>My Approval Needed</strong></div>
				<div style="overflow: auto" class="cb-report mb-3 cb-myapproval">
					<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000641189ed0e1545799f36/emb"></script>
				</div>

				<div class="table-header mb-2"><strong>Upcoming Approvals</strong></div>
				<div style="overflow: auto" class="cb-report mb-3 cb-upcoming">
					<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000032447ecad1a4ae9b64a/emb"></script>
				</div>

				<div class="table-header mb-2"><strong>Approved ISAs List</strong></div>
				<div style="overflow: auto" class="cb-report mb-3 cb-approved">
					<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000f76f02c40b6c4ba192e2/emb"></script>
				</div>

				<div class="table-header mb-2"><strong>ISAs in Deal Sheet Phase</strong></div>
				<div style="overflow: auto" class="cb-report mb-3 cb-dealsheet">
					<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D5500061dc141eaf044e038e3c/emb"></script>
				</div>

				<div class="table-header mb-2"><strong>ISAs in Contract Phase</strong></div>
				<div style="overflow: auto" class="cb-report mb-3 cb-contractphase">
					<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D550004f8d4ccb944a4127bb91/emb"></script>
				</div>
				
				<!-- Step 4 -->
				<div class="table-header mb-2"><strong>Execution Work Queue</strong></div>
				<div style="overflow: auto" class="cb-report mb-3 cb-execution-work">
					<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000b49e93e6da51459a906b/emb"></script>
				</div>

			</div>
		</main>

		<script>
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
		</script>

		<style>
			.cabtn { text-decoration: none !important ;}
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

			.cb-myapproval tr[data-cb-name="data"] > *:nth-child(4),
			.cb-upcoming tr[data-cb-name="data"] > *:nth-child(3),
			.cb-approved tr[data-cb-name="data"] > *:nth-child(3),
			.cb-dealsheet tr[data-cb-name="data"] > *:nth-child(2),
			.cb-contractphase tr[data-cb-name="data"] > *:nth-child(2)
			{
				max-width:150px;
				min-width:150px;
				white-space: initial;
				word-wrap:break-word;
				text-align:left;
			}
		</style>
	</body>
</html>
