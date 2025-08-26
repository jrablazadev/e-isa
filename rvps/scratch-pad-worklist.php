<!doctype html>
<html lang="en">

<head>
    <?php include_once "../partials/head.php"; ?>
    <title>E-ISA: Dashboard</title>
</head>

<body class="hide">
    <?php include_once "../partials/navbar-rvps.php"; ?>
    <main role="main" class="container">

        <div class="headers bg-dark text-uppercase">STEP 1 WORK LIST (Scratch Pad, Calculator)</div>
        <div id="scratch-pad-container" class="cb-report">
            <script type="text/javascript" src="<?= $cb_datapage_prefix ?>4199635e44154be294b4/emb"></script>
        </div>

        <div class="headers bg-dark mb-2">STEP 2 APPROVALS</div>
        <div>

            <div class="table-header mb-2"><strong>My Approval Needed</strong></div>
            <div class="cb-report overflow-auto mb-3 cb-myapproval">
                <script type="text/javascript" src="<?= $cb_datapage_prefix ?>6f42e1516e404872a6e0/emb"></script>
            </div>

            <div class="table-header mb-2"><strong>Upcoming Approvals</strong></div>
            <div class="cb-report overflow-auto mb-3" id="cb-upcoming">
                <script type="text/javascript" src="<?= $cb_datapage_prefix ?>d10e87ac23934e6ea6a7/emb"></script>
            </div>

            <div class="table-header mb-2"><strong>Approved ISAs List</strong></div>
            <div class="cb-report overflow-auto mb-3" id="cb-approved">
                <script type="text/javascript" src="<?= $cb_datapage_prefix ?>fe86dc8d828d4789a6cf/emb"></script>
            </div>

            <div class="table-header mb-2"><strong>ISAs in Deal Sheet Phase</strong></div>
            <div class="cb-report overflow-auto mb-3 cb-dealsheet">
                <script type="text/javascript" src="<?= $cb_datapage_prefix ?>d4a52e2b06b842b68621/emb"></script>
            </div>

            <!-- Step 3 -->
            <div class="table-header mb-2"><strong>ISAs in Contract Phase</strong></div>
            <div class="cb-report overflow-auto mb-3 cb-contractphase">
                <script type="text/javascript" src="<?= $cb_datapage_prefix ?>2cf1ddd43f0f481fb7ba/emb"></script>
            </div>

            <!-- Step 4 -->
            <div class="table-header mb-2"><strong>Execution Work Queue</strong></div>
            <div class="cb-report overflow-auto mb-3 cb-execution-work">
                <script type="text/javascript" src="<?= $cb_datapage_prefix ?>9ffa2ad8958f48618244/emb"></script>
            </div>

            <div class="cb-report mb-3">
                <div class="table-header mb-2"><strong>Breach/Deal Termination Work Queue</strong></div>
                <div class="overflow-auto" id="cb-team-breach"></div>
            </div>

        </div>
    </main>

    <script>
        deployDP('cb-team-breach', '<?= $cb_datapage_prefix ?>3f9f6daf53f7485298ba/emb');
    </script>
    <script src="../js/dashboard-relate-accounts.js?v=<?php echo date('YmdHis'); ?>"></script>
    <script src="../js/dashboard-metrics.js?v=<?php echo date('YmdHis'); ?>"></script>
    <script src="../js/scratchpad-filter.js?v=<?php echo date('YmdHis'); ?>"></script>
    <script src="../js/dashboard-deal-work-queue.js?v=<?php echo date('YmdHis'); ?>"></script>
    <link rel="stylesheet" href="../css/dashboard-metrics.css">

    <script>
        // Dashboard metrics
        var bucketApp_Keys = [
            "25d550006f42e1516e404872a6e0",
            "25d55000d10e87ac23934e6ea6a7",
            "25d55000fe86dc8d828d4789a6cf",
            "25d55000d4a52e2b06b842b68621",
            "25d550002cf1ddd43f0f481fb7ba",
            "25d550009ffa2ad8958f48618244",
            "25d550003f9f6daf53f7485298ba",
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

        #scratch-pad-container tr[data-cb-name="data"]>*:nth-child(2) {
            max-width: 150px;
            min-width: 150px;
            white-space: initial;
            word-wrap: break-word;
            text-align: left;
        }

        .cb-myapproval tr[data-cb-name="data"]>*:nth-child(4),
        #cb-approved tr[data-cb-name="data"]>*:nth-child(4),
        #cb-upcoming tr[data-cb-name="data"]>*:nth-child(5),
        .cb-dealsheet tr[data-cb-name="data"]>*:nth-child(2),
        .cb-contractphase tr[data-cb-name="data"]>*:nth-child(2) {
            max-width: 150px;
            min-width: 150px;
            white-space: initial;
            word-wrap: break-word;
            text-align: left;
        }

        #scratch-pad-container input[type="text"] {
            padding: 3px;
        }

        #searchButton,
        #reset-filter {
            font-size: 12px;
            padding: 4px;
        }
    </style>
</body>

</html>