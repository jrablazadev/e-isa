var accountId = "caspio.thenetwork-crm.com";
var appKeyPrefix = "25d55000";

var cogLinks = {
	// TSM
	25d550001185f2ac033f4e328f6d: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Approved
	25d550009a536459cb524a21a164: [
		"Deal Sheet View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Deal Sheet
	25d550000a2f719017544bc4b36c: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Contract Phase
	25d550002223af6dd1c9488e8f06: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Execution Work Queue
	// , '25d550009b4423d2683543168fc8' : ['Log AMP', 'Create New Deal', 'View Attachments - TSM','ComCept Pricing', 'ComCept AR', 'Deal Termination'] //  Deal Directory
	// , '25d550009b4423d2683543168fc8' : ['Log AMP - ISA ID', 'View Details', 'Comments', 'Attachments', 'Related Accounts - View', 'Allocate Asset - View', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] // Deal Directory
	// , '25d550009b4423d2683543168fc8' : ['Log AMP - ISA ID', 'Comments', 'Attachments - Filtered', 'Related Accounts - View TSM', 'Create New Deal', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] // Deal Directory
	25d55000b6d70f7d2e2a434eb356: [
		"Log AMP - ISA ID",
		"Comments",
		"Attachments - Filtered",
		"Related Accounts - View TSM",
		"Create New Deal - TSM",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
		"Sales by Production Line - TSM",
	], // Deal Directory
	25d550009069386b8631401fb7e6: [
		"View Details",
		"Comments",
		"View Attachments",
		"E-ISA Logs",
		"Related Accounts - View - Approvers",
		"ComCept AR",
		"ComCept Pricing",
	], //  Breach Work Queue

	// ISM
	25d55000cb84c187969741a4a13f: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Approved
	25d55000ce41e85ce1c74eccade0: [
		"Deal Sheet View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Deal Sheet
	25d5500052a1c1ff483a4d739db7: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Contract Phase
	25d550001c72dd979e5a407f8f95: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Execution Work Queue
	// , '25d55000fe0e6382d2444a2bacd2' : ['Log AMP', 'Create New Deal', 'View Attachments - TSM','ComCept Pricing', 'ComCept AR', 'Deal Termination'] //  Deal Directory
	// , '25d55000fe0e6382d2444a2bacd2' : ['Log AMP - ISA ID', 'View Details', 'Comments', 'Attachments', 'Related Accounts - View', 'Allocate Asset - View', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] // Deal Directory
	// , '25d55000fe0e6382d2444a2bacd2' : ['Log AMP - ISA ID', 'Comments', 'Attachments - Filtered', 'Related Accounts - View', 'Create New Deal', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] // Deal Directory
	25d5500069b133f4c3f548deae74: [
		"Log AMP - ISA ID",
		"Comments",
		"Attachments - Filtered",
		"Related Accounts - View TSM",
		"Create New Deal",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
		"Sales by Production Line - TSM",
	], // Deal Directory

	// VPCS
	// , '25d5500030e0e7823ed54d798780' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
	// , '25d55000c98170f9eded4130a19b' : ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Deal Sheet
	// , '25d55000423c090012f7461da4c7' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Contract Phase
	// , '25d55000634ec4d549ee44c8806e' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Work Queue
	25d550002c7a58724a774de38563: [
		"View Details",
		"View Attachments",
		"E-ISA Logs",
		"Deal Termination",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
		"Sales by Production Line",
	], //  Deal Directory

	// CSM
	25d55000642bf897f8cb4822b114: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Approved
	25d550005ba492386e794f759376: [
		"Deal Sheet View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Deal Sheet
	25d550000d64254591ee4530b99e: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Contract Phase
	25d55000a23e74b814f3478ea02e: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Execution Work Queue

	// RSM
	25d55000976d73e526d3456baef1: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Approved
	25d55000ef4f72f459204f69a3cd: [
		"Deal Sheet View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Deal Sheet
	25d55000f0fdabaca1fb40dbb4e3: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Contract Phase
	25d55000776c517679d747fdbc51: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Execution Work Queue
	25d550007de177a7731b450bbd2e: [
		"View Details",
		"View Attachments",
		"Create New Deal",
		"E-ISA Logs",
		"Deal Termination",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
		"Sales by Production Line",
	], //  Deal Directory
	// , '25d55000f0197819e0bb48ac81f8' : ['Log AMP - ISA ID', 'View Details', 'Comments', 'Attachments', 'Related Accounts - View', 'Allocate Asset - View', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] // Deal Directory
	25d55000c0cd16c2b63a4409bfc4: [
		"View Details",
		"Comments",
		"View Attachments",
		"E-ISA Logs",
		"Related Accounts - View - Approvers",
		"ComCept AR",
		"ComCept Pricing",
	], //  Breach Work Queue
	25d550009be3072c7119479493ab: [
		"View Details",
		"Attachments",
		"Comments",
		"Related Accounts - View",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
	], // All E-ISA

	// VPAS
	// , '25d55000c5c620953d4e41c8a6b0' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
	// , '25d550006ced6f3658ae4a5797eb' : ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Deal Sheet
	// , '25d550000d1e3c356c34486a949e' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Contract Phase
	// , '25d55000a11769bbe9204681b461' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Work Queue

	// AS
	25d550001b18c61d8377443e915e: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Approved
	25d55000c0d9a71fa64048ffba94: [
		"Deal Sheet View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Deal Sheet
	25d55000abf136362718411482af: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Contract Phase
	25d55000167b65d945cf465db644: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Execution Work Queue
	// SO
	25d55000df7e675a929b4d5d9e18: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Approved
	25d5500088d3233f3c974d329612: [
		"Deal Sheet View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Deal Sheet
	25d5500029f83edbcbfe4725bc5c: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Contract Phase
	25d55000d5045c5a3a1b400ba814: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Execution Work Queue
	25d55000f6ed409a607c417ca803: [
		"View Details",
		"View Attachments",
		"E-ISA Logs",
		"Deal Termination",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
		"Sales by Production Line",
	], //  Deal Directory

	// AR
	25d550008a4e8fb15bc044b39973: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Approved
	25d550006d1706f56db2429da3a6: [
		"Deal Sheet View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Deal Sheet
	25d55000d75bcbe180c44081aa4e: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Contract Phase
	25d5500036299c5c906a4ee08ccf: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Execution Work Queue
	25d550006663b65b7c1d4a16b0cd: [
		"View Details",
		"View Attachments",
		"E-ISA Logs",
		"Deal Termination",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
		"Sales by Production Line",
	], //  Deal Directory

	// SRF
	25d550001d60a60c37814804a71d: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Approved
	25d550009d28f5ea60504856aafc: [
		"Deal Sheet View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Deal Sheet
	25d550006d27e86927ec4182a204: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Contract Phase
	25d5500056e6be491f1046bebe42: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Execution Work Queue
	25d55000fc10589851974509a116: [
		"View Details",
		"View Attachments",
		"E-ISA Logs",
		"Deal Termination",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
		"Sales by Production Line",
	], //  Deal Directory

	// AP
	25d5500059cc6167add944f88255: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Approved
	25d550005faeb3716d6247faabec: [
		"Deal Sheet View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Deal Sheet
	25d55000a37cf779f5514785a353: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Contract Phase
	25d5500082ff9a7287bc4e4bacbd: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Execution Work Queue
	25d55000f62ddfe088ee4839905b: [
		"View Details",
		"View Attachments",
		"E-ISA Logs",
		"Deal Termination",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
		"Sales by Production Line",
	], //  Deal Directory

	// ACCOUNTING
	25d55000e38a97f2264947ff9437: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Approved
	25d5500054d1227b8dfe47f3b66a: [
		"Deal Sheet View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Deal Sheet
	25d55000180728d690f44d8690b7: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Contract Phase
	25d5500010965298a14d4e4a95f5: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Execution Work Queue
	25d550006a69946586474e9b81f5: [
		"View Details",
		"View Attachments",
		"E-ISA Logs",
		"Deal Termination",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
		"Sales by Production Line",
	], //  Deal Directory

	// MARKETING
	25d5500048c33b104c034a95b6f0: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Approved
	25d55000ff86c1881b8e42509158: [
		"Deal Sheet View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Deal Sheet
	25d55000e509953d39dd416f9885: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Contract Phase
	25d55000436243ac2b7d402d8ca4: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Execution Work Queue
	25d55000d4066d2600604fb4b044: [
		"View Details",
		"View Attachments",
		"E-ISA Logs",
		"Deal Termination",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
		"Sales by Production Line",
	], //  Deal Directory

	// SI
	25d5500083f38403e4df41ca8b29: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Approved
	25d55000ad8d0db748404cf0bc8e: [
		"Deal Sheet View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Deal Sheet
	25d5500046e38123178e4f299437: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Contract Phase
	25d55000ea99476b3c0841df9794: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Execution Work Queue
	25d550009b2b60bac6e546a88e3e: [
		"View Details",
		"View Attachments",
		"E-ISA Logs",
		"Deal Termination",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
		"Sales by Production Line",
	], //  Deal Directory

	// DSM
	25d550004edbee9e40e04e2187ea: [
		"View Details",
		"Edit Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
	], //  For Approval
	25d55000501b4703902742ba943b: [
		"View Details",
		"Edit Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
	], //  Upcoming
	25d55000373f68913389461ab0f1: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Approved
	25d55000c6e82615b09a4a29b971: [
		"Deal Sheet View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Deal Sheet
	25d5500091a77b138d894f2981c3: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Contract Phase
	25d55000c88787cce98847809654: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Execution Phase,
	25d55000fc59a60ab6b84edd9ae5: [
		"View Details",
		"View Attachments",
		"E-ISA Logs",
		"Create New Deal",
		"Deal Termination",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
		"Sales by Production Line",
	], //  Deal Directory
	// , '25d55000498c7df29bdc4cc492ef' : ['Log AMP - ISA ID', 'View Details', 'Comments', 'Attachments', 'Related Accounts - View', 'Allocate Asset - View', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] // Deal Directory
	25d55000a8b40053c0884c1eb336: [
		"View Details",
		"Attachments",
		"Comments",
		"E-ISA Logs",
	], // Historical Deal Directory
	25d550003d8e235e464e4fffa171: [
		"View Details",
		"Attachments",
		"Comments",
		"Related Accounts - View",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
	], // All E-ISA

	// RVPS
	25d550006f42e1516e404872a6e0: [
		"View Details",
		"Edit Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
	], //  My Approval Needed
	25d55000d10e87ac23934e6ea6a7: [
		"View Details",
		"Edit Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
	], //  Upcoming
	25d55000fe86dc8d828d4789a6cf: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Approved
	25d55000d4a52e2b06b842b68621: [
		"Deal Sheet View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Deal Sheet
	25d550002cf1ddd43f0f481fb7ba: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Contract Phase
	25d550009ffa2ad8958f48618244: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Execution Phase
	25d550006d2a88fd38854a2a94fd: [
		"View Details",
		"View Attachments",
		"E-ISA Logs",
		"Create New Deal",
		"Deal Termination",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
		"Sales by Production Line",
	], //  Deal Directory
	// , '25d55000bac4985cc0ac485797ae' : ['Log AMP - ISA ID', 'View Details', 'Comments', 'Attachments', 'Related Accounts - View', 'Allocate Asset - View', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] // Deal Directory
	25d550007ba75dbee7514783bf66: [
		"View Details",
		"Attachments",
		"Comments",
		"E-ISA Logs",
	], // Historical Deal Directory
	25d550009178512346144f89872a: [
		"View Details",
		"Attachments",
		"Comments",
		"Related Accounts - View",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
	], // All E-ISA

	// RVPO
	25d55000fc4bbd7c6efd42d8a054: [
		"View Details",
		"Edit Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
	], //  My Approval Needed
	25d550003ef9a47811644199a23c: [
		"View Details",
		"Edit Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
	], //  Upcoming
	25d55000a1bbaaf274dd4f81815b: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Approved
	25d55000a59019ad599e4c3da886: [
		"Deal Sheet View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Deal Sheet
	25d550004f85b00edc674c508671: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Contract Phase
	25d550002988a6ec8518489d83a4: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Execution Phase
	25d55000880bbe8872954a8aa533: [
		"View Details",
		"View Attachments",
		"E-ISA Logs",
		"Create New Deal",
		"Deal Termination",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
		"Sales by Production Line",
	], //  Deal Directory
	// , '25d55000136439fb7aec407cbed5' : ['Log AMP - ISA ID', 'View Details', 'Comments', 'Attachments', 'Related Accounts - View', 'Allocate Asset - View', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] // Deal Directory
	25d55000b4bf730cf8f74ae48005: [
		"View Details",
		"Attachments",
		"Comments",
		"E-ISA Logs",
	], // Historical Deal Directory
	25d55000af1e35d3bda34726838c: [
		"View Details",
		"Attachments",
		"Comments",
		"Related Accounts - View",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
	], // All E-ISA
	25d5500027b1a68209c846f4b953: ["Attachments"], // Document Exception Report

	// ISA Team
	25d55000f21b4c25029f4d0b8119: ["Edit Details - Deal Approval"], //  My Approval Needed - Deal Termination
	25d55000a99169350b1b4db3a9ba: [
		"View Details",
		"Edit Details",
		"E-ISA Logs",
		"Comments",
		"Attachments",
		"Related Accounts",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
	], //  For Approval
	25d55000df39ad1f875242d2a00e: [
		"View Details",
		"Edit Details",
		"E-ISA Logs",
		"Comments",
		"Attachments",
		"Related Accounts",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
	], //  Upcoming
	25d55000a09712dd599e4a3c8c6d: [
		"View Details",
		"Edit Details",
		"E-ISA Logs",
		"Comments",
		"Attachments",
		"Related Accounts",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
	], //  Approved
	25d550000819d4e46cda412c91cd: [
		"View Details",
		"Edit Details",
		"E-ISA Logs",
		"Comments",
		"Attachments",
		"Related Accounts",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
	], //  Deal Sheet
	25d55000fdddd86086af4c4bad51: [
		"View Details",
		"Edit Details",
		"E-ISA Logs",
		"Comments",
		"Attachments",
		"Related Accounts",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
	], //  Contract Phase
	25d550002374e8f1c2ba439fa800: [
		"View Details",
		"Edit Details",
		"E-ISA Logs",
		"Comments",
		"Attachments",
		"Related Accounts",
		"Allocate Asset",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
	], //  Execution Phase
	25d550005eeb15dbeb1a425c908a: [
		"View Details",
		"Edit Details",
		"Comments",
		"Attachments",
		"Related Accounts",
		"Allocate Asset",
		"Create New Deal",
		"E-ISA Logs",
		"Deal Termination",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
		"Sales by Production Line",
	], //  Deal Directory
	25d5500047bbef748cce468fb668: [
		"View Details",
		"Edit Details",
		"Comments",
		"Attachments",
		"Related Accounts",
		"Allocate Asset",
		"Create New Deal",
		"E-ISA Logs",
		"Deal Termination",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
		"Sales by Production Line",
	], //  Deal Directory 2
	// , '25d5500063f217cac0c847ad8a1b' : ['View Details', 'Edit Details', 'Comments', 'Attachments', 'Related Accounts', 'Allocate Asset', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay', 'Sales by Production Line'] // Deal Directory
	25d55000ffc1c7c866bc4df4b5af: [
		"View Details",
		"Comments",
		"Attachments",
		"E-ISA Logs",
		"Related Accounts - View",
		"Return to Deal Directory",
		"Allocate Asset",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
	], //  Breach Work Queue
	25d550004715d70e3b0049f9977e: [
		"View Details",
		"Comments",
		"Attachments",
		"E-ISA Logs",
		"Related Accounts",
		"Return to Deal Directory",
		"Allocate Asset",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
	], //  Breach Work Queue
	25d550001fe1ec21b4a5407f9a47: [
		"View Details",
		"Attachments",
		"Comments",
		"Related Accounts - View",
		"E-ISA Logs",
	], // Historical Deal Directory
	25d55000d874a2c12e7243a7a95b: [
		"View Details",
		"Attachments",
		"Comments",
		"Related Accounts - View",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
	], // All E-ISA
	25d5500003f26711e51e4fab9a50: [
		"View Details",
		"Attachments",
		"Comments",
		"Related Accounts",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
	], // All E-ISA
	25d550004ca8ca654bd04e73983f: [
		"View Details",
		"Attachments",
		"Comments",
		"Related Accounts - View",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
	], // All E-ISA
	25d550003f26307cea88482b9ac9: ["View Details", "Allocate Asset"], // Deal Amortization

	// KN
	25d550000dabc5498b964a83a86c: [
		"View Details",
		"Edit Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
	], //  For Approval
	25d55000db11e61595b14d4ba536: [
		"View Details",
		"Edit Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
	], //  Upcoming
	25d550009e4c4d40178d42369224: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Approved
	25d550007b1d550c683048f3924f: [
		"Deal Sheet View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Deal Sheet
	25d550009d4ba8d1b7734999b100: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Contract Phase
	25d5500062ebac071ec04163bf0a: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Execution Phase
	25d55000060418d036fb4620b99d: [
		"View Details",
		"Comments",
		"Attachments",
		"Related Accounts - View",
		"Create New Deal",
		"E-ISA Logs",
		"Deal Termination",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
		"Sales by Production Line",
	], //  Deal Directory

	// CFO
	25d5500006ce40d0417f4027b4fc: [
		"View Details",
		"Edit Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
	], //  For Approval
	25d550009368d56af6fb492fb4ea: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
	], //  Upcoming
	25d55000dd925984a1c4414f8512: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Approved
	25d5500061dc141eaf044e038e3c: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Deal Sheet
	25d550004f8d4ccb944a4127bb91: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Contract Phase
	25d5500062ebac071ec04163bf0a: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Execution Phase
	25d550004b797fb9e94c4e63a277: [
		"View Details",
		"Comments",
		"Attachments",
		"Related Accounts - View",
		"Allocate Asset",
		"E-ISA Logs",
		"Deal Termination",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
		"Sales by Production Line",
	], //  Deal Directory

	// COO
	25d550001269e55e73e34b5cbb88: [
		"View Details",
		"Edit Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
	], //  For Approval
	25d55000b94b0919d1254effb3e1: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
	], //  Upcoming
	25d55000ca4b4f90e2e7437cb94a: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Approved
	25d550004fb97b82947d43e9a1df: [
		"View Details",
		"Comments",
		"Attachments",
		"Related Accounts - View",
		"E-ISA Logs",
		"Deal Termination",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
		"Sales by Production Line",
	], //  Deal Directory
	// CEO
	25d55000d1a02f1ce3d443eab14b: [
		"View Details",
		"Edit Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
	], //  For Approval
	25d550006c55b7f7f14d4106acba: [
		"View Details",
		"Edit Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
	], //  Upcoming
	25d550005e3efbb2501443789cf6: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Deal Sheet
	25d550005a6aa2aa2e734b97aca6: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Contract Phase
	25d5500063e4ecc84bdc45c8ae24: [
		"View Details",
		"Comments",
		"Attachments",
		"Related Accounts - View",
		"E-ISA Logs",
		"Deal Termination",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
		"Sales by Production Line",
	], //  Deal Directory

	// Store Manager
	25d5500039a001159a514e4abfd7: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
	], //  For Approval
	25d5500006ce8ef9da074107ae34: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
	], //  Upcoming
	25d550009daef365cb2348b3b65a: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Approved
	25d55000570e6ee879aa4ccca281: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Deal Sheet
	25d550003324267a4fcb4139a921: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Contract Phase
	25d550009f8b1b08830d48139803: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Execution Phase
	// , '25d55000babdfe7b901543cd97a7' : ['View Details', 'View Attachments', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] //  Deal Directory
	// , '25d55000ba77fd397d0447618aa9' : ['Log AMP - ISA ID', 'View Details', 'Comments', 'Attachments', 'Related Accounts - View - Approvers', 'Allocate Asset - View', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] // Deal Directory
	25d55000ba77fd397d0447618aa9: [
		"Log AMP - ISA ID",
		"Comments",
		"Attachments - Filtered",
		"Related Accounts - View - Approvers",
		"Create New Deal",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
		"Sales by Production Line - TSM",
	], // Deal Directory
	25d55000df460ba8283b41008c99: [
		"View Details",
		"Attachments",
		"Comments",
		"E-ISA Logs",
	], // Historical Deal Directory
	25d55000efc74fd048fb4013b3d1: [
		"View Details",
		"Attachments - Filtered",
		"Comments",
		"Related Accounts - View",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
	], // All E-ISA

	// DOM
	25d550000d9969d702e049d8bd77: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
	], //  For Approval
	25d55000c93f972dd87b402aae12: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
	], //  Upcoming
	25d5500071f7a7c3a0b3458f8ac8: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Approved
	25d550004618793597d64d6b9094: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Deal Sheet
	25d550001436b15bf0bb42a28222: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Contract Phase
	25d55000327796dcd81547789f6c: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Execution Phase
	25d5500083cd1d9bc2a84bfdbdce: [
		"View Details",
		"View Attachments",
		"E-ISA Logs",
		"Deal Termination",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
		"Sales by Production Line",
	], //  Deal Directory
	// , '25d5500025262312258a45e3ae1e' : ['Log AMP - ISA ID', 'View Details', 'Comments', 'Attachments', 'Related Accounts - View', 'Allocate Asset - View', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] // Deal Directory
	25d55000c5134e9e869d4425a967: [
		"View Details",
		"Attachments",
		"Comments",
		"E-ISA Logs",
	], // Historical Deal Directory
	25d550005aa9c94f8e5a444aabd7: [
		"View Details",
		"Attachments",
		"Comments",
		"Related Accounts - View",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
	], // All E-ISA
	25d5500044579d67bb704b1eadb6: ["Attachments"], // Document Exception Report

	// ISA Pricing
	25d55000ef76b73d6082474aadbe: [
		"View Details",
		"Return to Contract Phase",
		"Comments",
		"Attachments",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - RO",
	], //  WQ
	25d55000d8053e16d8d14ecf8c21: [
		"View Details",
		"Comments",
		"Attachments",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - RO",
	], //  WQ

	// ISA Credit
	25d55000c6624f2eb92544e6b89f: [
		"View Details",
		"Return to Contract Phase",
		"Comments",
		"Attachments",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - RO",
	], //  WQ
	25d55000087fc11aa0034a2f8e7d: [
		"View Details",
		"Comments",
		"Attachments",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - RO",
	], //  WQ
	25d550006395b6c851194e1c9291: [
		"View Details",
		"Comments",
		"Attachments",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - RO",
	], //  WQ

	// ISA Finance
	25d550003d55741dfcb44c6aa8f1: [
		"View Details",
		"Return to Contract Phase",
		"Comments",
		"Attachments",
		"Related Accounts - View - Approvers",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
	], //  WQ
	25d550007446581508a7475095a0: [
		"View Details",
		"Comments",
		"Attachments",
		"Related Accounts - View - Approvers",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
	], //  WQ
	25d55000557ad1dc6f6d4f37a358: [
		"View Details",
		"Comments",
		"Attachments",
		"Related Accounts - View - Approvers",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
	], //  DD
	25d550003cba56b852da4645ac6b: [
		"View Details",
		"Comments",
		"Attachments",
		"Related Accounts",
		"Allocate Asset",
		"Create New Deal",
		"E-ISA Logs",
		"Deal Termination",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
		"Sales by Production Line",
	], // Deal Directory
	25d550008604295b600d4e91baa4: [
		"View Details",
		"Comments",
		"Attachments",
		"Related Accounts",
		"Allocate Asset",
		"Create New Deal",
		"E-ISA Logs",
		"Deal Termination",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
		"Sales by Production Line",
	], // Deal Directory
	25d550000d4225fbcf084821ab11: ["View Details"],

	// ISA Procurement
	25d55000f7400819e1704df39330: [
		"View Details",
		"Return to Contract Phase",
		"Comments",
		"Attachments",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - RO",
	], //  WQ
	25d55000a850778d63474cd98958: [
		"View Details",
		"Comments",
		"Attachments",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - RO",
	], //  WQ

	// Logic ICS
	25d5500054dd726bcf644b4bb4fb: [
		"View Details",
		"Comments",
		"Attachments",
		"Related Accounts - View - Approvers",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - RO",
		"E-ISA Logs",
	],
	25d550001ded9b7819d34c5894a5: [
		"View Details",
		"Return to Contract Phase",
		"Comments",
		"Attachments",
		"Related Accounts - View - Approvers",
		"E-ISA Logs",
	],

	// Logic Team
	// , '25d550006480d771014c4ed59ef4' : ['View Details', 'Comments', 'Attachments', 'Related Accounts - View - Approvers', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  WQ
	// , '25d55000062b685892134a299a59' : ['View Details', 'Comments', 'Attachments', 'Related Accounts - View - Approvers', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  WQ
	25d550000faff3f982f24ec8a871: [
		"Log AMP - ISA ID",
		"Attachments",
		"Related Accounts - View - Approvers",
		"ComCept AR",
		"ComCept Pricing",
	], // Deal Directory 2

	// CFO COO CEO
	25d550002282c5791cb246e6b593: [
		"View Details",
		"Attachments",
		"Comments",
		"E-ISA Logs",
	], // Historical Deal Directory

	// Breach/Termination WQ
	25d55000f91c845405554b4f85f7: [
		"View Details",
		"Comments",
		"Attachments",
		"E-ISA Logs",
		"Related Accounts - View - Approvers",
		"ComCept AR",
		"ComCept Pricing",
	], //  Breach Work Queue
	25d550007e78bfffce2140e897e4: [
		"View Details",
		"Comments",
		"Attachments",
		"E-ISA Logs",
		"Related Accounts - View - Approvers",
		"ComCept AR",
		"ComCept Pricing",
	], //  Breach Work Queue
	25d550000e4ea070622a487ebc5e: [
		"View Details",
		"Comments",
		"Attachments",
		"E-ISA Logs",
		"Related Accounts - View - Approvers",
		"ComCept AR",
		"ComCept Pricing",
	], //  Breach Work Queue
	25d550003f9f6daf53f7485298ba: [
		"View Details",
		"Comments",
		"Attachments",
		"E-ISA Logs",
		"Related Accounts - View - Approvers",
		"ComCept AR",
		"ComCept Pricing",
	], //  Breach Work Queue
	25d55000618c4b059e5940538a50: [
		"View Details",
		"Comments",
		"Attachments",
		"E-ISA Logs",
		"Related Accounts - View - Approvers",
		"ComCept AR",
		"ComCept Pricing",
	], //  Breach Work Queue
	25d55000ef0488b6fd5a42668381: [
		"View Details",
		"Comments",
		"View Attachments",
		"E-ISA Logs",
		"Related Accounts - View - Approvers",
		"ComCept AR",
		"ComCept Pricing",
	], //  Breach Work Queue

	// Shared
	25d55000eceb3babc05f41dcad98: ["View Details"],
	25d55000da025f6ccee643b7821a: [
		"Log AMP - ISA ID",
		"View Details",
		"Comments",
		"Attachments",
		"Related Accounts - View - Approvers",
		"Allocate Asset - View",
		"Create New Deal",
		"E-ISA Logs",
		"Deal Termination",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
		"Sales by Production Line",
	], // Deal Directory
	25d550005695449d61d949a1bb44: [
		"View Details",
		"Attachments",
		"Comments",
		"Related Accounts - View",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
	], // All E-ISA - Submitter
	25d5500071f1f8e38658430eb8ec: [
		"View Details",
		"Attachments - Filtered",
		"Comments",
		"Related Accounts - View",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
	], // All E-ISA - TSM/ISM/SM

	// Shared - DD - Pricing, Procurement, Logic ICS
	25d55000716389683bcc4bc6a8e8: [
		"View Details",
		"Comments",
		"Attachments",
		"Related Accounts - View - Approvers",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	],

	// Users
	25d550009efc26337fa547d680f5: [
		"View Details",
		"View Attachments",
		"E-ISA Logs",
		"Create New Deal",
		"Deal Termination",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
		"Sales by Production Line",
	], // DD
	25d550009813a8444b764f8590ac: [
		"Log AMP - ISA ID",
		"View Details",
		"Comments",
		"Attachments",
		"Related Accounts - View - Approvers",
		"Allocate Asset - View",
		"Create New Deal",
		"E-ISA Logs",
		"Deal Termination",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
		"Sales by Production Line",
	], // Deal Directory

	// Corporate View 2 - SO, AR, SRF, AP, Accounting, Marketing, SI, AS
	25d55000bfa722118b084563a76b: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Approved
	25d55000db9b45f96d60499ab60f: [
		"Deal Sheet View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Deal Sheet
	25d55000275f9d183007482e952b: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Contract Phase
	25d550004623dcf06eeb4a09a9cd: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Execution Work Queue
	25d55000ef0488b6fd5a42668381: [
		"View Details",
		"Comments",
		"View Attachments",
		"E-ISA Logs",
		"Related Accounts - View - Approvers",
		"ComCept AR",
		"ComCept Pricing",
	], //  Breach Work Queue

	// Corporate View 2 - SRF VPCS VPAS
	25d55000aa384620ff254b92b1cf: [
		"View Details",
		"E-ISA Logs",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay - View",
	], //  Execution Work Queue
	25d55000baa1a7d4eeb04876b12a: [
		"View Details",
		"Comments",
		"View Attachments",
		"E-ISA Logs",
		"Related Accounts - View - Approvers",
		"ComCept AR",
		"ComCept Pricing",
	], //  Breach Work Queue

	// ISA Team DD - Temporary page for formula verification
	25d550001c72a60eee144283bcb2: [
		"View Details",
		"Edit Details",
		"Comments",
		"Attachments",
		"Related Accounts",
		"Allocate Asset",
		"Create New Deal",
		"E-ISA Logs",
		"Deal Termination",
		"ComCept AR",
		"ComCept Pricing",
		"Direction To Pay",
		"Sales by Production Line",
	], // Deal Directory

	// Document Exception Report
	25d5500019b3877ad27a414e9e23: ["Attachments"], // SO, AR, SRF, AP, Accounting, SI, AS, Tom Blawsch, CFO, CEO, COO, User Group
	25d550009151f78f74d948f8b8be: ["Attachments"], // DOM
};

var newCogLinks = {};

$.each(cogLinks, function (appkey, links) {
	var loweredAppKey = appkey.toLowerCase();
	newCogLinks[loweredAppKey] = links;
});

cogLinks = newCogLinks;

document.addEventListener("DataPageReady", function (event) {
	$(".cb-cog").each(function () {
		create_cog(this);
	});
});

$(document).on("click", '*[name="Mod0InlineEditCancel"]', function (e) {
	$(".cb-cog").each(function () {
		create_cog(this);
	});
});

// View Details
$(document).on("click", ".cb-view-details-btn", function (e) {
	var isaId = $(this).attr("data-isa-id");
	window.open("./approval-view-details.php?ISA_ID=" + isaId);
	e.preventDefault();
});

// View Attachments
$(document).on("click", ".cb-view-attachments-btn", function (e) {
	var isaId = $(this).attr("data-isa-id");
	window.open("./view-attachments.php?ISA_ID=" + isaId);
	e.preventDefault();
});

// Create New Deal
$(document).on("click", ".cb-create-new-deal-btn", function (e) {
	var isaId = $(this).attr("data-isa-id");
	create_new_deal(isaId);
});

// Create New Deal TSM
$(document).on("click", ".cb-create-new-deal-tsm-btn", function (e) {
	var isaId = $(this).attr("data-isa-id");
	create_new_deal_tsm(isaId);
});

// Edit Details
$(document).on("click", ".cb-edit-details-btn", function (e) {
	var isaId = $(this).attr("data-isa-id");
	window.open("./allied-set-up.php?ISA_ID=" + isaId + "&Section_ID=11");
	e.preventDefault();
});

// Approval Log
$(document).on("click", ".cb-approval-log-btn", function (e) {
	var isaId = $(this).attr("data-isa-id");
	window.open("./approval-log.php?ISA_ID=" + isaId);
	e.preventDefault();
});

// Comcept Ar
$(document).on("click", ".cb-comcept-ar-btn", function (e) {
	var isaId = $(this).attr("data-isa-id");
	window.open(
		"https://" +
			accountId +
			"/dp/" +
			appKeyPrefix +
			"afc3de934aca44af88d4?ISA_ID=" +
			isaId
	);
	e.preventDefault();
});

// Comcept Pricing
$(document).on("click", ".cb-comcept-pricing-btn", function (e) {
	var isaId = $(this).attr("data-isa-id");
	// window.open('https://' + accountId + '/dp/' + appKeyPrefix + '82b75a7577ab476e8950?ISA_ID=' + isaId);
	window.open("../shared/comcept-pricing.php?ISA_ID=" + isaId);
	e.preventDefault();
});

// E-ISA Logs
$(document).on("click", ".cb-isa-logs-btn", function (e) {
	var isaId = $(this).attr("data-isa-id");
	var isaName = $(this).attr("data-isa-name") || "";
	window.open(
		"./change-log.php?ISA_ID=" +
			isaId +
			"&id=" +
			isaId +
			"&ISA_Name=" +
			isaName
	);
	e.preventDefault();
});

// Deal Termination
$(document).on("click", ".cb-deal-termination-btn", function (e) {
	var isaId = $(this).attr("data-isa-id");
	window.open("./deal-termination.php?ISA_ID=" + isaId);
	e.preventDefault();
});

// Deal Sheet View
$(document).on("click", ".cb-deal-sheet-view-btn", function (e) {
	var isaId = $(this).attr("data-isa-id");
	window.open("./deal-sheet-view.php?ISA_ID=" + isaId);
	e.preventDefault();
});

// Comments popup
$(document).on("click", ".cb-comments-btn", function (e) {
	var isaId = $(this).attr("data-isa-id");
	view_comments(isaId);
	e.preventDefault();
});

// Attachments popup
$(document).on("click", ".cb-attachments-btn", function (e) {
	var isaId = $(this).attr("data-isa-id");
	attachments_popup(isaId);
	e.preventDefault();
});

// Attachments popup
$(document).on("click", ".cb-attachments-filtered-btn", function (e) {
	var isaId = $(this).attr("data-isa-id");
	attachments_filtered(isaId);
	e.preventDefault();
});

// Related Accounts popup
$(document).on("click", ".cb-related-accounts-btn", function (e) {
	var isaId = $(this).attr("data-isa-id");
	// relatedAccounts(isaId); // 2021-08-18 Jun
	relate_all_accounts_popup(isaId); // 2021-08-18 Jun
	e.preventDefault();
});

// Allocate Asset popup
$(document).on("click", ".cb-allocate-asset-btn", function (e) {
	var isaId = $(this).attr("data-isa-id");
	allocate_assets(isaId);
	e.preventDefault();
});

// Allocate Asset popup
$(document).on("click", ".cb-allocate-asset-view-btn", function (e) {
	var isaId = $(this).attr("data-isa-id");
	allocate_assets_viewonly(isaId);
	e.preventDefault();
});

// Deal Termination
$(document).on("click", ".cb-edit-deal-termination-approval-btn", function (e) {
	var isaId = $(this).attr("data-isa-id");
	window.open("./deal-termination-approval.php?ISA_ID=" + isaId);
	e.preventDefault();
});

// Return to DD
$(document).on("click", ".cb-return-to-dd-btn", function (e) {
	var vendorId = $(this).attr("data-vendor-id");
	returnToDealDirectory(vendorId);
	e.preventDefault();
});

// Direction To Pay
$(document).on("click", ".cb-direction-to-pay-btn", function (e) {
	var isaId = $(this).attr("data-isa-id");
	var isaName = $(this).attr("data-isa-name");
	window.open("./direction-to-pay.php?ISA_ID=" + isaId);
	e.preventDefault();
});

// Direction To Pay - View
$(document).on("click", ".cb-direction-to-pay-view-btn", function (e) {
	var isaId = $(this).attr("data-isa-id");
	var isaName = $(this).attr("data-isa-name");
	window.open("./direction-to-pay-2.php?ISA_ID=" + isaId);
	e.preventDefault();
});

// Direction To Pay - Read Only
$(document).on("click", ".cb-direction-to-pay-ro-btn", function (e) {
	var isaId = $(this).attr("data-isa-id");
	var isaName = $(this).attr("data-isa-name");
	window.open("./direction-to-pay-ro.php?ISA_ID=" + isaId);
	e.preventDefault();
});

// Sales by Production Line - TSM
$(document).on("click", ".cb-sales-by-prod-tsm-btn", function (e) {
	var isaId = $(this).attr("data-isa-id");
	var isaName = $(this).attr("data-isa-name");
	window.open(
		"https://caspio.thenetwork-crm.com/dp/25d55000f41477fde71c4f8f824b?ISA_ID=" +
			isaId
	);
	e.preventDefault();
});

// Sales By Production
$(document).on("click", ".cb-sales-by-prod-btn", function (e) {
	var isaId = $(this).attr("data-isa-id");
	var isaName = $(this).attr("data-isa-name");
	window.open(
		"https://caspio.thenetwork-crm.com/dp/25d550006be4e2361e184c20ac66?ISA_ID=" +
			isaId
	);
	e.preventDefault();
});

// Related Accounts - View
$(document).on("click", ".cb-related-accounts-view-btn", function (e) {
	var isaId = $(this).attr("data-isa-id");
	relate_all_accounts_viewonly_popup(isaId);
	e.preventDefault();
});

// Related Accounts - View TSM
$(document).on("click", ".cb-related-accounts-view-tsm-btn", function (e) {
	var isaId = $(this).attr("data-isa-id");
	relate_all_accounts_viewonly_tsm_popup(isaId);
	e.preventDefault();
});

// Related Accounts - View - Approvers
$(document).on(
	"click",
	".cb-related-accounts-view-approvers-btn",
	function (e) {
		var isaId = $(this).attr("data-isa-id");
		related_accouts_view_approvers_20220325(isaId); // declared in js/dashboard-relate-accounts.js
		e.preventDefault();
	}
);

// Log AMP
$(document).on("click", ".cb-log-amp-btn", function (e) {
	var customerId = $(this).attr("data-customer-id");

	window.open(
		"https://caspio.thenetwork-crm.com/dp/25d55000085a1a0e10d040a4a304?cid=" +
			customerId
	);
	e.preventDefault();
});

// Log AMP - ISA ID
$(document).on("click", ".cb-log-amp-isa-id-btn", function (e) {
	var isaId = $(this).attr("data-isa-id");

	window.open(
		"https://caspio.thenetwork-crm.com/dp/25d550008da940d4399e4b979ab0?ISA_ID=" +
			isaId
	);
	e.preventDefault();
});

// View Attachments DD
$(document).on("click", ".cb-attachments-dd-btn", function (e) {
	var isaId = $(this).attr("data-isa-id");

	attachments_dd_popup(isaId);
	e.preventDefault();
});

// View Attachments - TSM
$(document).on("click", ".cb-attachments-tsm-btn", function (e) {
	var isaId = $(this).attr("data-isa-id");

	attachments_tsm_popup(isaId);
	e.preventDefault();
});

// fix: drodown is hidden when shown
var timer = setInterval(function () {
	$(".cb-report").each(function () {
		if ($(this).find(".dropdown-menu.show").length) {
			if ($(this).height() < 400) {
				$(this).css({
					height:
						(
							$(this).height() + 400
						).toString() + "px",
				});
				$(".cb-cog .dropdown-menu").css({
					transform: "translate3d(37px, 0px, 0px)",
				});
			}
		} else {
			$(this).css({ height: "initial" });
			$(this).addClass("overflow-auto");
		}
	});
}, 100);

// fix: drodown is hidden when shown - deal directory
var timer = setInterval(function () {
	$(".cb-freezeheader").each(function () {
		if ($(this).find(".dropdown-menu.show").length) {
			// prevent cutted dropdown options
			$(this).removeClass("overflow-auto");
			$(this).css({ "overflow-x": "initial" });

			// always show dropdown options downward
			$(".cb-cog .dropdown-menu").css({
				transform: "translate3d(37px, 0px, 0px)",
			});
		} else {
			$(this).addClass("overflow-auto");
			$(this).css({ "overflow-x": "auto" });
		}
	});
}, 100);

function attachments_dd_popup(isaId) {
	openModal_v2(
		"ISA " + isaId + " - Attachments",
		"https://" +
			accountId +
			"/dp/" +
			appKeyPrefix +
			"13f9184697fd4de3ae54/emb?ISA_ID=" +
			isaId +
			"",
		"95%",
		"Y"
	);
}

function attachments_tsm_popup(isaId) {
	openModal_v2(
		"ISA " + isaId + " - Attachments",
		"https://" +
			accountId +
			"/dp/" +
			appKeyPrefix +
			"53c48eadeba7456ba1e7/emb?ISA_ID=" +
			isaId +
			"",
		"95%",
		"Y"
	);
}

// Filtered Document ID != P&L and Signed Docs
function attachments_filtered(isaId) {
	openModal_v2(
		"ISA " + isaId + " - Attachments",
		"https://" +
			accountId +
			"/dp/" +
			appKeyPrefix +
			"5b967310c1a34607887a/emb?ISA_ID=" +
			isaId +
			"",
		"95%",
		"Y"
	);
}

function relate_all_accounts_viewonly_tsm_popup(isaId) {
	selectedAccountsRidArr = [];

	relateAllAccountsPopup = $.confirm({
		scrollToPreviousElement: false,
		scrollToPreviousElementAnimate: false,
		type: "secondary",
		columnClass: "col-md-6 col-md-offset-3",
		icon: "",
		title: "ISA " + isaId,
		theme: "material",
		content: ' \
			<div id="cb-relate-all-accounts-main"> \
			<span style="font-size:22px; font-weight:bold;">Related Accounts</span> \
			<div id="cb-relate-all-accounts"><div class="spinner-border text-info" role="status"></div></div> \
		',
		backgroundDismiss: false,
		buttons: false,
		boxWidth: "80%",
		useBootstrap: false,
		onOpen: function () {
			deployDP(
				"cb-relate-all-accounts",
				"https://" +
					accountId +
					"/dp/" +
					appKeyPrefix +
					"d0744c037b244933ae60/emb?ISA_ID=" +
					isaId
			);
		},
	});
}

function create_cog(elem) {
	var appKey = $(elem).attr("data-appkey").toLowerCase();
	var isaId = $(elem).attr("data-isa-id");
	var vendorId = $(elem).attr("data-vendor-id");
	var isaName = $(elem).attr("data-isa-name");
	var glid = $(elem).attr("data-glid");
	var status = $(elem).attr("data-status");
	var createdBy = $(elem).attr("data-created-by");
	var lastApprover = $(elem).attr("data-last-approver");
	var terminationDate = $(elem).attr("data-termination-date");
	var customerId = $(elem).attr("data-customer-id");
	var loaded = $(elem).attr("data-loaded");

	var cogHTML = "";

	cogHTML +=
		'<div class="dropdown dropright" style="z-index:9999999 !important;">';
	cogHTML +=
		'<a class="btn btn-link btn-sm dropdown-toggle" href="#' +
		isaId +
		'" role="button" data-toggle="dropdown" aria-haspopup="true" data-bs-display="static" aria-expanded="false" title="';
	cogHTML += "ISA ID: " + isaId;
	cogHTML += glid ? "\nGLID : " + glid : "";
	cogHTML += status ? "\nStatus : " + status : "";
	cogHTML += createdBy ? "\nCreated By : " + createdBy : "";
	cogHTML += lastApprover ? "\nLast Approver : " + lastApprover : "";
	cogHTML += terminationDate
		? "\nTermination Date : " + terminationDate
		: "";
	cogHTML += customerId ? "\nCustomer ID : " + customerId : "";
	cogHTML += '">';
	cogHTML += '<i class="fas fa-cog"></i></a>';
	cogHTML +=
		'<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">';

	if ((appKey || "") == "" && cogLinks[appKey].length == 0) {
		console.log("No links - AppKey:" + appKey);
		return false;
	}

	$.each(cogLinks[appKey], function (i, link) {
		// console.log(link);
		switch (link) {
			case "View Details":
				cogHTML +=
					'<a href="#' +
					isaId +
					'" class="dropdown-item cb-view-details-btn" data-isa-id="' +
					isaId +
					'">' +
					link +
					"</a>";
				break;

			case "Edit Details":
				cogHTML +=
					'<a href="#' +
					isaId +
					'" class="dropdown-item cb-edit-details-btn" data-isa-id="' +
					isaId +
					'">' +
					link +
					"</a>";
				break;

			case "Approval Log":
				cogHTML +=
					'<a href="#' +
					isaId +
					'" class="dropdown-item cb-approval-log-btn" data-isa-id="' +
					isaId +
					'">' +
					link +
					"</a>";
				break;

			case "ComCept AR":
				cogHTML +=
					'<a href="#' +
					isaId +
					'" class="dropdown-item cb-comcept-ar-btn" data-isa-id="' +
					isaId +
					'">' +
					link +
					"</a>";
				break;

			case "ComCept Pricing":
				cogHTML +=
					'<a href="#' +
					isaId +
					'" class="dropdown-item cb-comcept-pricing-btn" data-isa-id="' +
					isaId +
					'">' +
					link +
					"</a>";
				break;

			case "View Attachments":
				cogHTML +=
					'<a href="#' +
					isaId +
					'" class="dropdown-item cb-view-attachments-btn" data-isa-id="' +
					isaId +
					'">' +
					link +
					"</a>";
				break;

			case "E-ISA Logs":
				cogHTML +=
					'<a href="#' +
					isaId +
					'" class="dropdown-item cb-isa-logs-btn" data-isa-id="' +
					isaId +
					'" data-isa-name="' +
					isaName +
					'">' +
					link +
					"</a>";
				break;

			case "Create New Deal":
				cogHTML +=
					'<a href="#' +
					isaId +
					'" class="dropdown-item cb-create-new-deal-btn" data-isa-id="' +
					isaId +
					'">' +
					link +
					"</a>";
				break;

			case "Deal Termination":
				cogHTML +=
					'<a href="#' +
					isaId +
					'" class="dropdown-item cb-deal-termination-btn" data-isa-id="' +
					isaId +
					'">' +
					link +
					"</a>";
				break;

			case "Deal Sheet View Details":
				cogHTML +=
					'<a href="#' +
					isaId +
					'" class="dropdown-item cb-deal-sheet-view-btn" data-isa-id="' +
					isaId +
					'">View Details</a>';
				break;

			case "Comments":
				cogHTML +=
					'<a href="#' +
					isaId +
					'" class="dropdown-item cb-comments-btn" data-isa-id="' +
					isaId +
					'">' +
					link +
					"</a>";
				break;

			case "Attachments":
				cogHTML +=
					'<a href="#' +
					isaId +
					'" class="dropdown-item cb-attachments-btn" data-isa-id="' +
					isaId +
					'">' +
					link +
					"</a>";
				break;

			case "Related Accounts":
				cogHTML +=
					'<a href="#' +
					isaId +
					'" class="dropdown-item cb-related-accounts-btn" data-isa-id="' +
					isaId +
					'">' +
					link +
					"</a>";
				break;

			case "Allocate Asset":
				cogHTML +=
					'<a href="#' +
					isaId +
					'" class="dropdown-item cb-allocate-asset-btn" data-isa-id="' +
					isaId +
					'">' +
					link +
					"</a>";
				break;

			case "Allocate Asset - View":
				cogHTML +=
					'<a href="#' +
					isaId +
					'" class="dropdown-item cb-allocate-asset-view-btn" data-isa-id="' +
					isaId +
					'">Allocate Asset</a>';
				break;

			case "Edit Details - Deal Approval":
				cogHTML +=
					'<a href="#' +
					isaId +
					'" class="dropdown-item cb-edit-deal-termination-approval-btn" data-isa-id="' +
					isaId +
					'">Edit Details</a>';
				break;

			case "Return to Deal Directory":
				cogHTML +=
					'<a href="#' +
					isaId +
					'" class="dropdown-item cb-return-to-dd-btn" data-isa-id="' +
					isaId +
					'" data-vendor-id="' +
					vendorId +
					'">' +
					link +
					"</a>";
				break;

			case "Direction To Pay":
				cogHTML +=
					'<a href="#' +
					isaId +
					'" class="dropdown-item cb-direction-to-pay-btn" data-isa-id="' +
					isaId +
					'">' +
					link +
					"</a>";
				break;

			case "Direction To Pay - View":
				cogHTML +=
					'<a href="#' +
					isaId +
					'" class="dropdown-item cb-direction-to-pay-view-btn" data-isa-id="' +
					isaId +
					'">Direction To Pay</a>';
				break;

			case "Direction To Pay - RO":
				cogHTML +=
					'<a href="#' +
					isaId +
					'" class="dropdown-item cb-direction-to-pay-ro-btn" data-isa-id="' +
					isaId +
					'">Direction To Pay</a>';
				break;

			case "Sales by Production Line - TSM":
				cogHTML +=
					'<a href="#' +
					isaId +
					'" class="dropdown-item cb-sales-by-prod-tsm-btn" data-isa-id="' +
					isaId +
					'">Sales by Production Line</a>';
				break;

			case "Sales by Production Line":
				cogHTML +=
					'<a href="#' +
					isaId +
					'" class="dropdown-item cb-sales-by-prod-btn" data-isa-id="' +
					isaId +
					'">Sales by Production Line</a>';
				break;

			case "Related Accounts - View":
				cogHTML +=
					'<a href="#' +
					isaId +
					'" class="dropdown-item cb-related-accounts-view-btn" data-isa-id="' +
					isaId +
					'">Related Accounts</a>';
				break;

			case "Log AMP":
				cogHTML +=
					'<a href="#' +
					isaId +
					'" class="dropdown-item cb-log-amp-btn" data-customer-id="' +
					customerId +
					'">' +
					link +
					"</a>";
				break;

			case "Log AMP - ISA ID":
				cogHTML +=
					'<a href="#' +
					isaId +
					'" class="dropdown-item cb-log-amp-isa-id-btn" data-isa-id="' +
					isaId +
					'">Log AMP</a>';
				break;

			case "Attachments DD":
				cogHTML +=
					'<a href="#' +
					isaId +
					'" class="dropdown-item cb-attachments-dd-btn" data-isa-id="' +
					isaId +
					'">Attachments</a>';
				break;

			case "View Attachments - TSM":
				cogHTML +=
					'<a href="#' +
					isaId +
					'" class="dropdown-item cb-attachments-tsm-btn" data-isa-id="' +
					isaId +
					'">View Attachments</a>';
				break;

			case "Attachments - Filtered":
				cogHTML +=
					'<a href="#' +
					isaId +
					'" class="dropdown-item cb-attachments-filtered-btn" data-isa-id="' +
					isaId +
					'">Attachments</a>';
				break;

			case "Related Accounts - View TSM":
				cogHTML +=
					'<a href="#' +
					isaId +
					'" class="dropdown-item cb-related-accounts-view-tsm-btn" data-isa-id="' +
					isaId +
					'">Related Accounts</a>';
				break;

			case "Related Accounts - View - Approvers":
				cogHTML +=
					'<a href="#' +
					isaId +
					'" class="dropdown-item cb-related-accounts-view-approvers-btn" data-isa-id="' +
					isaId +
					'">Related Accounts</a>';
				break;

			case "Return to Contract Phase":
				cogHTML +=
					'<a href="#' +
					isaId +
					'" class="dropdown-item cb-return-2-contract-phase-btn" data-isa-id="' +
					isaId +
					'">' +
					link +
					"</a>";
				break;

			case "Create New Deal - TSM":
				cogHTML +=
					'<a href="#' +
					isaId +
					'" class="dropdown-item cb-create-new-deal-tsm-btn" data-isa-id="' +
					isaId +
					'">Create New Deal</a>';
				break;
		}
	});

	cogHTML += "</div></div>";

	$(elem).html(cogHTML);
	$(elem).attr("data-loaded", "Y");
}
