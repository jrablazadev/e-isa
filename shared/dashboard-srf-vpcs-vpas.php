<!--vp accounting operations-->

<div style="display: none;" id="vpao-dashboard-view">
    <div class="d-none">
        <script type="text/javascript" src="<?= $cb_datapage_prefix ?>29b21d513ac54d909e29/emb"></script>
    </div>
</div>

<main role="main" class="container">
    <ul class="nav nav-tabs" id="cb-tab" role="tablist"></ul>
    <div class="tab-content" id="cb-tab-content"></div>
</main>


<div id="srf-vpao-css" style="display: none;">
    <link rel="stylesheet" href="../css/users-group-dashboard-tabs.css">
</div>


<!--./vp accounting operations-->





<div style="display: none;" id="other-srf-dashboard-view">
    <!-- Below are copy of corp-view-2-dashboard with specific changes for SRF -->
    <main role="main" class="container">
        <span id="vps-scratchpad" style="display: none;">
            <div class="headers bg-dark text-uppercase">STEP 1 WORK LIST (Scratch Pad, Calculator)</div>
            <div id="scratch-pad-container" class="cb-report mb-3">
                <script type="text/javascript" src="<?= $cb_datapage_prefix ?>cffb9a2c6b3d465fac45/emb"></script>
            </div>
            <div class="headers bg-dark mb-2">STEP 2 APPROVALS</div>

        </span>
        <div class="table-header mb-2"><strong>Approved ISAs List</strong></div>
        <div class="cb-report mb-3 cb-approved">
            <script type="text/javascript" src="<?= $cb_datapage_prefix ?>bfa722118b084563a76b/emb"></script>
        </div>

        <div class="table-header mb-2"><strong>ISAs in Deal Sheet Phase</strong></div>
        <div class="cb-report mb-3 cb-dealsheet">
            <script type="text/javascript" src="<?= $cb_datapage_prefix ?>db9b45f96d60499ab60f/emb"></script>
        </div>

        <div class="table-header mb-2"><strong>ISAs in Contract Phase</strong></div>
        <div class="cb-report mb-3 cb-contractphase">
            <script type="text/javascript" src="<?= $cb_datapage_prefix ?>275f9d183007482e952b/emb"></script>
        </div>

        <div class="table-header mb-2"><strong>Execution Work Queue</strong></div>
        <div class="cb-report mb-3 cb-execution-work">
            <!-- Replaced by Duplicate of Deploy ISA Finance Execution Work Queue here... -->
            <script type="text/javascript" src="<?= $cb_datapage_prefix ?>aa384620ff254b92b1cf/emb"></script>

        </div>

        <div class="table-header mb-2"><strong>Breach/Deal Termination Work Queue</strong></div>
        <div class="cb-report mb-3 cb-bwq">
            <!-- Replace by Duplicated of ISA Finance Breach/Deal Termination Work Queue here... -->
            <script type="text/javascript" src="<?= $cb_datapage_prefix ?>baa1a7d4eeb04876b12a/emb"></script>
        </div>
    </main>
</div>





<script src="../js/dashboard-relate-accounts.js?v=<?php echo date('YmdHis'); ?>"></script>

<script src="../js/dashboard-metrics.js?v=<?php echo date('YmdHis') ?>"></script>
<script src="../js/scratchpad-filter.js?v=<?php echo date('YmdHis'); ?>"></script>
<script src="../js/dashboard-deal-work-queue.js?v=<?php echo date('YmdHis'); ?>"></script>

<link rel="stylesheet" href="../css/dashboard-metrics.css">

<div id='srf-others-css' style="display: none;">
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
</div>



<script>
    // Dashboard metrics
    var bucketApp_Keys = [
        'bfa722118b084563a76b',
        'db9b45f96d60499ab60f',
        '275f9d183007482e952b',
        // '4623dcf06eeb4a09a9cd',
        // 'ef0488b6fd5a42668381',
        'aa384620ff254b92b1cf',
        'baa1a7d4eeb04876b12a'
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

<!--deploy DPs for each tab-->
<script src="../js/users-group-dashboard-tabs.js"></script>
<!--./-->

<!--display srf view according to job title-->
<script>
    document.addEventListener("DataPageReady", function(event) {
        if (event.detail.appKey.includes('29b21d513ac54d909e29')) {
            console.log(srfJobTitle)
            if (srfJobTitle == 'VP Accounting Operations') {
                document.getElementById('vpao-dashboard-view').style.cssText = "display: block;"
                document.getElementById('dashboard-metrics').style.cssText = "display: none !important;"
                document.getElementById('srf-vpao-css').style.cssText = "display: block;"

            }
            if (srfJobTitle != 'VP Accounting Operations' || srfJobTitle == "") {
                document.getElementById('other-srf-dashboard-view').style.cssText = "display: block;"
                document.getElementById('srf-others-css').style.cssText = "display: block;"
                document.getElementById('cb-tab').style.cssText = "display: none;"
                document.getElementById('cb-tab-content').style.cssText = "display: none;"
                document.querySelector('main.container').style.cssText = "margin-bottom: 0;"
            }
        }
    })
</script>
<!--./display srf view according to job title-->

<!--display scratchpad if vpcs/vpas-->
<script>
    if (window.location.href.indexOf("vpcs/") > -1 || window.location.href.indexOf("vpas/") > -1) {
        document.getElementById('vps-scratchpad').style.cssText = "display: block;"
    }
</script>
<!--./display scratchpad if vpcs/vpas-->

<script src="../js/dept-execution-status.js"></script>
