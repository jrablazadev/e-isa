<!doctype html>
<html lang="en">
	<head>
		<title></title>
		<script src="../lib/jquery-3.3.1.min.js"></script>
	</head>
	<body class="hide">
		<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000b51173986e194197a3bb/emb"></script>

		<style>
			*
			{
				font-size:12px !important;
			}

			tr.cbResultSetTableHeader th
			{
				display: block;
				white-space: initial;
			}

			*[type="checkbox"]
			{
				pointer-events: none;
			}
		</style>

		<script>
			document.addEventListener('DataPageReady', function (event) {
				$('*[type="checkbox"][value="1"]').each(function(){
					$(this).prop('checked', true);
				});
			});
		</script>
	</body>
</html>