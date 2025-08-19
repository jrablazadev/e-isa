<!-- Experimental -->
<div id="experimental-navbar" style="display: none">
	<nav class="navbar navbar-expand-lg navbar-dark primary-nav bg-dark w-100" style="display: inline-table !important">
		<div class="container-fluid">

			<a class="navbar-brand pointer-event-none" href="#"> E-ISA</a>
			<a class="pointer-event-none small cb-text-grey text-right" href="#">DSM</a>

			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbar">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item">
						<a class="nav-link" target="_blank" href="">

						</a>
					</li>
					<li class="nav-item dropdown" id="nav-reports">
						<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<i class="fa fa-bar-chart" aria-hidden="true"></i> Reports
						</a>
						<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style="z-index: 99999">
							<a class="dropdown-item" href="./historical-deal-directory.php">Historical Deal Directory</a>
							<a class="dropdown-item" href="./deal-directory.php?cbResetParam=1">Deal Directory</a>
							<a class="dropdown-item" href="./all-isa.php">Search All E-ISA</a>
							<a class="dropdown-item" href="./deal-amortization.php">Deal Amortization</a>
							<a class="dropdown-item" href="./approval-timeline-stages.php">Approval Timeline - Stages</a>
							<a class="dropdown-item" href="<?= $cb_datapage_prefix ?>5722274aa136441888a8" target="_blank">MPO Completion</a>
							<a class="dropdown-item" href="<?= $cb_datapage_prefix ?>25aad30af5a44b2285dd" target="_blank">Current Month Rebate Detail by GLID</a>
							<a class="dropdown-item" href="<?= $cb_datapage_prefix ?>03f873139ffd427baec9" target="_blank">Credit Card Field Report</a>
							<a class="dropdown-item" href="./manufacturer-color-subscription-hub.php?cbResetParam=1" target="_blank">Manufacturer Color Subscription Hub</a>
							<a class="dropdown-item" href="./log1c-support-hub.php?cbResetParam=1" target="_blank">Log1c Support Hub</a>
						</div>
					</li>
					<li class="nav-item dropdown" id="nav-createisa">
						<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<i class="fa fa-bar-chart" aria-hidden="true"></i> Create E-ISA
						</a>
						<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
							<a class="dropdown-item" href="./template-new.php?cbResetParam=1&Section_ID=1&Reason_ID=6">Acquisition ISA</a>
							<?php if(!empty($cb_hitlist_details_link)): ?>
								<a class="dropdown-item" href="<?= $cb_hitlist_details_link ?>">New ISA from Hit List</a>
							<?php endif; ?>
						</div>
					</li>
					<li class="nav-item" id="nav-dashboard">
						<a class="nav-link" href="./dashboard.php">
							<i class="fas fa-rocket"></i> Dashboard
						</a>
					</li>
					<li class="nav-item dropdown" id="nav-reports">
						<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<i class="fa fa-newspaper" aria-hidden="true"></i> Other Links
						</a>
						<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style="z-index: 99999">
							<a class="dropdown-item" href="<?= $cb_thenetwork_link ?>login.php">Back to The Network</a>
							<a class="dropdown-item" href="https://nam10.safelinks.protection.outlook.com/?url=https://enterpriseuse.sharepoint.com/sites/NCSISATemp/&data=02%7c01%7c%7c218157f8ce064e84c08908d8500cb1f3%7c4681c3f2f9454432a41318144f63bd1d%7c0%7c0%7c637347362738223712&sdata=eV9UAppvEyQLso7ZF3nbMPlojH8l2e%2Bg1HoDP9ZGFlE%3D&reserved=0">OLD ISA Documentation</a>
							<i class="fa fa-list"></i> Review Enhancements
							</a>
						</div>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="<?= $cb_logout_url ?>">
							<i class="fas fa-sign-out-alt"></i> Log Out
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</div>
<div id="traditional-navbar" style="display: none">
	<nav class="navbar navbar-expand-lg navbar-dark primary-nav bg-dark w-100" style="display: inline-table !important">
		<div class="container-fluid">

			<a class="navbar-brand pointer-event-none" href="#"> E-ISA</a>
			<a class="pointer-event-none small cb-text-grey text-right" href="#">DSM</a>

			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbar">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item">
						<a class="nav-link" target="_blank" href="https://youtube.com/playlist?list=PLJghUyuRc6ttCobyE0NIeIRt0YThht_gH">
							<i class="fa fa-list"></i> Review Enhancements
						</a>
					</li>
					<li class="nav-item dropdown" id="nav-reports">
						<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<i class="fa fa-bar-chart" aria-hidden="true"></i> Reports
						</a>
						<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
							<a class="dropdown-item" href="deal-amortization.php">Deal Amortization</a>
							<a class="dropdown-item" href="<?= $cb_datapage_prefix ?>5722274aa136441888a8" target="_blank">MPO Completion</a>
							<a class="dropdown-item" href="<?= $cb_datapage_prefix ?>25aad30af5a44b2285dd" target="_blank">Current Month Rebate Detail by GLID</a>
							<a class="dropdown-item" href="<?= $cb_datapage_prefix ?>03f873139ffd427baec9" target="_blank">Credit Card Field Report</a>
							<a class="dropdown-item" href="./manufacturer-color-subscription-hub.php?cbResetParam=1" target="_blank">Manufacturer Color Subscription Hub</a>
							<a class="dropdown-item" href="./log1c-support-hub.php?cbResetParam=1" target="_blank">Log1c Support Hub</a>
						</div>
					</li>
					<li class="nav-item dropdown" id="nav-createisa">
						<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<i class="fa fa-bar-chart" aria-hidden="true"></i> Create E-ISA
						</a>
						<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
							<a class="dropdown-item" href="./template-new.php?cbResetParam=1&Section_ID=1&Reason_ID=6">Acquisition ISA</a>
							<a class="dropdown-item" href="./template-new.php?cbResetParam=1&Section_ID=1&Reason_ID=2">Old ISA</a>
							<?php if(!empty($cb_hitlist_details_link)): ?>
								<a class="dropdown-item" href="<?= $cb_hitlist_details_link ?>">New ISA from Hit List</a>
							<?php endif; ?>
						</div>
					</li>
					<li class="nav-item" id="nav-dashboard">
						<a class="nav-link" href="./dashboard.php">
							<i class="fas fa-rocket"></i> Dashboard
						</a>
					</li>
					<li class="nav-item" id="nav-allisa">
						<a class="nav-link" href="./all-isa.php">
							<i class="fas fa-search"></i> Search All E-ISA
						</a>
					</li>
					<li class="nav-item" id="nav-hdd">
						<a class="nav-link" href="./historical-deal-directory.php">
							<i class="fas fa-table"></i> Historical Deal Directory
						</a>
					</li>
					<li class="nav-item" id="nav-dd2">
						<a class="nav-link" href="./deal-directory-2.php?cbResetParam=1">
							<i class="fas fa-table"></i> My Deal Directory
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="<?= $cb_thenetwork_link ?>login.php">
							<i class="fas fa-atom"></i> Back to The Network
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="<?= $cb_logout_url ?>">
							<i class="fas fa-sign-out-alt"></i> Log Out
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</div>

