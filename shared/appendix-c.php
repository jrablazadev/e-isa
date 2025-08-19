<?php
$isa_id = !empty($_GET['ID']) ? $_GET['ID'] : '';
$isa_name = !empty($_GET['Name']) ? $_GET['Name'] : '';
?>

<main class="container">
    <div class="h1">Appendix C</div>
    <div class="h4">E-ISA #: <?php echo $isa_id; ?></div>
    <div class="h4">E-ISA Name: <?php echo $isa_name; ?></div>

    <div class="cb-appendix-c-report">
        <hr>

        <script type="text/javascript" src="<?= $cb_datapage_prefix ?>18518b83e5b14a4fa33a/emb"></script>
    </div>

    <div class="cb-appendix-c-report">
        <hr>

        <script type="text/javascript" src="<?= $cb_datapage_prefix ?>9b672511d406428d9bd3/emb"></script>
    </div>

    <div class="cb-appendix-c-report">
        <hr>

        <script type="text/javascript" src="<?= $cb_datapage_prefix ?>671a00c23da9440f8d06/emb"></script>
    </div>

    <div class="cb-appendix-c-report">
        <hr>

        <script type="text/javascript" src="<?= $cb_datapage_prefix ?>44ce2243b3ff46d8b93f/emb"></script>
    </div>

    <div class="cb-appendix-c-report">
        <hr>

        <script type="text/javascript" src="<?= $cb_datapage_prefix ?>f643d5176ea34becbe98/emb"></script>
    </div>

    <div class="cb-appendix-c-report">
        <hr>

        <script type="text/javascript" src="<?= $cb_datapage_prefix ?>daa3f8d166c34a778418/emb"></script>
    </div>

    <div class="cb-appendix-c-report">
        <hr>

        <script type="text/javascript" src="<?= $cb_datapage_prefix ?>09681146303e492aac31/emb"></script>
    </div>


    <div class="cb-appendix-c-report">
        <hr>

        <script type="text/javascript" src="<?= $cb_datapage_prefix ?>eea563191f75400aad2b/emb"></script>
    </div>

    <div class="cb-appendix-c-report">
        <hr>

        <script type="text/javascript" src="<?= $cb_datapage_prefix ?>9e5c20136c3442478c97/emb"></script>
    </div>

    <div class="cb-appendix-c-report">
        <hr>

        <script type="text/javascript" src="<?= $cb_datapage_prefix ?>7e33fd9818a0494bbc0d/emb"></script>
    </div>
</main>

<style>
    @media print {
        .navbar {
            display: none !important;
        }
    }
</style>

<script>
    document.addEventListener('DataPageReady', function(event) {

        $(`.cbResultSetRecordMessage`).each(function() {

            var msg = $(this).html();

            if (msg == 'No records found') {
                $(this).closest('.cb-appendix-c-report').addClass('d-none');
            }
        });

        if ($('.cb-appendix-c-report.d-none').length == 10) {

            $('.cb-appendix-c-msg').remove();

            $('.container').append('<div class="text-center cb-appendix-c-msg"><hr> No records found.</div>')
        }
    });

    $('.navbar').css({
        'display': 'inline-table'
    });
</script>