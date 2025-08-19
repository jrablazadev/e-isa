<?php
        $isa_id = isset($_GET['ISA_ID']) ? $_GET['ISA_ID'] : null;
        $section_id = isset($_GET['Section_ID']) ? $_GET['Section_ID'] : null;
?>

<div id="progressbarcontainer" class="row">
        <div class="col-md-1 pt-3 pl-5" id="app-training-btn-c">
                <a href="javascript:void(0)" class="btn btn-sm btn-primary text-white" id="app-training-btn">App Training</a>
        </div>

        <ul class="progressbar col-md-10">
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
                        <a class="pagelink" href="invoice-discounts.php?ISA_ID=<?php echo $isa_id; ?>&Section_ID=4"> Invoice <br/> Discounts </a>
                </li>
                <li id="progressbar-statement-rebates">
                        <a class="pagelink" href="statement-rebates.php?ISA_ID=<?php echo $isa_id; ?>&Section_ID=5"> Statement <br/> Rebates </a>
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
                <li id="progressbar-d2p" class="cb-d2p">
                        <a class="pagelink" href="direction-to-pay-3.php?ISA_ID=<?php echo $isa_id; ?>&Section_ID=12"> Direction-To-Pay </a>
                </li>
        </ul>
</div>

