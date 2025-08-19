<?php $isa_id = isset($_GET['ISA_ID']) ? $_GET['ISA_ID'] : null; ?>

<div id="progressbarcontainer" class="row">
        <ul class="progressbar">
                <li id="progressbar-template-new">
                        <a class="pagelink" href="template-new.php?&Section_ID=1">Clear </a>
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
                        <a class="pagelink" href="investments-compute.php?ISA_ID=<?php echo $isa_id; ?>&Section_ID=8&Redirect=Y"> Investments </a>
                </li>
				<li id="progressbar-estimated-returns-autocompute">
                        <a class="pagelink" href="estimated-returns-compute.php?ISA_ID=<?php echo $isa_id; ?>&Section_ID=9"> Estimated Returns </a>
                </li>
                <li id="progressbar-attachments">
                        <a class="pagelink" href="attachments.php?ISA_ID=<?php echo $isa_id; ?>&Section_ID=10"> Attachments </a>
                </li>
				<li id="progressbar-allied-set-up">
                        <a class="pagelink" href="allied-set-up.php?ISA_ID=<?php echo $isa_id; ?>&Section_ID=11"> Allied Set Up </a>
                </li>
                
        </ul>
</div>

<style>
        .progressbar li:nth-child(1)::before{ content: "0" !important; }
        .progressbar li:nth-child(2)::before{ content: "1" !important; }
        .progressbar li:nth-child(3)::before{ content: "2" !important; }
        .progressbar li:nth-child(4)::before{ content: "3" !important; }
        .progressbar li:nth-child(5)::before{ content: "4" !important; }
        .progressbar li:nth-child(6)::before{ content: "5" !important; }
        .progressbar li:nth-child(7)::before{ content: "6" !important; }
        .progressbar li:nth-child(8)::before{ content: "7" !important; }
        .progressbar li:nth-child(9)::before{ content: "8" !important; }
        .progressbar li:nth-child(10)::before{ content: "9" !important; }
        .progressbar li:nth-child(11)::before{ content: "10" !important; }
        .progressbar li:nth-child(12)::before{ content: "11" !important; }
        .progressbar li:nth-child(13)::before{ content: "12" !important; }
</style>