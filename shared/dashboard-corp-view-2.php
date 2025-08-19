<main role="main" class="container">
    <div class="table-header mb-2"><strong>Approved ISAs List</strong></div>
    <div class="cb-report mb-3 cb-approved">
        <script type="text/javascript" src="<?= $cb_datapage_prefix ?>bfa722118b084563a76b/emb"></script>
    </div>

    <div class="table-header mb-2"><strong>ISAs in Deal Sheet Phase</strong></div>
    <div class="cb-report mb-3 cb-dealsheet">
        <div class="cb-test">
            <script type="text/javascript" src="<?= $cb_datapage_prefix ?>db9b45f96d60499ab60f/emb"></script>
        </div>
    </div>

    <div class="table-header mb-2"><strong>ISAs in Contract Phase</strong></div>
    <div class="cb-report mb-3 cb-contractphase">
        <script type="text/javascript" src="<?= $cb_datapage_prefix ?>275f9d183007482e952b/emb"></script>
    </div>

    <div class="table-header mb-2"><strong>Execution Work Queue</strong></div>
    <div class="cb-report mb-3 cb-execution-work">
        <script type="text/javascript" src="<?= $cb_datapage_prefix ?>4623dcf06eeb4a09a9cd/emb"></script>
    </div>

    <div class="table-header mb-2"><strong>Breach/Deal Termination Work Queue</strong></div>
    <div class="cb-report mb-3 cb-bwq">
        <div>
            <script type="text/javascript" src="<?= $cb_datapage_prefix ?>ef0488b6fd5a42668381/emb"></script>
        </div>
    </div>
</main>

<script src="../js/dashboard-relate-accounts.js?v=<?php echo date('YmdHis'); ?>"></script>
<script src="../js/dashboard-deal-work-queue.js?v=<?php echo date('YmdHis'); ?>"></script>

<script src="../js/dashboard-metrics.js"></script>
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
        'bfa722118b084563a76b',
        'db9b45f96d60499ab60f',
        '275f9d183007482e952b',
        '4623dcf06eeb4a09a9cd',
        'ef0488b6fd5a42668381',
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