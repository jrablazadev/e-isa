<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?> 
		<title>E-ISA</title>
		<link rel="stylesheet" href="../css/section-1.css" media="screen" title="no title" charset="utf-8">

		<style>
		    .scroll{
				overflow-x: auto;
				white-space: nowrap;
				width : 100%
			}
			.scroll {
				display: inline-block;
				float: none;
			}
		</style>
	</head>

	<body class="hide">
		<?php include_once "../partials/navbar-tsm.php"; ?>
		<main role="main" class="container">
			<div class="scroll">		
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D550006ece8e575a6e40f9964f/emb"></script>
			</div>
		</main>
	
		<script>
			// Pace.on("done", function(){});
			$('.progressbar a').attr('href', 'javascript:void(0)');
			$('.progressbar a').addClass('disabled');
		</script>
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
				toggle_existing_eisa();
			});

			$(document).on('change', '*[name="InsertRecordNew_Existing"]', function(){
				toggle_existing_eisa();
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
		</script>
	</body>
</html>
