<nav class="navbar navbar-expand-lg navbar-dark primary-nav bg-dark w-100" style="display: inline-table !important">
    <div class="container-fluid">
        <a class="navbar-brand pointer-event-none" href="#"> E-ISA</a>
        <a class="pointer-event-none small cb-text-grey text-right" href="#">RSM</a>

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
                        <a class="dropdown-item" href="./approval-timeline-stages.php">Approval Timeline - Stages</a>
                        <a class="dropdown-item" href="<?= $cb_datapage_prefix ?>25aad30af5a44b2285dd" target="_blank">Current Month Rebate Detail by GLID</a>
                        <a class="dropdown-item" href="<?= $cb_datapage_prefix ?>03f873139ffd427baec9" target="_blank">Credit Card Field Report</a>
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
                <li class="nav-item" id="nav-dd2">
                    <a class="nav-link" href="./deal-directory-2.php?cbResetParam=1">
                        <i class="fas fa-table"></i> My Deal Directory
                    </a>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="<?= $cb_thenetwork_link ?>login.php">
                        <i class="fas fa-atom"></i> Back to The Network
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="<?= $cb_logout_url ?>">
                        <i class="fas fa-sign-out-alt"></i> Log Out
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>