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
        </script>
        <script src="../js/breach-search.js?v=<?php echo date('YmdHis'); ?>"></script>
</body>
</html>