<?php $action = empty($_GET['Action']) ? "Null" : $_GET["Action"]; ?>
<script>
	// Will hide the buttons once the URL Params has Action and the value is 'Display Only'
	document.addEventListener("DataPageReady", function() {
		// Switching Nav
		const urlSearchParams = new URLSearchParams(window.location.search);
		const params = Object.fromEntries(urlSearchParams.entries());
		if (params.nav != null) {
			if (params.nav == 'experimental') {
				document.querySelector("#experimental-navbar").style.display = "block"
				document.querySelector("#traditional-navbar").style.display = "none"
			} else {
				document.querySelector("#experimental-navbar").style.display = "none"
				document.querySelector("#traditional-navbar").style.display = "block"
			}
		} else {
			document.querySelector("#experimental-navbar").style.display = "none"
			document.querySelector("#traditional-navbar").style.display = "block"
		}

		// Put active on Reports if..
		const reports_child_links = [
			'historical-deal-directory',
			'deal-directory',
			'all-isa',
			'deal-amortization',
		]
		reports_child_links.map(function(links) {
			if (window.location.pathname.includes(links)) {
				document.querySelector("#nav-reports").classList.add("active")
			}
		})

		if ("<?= $action ?>" == "Display Only") {
			// console.log("searching element")
			var search_btns = setInterval(function() {
				if ($(".nextbtn") && $(".backbtn")) {
					$(".nextbtn").css("visibility", "hidden")
					$(".backbtn").css("visibility", "hidden")
					clearInterval(search_btns)
					// console.log("done searching element")
				}
			}, 500)
		}
	})
</script>