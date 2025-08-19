<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?> 
		<title>E-ISA</title>
	</head>

	<body class="hide">
		<?php include_once "../partials/navbar-coo.php"; ?>
		<main role="main">

			<?php include_once "../partials/progressbar-cfo-vp-coo.php"; ?>

			<div class="mb-3">
				<button class="btn btn-primary" onclick="openEstimatedReturnsPDF()">Download the Returns Page</button>
			</div>

			<div id="investments-container">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000d413cf8b55054b9bbe8b/emb"></script>
			</div>

			<div class="headers">Liquid Returns</div>

			<div class="cb-returns">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000f43b3dd0f0f442c2b773/emb"></script>
			</div>

			<div class="headers">Allied Returns</div>

			<div class="cb-returns">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D550007a4d334519624864a68d/emb"></script>
			</div>

			<div class="headers">Total Returns</div>

			<div class="cb-returns">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D5500090be70f80c6246c499b6/emb"></script>
			</div>

			<div class="cb-old-eisa">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000f227ffa435544c87ab74/emb?viewonly=Y"></script>
			</div>

			<div class="marginbot20px calc-summary-container">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000e6fa8ea67191406f98e4/emb"></script>
			</div>

			<div class="marginbot20px">
				<!-- COMMENTS SECTION -->
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000f80be512f9f14c39ba69/emb"></script>
			</div>
		</main>

		<span class="ishidden cb-dl-returns-logs"></span>

		<script src="../lib/autonumeric/autoNumeric.js"></script>
		<script src="../js/investments-2.js"></script>
		<link rel="stylesheet" href="../css/estimated-returns.css" media="screen" title="no title" charset="utf-8">

		<style>
			.iframe_moved_fields
			{
				display:none;
			}
		</style>

		<script>

			update_progress_bar_cfo_vp_coo(9);

			document.addEventListener('DataPageReady', function (event) {

				$('.nextbtn').attr('href', './attachments.php?ISA_ID=<?php echo $_GET['ISA_ID']; ?>&Section_ID=10');
				$('.nextbtn').html('Next');

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
				PdfGen += '?AppKey=25D55000374877b75ecb4531a471';
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
				$('.cb-dl-returns-logs').html('<iframe src="https://caspio.thenetwork-crm.com/dp/25D550003d1abe12cba34be2835d?ISA_ID=' + ISAId + '"></iframe>');
				setTimeout(function(){
					$('.cb-dl-returns-logs').empty();
				}, 1000);
			}

		</script>
	</body>
</html>