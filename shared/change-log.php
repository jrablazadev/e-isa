<main role="main" class="container-fluid p-5">

	<div class="overflow-auto cb-report mb-3 cb-approval-log-section">
		<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000b748edfde4c640ea91ba/emb"></script>
	</div>

	<hr>

	<div class="overflow-auto cb-report mb-3 cb-change-log-section">
		<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500066a03025cebf4512ab10/emb"></script>
	</div>

	<hr>

	<div class="overflow-auto cb-report mb-3 cb-exec-logs-section">
		<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550000c7f9f744f0147238394/emb"></script>
	</div>

	<hr>

	<div class="overflow-auto cb-report mb-3">

		<div class="table-header mb-3 bg-dark text-white p-2 text-center font-weight-bold" style="font-size: 12px !important">
			Direction-To-Pay Logs ISA #<?php echo isset($_GET['ISA_ID']) ? $_GET['ISA_ID'] : ''; ?> for <?php echo isset($_GET['ISA_Name']) ? $_GET['ISA_Name'] : ''; ?>
		</div>

		<ul class="nav nav-tabs" id="myTab" role="tablist">
			<li class="nav-item">
				<a class="nav-link active" id="mfg-var-sup-tab" data-toggle="tab" href="#mfg-var-sup" role="tab" aria-controls="mfg-var-sup" aria-selected="true">
					Manufacturer Variable Support
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" id="mfg-ret-sup-tab" data-toggle="tab" href="#mfg-ret-sup" role="tab" aria-controls="mfg-ret-sup" aria-selected="true">
					Manufacturer Retained Support
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" id="prompt-pay-tab" data-toggle="tab" href="#prompt-pay" role="tab" aria-controls="prompt-pay" aria-selected="true">
					Prompt Pay
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" id="fdr-tab" data-toggle="tab" href="#fdr" role="tab" aria-controls="fdr" aria-selected="true">
					Fixed Dollar Report
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" id="liquid-st-tab" data-toggle="tab" href="#liquid-st" role="tab" aria-controls="liquid-st" aria-selected="false">
					Liquid Statement Rebate
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" id="liquid-eq-tab" data-toggle="tab" href="#liquid-eq" role="tab" aria-controls="liquid-eq" aria-selected="false">
					Liquid EQ Rebate
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" id="allied-st-tab" data-toggle="tab" href="#allied-st" role="tab" aria-controls="allied-st" aria-selected="false">
					Allied Statement Rebate
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" id="allied-eq-tab" data-toggle="tab" href="#allied-eq" role="tab" aria-controls="allied-eq" aria-selected="false">
					Allied EQ Rebate
				</a>
			</li>
		</ul>
		<div class="tab-content" id="myTabContent">
			<div class="tab-pane fade show active pt-3" id="mfg-var-sup" role="tabpanel" aria-labelledby="mfg-var-sup-tab">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000c5ab92c2411a4cde8414/emb"></script>
			</div>
			<div class="tab-pane fade pt-3" id="mfg-ret-sup" role="tabpanel" aria-labelledby="mfg-ret-sup-tab">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000e6f6e49121aa4b679cd0/emb"></script>
			</div>
			<div class="tab-pane fade pt-3" id="prompt-pay" role="tabpanel" aria-labelledby="prompt-pay-tab">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000eacf668d19bc4f748d7f/emb"></script>
			</div>
			<div class="tab-pane fade show pt-3" id="fdr" role="tabpanel" aria-labelledby="fdr-tab">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550008ea2fa20e3a64deda8d9/emb"></script>
			</div>
			<div class="tab-pane fade pt-3 cb-liquid-st" id="liquid-st" role="tabpanel" aria-labelledby="liquid-st-tab">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000f37fb209c3c34a3b8a85/emb"></script>
			</div>
			<div class="tab-pane fade pt-3 cb-liquid-eq" id="liquid-eq" role="tabpanel" aria-labelledby="liquid-eq-tab">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000ba4dfbd95ccc4cc282d7/emb"></script>
			</div>
			<div class="tab-pane fade pt-3 cb-allied-st" id="allied-st" role="tabpanel" aria-labelledby="allied-st-tab">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000135c2649c38b4b2f9133/emb"></script>
			</div>
			<div class="tab-pane fade pt-3 cb-allied-eq" id="allied-eq" role="tabpanel" aria-labelledby="allied-eq-tab">
				<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000e961078f554a40b6be52/emb"></script>
			</div>
		</div>
	</div>

	<hr>

	<div class="overflow-auto cb-report mb-3">

		<div class="table-header mb-3 bg-dark text-white p-2 text-center font-weight-bold" style="font-size: 12px !important">
			Related Accounts Logs ISA #<?php echo isset($_GET['ISA_ID']) ? $_GET['ISA_ID'] : ''; ?> for <?php echo isset($_GET['ISA_Name']) ? $_GET['ISA_Name'] : ''; ?>
		</div>

		<div>
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d5500062eb4a90f56b4869862a/emb"></script>
		</div>

	</div>

	<div class="overflow-auto cb-report mb-3">

		<div class="table-header mb-3 bg-dark text-white p-2 text-center font-weight-bold" style="font-size: 12px !important">
			ISA Breach/Deal Termination Logs ISA #<?php echo isset($_GET['ISA_ID']) ? $_GET['ISA_ID'] : ''; ?> for <?php echo isset($_GET['ISA_Name']) ? $_GET['ISA_Name'] : ''; ?>
		</div>

		<div>
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d55000c1470de1fec74a3c9e3f/emb"></script>
		</div>
	</div>

	<div class="overflow-auto cb-report mb-3">
		<div class="table-header mb-3 bg-dark text-white p-2 text-center font-weight-bold" style="font-size: 12px !important">
			ISA Breach/Deal Termination Work Queue Logs ISA #<?php echo isset($_GET['ISA_ID']) ? $_GET['ISA_ID'] : ''; ?> for <?php echo isset($_GET['ISA_Name']) ? $_GET['ISA_Name'] : ''; ?>
		</div>

		<div>
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25d550007dc144c94bab4711b15b/emb"></script>
		</div>
	</div>
</main>

<link rel="stylesheet" href="../css/change-log.css?v=<?php echo date('YmdHis'); ?>">