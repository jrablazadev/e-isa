<html>

<head></head>

<body class="hide">
        <div class="mb-5">
                <div class="dashboard-metrics-procure"></div>
                <div class="header bg-dark mb-2">ISA Procurement Execution Work Queue</div>
                <div class="cb-report" id="cb-procurement-exec-work-queue"></div>

                <hr>

                <div class="header bg-dark mb-2">ISA Procurement Breach/Deal Termination Work Queue</div>
                <div class="cb-report" id="cb-procurement-breach"></div>

        </div>

        <script>
                deployDP('cb-procurement-exec-work-queue', 'https://caspio.thenetwork-crm.com/dp/25d55000f7400819e1704df39330/emb');
                // deployDP('cb-procurement-breach', 'https://caspio.thenetwork-crm.com/dp/25d55000a850778d63474cd98958/emb');

        </script>

</body>

</html>