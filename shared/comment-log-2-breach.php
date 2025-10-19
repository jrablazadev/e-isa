<?php
	$isaId = !empty($_GET['ISA_ID']) ? $_GET['ISA_ID'] : 0;
	$GroupId = !empty($_GET['GroupId']) ? $_GET['GroupId'] : 0;
	$termination_Step_ID = !empty($_GET['Termination_Step_ID']) ? $_GET['Termination_Step_ID'] : '';
?>

<html>
	<head></head>
	<body class="hide">
		<main role="main" class="container">
			<h5>Breach Comments</h5>
			<div class="cb-comment-log" id="cb-breach-comment-section"></div>

			<hr>

			<h5>Execution Group Comments</h5>
			<div class="cb-comment-log" id="cb-comment-section"></div>

			<hr>

			<h5>All E-ISA Comments By Section</h5>
			<div class="cb-comment-log" id="cb-comment-page"></div>

			<hr>

			<h5>Resubmitted to Execution Work Queue Comments</h5>
			<div class="cb-comment-log" id="cb-comment-resubmitted-exec"></div>
		</main>
	</body>
	<script>
		deployDP('cb-comment-section', `${globalDataPagePrefix}49ab1d24aded4590a4b8/emb?ISA_ID=<?php echo $isaId; ?>&GroupId=<?php echo $GroupId; ?>`);
		deployDP('cb-comment-page', `${globalDataPagePrefix}8dc0103c061c47f6a71e/emb?ISA_ID=<?php echo $isaId; ?>`);
		deployDP('cb-comment-resubmitted-exec', `${globalDataPagePrefix}33070c5164a643efaa9f/emb?ISA_ID=<?php echo $isaId; ?>`);
		deployDP('cb-breach-comment-section', `${globalDataPagePrefix}ed41e5780e824c65afb7/emb?ISA_ID=<?php echo $isaId; ?>&Termination_Step_ID=<?php echo $termination_Step_ID; ?>`);
	</script>
	<style>
		.cb-comment-log .cb-report tr[data-cb-name="data"] td,
		.cb-comment-log .cb-report tr[data-cb-name="header"] th,
		.cb-comment-log .cb-report a {
			font-size: 12px !important;
			padding: 5px;
			text-align: left;
		}
	</style>
</html>