<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?> 
		<title>E-ISA</title>
		<link rel="stylesheet" href="../css/section-1.css" media="screen" title="no title" charset="utf-8">
	</head>

	<body class="hide">
		<?php include_once "../partials/navbar-dom.php"; ?>
		
		<main role="main" class="container">
			
			<h5 class="cb-att-label">Attachments</h5>
			<div class="cb-attachments">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500048e5b48d2c2b4a8a8c58/emb"></script>
			</div>
			
			
		</main>

		<style>
			img[alt="Calendar"]
			{
				margin-left:-40px !important;
			}

			.progressbar a.disabled
			{
				cursor:not-allowed;
			}

			.isHidden
			{
				display:none;
			}
		</style>

		<script>
			document.addEventListener('DataPageReady', function (event) {
				// toggle_existing_eisa();
			});

			$(document).on('change', '*[name="InsertRecordNew_Existing"]', function(){
				// toggle_existing_eisa();
			});
			
			$(document).on('click', '.nextbtn', function(e){
				
				
				
				if(attachments_validation() == false)
				{
					e.preventDefault();
				}
				
				
			});
			
			function toggle_existing_eisa()
			{
				$('*[name="InsertRecordhave_Existing_ISA"]').val('');
				$('*[name="InsertRecordhave_Existing_ISA"]').closest('tr').addClass('isHidden');

				if($('*[name="InsertRecordNew_Existing"]').val() == 'Existing')
				{
					$('*[name="InsertRecordhave_Existing_ISA"]').closest('tr').removeClass('isHidden');
				}
			}
			
			function attachments_validation()
			{
				var atta_vali = [
					['Vendor Approval'				, 'cbParamVirtual1'],
					['3 Year P & L'					, 'cbParamVirtual2'],
					['Comcept Purchase Verification', 'cbParamVirtual3'],
					['Credit App'					, 'cbParamVirtual4'],
					['MPO Purchase Verfication'		, 'cbParamVirtual5']
				];
				
				for(i = 0; i < atta_vali.length; i++)
				{
					console.log($('.cb-attachments-validations *[name="' + atta_vali[i][1] + '"]'));
					
					if(Number($('.cb-attachments-validations *[name="' + atta_vali[i][1] + '"]').val()) == 1)
					{
						alert(atta_vali[i][0] + ' Attachment Required.');
						return false;
					}
				}
			}
		</script>

		<div id="cb-modal" class="modal" tabindex="-1" role="dialog">
			<div class="modal-dialog" role="document" style="width: 800px !important">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="cb-modal-title">Network Customers</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div id="cb-modal-body">
							<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000d424fe7ab6ae4af9896a/emb"></script>
						</div>
						<div id="cb-modal-error" class="d-none alert alert-danger"></div>
					</div>
				</div>
			</div>
		</div>


	</body>
</html>
