<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?> 
		<title>E-ISA</title>
		<link rel="stylesheet" href="../css/section-1.css" media="screen" title="no title" charset="utf-8">
	</head>

	<body class="hide">
		<?php include_once "../partials/navbar-vp.php"; ?>
		
		<main role="main" class="container">

			<?php include_once "../partials/progressbar-cfo-vp-coo.php"; ?>

			<h5 class="cb-att-label">Attachments</h5>

			<div class="cb-vda">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000141e51ebb5ea495b8a68/emb"></script>
			</div>

			<div class="cb-attachments">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550008b65c79b68f64c4aa57e/emb"></script>
			</div>

			<div>
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000004c7cc6e41841dcbfce/emb"></script>
			</div>

			<hr>

			<h5>E-ISA Account Related</h5>
			
			<div class="marginbot20px accounts_related_container">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550002bf5df7a1b2345ffb0ae/emb"></script>
			</div>
			
			<h5>Old E-ISA Account Related</h5>
			
			<div class="marginbot20px">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000a6fdb232954e42fe9454/emb"></script>
			</div>

			<div class="marginbot20px calc-summary-container">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000e6fa8ea67191406f98e4/emb"></script>
			</div>

			<div class="marginbot20px">
				<!-- COMMENTS SECTION -->
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000f80be512f9f14c39ba69/emb"></script>
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

			update_progress_bar_cfo_vp_coo(10);
			
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
