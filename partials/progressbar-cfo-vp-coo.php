<?php $isa_id = isset($_GET['ISA_ID']) ? $_GET['ISA_ID'] : null; ?>

<div id="progressbarcontainer" class="row">
        <ul class="progressbar">
                <li id="progressbar-template-new">
                        <a class="pagelink" href="javascript:void(0)">Clear </a>
                </li>
                <li id="progressbar-template-update">
                        <a class="pagelink" href="template-update.php?ISA_ID=<?php echo $isa_id; ?>&Section_ID=1">Template </a>
                </li>
                <li id="progressbar-customer-sales-no-growth">
                        <a class="pagelink" href="customer-sales-no-growth.php?ISA_ID=<?php echo $isa_id; ?>&Section_ID=2">Cust. Sales w/ no Growth </a>
                </li>
                <li id="progressbar-customer-sales-growth">
                        <a class="pagelink" href="customer-sales-growth.php?ISA_ID=<?php echo $isa_id; ?>&Section_ID=3">Cust. Sales w/ Growth Factored </a>
                </li>
                <li id="progressbar-invoice-discounts">
                        <a class="pagelink" href="invoice-discounts.php?ISA_ID=<?php echo $isa_id; ?>&Section_ID=4"> Invoice Discounts </a>
                </li>
                <li id="progressbar-statement-rebates">
                        <a class="pagelink" href="statement-rebates.php?ISA_ID=<?php echo $isa_id; ?>&Section_ID=5"> Statement Rebates </a>
                </li>
                <li id="progressbar-eq-rebates">
                        <a class="pagelink" href="eq-rebates.php?ISA_ID=<?php echo $isa_id; ?>&Section_ID=6"> EQ Rebates </a>
                </li>
                <li id="progressbar-investments-entry">
                        <a class="pagelink" href="manufacturer-rebates-investments.php?ISA_ID=<?php echo $isa_id; ?>&Section_ID=7"> Manufacture Rebates / Investments </a>
                </li>
                <li id="progressbar-investments-compute">
                        <a class="pagelink" href="investments.php?ISA_ID=<?php echo $isa_id; ?>&Section_ID=8"> Investments </a>
                </li>
                <li id="progressbar-estimated-returns-autocompute">
                        <a class="pagelink" href="estimated-returns.php?ISA_ID=<?php echo $isa_id; ?>&Section_ID=9"> Estimated Returns </a>
                </li>
                <li id="progressbar-attachments">
                        <a class="pagelink" href="attachments.php?ISA_ID=<?php echo $isa_id; ?>&Section_ID=10"> Attachments </a>
                </li>
                <li id="progressbar-allied-set-up">
                        <a class="pagelink" href="allied-set-up.php?ISA_ID=<?php echo $isa_id; ?>&Section_ID=11"> Allied Set Up </a>
                </li>
        </ul>
</div>

<script>
        function update_progress_bar_cfo_vp_coo(CurrentSectionNo)
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