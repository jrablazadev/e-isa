<!doctype html>
<html lang="en">
	<head>
		<title>E-ISA</title>
		<script src="../lib/jquery-3.3.1.min.js"></script>
	</head>
	<body class="hide">
		<div>Please wait..</div>

		<div class="cb-create-new-deal-cn d-none">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000b3e5f968d3b9476db044/emb"></script>
		</div>

		<div class="cb-compute-all-cn d-none">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500071b6262d70d34b6eaf8c/emb"></script>
		</div>

		<style>
			.d-none
			{
				display:none;
			}
		</style>

		<script>
			var newIsaId = '';
			var createNewDealRun = sessionStorage.getItem('cb-isa-cnd-run') || '';

			sessionStorage.removeItem('cb-isa-cnd-run');

			document.addEventListener('DataPageReady', function (event) {
				if(event.detail.appKey == '25d55000b3e5f968d3b9476db044' && createNewDealRun == 'Y')
				{
					$('.cb-create-new-deal-cn *[name="Submit"]').click();
					createNewDealRun = 'N';
				}

				if(event.detail.appKey == '25d5500071b6262d70d34b6eaf8c' && newIsaId != '')
				{
					$('.cb-compute-all-cn *[name="InsertRecordISA_ID"]').val(newIsaId);
					$('.cb-compute-all-cn *[name="Submit"]').click();
				}
			});

			function onSuccessCompute()
			{
				window.location.href = sessionStorage.getItem('cb-isa-cnd-last-location');
			}
		</script>
	</body>
</html>