<script src="../lib/jquery-3.3.1.min.js"></script>

<link rel="stylesheet" href="../lib/bootstrap-4.4.1/bootstrap-4.4.1.min.css">
<script src="../lib//bootstrap-4.4.1/bootstrap-4.4.1.min.js"></script>

<link rel="stylesheet" href="../lib/jquery-confirm-v3.3.4/css/jquery-confirm.css">
<script src="../lib/jquery-confirm-v3.3.4/js/jquery-confirm.js"></script>

<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550001486b5d5be37472099b8/emb"></script>

<style>
	a,
	p,
	input[type="submit"],
	input[type="file"],
	div,
	*
	{
		font-size:12px !important;
	}

	input[type="submit"]
	{
		height:auto !important;
	}

	.jconfirm-holder
	{
		padding: 0px !important;
	}

	.jconfirm .jconfirm-holder
	{
		padding: 0px !important;
	}

	#Alert
	{
		top: 0px !important;
	}
</style>

<script>

	document.addEventListener('DataPageReady', function (event) {
                if(event.detail.appKey == '25d550001486b5d5be37472099b8')
                {
                        window.parent.refresh_contract_phase();
                }
        });

    // Modaldelete([@field:ISA_ISA_ID])
	function modalDelete(ISA_ID, Attachment_ID) {
		$.confirm({
			type: 'secondary',
			// columnClass: 'col-md-6 col-md-offset-3
			boxWidth: '100%',
    			useBootstrap: false,
			icon: 'fa fa-warning',
			title: 'Delete Uploaded Files',
			theme: 'material',
			content: 'Are you sure you would like to delete this file? <br/> This file will be removed from the list.',
			backgroundDismiss: true,
			buttons: {
				NO: function() {},
				YES: {
					text: 'YES',
					btnClass: 'btn-green',
					action: function() {
						window.location.href = './scratch-pad-upload-files-delete.php?ISA_ID='+ ISA_ID + '&Attachment_ID=' + Attachment_ID;
					}
				}
			}
		});
	}
</script>	