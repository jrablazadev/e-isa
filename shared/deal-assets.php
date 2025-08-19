<!doctype html>
<html lang="en">
	<head>
		<title></title>

		<script src="../lib/jquery-3.3.1.min.js"></script>

		<link rel="stylesheet" href="../lib/bootstrap-4.4.1/bootstrap-4.4.1.min.css">
		<script src="../lib//bootstrap-4.4.1/bootstrap-4.4.1.min.js"></script>
	</head>
	<body class="hide">
		<div id="deal-amor" class="expandheader mb-5">
			<h3>
				<span>Deal Assets</span>
				<a href="javascript:void(0)" class="cb-details-btn" onclick="dealAssetsDetails()">
					Amortization Expense Summary
				</a>
			</h3>
			<div class="text-center">
				<div class="spinner-border text-info" role="status"><span class="sr-only">Loading...</span></div>	
			</div>
			<div>
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000831b3cbac38742a28373/emb"></script>
			</div>
		</div>

		<script>
			document.addEventListener('DataPageReady', function (event) {
				$('.spinner-border').remove();
			});

			const dealAssetsDetails = () => {
				window.parent.jqueryConfirm.close();

				window.parent.dealAssetsDetails('<?php echo isset($_GET['ISA_ID']) ? $_GET['ISA_ID'] : '' ?>');
			};
		</script>

		<style>
			#caspioform *
			{
				font-size:12px;
			}

			.cb-details-btn
			{
				font-size: 14px;
				text-decoration: underline;
				color:blue;
			}
		</style>
	</body>
</html>