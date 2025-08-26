<!doctype html>
<html lang="en">

<head>
    <?php include_once "../partials/head.php"; ?>
    <title>E-ISA</title>
    <style>
    </style>
</head>

<body class="hide">
    <?php include_once "../partials/navbar-user-group.php"; ?>

    <!--displays tab-->
    <div class="d-none">
        <script type="text/javascript" src="<?= $cb_datapage_prefix ?>0db191f2f38d401bb173/emb"></script>
    </div>
    <!--./displays tab-->

    <main role="main" class="container">
        <ul class="nav nav-tabs" id="cb-tab" role="tablist"></ul>
        <div class="tab-content" id="cb-tab-content"></div>
    </main>

    <script src="../js/dashboard-metrics.js?v=<?php echo date('YmdHis'); ?>"></script>
    <link rel="stylesheet" href="../css/dashboard-metrics.css">

    <!--deploy DPs for each tab-->
    <script src="../js/users-group-dashboard-tabs.js"></script>
    <!--./deploy DPs for each tab-->

    <script src="../js/dashboard-relate-accounts.js?v=<?php echo date('YmdHis'); ?>"></script>
    <script src="../js/scratchpad-filter.js?v=<?php echo date('YmdHis'); ?>"></script>
    <script src="../js/dashboard-deal-work-queue.js?v=<?php echo date('YmdHis'); ?>"></script>
    <script>
        <?php echo file_get_contents('../js/isa-team-dashboard.js'); ?>
    </script>

    <link rel="stylesheet" href="../css/users-group-dashboard-tabs.css">

    <script>
        $('#nav-dashboard').addClass('active');


        document.addEventListener('DataPageReady', function(v_event) {
            $('a.btn-link').on('click', function() {

                if ($('div.show').length > 1) {

                    $(this).closest('div#cb-team-myapproval').attr('style', 'height: initial');

                } else {

                    $(this).closest('div#cb-team-myapproval').attr('style', 'height: 400px');
                }

            });

            var appKey = v_event.detail.appKey;

            if (typeof(window.cbAjaxEventHandler) !== "undefined") {
                window.cbAjaxEventHandler.addEventListener('UpdateRow', function(v_event) {
                    if (v_event) {
                        var v_row = document.getElementById('DataRow' + v_event.data.dataRowsIds[0] + v_event.data.UniqueSuffix);
                        if (v_row) {
                            for (var key in window.dataPageManagerObj.dataPages) {
                                if (key.search(appKey) != -1) {
                                    window.dataPageManagerObj.dataPages[key].refresh();
                                }
                            }

                        }
                    }
                });
            }
        });
    </script>
</body>

</html>