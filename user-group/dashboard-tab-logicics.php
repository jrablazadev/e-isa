<html>

<head></head>

<body class="hide">
        <div class="mb-5">
                <div class="dashboard-metrics-logic"></div>
                <div class="header bg-dark mb-2">Log1c ICS Execution Work Queue</div>
                <div class="cb-report" id="cb-logicics-exec-work-queue"></div>

                <hr>

                <div class="header bg-dark mb-2">Log1c ICS Breach/Deal Termination Work Queue</div>
                <div class="cb-report" id="cb-logicics-breach"></div>

        </div>

        <script>
                deployDP('cb-logicics-exec-work-queue', 'https://caspio.thenetwork-crm.com/dp/25d550001ded9b7819d34c5894a5/emb');
                deployDP('cb-logicics-breach', 'https://caspio.thenetwork-crm.com/dp/25d5500054dd726bcf644b4bb4fb/emb');
        </script>

        <script src="../js/breach-search.js?v=<?php echo date('YmdHis'); ?>"></script>
</body>

</html>