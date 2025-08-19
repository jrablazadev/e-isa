<?php


?>
<!doctype html>
<html lang="en">

<head>
    <?php include_once "../partials/head.php"; ?>
    <title>E-ISA</title>

    <style>
        .jconfirm {
            z-index: 1 !important;
        }

        .jconfirm-content {
            overflow-x: hidden !important;
        }

        button[data-id*="Customer_RID"] {
            padding: 0;
        }

        #cb-manufacturer-color-subscription-hub table[data-cb-name="cbTable"] select,
        #cb-manufacturer-color-subscription-hub table[data-cb-name="cbTable"] input:not([type="search"]) {
            width: 100px !important;
        }

        div[id*="GridCtnr_"] {
            overflow: auto !important;
        }

        .fl-scrolls {
            width: 90% !important;
        }

        #cb-manufacturer-color-subscription-hub .dropdown-menu .dropdown-item {
            display: inline-block;
            vertical-align: top;
        }

        #cb-manufacturer-color-subscription-hub .dropdown-menu {
            /* width: 500px; */
        }

        #cb-manufacturer-color-subscription-hub .fiter-option {
            height: 19px;
        }

        #cb-manufacturer-color-subscription-hub .dropdown-toggle {
            display: flex;
            font-size: 14px;
            height: 27px;
        }

        #cb-manufacturer-color-subscription-hub .bootstrap-select {
            padding: 0;
        }

        #cb-manufacturer-color-subscription-hub .filter-option {
            height: auto;
        }

        .bootstrap-select .dropdown-menu {
            top: 100% !important;
            left: 0 !important;
            transform: none !important;
        }
    </style>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/5.0.8/jquery.inputmask.min.js"></script>
</head>

<body class="hide">
    <?php include_once "../partials/navbar-" . $parentDirectoryName . ".php"; ?>
    <div class="d-none">
        <script type="text/javascript" src="<?= $cb_datapage_prefix ?>4e131507b75047b990ed/emb"></script>
    </div>
    <main role="main" class="mb-5 ml-5 mr-5">
        <div class="cb-header font-weight-bold bg-dark text-white mb-3"><b>Log1c Support Hub</b></div>
        <div class="cb-report" id="cb-manufacturer-color-subscription-hub">
            <script type="text/javascript" src="<?= $cb_datapage_prefix ?>2e75a1e2338d4a1cbf91/emb"></script>
        </div>
        <br>
        </div>
    </main>

    <script src="../lib/jquery-freeze-table-master/dist/js/freeze-table.min.js"></script>
    <link rel="stylesheet" href="../lib/floating-scroll-master/dist/jquery.floatingscroll.css" media="screen" title="no title" charset="utf-8">
    <script src="../lib/floating-scroll-master/dist/jquery.floatingscroll.min.js"></script>
    <script src="../js/manufacturer-color-sub.js?v=<?php echo date('YmdHis'); ?>"></script>

</body>

</html>