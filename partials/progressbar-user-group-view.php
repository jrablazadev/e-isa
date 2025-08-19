<?php $isa_id = isset($_GET['ISA_ID']) ? $_GET['ISA_ID'] : null; ?>

<div id="progressbarcontainer" class="row">
        <ul class="progressbar">
                <li id="progressbar-template-new">
                        <a class="pagelink" href="#">Clear </a>
                </li>
                <li id="progressbar-template-update">
                        <a class="pagelink" href="#">Template </a>
                </li>
                <li id="progressbar-customer-sales-no-growth">
                        <a class="pagelink" href="#">Cust. Sales w/ no Growth </a>
                </li>
                <li id="progressbar-customer-sales-growth">
                        <a class="pagelink" href="#">Cust. Sales w/ Growth Factored </a>
                </li>
                <li id="progressbar-invoice-discounts">
                        <a class="pagelink" href="#"> Invoice Discounts </a>
                </li>
                <li id="progressbar-statement-rebates">
                        <a class="pagelink" href="#"> Statement Rebates </a>
                </li>
                <li id="progressbar-eq-rebates">
                        <a class="pagelink" href="#"> EQ Rebates </a>
                </li>
                <li id="progressbar-investments-entry">
                        <a class="pagelink" href="#"> Manufacture Rebates / Investments </a>
                </li>
                <li id="progressbar-investments-compute">
                        <a class="pagelink" href="#"> Investments </a>
                </li>
                <li id="progressbar-estimated-returns-autocompute">
                        <a class="pagelink" href="#" > Estimated Returns </a>
                </li>
                <li id="progressbar-attachments">
                        <a class="pagelink" href="#"> Attachments </a>
                </li>
                <li id="progressbar-allied-set-up">
                        <a class="pagelink" href="#"> Allied Set Up </a>
                </li>
        </ul>
</div>

<style>
        #progressbarcontainer .pagelink
        {
                pointer-events: none;
        }
</style>

<script>
        function update_progressbar(CurrentSectionNo)
        {
                var LastSectionNo = 11;
                CurrentSectionNo = isNaN(CurrentSectionNo) ? 0 : CurrentSectionNo;

                if(CurrentSectionNo == 0)
                {
                        $('.progressbar a').addClass('disabled');
                        $('.progressbar a').attr('href', 'javascript:void(0)');
                        $('#progressbar-template-new').addClass('active');
                        $('#progressbar-template-update').addClass('active');
                        $('#progressbar-customer-sales-no-growth').addClass('disabled');
                }
                else
                {
                        $('.progressbar li').each(function(i){

                                if((i + 1) <= CurrentSectionNo + 1)
                                {
                                        $(this).addClass('active');
                                }
                                else
                                {
                                        if((i + 1) > LastSectionNo + 1)
                                        {

                                                $(this).find('a').attr('href', 'javascript:void(0)');
                                                $(this).find('a').addClass('disabled');
                                        }

                                        $(this).addClass('disabled');

                                }
                        });
                }
        }
</script>