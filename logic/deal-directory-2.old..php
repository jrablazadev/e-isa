<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?>
		<title>E-ISA | Deal Directory</title>
	</head>
	<body class="hide">
		<?php include_once "../partials/navbar-logic.php"; ?>

		<div class="d-none cb-dynamic-dd">
			<!-- <script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550006e10f81c92774367b9fe/emb"></script> -->
		</div>

		<main class="mb-5 ml-5 mr-5">
			<div class="table-header mb-2 font-weight-bold bg-dark text-white">DEAL DIRECTORY - TEMPORARY PAGE</div>

			<div class="cb-search">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000a61c415ef11d4f71b5f0/emb"></script>
			</div>

			<div class="cb-report mb-3" id="cb-deal-directory">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550001c72a60eee144283bcb2/emb"></script>
			</div>
		</main>

		<script src="../lib/jquery-freeze-table-master/dist/js/freeze-table.min.js"></script>

		<link rel="stylesheet" href="../lib/floating-scroll-master/dist/jquery.floatingscroll.css" media="screen" title="no title" charset="utf-8">
                <script src="../lib/floating-scroll-master/dist/jquery.floatingscroll.min.js"></script>

		<link rel="stylesheet" href="../css/deal-directory.css">

		<script>
			<?php echo file_get_contents('../js/dashboard-relate-accounts.js'); ?>
			<?php #echo file_get_contents('../js/deal-directory.js'); ?>
			<?php #echo file_get_contents('../js/dynamic-deal-directory.js'); ?>

			document.addEventListener('DataPageReady', function (event) {
				if(event.detail.appKey == '25d550001c72a60eee144283bcb2')
				{
					total_amp_link();
					my_amp_link();
					sales_trend_icon();
				}
			});

			function total_amp_link()
			{
				$('#cb-deal-directory *[data-cb-name="data"] td:nth-child(5)').each(function(){
					if($(this).attr('data-has-link') == 'Y')
					{
						return true;
					}

					// console.log( $(this).html() );

					var total = ($(this).html() || '').toString().trim();
					var isa_id = ($(this).closest('tr').find('.cb-cog').attr('data-isa-id') || '');

					$(this).html( '<a href="https://caspio.thenetwork-crm.com/dp/25d55000139908d8e36e4e9f81e8?ISA_ID=' + isa_id + '" target="_blank">' + total + '</a>' );

					$(this).attr('data-has-link', 'Y');
				});
					
			}

			function my_amp_link()
			{
				$('#cb-deal-directory *[data-cb-name="data"] td:nth-child(6)').each(function(){
					if($(this).attr('data-has-link') == 'Y')
					{
						return true;
					}

					var total = ($(this).html() || '').toString().trim();
					var isa_id = ($(this).closest('tr').find('.cb-cog').attr('data-isa-id') || '');

					$(this).html( '<a href="https://caspio.thenetwork-crm.com/dp/25d55000786546b9a3324c0083dd?ISA_ID=' + isa_id + '" target="_blank">' + total + '</a>' );

					$(this).attr('data-has-link', 'Y');
				});
					
			}

			function sales_trend_icon()
			{
				$('#cb-deal-directory *[data-cb-name="data"] td:nth-child(8)').each(function(){

					if($(this).attr('data-has-icon') == 'Y')
					{
						return true;
					}

					var percentage = ($(this).html() || '').toString().trim();

					// console.log({
					//  string : percentage,
					//  number : Number(percentage) * 100
					// });

					percentage = Number(percentage) * 100;

					if(percentage > 1)
					{
						$(this).html( caretup + '<div>' + percentage.toFixed(2).toString() + '%</div>');
					}
					else if(percentage < -1.1)
					{
						$(this).html( caretdown + '<div>' + percentage.toFixed(2).toString() + '%</div>');
					}
					else
					{
						$(this).html( dash + '<div>' + percentage.toFixed(2).toString() + '%</div>');
					}

					$(this).attr('data-has-icon', 'Y');
				});
			}
		</script>
	</body>
</html>