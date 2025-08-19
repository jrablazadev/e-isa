<!doctype html>
<html lang="en">

<head>
    <?php include_once "../partials/head.php"; ?>
    <title>E-ISA: Dashboard</title>
</head>

<body class="hide">
    <?php include_once "../partials/navbar-as.php"; ?>
    <main role="main" class="container">
        <div class="headers bg-dark text-uppercase">STEP 1 WORK LIST (Scratch Pad, Calculator)</div>
        <div id="scratch-pad-container" class="cb-report mb-3">
            <script type="text/javascript" src="<?= $cb_datapage_prefix ?>726c2fdf94364939b466/emb"></script>
        </div>

        <div class="headers bg-dark mb-2">STEP 2 APPROVALS</div>
        <div>
            <div class="table-header mb-2"><strong>Approved ISAs List</strong></div>
            <div class="cb-report mb-3 cb-approved">
                <script type="text/javascript" src="<?= $cb_datapage_prefix ?>5e1ac67415084caea36a/emb"></script>
            </div>

            <div class="table-header mb-2"><strong>ISAs in Deal Sheet Phase</strong></div>
            <div class="cb-report mb-3 cb-dealsheet">
                <div class="cb-test">
                    <script type="text/javascript" src="<?= $cb_datapage_prefix ?>97e681cfd8604a389b78/emb"></script>
                </div>
            </div>

            <div class="table-header mb-2"><strong>ISAs in Contract Phase</strong></div>
            <div class="cb-report mb-3 cb-contractphase">
                <script type="text/javascript" src="<?= $cb_datapage_prefix ?>66db975f7ab84cf08b1e/emb"></script>
            </div>

            <div class="table-header mb-2"><strong>Execution Work Queue</strong></div>
            <div class="cb-report mb-3 cb-execution-work">
                <script type="text/javascript" src="<?= $cb_datapage_prefix ?>cd459224e8cb4873a81c/emb"></script>
            </div>

            <div class="table-header mb-2"><strong>Breach/Deal Termination Work Queue</strong></div>
            <div class="cb-report mb-3 cb-bwq">
                <div>
                    <script type="text/javascript" src="<?= $cb_datapage_prefix ?>802dc2840bea43189488/emb"></script>
                </div>
            </div>
        </div>
    </main>

    <script src="../js/dashboard-relate-accounts.js?v=<?php echo date('YmdHis'); ?>"></script>

    <script src="../js/dashboard-metrics.js?v=<?php echo date('YmdHis') ?>"></script>
    <script src="../js/scratchpad-filter.js?v=<?php echo date('YmdHis'); ?>"></script>
    <script src="../js/dashboard-deal-work-queue.js?v=<?php echo date('YmdHis'); ?>"></script>
    <link rel="stylesheet" href="../css/dashboard-metrics.css">

    <style>
        .headers {
            background-color: black;
            color: white;
            font-weight: bold;
            padding: 10px;
            text-align: center;
            font-size: 12px;
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

        .cb-dealsheet tr[data-cb-name="data"]>*:nth-child(2),
        .cb-contractphase tr[data-cb-name="data"]>*:nth-child(2),
        .cb-myapproval tr[data-cb-name="data"]>*:nth-child(4),
        .cb-upcoming tr[data-cb-name="data"]>*:nth-child(5),
        .cb-approved tr[data-cb-name="data"]>*:nth-child(4),
        .cb-bwq tr[data-cb-name="data"]>*:nth-child(3) {
            max-width: 150px;
            min-width: 150px;
            white-space: initial;
            word-wrap: break-word;
            text-align: left;
        }
    </style>

    <script>
        // Dashboard metrics
        var bucketApp_Keys = [
            '5e1ac67415084caea36a',
            '97e681cfd8604a389b78',
            '66db975f7ab84cf08b1e',
            'cd459224e8cb4873a81c',
            '802dc2840bea43189488',
        ]

        document.addEventListener("DataPageReady", function() {
            // Provide the parent Div
            makeDashboardMetric(".container")
        })

        $('#nav-dashboard').addClass('active');

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
</body>

</html>