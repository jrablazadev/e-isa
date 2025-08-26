<!doctype html>
<html lang="en">
<head>
	<title>E-ISA</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<body class="hide">
	<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000df97571f43354dad8ec4/emb"></script>

	<style>
		.SelectAllTxt
		{
			font-size: .875rem;
			font-family: Arial, sans-serif;
		}
		body { font-size: 10px }
	</style>

	<script src="./js/mpo-details.js"></script>
	<script type="text/javascript">
		let v1 = setInterval(function () {
			if ($(".Manifacturer_ID")) {
				$(".Manifacturer_ID").prop("disabled", true)
			}
		}, 500)

		document.addEventListener("DataPageReady", function () {
			$("td, th").css("font-size", "8px")
		})
	</script>
</body>
</html>