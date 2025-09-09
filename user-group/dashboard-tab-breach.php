<html>
<head></head>
<body class="hide">
        <div class="mb-5">
                <div class="dashboard-metrics-breach"></div>
                <div class="header bg-dark mb-2">Breach/Deal Termination Work Queue</div>
                <div class="cb-report" id="cb-bwq-container"></div>
        </div>
        <script>
                deployDP('cb-bwq-container', `${globalDataPagePrefix}3eb46814cace4cfd9c7a/emb`);

                <?php echo file_get_contents('../js/breach-search.js'); ?>
        </script>
        <style>
		form[action*="3eb46814cace4cfd9c7a"] .dropdown-menu .dropdown-item {
			display: inline-block;
			vertical-align: top;
		}

		form[action*="3eb46814cace4cfd9c7a"] .dropdown-menu {
			width:500px;
		}

		form[action*="3eb46814cace4cfd9c7a"] > div > div > div[id^="GridCtnr"] {
			overflow:initial !important;
		}
	</style>
</body>
</html>