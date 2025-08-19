<!doctype html>
<html lang="en">

<head>
	<?php include_once "../partials/head.php"; ?>
	<title>E-ISA | Search All E-ISA</title>
</head>

<body class="hide">
	<?php include_once "../partials/navbar-user-group.php"; ?>

	<main role="main" class="container-fluid mt-2 mb-5">

		<div class="cb-headers bg-dark text-uppercase text-center text-white font-weight-bold p-2">Search All E-ISA</div>

		<div class="cb-report" id="cb-isateam" style="display: none">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500003f26711e51e4fab9a50/emb"></script>
		</div>

		<div class="cb-report" id="cb-non-isateam" style="display: none">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550004ca8ca654bd04e73983f/emb"></script>
		</div>
	</main>

	<script>
		$('#nav-allisa').addClass('active');
	</script>

	<script>
		<?php echo file_get_contents('../js/dashboard-relate-accounts.js'); ?>
	</script>

	<style>
		.cb-report *[class^=cbSearchButtonContainer] {
			display: none;
		}

		.cb-radius {
			border-radius: .2rem;
		}

		.cb-report input[type=text],
		.cb-report input[type=button],
		.cb-report .cbResultSetData,
		.cb-report a,
		.cb-report .cbResultSetLabelLink,
		.cbFormLabel,
		.cb-headers,
		*[class^=cbSearchButton] {
			font-size: 12px !important;
		}

		.cb-report #caspioform>div {
			margin: auto;
		}
	</style>

	<script>
		document.addEventListener("DataPageReady", function(e) {
			if (e.detail.appKey.includes("fc5ea76ecafa4b689e35")) {
				document.querySelector("#check-rls input[name=cbParamVirtual2]").addEventListener("change", function() {
					if (this.value != "1") {
						document.getElementById("cb-isateam").style.display = "none"
						document.getElementById("cb-non-isateam").style.display = "block"
					}
					else {
						document.getElementById("cb-isateam").style.display = "block"
						document.getElementById("cb-non-isateam").style.display = "none"
					}
				})
			}
		})
	</script>
</body>

</html>