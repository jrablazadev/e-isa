<?php include_once "../../partials/config.php"; ?>

<style>
    .expandheader {
        overflow: auto !important;
    }

    .cb-header {
        width: 100%;
        text-align: center;
        padding: 5px;
        background: #027FAA;
        color: #000;
        font-weight: bold;
        padding: 10px;
        font-size: 12px;
    }

    #cb-deal-directory {
        /* overflow-x: scroll !important;  */
        min-height: 600px !important
    }

    .cb-search {
        font-size: 12px;
    }

    .cb-search #caspioform>div {
        margin: auto;
    }

    .cb-search *[class^="cbSubmitButtonContainer"] {
        display: none;
    }

    .dropdown-menu {
        list-style-type: none !important;
    }

    .cbFormSelect {
        height: 30px !important;
        width: 202px !important;
    }

    button[data-id="cbParamVirtual10"] {
        height: 20px !important;
        color: #000 !important;
        font-weight: normal !important;
        top: -3px;
        padding: 0px 3px;
        background-color: white !important;
        border: 0px white !important;
        color: #000 !important;
        font-size: 14.5px !important;
    }
</style>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<script src="../../lib/jquery-3.3.1.min.js"></script>
<script src="../../lib/popper.min.js"></script>

<link rel="stylesheet" href="../../lib/bootstrap-4.4.1/bootstrap-4.4.1.min.css">
<script src="../../lib//bootstrap-4.4.1/bootstrap-4.4.1.min.js"></script>

<script src="../../lib/jquery-bar-rating-master/dist/jquery.barrating.min.js"></script>
<script src="../../js/home.js?v=<?php echo date('YmdHis'); ?>"></script>


<link href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js"></script>

<script>
    <?php echo file_get_contents('../../js/common.js'); ?>
</script>

<script>
    <?php echo file_get_contents('../../js/cog.js'); ?>
</script>

<style>
    <?php echo file_get_contents('../../css/common.css'); ?>
</style>

<link rel="stylesheet" href="../../css/jquery.datetimepicker.min.css" media="screen" title="no title" charset="utf-8">
<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">

<link rel="stylesheet" type="text/css" href="../../css/progressbar.css?v=<?php echo date('YmdHis'); ?>" title="no title" charset="utf-8">
<link rel="stylesheet" href="../../lib/jquery-confirm-v3.3.4/css/jquery-confirm.css">


<script src="../../lib/jquery-confirm-v3.3.4/js/jquery-confirm.js"></script>

<script src="../../js/fontawesome.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="../../lib/sweetalert2/sweetalert2.min.css">
<script src="../../lib/sweetalert2/sweetalert2.all.min.js"></script>

<!--calendar-->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>


<script>
    // TEMPORARY
    // APPROVAL LOG COG WHEEL 
    var findElements = function(tag, text) {
        var elements = document.getElementsByTagName(tag);
        var found = [];
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].innerHTML === text) {
                elements[i].setAttribute("href", "./approval-log.php?page=Approval Log")
                found.push(elements[i]);
            }
        }
        return found;
    }
    // 

    document.addEventListener("DataPageReady", function() {
        // findElements('a', 'Approval Log')

        var cbApprovalLog = document.querySelector("div[class$='cb-approval-log']");

        if (cbApprovalLog) {
            document.querySelector("div[class$='cb-approval-log']").classList.remove("cb-report");
            document.querySelector("div[class$='cb-approval-log']").previousElementSibling.classList.add("bg-dark", "text-white");
            document.querySelector("div[class$='cb-approval-log']").previousElementSibling.style.textTransform = "uppercase";
            document.querySelector("div[class$='cb-approval-log']").previousElementSibling.style.textDecoration = "none";
        }
    });
</script>