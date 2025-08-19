<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?>
		<title>E-ISA</title>
	</head>

	<body class="hide">
		<?php include_once "../partials/navbar-dom.php"; ?>
		<main role="main" class="mb-5 ml-5 mr-5">
			<div class="cb-header font-weight-bold bg-dark text-white mb-3">Document Exception Report</div>
			
			<div class="cb-search mb-3" style="display:none;">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000c736d9fd7ac94c7ba720/emb"></script>
			</div>

			<div class="overflow-auto" id="cb-doc-exep-report">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550009151f78f74d948f8b8be/emb"></script>
			</div>
		</main>

		<link href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css" rel="stylesheet" />
		<script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js"></script>

		<style>
			<?php echo file_get_contents('../css/doc-exept-report.css'); ?>
		</style>

		<script>
			<?php echo file_get_contents('../js/doc-exept-report.js'); ?>
		</script>
	</body>
</html>
