<!doctype html>
<html lang="en">
	<head>
		<title>E-ISA</title>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script src="../js/common.js"></script>
	</head>
	<body class="hide">
		<div class="cb-container">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000363cba467e8f42f98a58/emb"></script>
		</div>

		<script>

			var urlVars = getUrlVars();
			var isaId = urlVars.ISA_ID || '';
			var sectionNo = urlVars.Section_ID || '';
			var nextSectionNo = Number(sectionNo) + 1;

			document.addEventListener('DataPageReady', function (event) {

				if($('*[name="Mod0EditRecord"]').length)
				{
					updateProgressbar(sectionNo);

					// console.log(sectionNo);

					$('*[name="EditRecordLast_Section_No"]').val(sectionNo);

					if(sectionNo == 4 || sectionNo == 5 || sectionNo == 6)
					{
						$('*[name="EditRecordRecompute_Paint_Lines"]').prop('checked', true);
					}

					$('*[name="Mod0EditRecord"]').click();
				}
				else
				{
					$('.cb-done-msg').html('Section ' + sectionNo + ' done in ' + window.parent.seconds + ' seconds.');

					if(nextSectionNo == 7)
					{
						window.parent.$('.cb-container[data-section-no="' + 8 + '"]').append('<iframe src="../shared/home-run-investments.php?ISA_ID=' + isaId + '"></iframe>');
					}
					else
					{
						window.parent.$('.cb-container[data-section-no="' + nextSectionNo + '"]').append('<iframe src="../shared/home-run-iframe.php?ISA_ID=' + isaId + '&Section_ID=' + nextSectionNo + '"></iframe>');
					}
				}
			});

			function updateProgressbar(sectionNo)
			{
				for(i = sectionNo; i >= 0; i-- )
				{
					// console.log(i);

					window.parent.$('.cb-progress[data-section-no="' + i + '"]').removeClass('disabled');
					window.parent.$('.cb-progress[data-section-no="' + i + '"]').addClass('active');
				}

			}
		</script>
	</body>
</html>