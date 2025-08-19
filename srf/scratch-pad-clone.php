<!doctype html>
<html lang="en">
<head>
    <?php include_once "../partials/head.php"; ?> 
    <title>E-ISA</title>
    <link rel="stylesheet" href="../css/section-1.css" media="screen" title="no title" charset="utf-8">
</head>

<body class="hide">
    <?php include_once "../partials/navbar-srf.php"; ?>
    <main role="main" class="container" style="margin-top:50px;">
        <?php $isa_id = isset($_GET['ISA_ID']) ? $_GET['ISA_ID'] : null; ?>
        <script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D550007c0bd5156d584e98be42/emb?Clone_From_ISA_ID=<?php echo $isa_id; ?>"></script>
    </main>
</body> 
</html>
