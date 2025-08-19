<html>

<head></head>

<body class="hide">
        <div class="mb-5">
                <div class="dashboard-metrics-pricing"></div>
                <div class="header bg-dark mb-2">ISA Pricing Execution Work Queue</div>
                <div class="cb-report" id="cb-pricing-exec-work-queue"></div>

                <hr>

                <div class="header bg-dark mb-2">ISA Pricing Breach/Deal Termination Work Queue</div>
                <div class="cb-report" id="cb-pricing-breach"></div>

        </div>

        <script>
                deployDP('cb-pricing-exec-work-queue', 'https://caspio.thenetwork-crm.com/dp/25d55000ef76b73d6082474aadbe/emb');
                deployDP('cb-pricing-breach', 'https://caspio.thenetwork-crm.com/dp/25d55000d8053e16d8d14ecf8c21/emb');
        </script>

</body>

</html>