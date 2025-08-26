<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?> 

		<title>E-ISA</title>
	</head>
	<body class="hide">
		<main role="main" class="container">

        
			<h5>Denial Comments</h5>
			<div class="cb-report comment-log" id="comment-denial">
                <script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000d02c609815b3474d8ff2/emb"></script>
			</div>

			<h5>Notes Entered on Page 7</h5>
			<div class="cb-report comment-log" id="comment-section">
                <script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500079a7dbacd9d144f1859c/emb"></script>
			</div>

			<hr>

			<h5>Comments By Page</h5>
			<div class="cb-report comment-log" id="comment-page">
                <script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000bddd5b32884a4be4884f/emb"></script>
			</div>

			<hr>


			<hr>

		</main>
	</body>

	<script>
			
		function refreshDP(appKey) {
			for (var key in window.dataPageManagerObj.dataPages) {
				if (key.search(appKey) != -1) {
					window.dataPageManagerObj.dataPages[key].refresh();
				}
			}
		}
		function iframe_autoresize(elem)
		{
			var $iframe = $(elem).length ? $(elem) : window.parent.$(elem);
			var padding = 10;

			$iframe.css( 'height', '0px' );
			var height = $iframe.get(0).contentWindow.document.body.scrollHeight + padding;
			$iframe.css( 'height', (height + 70) + 'px' );
		}

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
	
	</script>

	<script>

		document.addEventListener("DataPageReady", function () {
			function refreshDP(appKey) {
				for (var key in window.dataPageManagerObj.dataPages) {
					if (key.search(appKey) != -1) {
						window.dataPageManagerObj.dataPages[key].refresh();
					}
				}
			}	
			var a = setInterval(function() {
				if (window.parent.document.querySelector("#cb-comment-log-div")) {
					var closeIcon = window.parent.document.querySelector("#cb-comment-log-div").contentDocument.querySelector(".jconfirm-closeIcon");
					console.log(closeIcon)
					
					if(closeIcon)
					{
						closeIcon.addEventListener("click", function () { 
							refreshDP("25d5500079a7dbacd9d144f1859c")
						})
					}
					clearInterval(a)
				}
			}, 500);
		})
	</script>


	<style>
		.cb-report tr[data-cb-name="data"] td,
		.cb-report tr[data-cb-name="header"] th,
		.cb-report a
		{
			font-size:12px !important;
			padding:5px;
			text-align:left;
		}
	</style>
</html>