<!doctype html>
<html lang="en">
	<head>
		<title>E-ISA</title>
		<script src="../lib/jquery-3.3.1.min.js"></script>
	</head>
	<body class="hide">
		<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500045488e8be1214bba9b6f/emb"></script>

		<script>
			document.addEventListener('DataPageReady', function (event) {
				
				if(event.detail.appKey == '25d5500045488e8be1214bba9b6f')
				{
					window.parent.$('.spinner-border').remove();
					window.parent.deleteRelatedAccountsPopup.buttons.buttonNo.enable();
					window.parent.deleteRelatedAccountsPopup.buttons.buttonYes.enable();
				}
			});
		</script>
	</body>
</html>