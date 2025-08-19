<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?> 
		<title>E-ISA</title>
		<link rel="stylesheet" href="../css/section-1.css" media="screen" title="no title" charset="utf-8">
		<script src="../lib/autonumeric/autoNumeric.js"></script>

		<link rel="stylesheet" href="../lib/floating-scroll-master/dist/jquery.floatingscroll.css" media="screen" title="no title" charset="utf-8">
		<script type="text/javascript" src="../lib/floating-scroll-master/dist/jquery.floatingscroll.min.js"></script>

		<style>
			img[alt="Calendar"]
			{
				margin-left:-40px !important;
			}

			.progressbar a.disabled,
			*[name$="RecordCurrent_EISA_No"]
			{
				cursor:not-allowed;
			}

			.isHidden
			{
				display:none;
			}
			
			#cb-modal-body *
			{
				font-size:12px !important;
			}
			
			.cb-relate-eisa
			{
				height: 70vh;
			}
			
			*[name$="RecordCurrent_EISA_No"]
			{
				background-color:#dedede !important;
			}

			.cb-search-customer
			{
				background-color:#dedede;
				border-color:#c5b5b5;
			}
			
		</style>
	</head>

	<body class="hide">
		<?php include_once "../partials/navbar-rvpo.php"; ?>
		<main role="main" class="container">
			<?php include_once "../partials/progressbar.php"; ?>
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550005a1f6380977a4144b939/emb?Last_Approver_ID=4"></script>
		</main>

		<!--hitlist details-->
				<div id="hitlist-details-dp" style="display: none"></div>
		<!--./hitlist details-->


		
		<div id="cb-modal" class="modal" tabindex="-1" role="dialog">
			<div class="modal-dialog" role="document" style="width: 80% !important; max-width: 80%; height:30%;">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="cb-modal-title">Relate E-ISA</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div id="cb-modal-body">
							<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550001efb2a47c1974536a144/emb"></script>
						</div>
					</div>
				</div>
			</div>
		</div>

		<script>
			$('#nav-createisa').addClass('active');

			var search_customer_popup;

			$('.progressbar a').attr('href', 'javascript:void(0)');
			$('.progressbar a').addClass('disabled');
	
			document.addEventListener('DataPageReady', function (event) {
				$('#InsertRecordCredit_Limit').autoNumeric('init', {mDec : 10, vMin : 0, aSep : '', aPad : false});
				update_progress_bar();
				
				show_MPO_Details();

				$('*[name$="RecordCurrent_EISA_No"]').prop('readonly', true);
			});
			
			$(document).on('click', '.cb-rl-eisa-id', function(){
				var this_checkbox = this;

				$.confirm({
					type : 'secondary',
					columnClass: 'col-md-6 col-md-offset-3',
					icon : '',
					title : 'Select E-ISA ID',
					theme : 'material',
					content : 'Are sure you want to select this E-ISA ID?',
					backgroundDismiss : false,
					buttons : {
						NO : function (){
							this_checkbox.checked = false;
						},
						YES :
						{
							text: 'YES',
							btnClass: 'btn-green',
							action: function()
							{
								$('*[name$="RecordCurrent_EISA_No"]').val(this_checkbox.value);
								$('#cb-modal .close').click();
							}
						}
					}
				});
			});
			
			$(document).on('change', '*[name="InsertRecordCompany"], *[name="InsertRecordPaint_Manufacturer"], *[name="InsertRecordMPO_Based"]', function(){
				//2024-02-29 richae added timeout to wait for manufacturer
				setTimeout(() => {
					//storedMPODetails variable from app param [@app:JS_ISA_Template_New]
					if(storedMPODetails){
						$('*[name$="RecordMPO_Details"]').val(storedMPODetails);
					} else {
						$('*[name$="RecordMPO_Details"]').val('');

					}

					show_MPO_Details();
				}, 1500);
			});

			document.addEventListener("BeforeFormSubmit", function(e){
				if(e.detail.appKey.includes('5a1f6380977a4144b939')){
					//storedMPODetails variable from app param [@app:JS_ISA_Template_New]
					storedMPODetails = $('*[name$="RecordMPO_Details"]').val()
					console.log(`checking BeforeFormSubmit mpoDetails---------${storedMPODetails}`)
				}
			})
			
			function show_MPO_Details()
			{
				var URL_Param = '?cbResetParam=1';
				URL_Param += '&Company=' + $('*[name="InsertRecordCompany"]').val();
				URL_Param += '&Manufacturer=' + $('*[name="InsertRecordPaint_Manufacturer"]').val();
				URL_Param += '&Selected=' + $('*[name="InsertRecordMPO_Details"]').val();
				
				if($('*[name="InsertRecordCompany"]').val() == '' || $('*[name="InsertRecordPaint_Manufacturer"]').val() == '' || $('*[name="InsertRecordMPO_Based"]').val() == '')
				{
					$('#MPO_Details_Iframe').removeAttr('src');
					return false;
				}
				
				$('#MPO_Details_Iframe').attr({ 'src' : './mpo-details.php' + URL_Param });
			}
			
			function iframe_autoresize(elem)
			{
				var $iframe = $(elem).length ? $(elem) : window.parent.$(elem);
				var padding = 10;

				$iframe.css( 'height', '0px' );
				var height = $iframe.get(0).contentWindow.document.body.scrollHeight + padding;
				$iframe.css( 'height', (height + 70) + 'px' );
			}

			function related_accounts_popup(ISAId)
			{
				$.confirm({
					type : 'secondary',
					columnClass : 'col-md-6 col-md-offset-3',
					icon : '',
					title : ' Related Accounts | E-ISA ID: ' + ISAId,
					theme : 'material',
					content : '<iframe frameBorder="0" src="./related-accounts.php?ISA_ID=' + ISAId + '" onload="iframe_autoresize(this)" style="width:100%;"></iframe>',
					backgroundDismiss : true,
					buttons : false,
					boxWidth: '800px',
					useBootstrap: false,
				});
			}
		</script>

		<!-- Network Customer Selection/Fill up -->
		<div id="cb-modal-related-customer" class="modal" tabindex="-1" role="dialog">
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
							<div id="network_customer_selection">
								<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000edc4f77ac2ba4148bfa1/emb"></script>
							</div>
						</div>
						<div id="cb-modal-error" class="d-none alert alert-danger"></div>
					</div>
				</div>
			</div>
		</div>
		<!-- ./Network Customer Selection/Fill up -->

		<!--if from Hitlist-->
				<script src="../js/hitlist-to-new.js?v=<?php echo date('YmdHis'); ?>"></script>
		<!--./if from Hitlist-->

	</body>
</html>
