<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <?php include_once "../../partials/head-new-eisa.php"; ?>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css" rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js"></script>

    <style>
        .cb-product-line-report form tr[data-cb-name="header"] th:nth-child(1),
        .cb-product-line-report form tr[data-cb-name="data"] td:nth-child(1) {
            display: none;
        }
    </style>
</head>

<!-- class="hide" -->

<body>


    <main role="main" class="container mb-5 mt-5">

        <div class="paint-product mb-5">
            <h5>Allied Product Line Details</h5>
            <!-- show totals here -->

            <div class="cb-product-line-report">
                <script type="text/javascript" src="<?= $cb_datapage_prefix ?>ed0f7baa39d040c595aa/emb"></script>
            </div>
        </div>
    </main>

    <script>
        document.addEventListener("DataPageReady", dpLoad);

        function dpLoad(e) {
            if (e.detail.appKey.includes("ed0f7baa39d040c595aa")) {
                var url = getUrlVars();
                var interval = setTimeout(() => {
                    console.log('test')
                    $(`select[name="Value2_1"] option[value="${url['AIDT']}"]`).prop("selected", true);
                    $('input[name="searchID"]').click();
                    
                    document.removeEventListener("DataPageReady", dpLoad)
                }, 500)
            }
        }
    </script>
</body>

</html>