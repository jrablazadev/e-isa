<!doctype html>
<html lang="en">
	<head>
		<title>E-ISA</title>
		<script src="../lib/jquery-3.3.1.min.js"></script>
		<link rel="stylesheet" href="../lib/bootstrap-4.4.1/bootstrap-4.4.1.min.css">
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

		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.2/jquery-confirm.min.css">
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.2/jquery-confirm.min.js"></script>

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
				onSuccessComputePopUp()
				// window.location.href = sessionStorage.getItem('cb-isa-cnd-last-location');
			}

			function onSuccessComputePopUp() {
				selectedAccountsRidArr = [];

				relateAllAccountsPopup = $.confirm({
					scrollToPreviousElement: false,
					scrollToPreviousElementAnimate: false,
					type: 'secondary',
					columnClass: 'col-md-6 col-md-offset-3',
					icon: '',
					title: 'Create New Deal',
					theme: 'material',
					content: ' \
				<div id=""> \
				Please check your scratch pad for the New Deal \
				</div> ',
					backgroundDismiss: false,
					buttons: false,
					boxWidth: '50%',
					useBootstrap: false,
					onOpen: function() {
						console.log("asd")
					},
					buttons: {
						confirm: function () {

							// 
							window.location.href = sessionStorage.getItem('cb-isa-cnd-last-location');
						},
					}
				});
			}
		</script>
	</body>
</html>