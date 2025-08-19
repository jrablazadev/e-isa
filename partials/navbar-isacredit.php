<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="" href="#" style="color:#dedede;text-decoration:normal;">ISA Credit</a>
    <div class="container">
        <a class="navbar-brand" href="./index.php?Section_ID=1">E-ISA</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbar">
            <ul class="navbar-nav ml-auto" style="float:right;">
                <li class="nav-item">
                    <a class="nav-link" href="./dashboard.php" style="color:white;">Dashboard</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./deal-directory.php" style="color:white;">Deal Directory</a>
                </li>
                <li class="nav-item" style="text-align:right;">
                    <a class="nav-link" href="<?= $cb_logout_url ?>" style="color:white;"><i class="fas fa-sign-out-alt"></i> Log Out</a>
                </li>
            </ul>
        </div>
    </div>
</nav>