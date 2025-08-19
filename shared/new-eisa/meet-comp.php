<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <?php include_once "../../partials/head-new-eisa.php"; ?>
    <link rel="stylesheet" href="../../css/meet-comp.css">
</head>

<!-- class="hide" -->

<body>
    <main role="main" class="container-fluid mt-5 mb-5">

        <div class="paint-product mb-5">
            <h5>Industrial Paint Pricing Setup</h5>

            <div class="setup-header mb-2">
                <div class="setup-totals">
                    <script type="text/javascript" src="<?= $cb_datapage_prefix ?>7b12f8311317448b831c/emb"></script>
                </div>
                <ul class="paint-right-header alert alert-secondary">
                    <li>For Hemple and Jones Blair</li>
                    <li>List is 50% up from P7</li>
                    <li>PL2 is 40% up from P7</li>
                    <li>PL3 is 33% up from P7</li>
                </ul>
            </div>

            <button type="button" class="btn btn-primary mb-2" onclick="modalButton('Add Paint Product Line', 'e61dfd65f3ca4e0e9b56', '' , 27)"><i class="fas fa-plus"></i> Paint Product Line</button>
            <!-- show report here -->
            <div class="cb-product-report report">
                <script type="text/javascript" src="<?= $cb_datapage_prefix ?>2bcab6edebec445094ec/emb"></script>
            </div>

            <p class="alert alert-warning">NOTE: No two product lines for the same start and end date. <br />
                For example, Amercoat pricing starting 1/1/24 to ending 12/31/24 couldn’t have another record for Amercoat with a start date inside of those two dates.
            </p>
        </div>


        <div class="paint-part-number mb-5">
            <button type="button" class="btn btn-primary mb-2" onclick="modalButton('Add Paint Part Number', 'f43c7f0c59974384ad91')"><i class="fas fa-plus"></i> Paint Part Number</button>
            <!-- show report here -->
            <div class="cb-part-report report">
                <script type="text/javascript" src="<?= $cb_datapage_prefix ?>64fe26ada91146439a40/emb"></script>
            </div>

            <p class="alert alert-warning">NOTE: No two Part Numbers for the same start and end date. <br />
                For example, CRE-321/GL pricing starting 1/1/24 to ending 12/31/24 couldn’t have another record for Amercoat with a start date inside of those two dates. 
            </p>

        </div>


        <div class="allied-product">
            <h5>Industrial Allied Pricing Setup</h5>

            <div class="setup-header mb-2">
                <div class="setup-totals">
                    <script type="text/javascript" src="<?= $cb_datapage_prefix ?>0e291ea5fbd049d5b096/emb"></script>
                </div>
            </div>

            <button type="button" class="btn btn-primary mb-2" onclick="modalButton('Add Allied Product Line', 'a795171649ee4887b11f', '' , 27)"><i class="fas fa-plus"></i> Allied Product Line</button>
                 
            <!-- show report here -->
            <div class="cb-allied-report report">
                <script type="text/javascript" src="<?= $cb_datapage_prefix ?>59c23124ba69423c8c3d/emb"></script>
            </div>

            <p class="alert alert-warning">NOTE: No two product lines for the same start and end date. <br />
                For example, Amercoat pricing starting 1/1/24 to ending 12/31/24 couldn’t have another record for Amercoat with a start date inside of those two dates. Also, available Product lines should be based on a view for only Allied product lines (the inverse of the paint criteria).
            </p>
        </div>

        <div class="allied-part-number">
            <button type="button" class="btn btn-primary mb-2" onclick="modalButton('Add Allied Part Number', '256463b78af14161a9c5')"><i class="fas fa-plus"></i> Allied Part Number</button>
            <!-- show report here -->
            <div class="cb-part-report report">
                <script type="text/javascript" src="<?= $cb_datapage_prefix ?>8cea4a833e7d48609f91/emb"></script>
            </div>

            <p class="alert alert-warning">NOTE: No two Part Numbers for the same start and end date. <br />
                For example, CRE-321/GL pricing starting 1/1/24 to ending 12/31/24 couldn’t have another record for Amercoat with a start date inside of those two dates.
            </p>
        </div>

    </main>

    <script src="../../js/utilities-meet-comp.js?v=<?php echo date('YmdHis'); ?>"></script>
    <script src="../../js/product-line.js?v=<?php echo date('YmdHis'); ?>"></script>
    <script src="../../js/paint-part-number.js?v=<?php echo date('YmdHis'); ?>"></script>

</body>

</html>