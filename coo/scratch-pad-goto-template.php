<!doctype html>
<html lang="en">
<head>
    <?php include_once "../partials/head.php"; ?> 
    <title>E-ISA</title>
    <link rel="stylesheet" href="../css/section-1.css" media="screen" title="no title" charset="utf-8">
</head>

<body class="hide">
    <?php include_once "../partials/navbar-coo.php"; ?>
    <main role="main" class="container" style="margin-top:50px;">
        <?php $isa_id = isset($_GET['Clone_From_ISA_ID']) ? $_GET['Clone_From_ISA_ID'] : null; ?>
        <?php $isa_rnd = isset($_GET['Clone_Random']) ? $_GET['Clone_Random'] : null; ?>
        <script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550005763c7e4dbc74e129782/emb?Clone_From_ISA_ID=<?php echo $isa_id; ?>&Clone_Random=<?php echo $isa_rnd; ?>"></script>
    </main>
</body>
</html>
