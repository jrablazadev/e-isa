<!doctype html>
<html lang="en">
	<head>
		<title>E-ISA</title>
		<script src="../lib/jquery-3.3.1.min.js"></script>
	</head>
	<body class="hide">
		<div>Please wait..</div>

		<div class="cb-clone-isa d-none">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550007c0bd5156d584e98be42/emb"></script>
		</div>

		<div class="cb-compute-all-cn d-none">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500028f71f9b9e664601b420/emb"></script>
		</div>

		<style>
			.d-none
			{
				display:none;
			}
		</style>

		<script>
			var newIsaId = '';
			var cloneRun = sessionStorage.getItem('cb-isa-clone-run') || '';

			sessionStorage.removeItem('cb-isa-clone-run');

			document.addEventListener('DataPageReady', function (event) {
				if(event.detail.appKey == '25d550007c0bd5156d584e98be42' && cloneRun == 'Y')
				{
					$('.cb-clone-isa *[name="Submit"]').click();
					cloneRun = 'N';
				}

				if(event.detail.appKey == '25d5500028f71f9b9e664601b420' && newIsaId != '')
				{
					$('.cb-compute-all-cn *[name="InsertRecordISA_ID"]').val(newIsaId);
					$('.cb-compute-all-cn *[name="Submit"]').click();
				}
			});

			function onSuccessCompute()
			{
				window.location.href = sessionStorage.getItem('cb-isa-clone-last-location');
			}
		</script>
	</body>
</html>