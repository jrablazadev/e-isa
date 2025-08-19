<!doctype html>
<html lang="en">

<head>
    <?php include_once "../partials/head.php"; ?>
    <title>E-ISA</title>
    <style>
		.jconfirm {
			z-index: 1 !important;
		}
	</style>
</head>

<body class="hide">
    <?php include_once "../partials/navbar-user-group.php"; ?>
    <main role="main" class="mb-5 ml-5 mr-5">
        <div class="cb-header font-weight-bold bg-dark text-white mb-3"><b>Duplicate Account Exception Report</b></div>
        <div class="cb-report" id="cb-finance-duplicate-records"></div>

        <br>
        <div style="display: none">
            <div class="header bg-dark mb-2">Exception Reports Vendor</div>
            <div class="cb-report" id="cb-finance-duplicate-records-vendor">
                <iframe src="" frameborder="0" width="100%"></iframe>
            </div>
        </div>
        </div>
    </main>

    <script>
        deployDP('cb-finance-duplicate-records', 'https://caspio.thenetwork-crm.com/dp/25D550000d4225fbcf084821ab11/emb');
    </script>

    <script>
        document.addEventListener("DataPageReady", function(e) {
            $('.spinner-border').remove();

            if (e.detail.appKey.includes("0d4225fbcf084821ab11")) {
                setInterval(function() {
                    // Opens Edit Button
                    if (document.querySelector("#cb-finance-duplicate-records input[name=Mod0InlineEdit]")) {
                        var isa_id_container = document.querySelector("#cb-finance-duplicate-records input[name=Mod0InlineEdit]").parentNode.parentNode
                        var isa_id = isa_id_container.querySelector("td span[id=isa-id]").getAttribute("cb-data-isaid")
                        var fx = isa_id_container.querySelector("td span[id=isa-id]").getAttribute("cb-data-fx-duplicate")

                        var rebate_date = isa_id_container.querySelector("td span[id=isa-id]").getAttribute("cb-data-rdate")
                        var termination_date = isa_id_container.querySelector("td span[id=isa-id]").getAttribute("cb-data-tdate")
                        var vendor_key = "https://caspio.thenetwork-crm.com/dp/25D550009945a62684eb486a86c6/?ISA_ID=" + isa_id + "&RDATE=" + rebate_date + "&TDATE=" + termination_date + "&FX=" + fx

                        document.querySelector("#cb-finance-duplicate-records input[name=Mod0InlineEdit]").addEventListener("click", function() {
                            document.querySelector('#cb-finance-duplicate-records-vendor iframe').setAttribute("src", "")
                            vendorApproval(vendor_key)
                        })
                    }

                }, 1000)

                if (document.querySelectorAll("#dup-rec-edit")) {
                    var dup = document.querySelectorAll("#dup-rec-edit")
                    for (let index = 0; index < dup.length; index++) {
                        const element = dup[index];
                        dup[index].addEventListener("click", function() {
                            var isa_id = this.getAttribute("cb-data-isaid")
                            var fx = this.getAttribute("cb-data-fx-duplicate")
                            var paint = this.getAttribute("cb-data-paint")
                            var rnd = this.getAttribute("cb-data-rnd")
                            var companyname = this.getAttribute("cb-data-companyname")

                            var vendor_key = "https://caspio.thenetwork-crm.com/dp/25D550009945a62684eb486a86c6/emb?ISA_ID=" + isa_id + "&FX=" + fx + "&PAINT=" + paint + "&RND=" + rnd
                            var modal_title = 'ISA ' + isa_id + ' - Paint Manufacturer ' + paint + ' - Company Name ' + companyname

                            openModal_v2(modal_title, vendor_key, '45%', 'Y');
                        }, false)
                    }
                }
            } else if (e.detail.appKey.includes("9945a62684eb486a86c6")) {
                $("section input[name=Mod0EditRecord]").parent().css("text-align", "right")
                // if (document.querySelector("input[name=Mod0EditRecord]")) {
                //     var submit_button_parent = document.querySelector("input[name=Mod0EditRecord]").parentNode
                //     document.querySelector("#cb-jc-body form").appendChild(submit_button_parent)
                // }
                // setInterval(function () {
                //     document.querySelector("section input[name=Mod0EditRecord]").parentNode.remove()
                // }, 200)
            }
        })

        function vendorApproval(vendor_key) {
            document.querySelector('#cb-finance-duplicate-records-vendor iframe').setAttribute("src", vendor_key)
        }

        function refreshDuplicateRecordsList() {
        //     const cb_account_id = 'caspio.thenetwork-crm.com';
            const cb_dpAppKeyPrefix = '25D55000';

            function refreshDP(appKey) {
                for (var key in window.dataPageManagerObj.dataPages) {
                    if (key.search(cb_dpAppKeyPrefix + appKey) != -1) {
                        window.dataPageManagerObj.dataPages[key].refresh();
                    }
                }
            }
        //     setTimeout(function() {
                // refreshDP('0d4225fbcf084821ab11');
                // console.log("Duplicate Records Update List")
        //     }, 500)
        }

        window.addEventListener('message', function(e) {
            if (e.data) {
                refreshDuplicateRecordsList()
            }
        })
    </script>

    <style>
        <?php echo file_get_contents('../css/doc-exept-report.css'); ?>
    </style>

</body>

</html>