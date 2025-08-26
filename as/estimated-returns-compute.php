<!doctype html>
<html lang="en">
	<head>
		<?php include_once "../partials/head.php"; ?> 
		<title>E-ISA</title>
	</head>

	<body class="hide">
		

	
		<?php include_once "../partials/navbar-as.php"; ?>
		<main role="main" class="container">
            <?php include_once "../partials/progressbar.php"; ?>
            <div>Please wait..</div>
            <div style="display:none;">
                <script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000d8beb823ae084bc5affe/emb"></script>
            </div>

            <script>
                document.addEventListener('DataPageReady', function (event) {
                    $('#caspioform').submit();
                });
            </script>
		</main>
	</body>
</html>