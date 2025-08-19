<!doctype html>
<html lang="en">
	<head>
		<title>E-ISA</title>
		
		<?php include_once "../partials/head.php"; ?> 
		
		<script src="../lib/financejs/finance.js"></script>

	</head>

	<body class="hide">
		<?php include_once "../partials/navbar-marketing.php"; ?>
		<main role="main" class="container">
			<?php include_once "../partials/progressbar.php"; ?>
			<div>Please wait..</div>
			
			<div style="display:none">
				<div id="liquid-returns">
					<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D550006b003e3d5c994b5e9460/emb"></script>
				</div>
				
				<div id="total-returns">
					<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D5500083ac66fd31384ac3b246/emb"></script>
				</div>
				
				<div id="submission-form">
					<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000b17fc78dd0a545e1aa35/emb"></script>
				</div>
			</div>
			
		</main>
		
		<script>

			var finance = new Finance();
			var dp_loaded = 0;
			var rows = [];
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
			
			document.addEventListener('DataPageReady', function (event) {
				
				dp_loaded++;
				
				if(dp_loaded == 3)
				{
					irr_liquid_returns();
					total_liquid_returns();
					
					// console.log(rows);
					submit_irr_values();
					$('*[class^="cbSubmitButton"]').click();
				}
			});
			
			function irr_liquid_returns()
			{
				$('#liquid-returns table[data-cb-name="cbTable"] tr[data-cb-name="data"]').each(function(){
					
					var id = 0;
					var cashflow = [];
					
					$(this).find('td').each(function(i){
						
						var value = Number($(this).html().toString().trim());
						value = isNaN(value) ? 0 : value;
						
						if(i == 0)
						{
							id = value;
						}
						else
						{
							cashflow.push(value);
						}
					});
					
					IRR =  compute_irr(cashflow);
					IRR = IRR.toFixed(0);
					
					rows.push({ 'type' : 1, 'id' : id, 'irr' : IRR });
				});
			}
			
			function total_liquid_returns()
			{
				$('#total-returns table[data-cb-name="cbTable"] tr[data-cb-name="data"]').each(function(){
					
					var id = 0;
					var cashflow = [];
					
					$(this).find('td').each(function(i){
						
						var value = Number($(this).html().toString().trim());
						value = isNaN(value) ? 0 : value;
						
						if(i == 0)
						{
							id = value;
						}
						else
						{
							cashflow.push(value);
						}
					});
					
					IRR =  compute_irr(cashflow);
					IRR = IRR.toFixed(0);

					rows.push({ 'type' : 2, 'id' : id, 'irr' : IRR });
				});
			}
			
			function numeric_padding(str)
			{
				str = str.toString();
				str = str.split('.');

				var whole = (str[0] || '').toString();
				var decimal = (str[1] || '').toString();

				whole = whole.padStart(16, '0');
				decimal = decimal.padEnd(10, '0');

				return whole + '.' + decimal;
			}
			
			function submit_irr_values()
			{
				var type = '';
				var id = '';
				var irr = '';
				
				// console.log(rows);
				
				for(i = 0; i < rows.length; i++)
				{
					var type_r = rows[i]['type'].toString();
					var id_r = rows[i]['id'].toString();
					var irr_r = rows[i]['irr'].toString();
					
					type 	+= type_r + '|';
					id 		+= id_r.padStart(10, '0') + '|';
					irr 	+= numeric_padding(irr_r) + '|';
				}
				
				$('#InsertRecordType').val(type);
				$('#InsertRecordRefernce_ID').val(id);
				$('#InsertRecordIRR').val(irr);
			}

			function compute_irr(cashflow)
			{
				var irr = 0;
				
				try
				{
					irr = finance.IRR( { cashFlow: cashflow, depth : 100 }); // depth can be changed to increase accuracy
				}
				catch(err){}
				
				return irr;
			}

		</script>
	</body>
</html>