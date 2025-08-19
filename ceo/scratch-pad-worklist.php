<!doctype html>
<html lang="en">

<head>
    <?php include_once "../partials/head.php"; ?>
    <title>E-ISA: Dashboard</title>
</head>

<body class="hide">
    <?php include_once "../partials/navbar-ceo.php"; ?>
    <main role="main" class="container">

        <div id="scratch-pad-container">

            <div class="table-header mb-2"><strong>My Approval Needed</strong></div>
            <div class="cb-report mb-3 overflow-auto cb-myapproval">
                <script type="text/javascript" src="<?= $cb_datapage_prefix ?>d1a02f1ce3d443eab14b/emb"></script>
            </div>

            <div class="table-header mb-2"><strong>Upcoming Approvals</strong></div>
            <div class="cb-report mb-3 overflow-auto cb-upcoming">
                <script type="text/javascript" src="<?= $cb_datapage_prefix ?>6c55b7f7f14d4106acba/emb"></script>
            </div>

            <div class="table-header mb-2"><strong>Approved ISAs List</strong></div>
            <div class="cb-report mb-3 overflow-auto cb-approved">
                <script type="text/javascript" src="<?= $cb_datapage_prefix ?>03eb893b975749099f80/emb"></script>
            </div>

            <div class="table-header mb-2"><strong>ISAs in Deal Sheet Phase</strong></div>
            <div class="cb-report mb-3 overflow-auto cb-dealsheet">
                <script type="text/javascript" src="<?= $cb_datapage_prefix ?>5e3efbb2501443789cf6/emb"></script>
            </div>

            <!-- Step 3 -->
            <div class="table-header mb-2"><strong>ISAs in Contract Phase</strong></div>
            <div class="cb-report mb-3 overflow-auto cb-contractphase">
                <script type="text/javascript" src="<?= $cb_datapage_prefix ?>5a6aa2aa2e734b97aca6/emb"></script>
            </div>

            <div class="table-header mb-2"><strong>Execution Work Queue</strong></div>
            <div class="cb-report mb-3 overflow-auto cb-execution-work">
                <script type="text/javascript" src="<?= $cb_datapage_prefix ?>62ebac071ec04163bf0a/emb"></script>
            </div>

            <div class="cb-report mb-3">
                <div class="table-header mb-2"><strong>Breach/Deal Termination Work Queue</strong></div>
                <div class="overflow-auto" id="cb-team-breach"></div>
            </div>

        </div>
    </main>

    <script>
        deployDP('cb-team-breach', '<?= $cb_datapage_prefix ?>ffc1c7c866bc4df4b5af/emb');
    </script>
    <script src="../js/dashboard-relate-accounts.js?v=<?php echo date('YmdHis'); ?>"></script>

    <script src="../js/dashboard-metrics.js"></script>
    <script src="../js/dashboard-deal-work-queue.js?v=<?php echo date('YmdHis'); ?>"></script>
    <link rel="stylesheet" href="../css/dashboard-metrics.css">

    <style>
        #cb-team-breach table[data-cb-name="cbTable"] thead tr th {
            white-space: initial;
        }

        #cb-team-breach textarea {
            width: 150px !important;
            height: 100px !important;
        }

        #cb-team-breach input[type="text"] {
            width: 120px !important;
        }
    </style>

    <script>
        // Dashboard metrics
        var bucketApp_Keys = [
            "d1a02f1ce3d443eab14b",
            "6c55b7f7f14d4106acba",
            "03eb893b975749099f80",
            "5e3efbb2501443789cf6",
            "5a6aa2aa2e734b97aca6",
            "62ebac071ec04163bf0a",
            "ffc1c7c866bc4df4b5af",
        ]

        var bucketLabels = [
            "My Approval <br> Needed",
            "Upcoming <br> Approvals",
            "Approved <br> E-ISA’s",
            "Deal Sheet <br> Approvals Needed",
            "Contract <br>Phase",
            "Execution <br>Phase",
            "Deal <br>Terminations",
        ]

        document.addEventListener("DataPageReady", function() {
            // Provide the parent Div
            makeDashboardMetric(".container", bucketLabels, "dashboard-metrics-content-md")
        })
    </script>

    <script>
        $('#nav-dashboard').addClass('active');

        // inactive_isa([@field:ISA_ISA_ID])
        function inactive_isa(ISA_ID) {
            $.confirm({
                type: 'secondary',
                columnClass: 'col-md-6 col-md-offset-3',
                icon: 'fa fa-warning',
                title: 'Inactivate ISA',
                theme: 'material',
                content: 'Are you sure you would like to inactivate this record? <br/> This record will be removed from the list.',
                backgroundDismiss: true,
                buttons: {
                    NO: function() {},
                    YES: {
                        text: 'YES',
                        btnClass: 'btn-green',
                        action: function() {
                            window.location.href = './scratch-pad-delete.php?ISA_ID=' + ISA_ID;
                        }
                    }
                }
            });
        }
    </script>

    <style>
        .cabtn {
            text-decoration: none !important;
        }

        .cbFormPassword {
            width: 100%;
        }

        #caspioform>div {
            /*margin:auto;*/
        }

        .headers {
            background-color: black;
            color: white;
            font-weight: bold;
            padding: 10px;
            text-align: center;
        }

        .table-header {
            width: 100%;
            text-align: center;
            padding: 5px;
            padding: 10px;
            font-size: 12px;
            text-decoration: underline;
            border-top: 1px #dedede solid;
        }

        .cb-report tr[data-cb-name="data"] td,
        .cb-report tr[data-cb-name="header"] th,
        .cb-report a {
            font-size: 12px !important;
            padding: 5px;
            text-align: left;
        }

        .cb-report tr[data-cb-name="header"] a,
        .cb-report tr[data-cb-name="data"] a:not(.btn) {
            padding: 0px;
        }

        .cb-myapproval tr[data-cb-name="data"]>*:nth-child(4),
        .cb-upcoming tr[data-cb-name="data"]>*:nth-child(3),
        .cb-approved tr[data-cb-name="data"]>*:nth-child(3),
        .cb-dealsheet tr[data-cb-name="data"]>*:nth-child(2),
        .cb-contractphase tr[data-cb-name="data"]>*:nth-child(2) {
            max-width: 150px;
            min-width: 150px;
            white-space: initial;
            word-wrap: break-word;
            text-align: left;
        }
    </style>
</body>

</html>