<!doctype html>
<html lang="en">
	<head>
		<title></title>

		<script src="../lib/jquery-3.3.1.min.js"></script>

		<link rel="stylesheet" href="../lib/bootstrap-4.4.1/bootstrap-4.4.1.min.css">
		<script src="../lib//bootstrap-4.4.1/bootstrap-4.4.1.min.js"></script>
	</head>
	<body class="hide">
		<h3>Amortization Expense Summary</h3>
		<div class="text-center">
			<div class="spinner-border text-info" role="status"><span class="sr-only">Loading...</span></div>	
		</div>
		<div>
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000ed77e6c06e894f5394de/emb"></script>
		</div>

		<script>
			document.addEventListener('DataPageReady', function (event) {
				$('.spinner-border').remove();
			});
		</script>

		<style>
			#caspioform *
			{
				font-size:12px;
			}
		</style>
	</body>
</html>
