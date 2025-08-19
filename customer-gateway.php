<!doctype html>
<html lang="en">
		<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<link rel="stylesheet" href="./lib/bootstrap-4.4.1/bootstrap-4.4.1.min.css">
		<script src="./js/fontawesome.js" crossorigin="anonymous"></script>
		<script src="./lib/jquery-3.3.1.min.js"></script>

		<title>Customer Gateway</title>
		<?php
			$cid = !empty($_GET['CID']) ? $_GET['CID'] : '';
		?>
	</head>
	<body class="hide">
		<div class="container mt-5 mb-5">

			<?php if(empty($cid)): ?>
				<div class="alert alert-info text-center">No records found.</div>

			<?php else: ?>
				<div class="row cb-containers">
					<div class="col-md-12 d-flex justify-content-center">
						<a class="btn btn-primary mb-2 ml-2" id="btn-la" href="https://caspio.thenetwork-crm.com/dp/25d55000182aba8326ec44cf99fc?CID=<?php echo $cid; ?>" role="button">
							Log AMP
						</a>
						<a class="btn btn-primary mb-2 ml-2" id="btn-rs" href="https://caspio.thenetwork-crm.com/dp/25d5500029d047d35ad244f9b0ad?CID=<?php echo $cid; ?>" role="button">
							Request Special Order Item
						</a>
					</div>
				</div>
				<hr>
				<div class="row cb-containers cb-login">
					<div class="col-md-12">
						<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000a6924d915e8c4bab9830/emb"></script>
					</div>
				</div>
				<hr>
				<div class="row cb-containers">
					<div class="col-md-12">
						<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500074f7bd8887aa4db4a4f0/emb"></script>
					</div>
				</div>
				<hr>
				<div class="row cb-containers">
					<div class="col-md-12 d-flex justify-content-center">
						<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000364be568abd145028a01/emb"></script>
					</div>
				</div>
				<hr>
				<div class="row cb-containers">
					<div class="col-md-12 d-flex justify-content-center">
						<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000facd3ecbc31843d19fe2/emb"></script>
					</div>
				</div>
			<?php endif; ?>
		</div>

		<script>
			document.addEventListener('DataPageReady', function (event) {

				const loginBtn = $('input[class^="cbLoginButton"]');

				console.log(loginBtn.length);

				if (loginBtn.length > 1)
				{
					console.log('a');

					// console.log(  );

					$('.cb-containers').hide();
					$('.cb-login').show();
				}
				else
				{
					console.log('b');

					$('.cb-containers').show();
				}

			});
		</script>
	</body>
</html>
