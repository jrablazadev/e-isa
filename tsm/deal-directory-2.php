<!doctype html>
<html lang="en">

<head>
	<?php include_once "../partials/head.php"; ?>
	<title>E-ISA | My Deal Directory</title>
</head>

<body class="hide">
	<?php include_once "../partials/navbar-tsm.php"; ?>

	<main class="mb-5 ml-5 mr-5">
		<div class="table-header mb-2 font-weight-bold bg-dark text-white">My Deal Directory</div>

		<div class=" mb-3" id="cb-deal-directory">
			<!-- Deal Directory v2 -->
			<script type="text/javascript" src="<?= $cb_datapage_prefix ?>d2544125952c4fcd8105/emb"></script>

			<div class="text-center">
				<div class="spinner-border text-primary" role="status"></div>
			</div>
		</div>
	</main>

	<script src="../lib/jquery-freeze-table-master/dist/js/freeze-table.min.js"></script>

	<link rel="stylesheet" href="../lib/floating-scroll-master/dist/jquery.floatingscroll.css" media="screen" title="no title" charset="utf-8">
	<script src="../lib/floating-scroll-master/dist/jquery.floatingscroll.min.js"></script>

	<style>
		<?php echo file_get_contents('../css/deal-directory.css'); ?>
	</style>

	<script>
		<?php echo file_get_contents('../js/dashboard-relate-accounts.js'); ?>
		<?php echo file_get_contents('../js/deal-directory.js'); ?>
		<?php //echo file_get_contents('../js/dynamic-deal-directory-2.js'); 
		?>

		setInterval(function() {
			if (!$('#nav-dd2').hasClass("active")) {
				$('#nav-dd2').addClass('active');
				$('#nav-dd').removeClass('active');
			}
		}, 300)
	</script>
</body>

</html>