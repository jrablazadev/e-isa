<html>

<head>
	<style>
		.jconfirm {
			z-index: 1 !important;
		}
	</style>
</head>

<body class="hide">
	<div class="mb-5">
		<div class="dashboard-metrics-finance"></div>
		<div class="header bg-dark mb-2">ISA Finance Execution Work Queue</div>
		<div class="cb-report" id="cb-finance-exec"></div>

		<hr>

		<div class="header bg-dark mb-2">ISA Finance Breach/Deal Termination Work Queue</div>
		<div class="cb-report" id="cb-finance-breach"></div>
	</div>

	<script>
		deployDP('cb-finance-exec', 'https://caspio.thenetwork-crm.com/dp/25d550003d55741dfcb44c6aa8f1/emb');
		deployDP('cb-finance-breach', 'https://caspio.thenetwork-crm.com/dp/25d550007446581508a7475095a0/emb');
	</script>
</body>

</html>