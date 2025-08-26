<!doctype html>
<html lang="en">
	<head>
		<title>E-ISA</title>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script src="../js/common.js"></script>
	</head>
	<body class="hide">
		<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500035e9b17d354343a3ba67/emb"></script>

		<script>
			var urlVars = getUrlVars();
			var isaId = urlVars.ISA_ID || '';
			var sectionNo = urlVars.Section_ID || '';
			var nextSectionNo = Number(sectionNo) + 1;

			document.addEventListener('DataPageReady', function (event) {
				if($('*[name="Submit"]').length == 0)
				{
					for(i = 8; i > 0; i-- )
					{
						// console.log(i);

						window.parent.$('.cb-progress[data-section-no="' + i + '"]').removeClass('disabled');
						window.parent.$('.cb-progress[data-section-no="' + i + '"]').addClass('active');
					}

					window.parent.$('.cb-container[data-section-no="' + 9 + '"]').append('<iframe src="../shared/home-run-estimated-returns.php?ISA_ID=' + isaId + '"></iframe>');
					// window.parent.$('.cb-container[data-section-no="' + 9 + '"]').append('<iframe src="../shared/home-run-iframe.php?ISA_ID=' + isaId + '&Section_ID=' + 9 + '"></iframe>');
				}
			});

		</script>
	</body>
</html>