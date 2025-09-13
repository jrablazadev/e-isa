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
		<?php if(!empty($_GET['TSM'])): ?>
			<script type="text/javascript" src="<?= $cb_datapage_prefix ?>9af655c46ba8479f8108/emb"></script>
		<?php else: ?>
			<script type="text/javascript" src="<?= $cb_datapage_prefix ?>598d258be5954ddba31b/emb"></script>
		<?php endif; ?>

		<script>
			document.addEventListener('DataPageReady', function(event) {
				window.parent.$('#jc-iframe').css({
					'height': $(window.parent).height()
				});
			});
		</script>
	</body>
</html>