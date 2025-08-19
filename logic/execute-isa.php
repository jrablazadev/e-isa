<!doctype html>
<html lang="en">
	<head>
		<title>E-ISA</title>
                <script src="../lib/jquery-3.3.1.min.js"></script>
		<link rel="stylesheet" href="../lib/bootstrap-4.4.1/bootstrap-4.4.1.min.css">
	</head>
	<body class="hide">
		<div class="text-center cb-spinner">
			<div class="spinner-border text-primary" role="status"></div>
		</div>

		<div class="cb-dp-container d-none">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500008bec856876946e6b3c6/emb"></script>
		</div>

		<script>
			document.addEventListener('DataPageReady', function (event) {

				$('*[name="cbParamVirtual1"]').unbind().change(function(){
					var complete = Number(this.value);

					if(complete == 1)
					{
						window.parent.jqueryConfirm_ExecuteISA.buttons.No_Btn.show();
						window.parent.jqueryConfirm_ExecuteISA.buttons.Yes_Btn.show();
					}
					else
					{
						window.parent.jqueryConfirm_ExecuteISA.buttons.Ok_Btn.show();
					}

					$('.cb-dp-container').removeClass('d-none');

					$('.cb-spinner').html('');
				});
			});
		</script>

		<style>
			table
			{
				width:90%;
				margin:auto !important;
			}

			table[data-cb-name="cbTable"]
			{
				border:0px !important; 
				-webkit-box-shadow: initial !important;
			}

			td[class^="cbBackButtonContainer"]
			{
				display:none;
			}
		</style>
	</body>
</html>