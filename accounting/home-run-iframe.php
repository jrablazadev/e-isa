<!doctype html>
<html lang="en">
	<head>
		<title>E-ISA</title>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script src="../js/common.js"></script>
	</head>
	<body class="hide">
		<div class="cb-container">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000363cba467e8f42f98a58/emb"></script>
		</div>

		<script>

			var urlVars = getUrlVars();
			var isaId = urlVars.ISA_ID || '';
			var sectionNo = urlVars.Section_ID || '';
			var nextSectionNo = Number(sectionNo) + 1;

			document.addEventListener('DataPageReady', function (event) {

				if($('*[name="Mod0EditRecord"]').length)
				{
					var width = window.parent.$('.progress-bar').attr('aria-valuenow');
					width = 14 * Number(sectionNo);
					window.parent.$('.progress-bar').css({ 'width' : width + '%' });
					window.parent.$('.progress-bar').attr('aria-valuenow', width);

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
						window.parent.$('.cb-container[data-section-no="' + 8 + '"]').append('<iframe src="./home-run-investments.php?ISA_ID=' + isaId + '"></iframe>');
					}
					else if(nextSectionNo == 10)
					{
						// script is in the datapage
					}
					else
					{
						// if(nextSectionNo == 3)
						// {
							// var width = window.parent.$('.progress-bar').attr('aria-valuenow');
							// width = Number(width) + 14;
							// window.parent.$('.progress-bar').css({ 'width' : width + '%' });
							// window.parent.$('.progress-bar').attr('aria-valuenow', width);
						// }

						window.parent.$('.cb-container[data-section-no="' + nextSectionNo + '"]').append('<iframe src="./home-run-iframe.php?ISA_ID=' + isaId + '&Section_ID=' + nextSectionNo + '"></iframe>');
					}
				}
			});

			// 25d55000363cba467e8f42f98a58

			// $('')
		</script>
	</body>
</html>