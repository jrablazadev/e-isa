<!doctype html>
<html lang="en">
	<head>
		<title>E-ISA</title>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script src="../js/common.js"></script>
	</head>
	<body class="hide">
		<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000a5af212a78d5407c8cc2/emb"></script>

		<script>
			var urlVars = getUrlVars();
			var isaId = urlVars.ISA_ID || '';
			// var sectionNo = urlVars.Section_ID || '';

			document.addEventListener('DataPageReady', function (event) {
				if($('*[name="Submit"]').length == 0)
				{
					for(i = 9; i > 0; i-- )
					{
						window.parent.$('.cb-progress[data-section-no="' + i + '"]').removeClass('disabled');
						window.parent.$('.cb-progress[data-section-no="' + i + '"]').addClass('active');
					}

					window.parent.$('.cb-container[data-section-no="' + 9 + '"]').append('<iframe src="../shared/home-run-iframe.php?ISA_ID=' + isaId + '&Section_ID=' + 9 + '"></iframe>');
					// window.parent.$('.cb-container[data-section-no="' + 9 + '"]').append('<iframe src="./home-run-estimated-returns.php?ISA_ID=' + isaId + '"></iframe>');
				}
				else
				{
					$('*[name="Submit"]').click();
				}
			});

		</script>
	</body>
</html>