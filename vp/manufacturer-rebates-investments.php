<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?> 
		<title>E-ISA</title>

		<!-- Library: autoNumeric -->
		<script src="../lib/autonumeric/autoNumeric.js"></script>

		<!-- Custom -->
		<link rel="stylesheet" href="../css/manufacturer-rebates-investments.css?v=<?php echo date('YmdHis'); ?>" />
		<script src="../js/manufacturer-rebates-investments.js?v=<?php echo date('YmdHis'); ?>"></script>
		<script type="text/javascript">
				/********************************
				/TEMPLATE VARS
				/*******************************/
				if (!String.prototype.padStart) {
					String.prototype.padStart = function padStart(targetLength,padString) {
						targetLength = targetLength>>0; //truncate if number or convert non-number to 0;
						padString = String((typeof padString !== 'undefined' ? padString : ' '));
						if (this.length > targetLength) {
							return String(this);
						}
						else {
							targetLength = targetLength-this.length;
							if (targetLength > padString.length) {
								padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
							}
							return padString.slice(0,targetLength) + String(this);
						}
					};
				}
				if (!String.prototype.repeat) {
					String.prototype.repeat = function(count) {
						'use strict';
						if (this == null)
						throw new TypeError('can\'t convert ' + this + ' to object');

						var str = '' + this;
						// To convert string to integer.
						count = +count;
						// Check NaN
						if (count != count)
						count = 0;

						if (count < 0)
						throw new RangeError('repeat count must be non-negative');

						if (count == Infinity)
						throw new RangeError('repeat count must be less than infinity');

						count = Math.floor(count);
						if (str.length == 0 || count == 0)
						return '';

						// Ensuring count is a 31-bit integer allows us to heavily optimize the
						// main part. But anyway, most current (August 2014) browsers can't handle
						// strings 1 << 28 chars or longer, so:
						if (str.length * count >= 1 << 28)
						throw new RangeError('repeat count must not overflow maximum string size');

						var maxCount = str.length * count;
						count = Math.floor(Math.log(count) / Math.log(2));
						while (count) {
						str += str;
						count--;
						}
						str += str.substring(0, maxCount - str.length);
						return str;
					}
				}
				String.prototype.padEnd = String.prototype.padEnd ? String.prototype.padEnd : function(targetLength, padString) {
					targetLength = Math.floor(targetLength) || 0;
					if(targetLength < this.length) return String(this);

					padString = padString ? String(padString) : " ";

					var pad = "";
					var len = targetLength - this.length;
					var i = 0;
					while(pad.length < len) {
						if(!padString[i]) {	
							i = 0;
						}
						pad += padString[i];
						i++;
					}

					return String(this).slice(0) + pad;
				};
			</script>
	</head>
	<body class="hide">
		<?php include_once "../partials/navbar-vp.php"; ?>

		<main role="main" class="container">

			<?php include_once "../partials/progressbar-cfo-vp-coo.php"; ?>

			<!-- Manufacture Rebates -->
			<div class="cb-mfr-rebates section-container container1 grid-edit">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000fa5df8c486334d8da532/emb"></script>
			</div>

			<hr>

			<!-- Fixed Dollar Rebates -->
			<div class="cb-fixed-dollar mb-5">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D5500062898b9681374c338c8b/emb"></script>
			</div>

			<hr>

			<!-- Investments Entry -->
			<div class="cb-investments-entry marginbot20px" id="float">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D5500051ba494d753f49b0a82e/emb"></script>
			</div>

			<!-- Quick Analysis -->
			<div class="marginbot20px calc-summary-container">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000e6fa8ea67191406f98e4/emb"></script>
			</div>

			<!-- Comments -->
			<div class="marginbot20px">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000f80be512f9f14c39ba69/emb"></script>
			</div>
		</main>

		<style>
			a[data-cb-name="GridEditButton"]
			{
				display:none;
			}

			.cb-investments-entry .qty,
			.cb-investments-entry .participation,
			.cb-investments-entry .mfr-participation,
			.cb-investments-entry .customer-participatio
			{
				cursor:not-allowed;
			}

			.cb-next-btn
			{
				color: #FFFFFF !important;
				font-size: 15px !important;
				font-family: Arial, Helvetica, sans-serif !important;
				font-weight: 400 !important;
				text-transform: uppercase !important;
				text-align: center !important;
				min-width: 180px !important;
				padding: 15px 20px !important;
				display: inline-block !important;
				background: #027FAA !important;
				border: none !important;
				-webkit-border-radius: 3px !important;
				-moz-border-radius: 3px !important;
				border-radius: 3px !important;
				margin: 0px 10px !important;
			}

			.nextbtn
			{
				display:none !important;
			}

			.cb-fixed-dollar a[data-cb-name="InlineEdit"]
			{
				display:none;
			}
		</style>
		<script>
			update_progress_bar_cfo_vp_coo(7);

			document.addEventListener('DataPageReady', function (event) {

				if (event.detail.appKey == '25D5500051ba494d753f49b0a82e')
				{
					$('.cb-investments-entry').find('.qty, .participation, .mfr-participation, .customer-participation').prop('disabled', true);
					$('.nextbtn').closest('div').append('<a href="./investments.php?ISA_ID=<?php echo $_GET['ISA_ID']; ?>&Section_ID=8" class="cb-next-btn">Next</a>');
				}

			});
		</script>
	</body>
</html>