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
		<?php include_once "../partials/navbar-user-group.php"; ?>

		<main role="main" class="container mb-5">

			<?php include_once "../partials/progressbar-user-group-view.php"; ?>

			<!-- Manufacture Rebates -->
			<div class="cb-mfr-rebates section-container container1 grid-edit">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500042421c167a5944c7b0b2/emb"></script>
			</div>

			<hr>

			<!-- Fixed Dollar Rebates -->
			<div class="cb-fixed-dollar mb-5">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500062898b9681374c338c8b/emb"></script>
			</div>

			<hr>

			<!-- Investments Entry -->
			<div class="cb-investments-entry mb-3" id="float">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500051ba494d753f49b0a82e/emb"></script>
			</div>

			<div class="mb-3 calc-summary-container">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000e6fa8ea67191406f98e4/emb"></script>
			</div>
		</main>

		<style>
			a[data-cb-name="GridEditButton"],
			.cb-back-next-btn,
			.cb-fixed-dollar a[data-cb-name="InlineEdit"]
			{
				display:none;
			}

			.cb-investments-entry .qty,
			.cb-investments-entry .participation,
			.cb-investments-entry .mfr-participation,
			.cb-investments-entry .customer-participatio
			{
				cursor:not-allowed;
				pointer-events: none;
			}
		</style>
		<script>
			update_progressbar(7);

			document.addEventListener('DataPageReady', function (event) {

				if (event.detail.appKey == '25d5500051ba494d753f49b0a82e')
				{
					$('.cb-investments-entry').find('.qty, .participation, .mfr-participation, .customer-participation').prop('disabled', true);
					// $('.nextbtn').closest('div').append('<a href="./investments.php?ISA_ID=<?php echo $_GET['ISA_ID']; ?>&Section_ID=8" class="cb-next-btn">Next</a>');
				}

			});
		</script>
	</body>
</html>