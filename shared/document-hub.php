<!doctype html>
<html lang="en">

<head>
    <?php include_once "../partials/head.php"; ?>
    <title>E-ISA</title>
    <link rel="stylesheet" href="../css/document-hub.css">
</head>

<body class="hide">

    <div class="bg-div pl-5 pr-4">
        <!--ISA ID and ISA Name-->
        <div class="row details-dp">
            <div class="spinner-border text-primary ml-3" role="status"></div>
            <script type="text/javascript" src="<?= $cb_datapage_prefix ?>66bd2be3018a49e495f5/emb"></script>
        </div>

        <div class="row">
            <!--Buttons-->
            <div class="col-md-2 buttons-dp mt-3">
                <div class="dh-btns">
                    <img class="dh-btn" src="../img/DH-1-SCAT-btn.png" alt="NO IMG" onclick="openModal_DH('SCAT', 'SCAT-0', 'SCAT-1')">
                </div>

                <div class="dh-btns">
                    <img class="dh-btn" src="../img/DH-2-SCAO-btn.png" alt="NO IMG" onclick="openModal_DH('SCAO', 'SCAO-0', 'SCAO-1')">
                </div>

                <div class="dh-btns">
                    <img class="dh-btn" src="../img/DH-3-TFO-btn.png" alt="NO IMG" onclick="openModal_DH('TFO', 'TFO-0', 'TFO-1')">
                </div>
            </div>

            <!--Attachments-->
            <div class="col-md-10 attachments-dp mt-3">
                <h2 class="text-white">E-ISA <?= $_GET['ISA_ID']; ?> Attachments</h2>
                <!--Current Attachments-->
                <script type="text/javascript" src="<?= $cb_datapage_prefix ?>9bc1d07cd64e4db5af1f/emb"></script>

                <h2 class="text-white">Documents that you may need to attach to this deal from other places</h2>
                <!--Previous Attachments-->
                <div id='docu-hub-prev-attachments'></div>

                <!--ISA CMF Documentation for Related Accounts-->
                <script type="text/javascript" src="<?= $cb_datapage_prefix ?>a7d6f54fa65e4779b945/emb"></script>
            </div>
        </div>
    </div>
    <!-- </main> -->

    <script>
    <?php echo file_get_contents('../js/document-hub.js'); ?>
</script>
</body>

</html>