<nav class="navbar navbar-expand-lg navbar-dark primary-nav bg-dark w-100" style="display: inline-table !important">
    <div class="container-fluid">
        <a class="navbar-brand pointer-event-none" href="#"> E-ISA</a>
        <a class="pointer-event-none small cb-text-grey text-right" href="#" style="width:70px;"> Logic Team</a>

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
            if (this.value != "1") {
                document.getElementById("exception-report").style.display = "none"
            }
        })
    }
})
</script>