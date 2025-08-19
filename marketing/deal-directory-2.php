<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?>
		<title>E-ISA | My Deal Directory</title>
	</head>
	<body class="hide">
		<?php include_once "../partials/navbar-marketing.php"; ?>

		<main class="mb-5 ml-5 mr-5">
			<div class="table-header mb-2 font-weight-bold bg-dark text-white">My Deal Directory</div>

			<div class="cb-search">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000a61c415ef11d4f71b5f0/emb"></script>
			</div>

			<div class="cb-report mb-3" id="cb-deal-directory">

				<div class="text-center">
					<div class="spinner-border text-primary" role="status"></div>
				</div>

				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500047bbef748cce468fb668/emb"></script>
			</div>
		</main>

		<script src="../lib/jquery-freeze-table-master/dist/js/freeze-table.min.js"></script>

		<link rel="stylesheet" href="../lib/floating-scroll-master/dist/jquery.floatingscroll.css" media="screen" title="no title" charset="utf-8">
                <script src="../lib/floating-scroll-master/dist/jquery.floatingscroll.min.js"></script>

		<style><?php echo file_get_contents('../css/deal-directory.css'); ?></style>

		<script>
			setInterval(function () {
				if (!$('#nav-dd2').hasClass("active")) {
					$('#nav-dd2').addClass('active');
					$('#nav-dd').removeClass('active');
				}
			}, 300)
			<?php echo file_get_contents('../js/dashboard-relate-accounts.js'); ?>
			<?php echo file_get_contents('../js/deal-directory.js'); ?>
		</script>
	</body>
</html>