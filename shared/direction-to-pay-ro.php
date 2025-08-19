
<h2>ISA ID: <?php echo isset($_GET['ISA_ID']) ? $_GET['ISA_ID'] : ''; ?> - <span class="cb-isa-name"></span></h2>

<hr>

<h5>Linked Assets</h5>
<div class="cb-report cb-linked-assets" id="cb-linked-assets"></div>

<hr>

<h5>Manufacturer Variable Support</h5>
<div class="cb-report cb-mfg-var-support" id="cb-mfg-var-support"></div>

<hr>

<h5>Manufacturer Retained Support</h5>
<div class="cb-report cb-mfg-retained-support" id="cb-mfg-retained-support"></div>

<hr>

<h5>Prompt Pay Allowed by Master</h5>
<div class="cb-report cb-prompt-pay" id="cb-prompt-pay"></div>

<hr>

<div class="cb-fdr-amounts d-none" id="cb-fdr-amounts"></div>

<h5>Fixed Dollar Rebate</h5>
<div class="cb-report cb-fdr" id="cb-fdr"></div>

<hr>

<h5>Liquid Statement Rebate</h5>
<div class="cb-report cb-liquid-st" id="cb-liquid-st"></div>

<hr>

<h5>Liquid EQ Rebate</h5>
<div class="cb-report cb-liquid-eq" id="cb-liquid-eq"></div>

<hr>

<h5>Allied Statement Rebate</h5>
<div class="cb-report cb-allied-st" id="cb-allied-st"></div>

<hr>

<h5>Allied EQ Rebate</h5>
<div class="cb-report cb-allied-eq" id="cb-allied-eq"></div>

<style>
	<?php echo file_get_contents('../css/direction-to-pay.css'); ?>
</style>

<script>
	<?php echo file_get_contents('../js/direction-to-pay.js'); ?>
</script>

<script>
	loadViewonlyD2PDps (<?php echo isset($_GET['ISA_ID']) ? $_GET['ISA_ID'] : ''; ?>)
</script>