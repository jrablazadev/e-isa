<!doctype html>
<html lang="en">
	<head>
		<title>E-ISA</title>
		<?php include_once "../partials/config.php"; ?>
	</head>
	<body class="hide">
		<script type="text/javascript" src="https://<?= $cb_account_id ?>/dp/<?= $cb_appkey_prefix ?>16c3b5779d314bdf9a0d/emb"></script>
			
		<script>
			
			function getUrlVars()
			{
				var vars = [], hash;
				var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

				for(var i = 0; i < hashes.length; i++)
				{
					hash = hashes[i].split('=');
					hash[1] = unescape(hash[1]);
					vars.push(hash[0]);
					vars[hash[0]] = hash[1];
				}

				return vars;
			}
			
			var urlVars = getUrlVars();
			var FK_ID = urlVars['ID'] || '';
			FK_ID = isNaN(FK_ID) ? 0 : FK_ID;
		
			document.addEventListener('DataPageReady', function (event) {
				var notescount = document.querySelectorAll('tr[data-cb-name="data"]').length;

				var notes_btn = window.parent.$('.notesbtn[data-fkid="' + FK_ID + '"]');

				notes_btn.attr('data-notescount', notescount);
				notes_btn.find('.badge').html(notescount);
				window.parent.notes_btn_validation();
			});
		</script>
	</body>
</html>