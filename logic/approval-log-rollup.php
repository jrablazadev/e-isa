<!doctype html>
<html lang="en">

<head>
	<?php include_once "../partials/head.php"; ?>
	<title>E-ISA: Dashboard</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.css" />
	<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.min.js"></script>
	<style>
		ul {
			list-style-position: initial !important;
		}
		select, input {
			height: 31.9px !important;
		}
		.bootstrap-select:not([class*="col-"]):not([class*="form-control"]):not(.input-group-btn) {
			width: 200px !important;
		}
		button[data-id="Value4_1"] {
			height: 14px !important; 
			color: #000 !important;
			font-weight: normal !important;
			font-size: 14px !important;
		}
		.dropdown-toggle[data-id="Value4_1"]::after {
			display: initial !important;
		}
		.bootstrap-select > .dropdown-toggle {
			position: initial !important;
		}
		.inner li a {
			color: #000 !important;
		}
	</style>
</head>

<body class="hide">
	<?php include_once "../partials/navbar-logic.php"; ?>
	<main role="main" class="container">

		<div class="overflow-auto cb-report mb-3 cb-approval-log-rollup">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000200868b491d94023bf50/emb"></script>
		</div>

	</main>

	<script>
		document.addEventListener("DataPageReady", function() {
			// console.log(true)
			var cbResultSetGroup1Row = document.querySelectorAll(".cbResultSetGroup1Row")
			for (let index = 0; index < cbResultSetGroup1Row.length; index++) {
				cbResultSetGroup1Row[index].addEventListener("click", function() {
					moveDeniedCount()
				})
			} 
			moveDeniedCount()
			$('#Value4').selectpicker(); // Search field: "Reason For New ISA"
			$(".btn-light").removeClass("btn-light")
		})

		function moveDeniedCount() {

			// Aggregation of the Denial by stage field - position customization
			var groups = document.querySelectorAll(".cbResultSetGroup1Row[data-cb-name='group1']")
			for (let index = 0; index < groups.length; index++) {

				const element = groups[index];

				var group = element
				var groupSubTotalTR1 = document.querySelectorAll(".cbResultSetGroup1Row[data-cb-name='groupSubTotalTR1']")[index]
				var groupSubTotalTR1Value = groupSubTotalTR1.querySelector("td.cbResultSetGroup1DataCellNumberDate").innerHTML

				group.querySelectorAll('td.cbResultSetGroup1LabelCell')[1].innerHTML = groupSubTotalTR1Value
				group.querySelectorAll('td.cbResultSetGroup1LabelCell')[1].style.textAlign = "right"
				groupSubTotalTR1.style.display = "none"

			}

			// Aggregation at the end of the pagination - position customization
			if (document.querySelectorAll('*[data-cb-name="grand_total"]').length > 0) {
				var groupsAverageBelow = document.querySelectorAll('*[data-cb-name="grand_total"]')[0]
				var groupsAverageDenialBelow = groupsAverageBelow.querySelectorAll("td")[2]
				groupsAverageDenialBelow.style.textAlign = "right"

				var groupsDenialBelow = document.querySelectorAll('*[data-cb-name="grand_total"]')[1]
				groupsAverageDenialBelow.innerHTML = groupsDenialBelow.querySelectorAll("td")[1].innerHTML
				groupsDenialBelow.style.display = "none"
			}
		}
	</script>
</body>

</html>