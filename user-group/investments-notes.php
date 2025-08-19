<!doctype html>
<html lang="en">
	<head>
		<title>E-ISA</title>
	<body class="hide">
            <script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D5500016c3b5779d314bdf9a0d/emb"></script>
			
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
					var elem = window.parent.$('.notesbtn[data-fkid="' + FK_ID + '"]');

					if(elem)
					{
						elem.attr('data-notescount', notescount);
					}

					window.parent.change_notesBtn_color();
				});
			</script>
	</body>
</html>