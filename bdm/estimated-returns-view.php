<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?> 
		<title>E-ISA</title>
	</head>
	<body class="hide">
		<main role="main">

			<h1>E-ISA ID: <?php echo isset($_GET['ISA_ID']) ? $_GET['ISA_ID'] : null; ?></h1>

			<div id="investments-container">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000d413cf8b55054b9bbe8b/emb"></script>
			</div>
			<div id="investments-comm-rate" style="display:none">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550007258e1a7deba4825826e/emb"></script>
			</div>

            <!-- Section 9 : ISA Estimated Returns -->
            <div class="headers">Liquid Returns</div>
            <div style="overflow:auto;">
                <script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000f43b3dd0f0f442c2b773/emb"></script>
            </div>
            <br />  

            <div class="headers">Allied Returns</div>
            <div style="overflow:auto;">
                <script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550007a4d334519624864a68d/emb"></script>
            </div>
            <br />  

            <div class="headers">Total Returns</div>
            <div style="marginbot20px overflow:auto;">
                <script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500090be70f80c6246c499b6/emb"></script>
            </div>
		</main>

		<script src="../lib/autonumeric/autoNumeric.js"></script>
		<!--
			<script src="js/investments.js"></script>
		-->
		<script src="../js/investments-2.js"></script>

		<style>
			.headers
			{
				background-color:black;
				color:white;
				font-weight:bold;
				padding:10px;
				text-align:center;
			}

			main[role="main"]
			{
				width:80%;
				margin:auto;
				margin-bottom:100px;
				margin-top:20px;
			}
			
			#investments-container tr[data-cb-name="data"] > td,
			.cb-old-eisa .cb-investments tr[data-cb-name="data"] > td,
			{
				border:1px #dedede solid;
			}

			#investments-container .isright,
			.cb-old-eisa .cb-investments .isright
			{
				text-align:right;
			}
			
			#investments-container .bgblack td,
			#investments-container .bgblack,
			.bgblack,
			.bgblack td
			{
				background-color:black !important;
				color:white  !important;
			}
			
			#investments-container,
			.cb-investments
			{
				margin-bottom:20px;
			}
			
			#investments-container table[data-cb-name="cbTable"],
			.cb-old-eisa .cb-investments table[data-cb-name="cbTable"]
			{
				width:initial;
			}
			
			.cb-returns
			{
				margin-bottom:20px;
				overflow:auto;
			}
			
			.cb-old-eisa tr[data-cb-name="header"] th
			{
				background: #193d4a !important;
			}
			
			
		</style>
		
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
			
		</script>

	</body>
</html>