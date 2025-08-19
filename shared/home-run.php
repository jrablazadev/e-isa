<main role="main" class="container">
        <div id="progressbarcontainer" class="row">
                <ul class="progressbar">
                        <li class="cb-progress disabled" data-section-no="0">
                                <a class="pagelink pointer-event-none" href="#">Clear </a>
                        </li>
                        <li class="cb-progress disabled" data-section-no="1">
                                <a class="pagelink pointer-event-none" href="#">Template </a>
                        </li>
                        <li class="cb-progress disabled" data-section-no="2">
                                <a class="pagelink pointer-event-none" href="#">Cust. Sales w/ no Growth </a>
                        </li>
                        <li class="cb-progress disabled" data-section-no="3">
                                <a class="pagelink pointer-event-none" href="#">Cust. Sales w/ Growth Factored </a>
                        </li>
                        <li class="cb-progress disabled" data-section-no="4">
                                <a class="pagelink pointer-event-none" href="#"> Invoice <br/> Discounts </a>
                        </li>
                        <li class="cb-progress disabled" data-section-no="5">
                                <a class="pagelink pointer-event-none" href="#"> Statement <br/> Rebates </a>
                        </li>
                        <li class="cb-progress disabled" data-section-no="6">
                                <a class="pagelink pointer-event-none" href="#"> EQ Rebates </a>
                        </li>
                        <li class="cb-progress disabled" data-section-no="7">
                                <a class="pagelink pointer-event-none" href="#"> Manufacture Rebates / Investments </a>
                        </li>
                        <li class="cb-progress disabled" data-section-no="8">
                                <a class="pagelink pointer-event-none" href="#"> Investments </a>
                        </li>
                        <li class="cb-progress disabled" data-section-no="9">
                                <a class="pagelink pointer-event-none" href="#"> Estimated Returns </a>
                        </li>
                        <li class="cb-progress disabled" data-section-no="10">
                                <a class="pagelink pointer-event-none" href="#"> Attachments </a>
                        </li>
                        <li class="cb-progress disabled" data-section-no="11">
                                <a class="pagelink pointer-event-none" href="#"> Allied Set Up </a>
                        </li>
                </ul>
        </div>
        <div class="text-center mt-2">
                <h3>Calculating..</h3>
                <div class="spinner-border text-success" role="status">
                        <span class="sr-only">Loading...</span>
                </div>
        </div>
</main>

<span class="d-none cb-timer"></span>

<div class="d-none cb-container" data-section-no="2"></div>
<div class="d-none cb-container" data-section-no="3"></div>
<div class="d-none cb-container" data-section-no="4"></div>
<div class="d-none cb-container" data-section-no="5"></div>
<div class="d-none cb-container" data-section-no="6"></div>

<div class="d-none cb-container" data-section-no="8"></div>
<div class="d-none cb-container" data-section-no="9"></div>

<script>
        var urlVars = getUrlVars();
        var isaId = urlVars.ISA_ID || '';
        var sectionNo = urlVars.Section_ID || '';

        if(sectionNo == 7)
        {
                $('.cb-container[data-section-no="' + 8 + '"]').append('<iframe src="../shared/home-run-investments.php?ISA_ID=' + isaId + '"></iframe>');
                updateProgressbar(7);
        }
        else
        {
                $('.cb-container[data-section-no="' + sectionNo + '"]').append('<iframe src="../shared/home-run-iframe.php?ISA_ID=' + isaId + '&Section_ID=' + sectionNo + '"></iframe>');
        }

        var seconds = 0;

        var cbTimer = setInterval(function(){
                $('.cb-timer').html(seconds);
                seconds++;
        }, 1000);

        function updateProgressbar(sectionNo)
        {
                for(i = sectionNo; i >= 0; i-- )
                {
                        // console.log(i);

                        $('.cb-progress[data-section-no="' + i + '"]').removeClass('disabled');
                        $('.cb-progress[data-section-no="' + i + '"]').addClass('active');
                }

        }

</script>