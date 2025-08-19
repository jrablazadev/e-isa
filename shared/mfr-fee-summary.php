<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Support Fee Summary</title>

	<?php include_once '../partials/config.php' ?>

	<script src="../lib/jquery-3.3.1.min.js"></script>
	<script src="../lib/popper.min.js"></script>

	<link rel="stylesheet" href="../lib/bootstrap-4.4.1/bootstrap-4.4.1.min.css">
	<script src="../lib//bootstrap-4.4.1/bootstrap-4.4.1.min.js"></script>

	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/5.0.8/jquery.inputmask.min.js"></script>
	<link rel="stylesheet" href="../lib/sweetalert2/sweetalert2.min.css">
	<script src="../lib/sweetalert2/sweetalert2.all.min.js"></script>

	<link rel="stylesheet" href="../css/support-fee-summary.css">
	<style>
		.text-danger{
			color: red !important;
		}
	</style>
</head>

<body class="hide">
	<!--changed logic due to  I-25695-->
	<p class="text-danger hub_note_NF28696 d-none"><strong>Please Note: If the account you're trying to associate with this subscription doesn't appear in the dropdown menu, it may be due to missing related accounts on the E-ISA. <br>
	Additionally, Related Master accounts that are marked in Comcept “Do Not Bill” are suppressed from the list of accounts shown here.</strong></p>
	<div class="text-right cb-btn-contaier pr-2"></div>
	
	<div class="cb-container"></div>
	
	<div class="d-none cb-alert alert alert-info mr-5 ml-5 text-center"></div>
	
	<div class="d-none">
		<!-- <script type="text/javascript" src="<?= $cb_datapage_prefix ?>06221a4ff64e4197ae3d/emb"></script> -->
		<script type="text/javascript" src="<?= $cb_datapage_prefix ?>4e131507b75047b990ed/emb"></script>
	</div>
	
	<script src="../js/support-fee-summary.js?v=<?php echo date('YmdHis'); ?>"></script>
</body>

</html>