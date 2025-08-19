<!doctype html>
<html lang="en">

<head>
	<?php include_once "../partials/head.php"; ?>
	<title>E-ISA</title>
	<!-- Custom -->
	<link rel="stylesheet" href="../css/manufacturer-rebates-investments.css?v=<?php echo date('YmdHis'); ?>" />
	<script src="../js/manufacturer-rebates-investments.js?v=<?php echo date('YmdHis'); ?>"></script>

	<style>
		form[action*="58a918dfc8734e3cb3b3"]>div,
		form[action*="ea73f40277cb41289096"]>div {
			margin: auto !important;
		}
	</style>
</head>

<body class="hide">
	<?php include_once "../partials/navbar-vpas.php"; ?>
	<main role="main" class="container mb-5 mt-5">

		<?php if (!isset($_GET['Recompute'])): ?>
			<div class="spinner-border text-info" role="status"><span class="sr-only">Loading...</span></div>
			<div class="d-none cb-recompute-container">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>b44f4573c9644cbd9f50/emb"></script>
			</div>
		<?php endif; ?>

		<?php if (isset($_GET['Recompute'])): ?>

			<div id="section1" class="mb-5">
				<h3>E-ISA</h3>
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>6fe41da302da47ee97a3/emb"></script>
			</div>

			<hr>

			<div id="section2" class="expandheader mb-5">
				<h3>Customer sales with no growth</h3>
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>8d0d90ee058349809bfa/emb"></script>
			</div>

			<hr>

			<div id="section3" class="mb-5">
				<h3>Customer sales with growth factored</h3>
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>719f12d4f8174bb59a33/emb"></script>
			</div>

			<hr>

			<div id="section4" class="expandheader mb-5">
				<h3>Invoice Discounts</h3>
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>19f1d283550444cfa258/emb"></script>
			</div>

			<hr>

			<div id="section5" class=" expandheader mb-5">
				<h3>Statement Rebates</h3>
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>8a8058ee0c2d4faea78a/emb"></script>
			</div>

			<hr>

			<div id="section6" class=" expandheader mb-5">
				<h3>EQ Rebates</h3>
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>460bcd2542f24b36a7df/emb"></script>
			</div>

			<hr>

			<!-- Fixed Dollar Rebates -->
			<div class="cb-fixed-dollar  expandheader mb-5">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>fd94f4d989b6424bb560/emb"></script>
			</div>

			<hr>

			<div id="section7" class=" expandheader mb-5">
				<h3>Manufacture Rebates</h3>
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>6d954b91195043ef9432/emb"></script>
			</div>

			<hr>

			<div id="section11-2" class="expandheader mb-5">
				<h3>Allied Statement and Manufacturer Rebates</h3>
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>bf105c0f3cdc4d818771/emb"></script>
			</div>

			<hr>

			<div id="section11-2" class="expandheader mb-5">
				<h3>Allied EQ Rebates</h3>
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>887d224faec642468131/emb"></script>
			</div>

			<hr>

			<div id="section8" class=" expandheader mb-5">
				<h3>Investments</h3>
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>ae85b1fdf0c74195a13b/emb"></script>
			</div>

			<hr>

			<div class="cb-comment-log mb-5" id="cb-comment-section">
				<h3>Notes Entered on Page 7</h5>
					<script type="text/javascript" src="<?= $cb_datapage_prefix ?>0fb1687e15b94140ae67/emb"></script>
			</div>

			<hr>

			<div class="cb-mfg-support mb-5">
				<h3>Manufacturer Fixed Dollar Support Retained by NCS</h3>
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>89f262a24efc41ba8a46/emb"></script>
			</div>

			<hr>

			<div id="section9" class=" expandheader mb-5">
				<h3>Investments</h3>
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>0c8c08f5175f49038d52/emb"></script>
			</div>

			<hr>

			<div id="section10-1" class="mb-5">
				<h3>Attachments</h3>
				<div class="cb-document-hub"></div>
				<div class="mb-3">
					<script type="text/javascript" src="<?= $cb_datapage_prefix ?>9bc1d07cd64e4db5af1f/emb"></script>
				</div>

				<div>
					<script type="text/javascript" src="<?= $cb_datapage_prefix ?>0a82daf550924c9d91b1/emb"></script>
				</div>
			</div>

			<hr>

			<div id="section10-2" class="expandheader mb-5">
				<h3>Account Related</h3>
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>f8e5f590901d4ff59ee6/emb"></script>
			</div>

			<hr>

			<div id="section11-1" class="expandheader mb-5">
				<h3>Customer Price Profile Setup and Salesman Assignment</h3>
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>35e2817111fc4fb78693/emb"></script>
			</div>

			<hr>

			<div class="mb-3 attributes">
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>08e5623f21844e5abb49/emb"></script>
			</div>

			<hr>

			<div class="mb-3">
				<h4 class="step-6-container">
					Step 6 Please Review the Direction to pay for All Rebates.
					<a href="./direction-to-pay.php?ISA_ID=<?php echo isset($_GET['ISA_ID']) ? $_GET['ISA_ID'] : 0; ?>&Section_ID=12" class="d2p-anchor" target="_blank">Here</a>
				</h4>
			</div>

			<hr>


			<div id="section11-3" class="expandheader mb-5">
				<h3>Invoice Discounts on Specific Manufacturers and Product Lines</h3>
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>ae37899cf8884a3bba99/emb"></script>
			</div>

			<hr>

			<div class="mb-3">
				<h3>MPO Details</h3>
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>43314a1ce67b4a30bda9/emb"></script>
			</div>

			<hr>

			<div id="section12-1" class="expandheader mb-5">
				<h3>Investments</h3>
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>e6efff9ecd03490fb785/emb"></script>
			</div>

			<hr>

			<div id="section12-2" class="expandheader mb-5">
				<h3>Estimated Returns - Liquid Returns</h3>
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>dc1ce826947248e6b3b6/emb"></script>
			</div>

			<hr>
			<div id="section12-3" class="expandheader mb-5">
				<h3>Estimated Returns - Allied Returns</h3>
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>fb056accddd04efea002/emb"></script>
			</div>

			<hr>
			<div id="section12-4" class="expandheader mb-5">
				<h3>Estimated Returns - Total Returns</h3>
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>8e45619067f447ca8c8b/emb"></script>
			</div>

			<hr>
			<div id="section12-5" class="expandheader mb-5">
				<h3>Approval Log</h3>
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>14325d0a0bf94ee8ac37/emb"></script>
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>3977164fd09a409d9ad2/emb"></script>

			</div>
			<hr>

			<div id="deal-amor" class="expandheader mb-5">
				<h3>Deal Assets</h3>
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>eec9384a873c45b7af01/emb"></script>
			</div>
			<hr>

			<div class="mb-5">
				<h3>Comments</h3>
				<script type="text/javascript" src="<?= $cb_datapage_prefix ?>6448102cf93f4f7ebf39/emb"></script>
			</div>
		<?php endif; ?>
	</main>

	<script src="../lib/autonumeric/autoNumeric.js"></script>
	<script src="../js/investments-2.js"></script>

	<script>
		document.addEventListener('DataPageReady', function(event) {

			if (document.querySelector("div[class$=attributes] h4")) {
				document.querySelector("div[class$=attributes] h4").innerHTML = "Assigned Attributes"
			}

			if ((event.detail.appKey).search('0c8c08f5175f49038d52') >= 0 || (event.detail.appKey).search('e6efff9ecd03490fb785') >= 0) {
				deal_total_css();
				monthly_amounts_css();
				qty_css();
				participation_css();
				mfrparticipation_css();
				customerparticipation_css();
			}

			$(".nextbtn").css("visibility", "hidden")
			$(".backbtn").css("visibility", "hidden")
			$(".cbUpdateButton").css("visibility", "hidden")
		});
	</script>

	<script src="../lib/financejs/finance.js"></script>
	<script type="text/javascript" src="../lib/table-to-excel-master/dist/tableToExcel.js"></script>
	<script src="../js/document-hub.js?v=<?php echo date('YmdHis'); ?>"></script>

	<script>
		<?php echo file_get_contents('../js/irr.js'); ?>
	</script>

	<style>
		<?php echo file_get_contents('../css/irr.css'); ?>
	</style>
</body>

</html>