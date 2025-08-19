<html>

<head></head>

<body class="hide">
        <div class="mb-5">
                <div class="dashboard-metrics-credit"></div>
                <div class="header bg-dark mb-2">ISA Credit Execution Work Queue</div>
                <div class="cb-report" id="cb-credit-exec-work-queue"></div>

                <hr>

                <div class="header bg-dark mb-2">Suggested Credit Work Queue</div>
                <div class="cb-report" id="cb-credit-sugg-work-queue"></div>

                <hr>

                <div class="header bg-dark mb-2">ISA Credit Breach/Deal Termination Work Queue</div>
                <div class="cb-report" id="cb-credit-breach"></div>

        </div>

        <script>
                deployDP('cb-credit-exec-work-queue', 'https://caspio.thenetwork-crm.com/dp/25d55000c6624f2eb92544e6b89f/emb');
                deployDP('cb-credit-sugg-work-queue', 'https://caspio.thenetwork-crm.com/dp/25d55000087fc11aa0034a2f8e7d/emb');
                deployDP('cb-credit-breach', 'https://caspio.thenetwork-crm.com/dp/25d550006395b6c851194e1c9291/emb');

        </script>

	<style>
		#cb-credit-breach table[data-cb-name="cbTable"] thead tr th
		{
			white-space: initial;
		}

		#cb-credit-breach textarea
		{
			width:150px !important;
			height:100px !important;
		}
	</style>

</body>

</html>