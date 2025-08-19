<?php
	$isaId = !empty($_GET['ISA_ID']) ? $_GET['ISA_ID'] : 0;
?>

<html>
	<head></head>
	<body class="hide">
		<main role="main" class="container">
			<h5>Denial Comments</h5>
			<div class="cb-comment-log" id="cb-comment-denial"></div>

			<hr>

			<h5>Notes Entered on Page 7</h5>
			<div class="cb-comment-log" id="cb-comment-section"></div>

			<hr>

			<h5>Comments By Page</h5>
			<div class="cb-comment-log" id="cb-comment-page"></div>
		</main>
	</body>
	<script>
		deployDP('cb-comment-denial', 'https://caspio.thenetwork-crm.com/dp/25D55000d02c609815b3474d8ff2/emb?ISA_ID=<?php echo $isaId; ?>');
		deployDP('cb-comment-section', 'https://caspio.thenetwork-crm.com/dp/25D55000207f21a72fc347f6b1a4/emb?ISA_ID=<?php echo $isaId; ?>');
		deployDP('cb-comment-page', 'https://caspio.thenetwork-crm.com/dp/25D55000bddd5b32884a4be4884f/emb?ISA_ID=<?php echo $isaId; ?>');

		function comments_popup(id, title)
		{
			$.confirm({
				type : 'secondary',
				columnClass : 'col-md-6 col-md-offset-3',
				icon : '',
				title : title,
				theme : 'material',
				content : '<iframe style="width:100%; height: 200px; border: 0px" id="notes-comment" src="./investments-notes.php?ID=' + id + '" onload="iframe_autoresize(this)"></iframe>',
				backgroundDismiss : false,
				buttons : false,
				boxWidth: '70%',
				useBootstrap: false,
			});
		}

		function iframe_autoresize(elem)
		{
			var $iframe = $(elem).length ? $(elem) : window.parent.$(elem);
			var padding = 10;

			$iframe.css( 'height', '0px' );
			var height = $iframe.get(0).contentWindow.document.body.scrollHeight + padding;
			$iframe.css( 'height', (height + 70) + 'px' );
		}
	</script>
	<style>
		.cb-comment-log .cb-report tr[data-cb-name="data"] td,
		.cb-comment-log .cb-report tr[data-cb-name="header"] th,
		.cb-comment-log .cb-report a
		{
			font-size:12px !important;
			padding:5px;
			text-align:left;
		}
	</style>
</html>