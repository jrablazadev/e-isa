<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?> 
		<title>E-ISA</title>
	</head>
	<body class="hide">
		<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500050a6d02899b34565953e/emb"></script>

		<style>
			*
			{
				font-size:12px !important;
			}

			tr[data-cb-name="data"] td
			{
				padding:5px;
			}

			*[class^="cbSearchButtonContainer"]
			{
				display:none;
			}

			section[data-cb-name="cbTable"]
			{
				border-style: none;
				box-shadow: none;
			}
		</style>

		<script>
			function reset_search()
			{
				$('input[type="text"]').val('');
				$('form').submit();
			}

			function select_isa_id(isa_id)
			{
				parent.$('*[name$="RecordCurrent_EISA_No"]').val(isa_id);
				parent.search_customer_popup.close();
				parent.$('#cb-modal .close').click();
			}
		</script>
	</body>
</html>