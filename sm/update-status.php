<!doctype html>
<html lang="en">
<head>
    <?php include_once "../partials/head.php"; ?> 
    <title>E-ISA: Dashboard</title>
</head>

<body class="hide">
    <?php include_once "../partials/navbar-sm.php"; ?>
    <main role="main" class="container">
        <?php
        $ISA_Status = $_GET['ISA_Status'];
        $ISA_ID = $_GET['ISA_ID'];
        ?>
        
        <div class="ishidden2">
            <script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000b1652831df3f469bae1c/emb"></script>
        </div>

        <div class="text-center" style="margin-top:50px;">
            E-ISA was successfully <?= $ISA_Status ?>.
        </div>
    </main>
</body>
</html>
