<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title></title>

		<?php include_once '../partials/config.php' ?>
		<?php include_once "../partials/head.php"; ?>
	</head>
	<body>
		<div class="text-center cb-spinner">
			<div class="spinner-border text-primary" role="status"></div>
		</div>

		<div class="main-continer">
			<script type="text/javascript" src="<?= $cb_datapage_prefix ?>0b1e99cb7fa24467b61c/emb"></script>
		</div>

		<style>
			input[class*="cbUpdateButton"]
			{
				display:none !important;
			}
		</style>

		<script>
			document.addEventListener('DataPageReady', function(event) {
				$('.cb-spinner').remove();
			});

			
		</script>
	</body>
</html>