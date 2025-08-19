


<html>

<head></head>

<body class="hide">
        <div class="mb-5">
                <div class="dashboard-metrics-clevel"></div>
                <div class="header bg-dark mb-2">ISAs in Deal Sheet Phase</div>
                <div class="cb-report" id="cb-clevel-dealsheet"></div>

                <hr>

                <div class="header bg-dark mb-2">ISAs in Contract Phase</div>
                <div class="cb-report" id="cb-clevel-contratphase"></div>

                <hr>

                <div class="header bg-dark mb-2">Execution Work Queue</div>
                <div class="cb-report" id="cb-clevel-exec"></div>

                <hr>

                <!-- <div class="header bg-dark mb-2">Breach/Deal Termination Work Queue</div>
                <div class="cb-report" id="cb-clevel-breach"></div> -->
                
		<div class="header bg-dark mb-2">Breach/Deal Termination Work Queue</div>
		<div class="cb-report" id="cb-team-breach">
	</div>


        </div>

        <script>
                deployDP('cb-clevel-dealsheet', 'https://caspio.thenetwork-crm.com/dp/25d550005e3efbb2501443789cf6/emb');
		deployDP('cb-clevel-contratphase', 'https://caspio.thenetwork-crm.com/dp/25d550005a6aa2aa2e734b97aca6/emb');
                deployDP('cb-clevel-exec', 'https://caspio.thenetwork-crm.com/dp/25d5500062ebac071ec04163bf0a/emb');
                // deployDP('cb-clevel-breach', 'https://caspio.thenetwork-crm.com/dp/25d55000ffc1c7c866bc4df4b5af/emb');
                deployDP('cb-team-breach', 'https://caspio.thenetwork-crm.com/dp/25d550004715d70e3b0049f9977e/emb');

        </script>




</body>



</html>