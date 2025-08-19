<style>
    .dropdown-menu.show {
        z-index: 99999 !important;
    }
</style>

<nav class="navbar navbar-expand-lg navbar-dark primary-nav bg-dark w-100" style="display: inline-table !important">
    <div class="container-fluid">
        <a class="navbar-brand pointer-event-none" href="#"> E-ISA</a>
        <a class="pointer-event-none small cb-text-grey text-right" href="#" style="width:70px;"> User Group</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbar">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" target="_blank" href="https://youtube.com/playlist?list=PLJghUyuRc6ttCobyE0NIeIRt0YThht_gH">
                        <i class="fa fa-list"></i> Review Enhancements
                    </a>

                </li>
                <li class="nav-item dropdown" id="nav-reports">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-bar-chart" aria-hidden="true"></i> Reports
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="deal-amortization.php">Deal Amortization</a>
                        <a class="dropdown-item" href="./approval-log-rollup.php">Approval Log Roll Up</a>
                        <a class="dropdown-item" href="./approval-timeline-stages.php">Approval Timeline - Stages</a>
                        <a class="dropdown-item" href="./approval-timeline-people.php">Approval Timeline - People</a>
                        <a class="dropdown-item" href="./doc-exept-report.php?cbResetParam=1">Document Exception Report</a>
                        <a class="dropdown-item" id="exception-report" href="./exception-report.php?cbResetParam=1">Duplicate Account Exception Report</a>
                        <a class="dropdown-item" id="mfg-emails" href="./manage-mfg-emails.php?cbResetParam=1">Manage MFG Emails</a>
                        <a class="dropdown-item" id="free-range-emails" href="./free-range-asset-email.php?cbResetParam=1">Free Range Assets</a>
                        <a class="dropdown-item" href="<?= $cb_datapage_prefix ?>5caf5b6947f74f67af1e" target="_blank">Current Month Rebate Detail</a>
                        <a class="dropdown-item" href="<?= $cb_datapage_prefix ?>34493dd9f7724ae097bf" target="_blank">Credit Card Corporate Report</a>
                        <a class="dropdown-item" href="./manufacturer-color-subscription-hub.php?cbResetParam=1" target="_blank">Manufacturer Color Subscription Hub</a>
                        <a class="dropdown-item" href="./log1c-support-hub.php?cbResetParam=1" target="_blank">Log1c Support Hub</a>
                    </div>
                </li>
                <li class="nav-item dropdown" id="nav-createisa">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-bar-chart" aria-hidden="true"></i> Create E-ISA
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="./template-new.php?cbResetParam=1&Section_ID=1&Reason_ID=6">Acquisition ISA</a>
                        <a class="dropdown-item" href="./template-new.php?cbResetParam=1&Section_ID=1&Reason_ID=2">Old ISA</a>
                        <?php if (!empty($cb_hitlist_details_link)): ?>
                            <a class="dropdown-item" href="<?= $cb_hitlist_details_link ?>">New ISA from Hit List</a>
                        <?php endif; ?>
                    </div>
                </li>
                <li class="nav-item" id="nav-dashboard">
                    <a class="nav-link" href="./dashboard.php">
                        <i class="fas fa-rocket"></i> Dashboard
                    </a>
                </li>
                <li class="nav-item" id="nav-allisa">
                    <a class="nav-link" href="./all-isa.php">
                        <i class="fas fa-search"></i> Search All E-ISA
                    </a>
                </li>
                <li class="nav-item" id="nav-hdd">
                    <a class="nav-link" href="./historical-deal-directory.php?cbResetParam=1">
                        <i class="fas fa-table"></i> Historical Deal Directory
                    </a>
                </li>
                <li class="nav-item" id="nav-dd2">
                    <a class="nav-link" href="./deal-directory-2.php?cbResetParam=1">
                        <i class="fas fa-table"></i> My Deal Directory
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="<?= $cb_thenetwork_link ?>login.php"><i class="fas fa-atom"></i> Back to The Network</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="<?= $cb_logout_url ?>"><i class="fas fa-sign-out-alt"></i> Log Out</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<div style="display: none" id="check-rls">
    <script type="text/javascript" src="<?= $cb_datapage_prefix ?>fc5ea76ecafa4b689e35/emb"></script>
</div>

<script>
    document.addEventListener("DataPageReady", function(e) {
        if (e.detail.appKey.includes("fc5ea76ecafa4b689e35")) {
            document.querySelector("#check-rls input[name=cbParamVirtual1]").addEventListener("change", function() {
                if (this.value == 0) {
                    document.getElementById("exception-report").style.display = "none"
                    document.getElementById("mfg-emails").style.display = "none"
                    document.getElementById("free-range-emails").style.display = "none"

                }
            })
            document.querySelector("#check-rls input[name=cbParamVirtual3]").addEventListener("change", function() {
                if (this.value != "1") {
                    // document.getElementById("mfg-emails").style.display = "none"
                    // document.getElementById("free-range-emails").style.display = "none"
                    // document.getElementById("exception-report").style.display = "none"
                }
            })

            var link = 'https://' + accountId + '.caspio.com/dp/' + appKeyPrefix + 'f3d4a27308b849dbb203';
            //document.getElementById("free-range-emails").setAttribute('href', link);

            // if procurement, hide dashboard link
            document.querySelector("#check-rls input[name=cbParamVirtual5]").addEventListener("change", function() {
                console.log('5: ', this.value)
                if (this.value == 5) {
                    document.getElementById("nav-dashboard").style.display = "none";
                }
            })

        }
    })
</script>