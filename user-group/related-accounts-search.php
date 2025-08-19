<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Support Fee Summary</title>

    <?php include_once '../partials/config.php' ?>
    <?php include_once "../partials/head.php"; ?>
    <style>
		<?php echo file_get_contents('../css/deal-directory.css'); ?>
	</style>

</head>

<body class="hide">

    <div class="cb-container"></div>

    <div class="d-none cb-alert alert alert-info mr-5 ml-5 text-center"></div>

    <div id="cb-deal-directory" class="cb-related-accounts-20220325">
        <script type="text/javascript" src="<?= $cb_datapage_prefix ?>de68c8357bc94d299955/emb"></script>
    </div>

    <link rel="stylesheet" href="../css/support-fee-summary.css">
    <script src="../js/dashboard-relate-accounts.js"></script>
    <script src="../js/deal-directory.js"></script>
    <script src="../js/dynamic-deal-directory-2.js"></script>

    <script>
        document.addEventListener('DataPageReady', function(event) {
            if (event.detail.appKey.includes('de68c8357bc94d299955')) {
                window.parent.$('#jc-iframe').css({
                    'height': $(window.parent).height()
                });
            }
        })
        
    </script>
</body>

</html>