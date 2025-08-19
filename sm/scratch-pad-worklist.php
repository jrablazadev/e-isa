<!doctype html>
<html lang="en">

<head>
    <?php include_once "../partials/head.php"; ?>
    <title>E-ISA: Dashboard</title>
</head>

<body class="hide">
    <?php include_once "../partials/navbar-sm.php"; ?>
    <main role="main" class="container">

        <div id="scratch-pad-container">

            <div class="table-header mb-2"><strong>Approved ISAs List</strong></div>
            <div class="cb-report mb-3 cb-approved overflow-auto">
                <script type="text/javascript" src="<?= $cb_datapage_prefix ?>9daef365cb2348b3b65a/emb"></script>
            </div>

            <div class="table-header mb-2"><strong>ISAs in Deal Sheet Phase</strong></div>
            <div class="cb-report mb-3 cb-dealsheet overflow-auto">
                <script type="text/javascript" src="<?= $cb_datapage_prefix ?>570e6ee879aa4ccca281/emb"></script>
            </div>

            <div class="table-header mb-2"><strong>ISAs in Contract Phase</strong></div>
            <div class="cb-report mb-3 cb-contractphase overflow-auto">
                <script type="text/javascript" src="<?= $cb_datapage_prefix ?>3324267a4fcb4139a921/emb"></script>
            </div>

            <div class="table-header mb-2"><strong>Execution Work Queue</strong></div>
            <div class="cb-report mb-3 cb-execution-phase overflow-auto">
                <script type="text/javascript" src="<?= $cb_datapage_prefix ?>9f8b1b08830d48139803/emb"></script>
            </div>

            <div class="cb-report mb-3">
                <div class="table-header mb-2"><strong>Breach/Deal Termination Work Queue</strong></div>
                <div class="overflow-auto" id="cb-team-breach">
                    <script type="text/javascript" src="<?= $cb_datapage_prefix ?>618c4b059e5940538a50/emb"></script>
                </div>
            </div>

        </div>
    </main>

    <script src="../js/dashboard-relate-accounts.js?v=<?php echo date('YmdHis'); ?>"></script>
    <script src="../js/dashboard-metrics.js"></script>
    <script src="../js/dashboard-deal-work-queue.js?v=<?php echo date('YmdHis'); ?>"></script>
    <link rel="stylesheet" href="../css/dashboard-metrics.css">

    <script>
        // Dashboard metrics
        var bucketApp_Keys = [
            "25D5500039a001159a514e4abfd7",
            "25D5500006ce8ef9da074107ae34",
            "25D550009daef365cb2348b3b65a",
            "25D55000570e6ee879aa4ccca281",
            "25D550003324267a4fcb4139a921",
            "25D550009f8b1b08830d48139803",
            "25D55000618c4b059e5940538a50",
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
        .cb-contractphase tr[data-cb-name="data"]>*:nth-child(2),
        #cb-team-breach tr[data-cb-name="data"]>*:nth-child(3) {
            max-width: 150px;
            min-width: 150px;
            white-space: initial;
            word-wrap: break-word;
            text-align: left;
        }
    </style>
</body>

</html>