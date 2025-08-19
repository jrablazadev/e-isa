<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?> 
		<title>E-ISA</title>
	</head>

	<body class="hide">
		<?php include_once "../partials/navbar-so.php"; ?>
		<main role="main">

			<div class="ishidden">
				<!-- Check invoice discounts -->
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000b8fc270763644165bbcd/emb"></script>

				<!-- Check notes -->
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000483a6d402d214367b0ff/emb"></script>

				<!-- navigation bar container -->
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000288517adb7084773b2e2/emb"></script>
			</div>

			<?php include_once "../partials/progressbar.php"; ?>

			<div class="mb-3">
				<button class="btn btn-primary" onclick="openEstimatedReturnsPDF()">Download the Returns Page</button>
			</div>

			<div id="investments-container">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000d413cf8b55054b9bbe8b/emb"></script>
			</div>

			<div class="headers">Liquid Returns</div>

			<div class="cb-returns">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000f43b3dd0f0f442c2b773/emb"></script>
			</div>

			<div class="headers">Allied Returns</div>

			<div class="cb-returns">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550007a4d334519624864a68d/emb"></script>
			</div>

			<div class="headers">Total Returns</div>

			<div class="cb-returns">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500090be70f80c6246c499b6/emb"></script>
			</div>

			<div class="cb-old-eisa">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000f227ffa435544c87ab74/emb"></script>
			</div>

			<div class="marginbot20px calc-summary-container">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000e6fa8ea67191406f98e4/emb"></script>
			</div>

			<div class="marginbot20px">
				<!-- COMMENTS SECTION -->
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000f80be512f9f14c39ba69/emb"></script>
			</div>
		</main>

		<span class="ishidden cb-dl-returns-logs"></span>

		<script src="../lib/autonumeric/autoNumeric.js"></script>
		<script src="../js/investments-2.js"></script>
		<link rel="stylesheet" href="../css/estimated-returns.css" media="screen" title="no title" charset="utf-8">

		<script>
			document.addEventListener('DataPageReady', function (event) {
				if((event.detail.appKey).search('d413cf8b55054b9bbe8b') >= 0 || (event.detail.appKey).search('84a9b761673a46f3ab9f') >= 0)
				{
					deal_total_css();
					monthly_amounts_css();
					qty_css();
					participation_css();
					mfrparticipation_css();
					customerparticipation_css();
					appendInvoicePrice();
				}
			});

			function openEstimatedReturnsPDF()
			{
				var urlVars = getUrlVars();
				var ISAId = urlVars['ISA_ID'] || '';
				var OldISAId = urlVars['Old_ISA_ID'] || '';

				var PdfGen = '';
				PdfGen += 'https://caspio.thenetwork-crm.com/PDFGen.aspx';
				PdfGen += '?AppKey=25d55000374877b75ecb4531a471';
				PdfGen += '&RenderByUrl=True';
				PdfGen += '&PageOrientation=Landscape';
				PdfGen += '&PageBreak=TRUE';
				PdfGen += '&AvoidTextBreak=TRUE';
				PdfGen += '&FileName=Returns_'+filenameTimestamp()+'.pdf';
				PdfGen += '&PageSize=Legal';
				PdfGen += '&LeftMargin=10';
				PdfGen += '&RightMargin=10';
				PdfGen += '&TopMargin=10';
				PdfGen += '&BottomMargin=10';
				PdfGen += '&format=_inline';
				PdfGen += '&DPParameters=ISA_ID=' + ISAId + '|Old_ISA_ID=' + OldISAId;

				window.open(PdfGen);

				// create iframe in span. the iframe is a submission DP to create download logs
				$('.cb-dl-returns-logs').html('<iframe src="https://caspio.thenetwork-crm.com/dp/25d550003d1abe12cba34be2835d?ISA_ID=' + ISAId + '"></iframe>');
				setTimeout(function(){
					$('.cb-dl-returns-logs').empty();
				}, 1000);
			}

		</script>

		<script src="../lib/financejs/finance.js"></script>
		<script type="text/javascript" src="../lib/table-to-excel-master/dist/tableToExcel.js"></script>

		<script>
			<?php echo file_get_contents('../js/irr.js'); ?>
		</script>

		<style>
			<?php echo file_get_contents('../css/irr.css'); ?>
		</style>
	</body>
</html>