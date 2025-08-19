<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Support Fee Summary</title>
		<?php include_once '../partials/config.php' ?>

		<script src="../lib/jquery-3.3.1.min.js"></script>
		<script src="../lib/popper.min.js"></script>

		<link rel="stylesheet" href="../lib/bootstrap-4.4.1/bootstrap-4.4.1.min.css">
		<script src="../lib//bootstrap-4.4.1/bootstrap-4.4.1.min.js"></script>

		<script src="../lib/inputmask/inputmask.min.js"></script>
	</head>
	<body class="hide">
		<div class="text-right cb-btn-contaier pr-2">
			<button type="button" class="btn btn-sm btn-info" onclick="apply_changes_page7()">
				Apply changes to Page 7
			</button>
		</div>

		<div>
			<script type="text/javascript" src="<?= $cb_datapage_prefix ?>3a4d52aa91854cf6b05d/emb"></script>
		</div>

		<style>
			form[action*="3a4d52aa91854cf6b05d"] .HeadCtnr .cbResultSetGridTableHeader label {
				display: block;
				white-space: initial;
			}
		</style>

		<script type="text/javascript">
			document.addEventListener('DataPageReady', function(event) {
				window.parent.iframeLoaded('jc-iframe');
				hideColumns();
			});

			window.onload = function() {
				if (typeof(window.cbAjaxEventHandler) !== "undefined") {
				window.cbAjaxEventHandler.addEventListener('SwitchMode', function(v_event) {
					if (v_event) {

					if (v_event.data.AppKey.includes('3a4d52aa91854cf6b05d')) {
						hideColumns()
						var $form = document.querySelector(`form[action*="${v_event.data.AppKey}"]`)
						var $table = $form.querySelector('.BodyCtnr > table')
						if ($table) {
						callMasking()
						const $tds = $table.querySelectorAll('tr td');
						// Convert NodeList to an array to use forEach in all browsers
						Array.prototype.forEach.call($tds, element => {

							const targetNode = element;

							// Options for the observer (which mutations to observe)
							const config = {
							childList: true
							};

							// Callback function to execute when mutations are observed
							const callback = function(mutationsList, observer) {
							for (const mutation of mutationsList) {
								if (mutation.type === 'childList') {
								callMasking()
								}
							}
							};

							// Create an observer instance linked to the callback function
							const observer = new MutationObserver(callback);

							// Start observing the target node for configured mutations
							observer.observe(targetNode, config);
						});
						}

						function callMasking() {
						const config_disc = {
							alias: 'numeric',
							min: 0, // Minimum value allowed
							max: 100, // Maximum value allowed
							digits: 1, // Allow only one decimal place
							placeholder: "", // No placeholder character
							radixPoint: ".", // Decimal separator
							allowMinus: false, // Disallow negative values
						}
						Inputmask(config_disc).mask($form.querySelector('*[name$="Log1c_Cx_Disc"]'));
						Inputmask(config_disc).mask($form.querySelector('*[name$="Color_Software_Discount"]'));

						}



						window.parent.iframeLoaded('jc-iframe');
					}
					}
				});
				}
			};

			let scroll = 0;
			let urlVars = getUrlVars();
			let isa_id = (urlVars.ISA_ID || '');

			const timer = setInterval(function() {
				if (document.querySelectorAll('#Alert').length) {
					document.querySelector('#Alert').focus();
				}
			}, 1000);


			function hideColumns() {
				const selectors = [
					'form[action*="3a4d52aa91854cf6b05d"] table[data-cb-name="cbTable"] thead tr th:last-child',
					'form[action*="3a4d52aa91854cf6b05d"] table[data-cb-name="cbTable"] thead tr th:nth-last-child(2)',
					'form[action*="3a4d52aa91854cf6b05d"] table[data-cb-name="cbTable"] tbody tr td:last-child',
					'form[action*="3a4d52aa91854cf6b05d"] table[data-cb-name="cbTable"] tbody tr td:nth-last-child(2)',
					'form[action*="3a4d52aa91854cf6b05d"] div.HeadCtnr table tbody tr:last-child td:last-child',
					'form[action*="3a4d52aa91854cf6b05d"] div.HeadCtnr table tbody tr:last-child td:nth-last-child(2)',
					'form[action*="3a4d52aa91854cf6b05d"] div.BodyCtnr > table > tbody > tr > td:last-child',
					'form[action*="3a4d52aa91854cf6b05d"] div.BodyCtnr > table > tbody > tr > td:nth-last-child(2)'
				];

				// Loop through each selector and hide matching elements
				selectors.forEach(selector => {
					document.querySelectorAll(selector).forEach(element => {
						element.style.display = 'none';
					});
				});
			}

			function getUrlVars() {
				var vars = [],
					hash;
				var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

				for (var i = 0; i < hashes.length; i++) {
					hash = hashes[i].split('=');
					hash[1] = unescape(hash[1]);
					vars.push(hash[0]);
					vars[hash[0]] = hash[1];
				}

				return vars;
			}

			function apply_changes_page7() {

				const cbDataPagePrefix = window.parent.cbDataPagePrefix;

				window.parent.location.href = `${cbDataPagePrefix}831251ee9f054232905a?ISA_ID=${isa_id}`;
			}
		</script>
	</body>
</html>