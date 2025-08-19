<!doctype html>
<html lang="en">

<head>
	<?php include_once "../partials/head.php"; ?>
	<title>E-ISA</title>
</head>

<body class="overflow-auto">
	<div class="cb-related-accounts-20220325">
		<script type="text/javascript" src="<?= $cb_datapage_prefix ?>c36bdfdc8896457e8efa/emb"></script>
	</div>

	<style>
		form[action*="c36bdfdc8896457e8efa"] tr[data-cb-name="header"] th a {
			display: block;
			white-space: initial;
		}

		form[action*="c36bdfdc8896457e8efa"] tr[data-cb-name="header"]>th:nth-child(22)~th,
		form[action*="c36bdfdc8896457e8efa"] tr[data-cb-name="data"]>td:nth-child(22)~td,
		form[action*="c36bdfdc8896457e8efa"] tr[class*="cbResultSetGridTableHeader"]>td:nth-child(22)~td,
		form[action*="c36bdfdc8896457e8efa"] tr[class*="cbResultSetGridDataRow"]>td:nth-child(22)~td {
			display: none;
		}

		form[action*="c36bdfdc8896457e8efa"] .HeadCtnr .cbResultSetGridTableHeader label {
			display: block;
			white-space: initial;
		}
	</style>
	<script>
		$(document).on('click', '.cb-delete-related-acct-btn', function() {
			var relatedAccountId = $(this).attr('data-related-account-id');
			window.parent.delete_related_accounts(relatedAccountId);
		});

		const params = getUrlVars();

		document.addEventListener('DataPageReady', function(event) {
			window.parent.iframeLoaded_related_acct(`cb-related-accounts-iframe-${params.ISA_ID}`);
		});

		window.onload = function() {
			if (typeof(window.cbAjaxEventHandler) !== "undefined") {
				window.cbAjaxEventHandler.addEventListener('SwitchMode', function(v_event) {
					window.parent.iframeLoaded_related_acct(`cb-related-accounts-iframe-${params.ISA_ID}`);
				});
			}
		}
	</script>
	<script>
		<?php echo file_get_contents('../js/dashboard-relate-accounts.js'); ?>
	</script>
</body>

</html>