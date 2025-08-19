var accountId = 'caspio.thenetwork-crm.com';
var appKeyPrefix = '25d55000';

var cogLinks = {
  // TSM
  '1185f2ac033f4e328f6d': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
  , '9a536459cb524a21a164': ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Deal Sheet
  , '0a2f719017544bc4b36c': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Contract Phase
  , '2223af6dd1c9488e8f06': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Work Queue
  , 'b6d70f7d2e2a434eb356': ['Log AMP - ISA ID', 'Comments', 'Attachments - Filtered', 'Related Accounts - View TSM', 'Create New Deal - TSM', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line - TSM', 'Rebate Details'] // Deal Directory
  , '9069386b8631401fb7e6': ['View Details', 'Comments', 'View Attachments', 'E-ISA Logs', 'Related Accounts - View - Approvers', 'ComCept AR', 'ComCept Pricing'] //  Breach Work Queue

  // ISM
  , 'cb84c187969741a4a13f': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
  , 'ce41e85ce1c74eccade0': ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Deal Sheet
  , '52a1c1ff483a4d739db7': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Contract Phase
  , '1c72dd979e5a407f8f95': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Work Queue
  , '69b133f4c3f548deae74': ['Log AMP - ISA ID', 'Comments', 'Attachments - Filtered', 'Related Accounts - View TSM', 'Create New Deal', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line - TSM', 'Rebate Details'] // Deal Directory

  // CSM
  , '642bf897f8cb4822b114': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
  , '5ba492386e794f759376': ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Deal Sheet
  , '0d64254591ee4530b99e': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Contract Phase
  , 'a23e74b814f3478ea02e': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Work Queue

  // RSM
  , '976d73e526d3456baef1': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
  , 'ef4f72f459204f69a3cd': ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Deal Sheet
  , 'f0fdabaca1fb40dbb4e3': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Contract Phase
  , '776c517679d747fdbc51': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Work Queue
  , 'f0197819e0bb48ac81f8': ['Log AMP - ISA ID', 'View Details', 'Comments', 'Attachments', 'Related Accounts - View - Approvers', 'Allocate Asset - View', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] // Deal Directory
  , '2381f2265d35423f8a95': ['Log AMP - ISA ID', 'View Details', 'Comments', 'Attachments', 'Related Accounts - View - Approvers', 'Allocate Asset - View', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line', 'Rebate Details'] // Deal Directory 2
  , 'c0cd16c2b63a4409bfc4': ['View Details', 'Comments', 'View Attachments', 'E-ISA Logs', 'Related Accounts - View - Approvers', 'ComCept AR', 'ComCept Pricing'] //  Breach Work Queue
  , '9be3072c7119479493ab': ['View Details', 'Attachments', 'Comments', 'Related Accounts - View', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Rebate Details'] // All E-ISA

  // BDM
  , 'cc0ebfcbff93426db2c9': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
  , '55e35cc444a348baba82': ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Deal Sheet
  , '9d2438a5972948a4ad9c': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Contract Phase
  , 'b035a5e1c880477082ef': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Work Queue
  , 'f0197819e0bb48ac81f8': ['Log AMP - ISA ID', 'View Details', 'Comments', 'Attachments', 'Related Accounts - View - Approvers', 'Allocate Asset - View', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] // Deal Directory
  , '037cd8daa4744c1095bf': ['Log AMP - ISA ID', 'View Details', 'Comments', 'Attachments', 'Related Accounts - View - Approvers', 'Allocate Asset - View', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line', 'Rebate Details'] // Deal Directory 2
  , '004eeaea2c7745e5ae04': ['View Details', 'Comments', 'View Attachments', 'E-ISA Logs', 'Related Accounts - View - Approvers', 'ComCept AR', 'ComCept Pricing'] //  Breach Work Queue
  , 'e3f818363e9c4ab4be37': ['View Details', 'Attachments', 'Comments', 'Related Accounts - View', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Rebate Details'] // All E-ISA

  // VPAS
  , 'c5c620953d4e41c8a6b0': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
  , '6ced6f3658ae4a5797eb': ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Deal Sheet
  , '0d1e3c356c34486a949e': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Contract Phase
  , 'a11769bbe9204681b461': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Work Queue

  // AS
  , '1b18c61d8377443e915e': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
  , 'c0d9a71fa64048ffba94': ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Deal Sheet
  , 'abf136362718411482af': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Contract Phase
  , '167b65d945cf465db644': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Work Queue
  // SO
  , 'df7e675a929b4d5d9e18': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
  , '88d3233f3c974d329612': ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Deal Sheet
  , '29f83edbcbfe4725bc5c': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Contract Phase
  , 'd5045c5a3a1b400ba814': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Work Queue
  , 'f6ed409a607c417ca803': ['View Details', 'View Attachments', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] //  Deal Directory

  // AR
  , '8a4e8fb15bc044b39973': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
  , '6d1706f56db2429da3a6': ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Deal Sheet
  , 'd75bcbe180c44081aa4e': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Contract Phase
  , '36299c5c906a4ee08ccf': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Work Queue
  , '6663b65b7c1d4a16b0cd': ['View Details', 'View Attachments', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] //  Deal Directory

  // SRF
  , 'aa384620ff254b92b1cf': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Work Queue
  , 'cd459224e8cb4873a81c': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View']
  , 'baa1a7d4eeb04876b12a': ['View Details', 'Comments', 'View Attachments', 'E-ISA Logs', 'Related Accounts - View - Approvers', 'ComCept AR', 'ComCept Pricing'] //  Breach Work Queue
  , '802dc2840bea43189488': ['View Details', 'Comments', 'View Attachments', 'E-ISA Logs', 'Related Accounts - View - Approvers', 'ComCept AR', 'ComCept Pricing']
  // AP
  , '59cc6167add944f88255': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
  , '5faeb3716d6247faabec': ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Deal Sheet
  , 'a37cf779f5514785a353': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Contract Phase
  , '82ff9a7287bc4e4bacbd': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Work Queue
  , 'f62ddfe088ee4839905b': ['View Details', 'View Attachments', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] //  Deal Directory

  // ACCOUNTING
  , '54d1227b8dfe47f3b66a': ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Deal Sheet
  , '180728d690f44d8690b7': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Contract Phase
  , '10965298a14d4e4a95f5': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Work Queue

  // MARKETING
  , '48c33b104c034a95b6f0': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
  , 'ff86c1881b8e42509158': ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Deal Sheet
  , 'e509953d39dd416f9885': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Contract Phase
  , '436243ac2b7d402d8ca4': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Work Queue
  , 'd4066d2600604fb4b044': ['View Details', 'View Attachments', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] //  Deal Directory

  // SI
  , '83f38403e4df41ca8b29': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
  , 'ad8d0db748404cf0bc8e': ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Deal Sheet
  , '46e38123178e4f299437': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Contract Phase
  , 'ea99476b3c0841df9794': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Work Queue
  , '9b2b60bac6e546a88e3e': ['View Details', 'View Attachments', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] //  Deal Directory

  // DSM
  , '4edbee9e40e04e2187ea': ['View Details', 'Edit Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  For Approval
  , '501b4703902742ba943b': ['View Details', 'Edit Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  Upcoming
  , '373f68913389461ab0f1': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
  , 'c6e82615b09a4a29b971': ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Deal Sheet
  , '91a77b138d894f2981c3': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Contract Phase
  , 'c88787cce98847809654': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Phase,
  , '498c7df29bdc4cc492ef': ['Log AMP - ISA ID', 'View Details', 'Comments', 'Attachments', 'Related Accounts - View - Approvers', 'Allocate Asset - View', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] // Deal Directory
  , '1fcfbe0ec9a442fda5e7': ['Log AMP - ISA ID', 'View Details', 'Comments', 'Attachments', 'Related Accounts - View - Approvers', 'Allocate Asset - View', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line', 'Rebate Details'] // Deal Directory 2
  , 'a8b40053c0884c1eb336': ['View Details', 'Attachments', 'Comments', 'E-ISA Logs', 'Sales by Production Line'] // Historical Deal Directory
  , '3d8e235e464e4fffa171': ['View Details', 'Attachments', 'Comments', 'Related Accounts - View', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Rebate Details'] // All E-ISA

  // RVPS
  , '6f42e1516e404872a6e0': ['View Details', 'Edit Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  My Approval Needed
  , 'd10e87ac23934e6ea6a7': ['View Details', 'Edit Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  Upcoming
  , 'fe86dc8d828d4789a6cf': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
  , 'd4a52e2b06b842b68621': ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Deal Sheet
  , '2cf1ddd43f0f481fb7ba': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Contract Phase
  , '9ffa2ad8958f48618244': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Phase
  , 'bac4985cc0ac485797ae': ['Log AMP - ISA ID', 'View Details', 'Comments', 'Attachments', 'Related Accounts - View - Approvers', 'Allocate Asset - View', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] // Deal Directory
  , 'cc670d6248c74a58b3f7': ['Log AMP - ISA ID', 'View Details', 'Comments', 'Attachments', 'Related Accounts - View - Approvers', 'Allocate Asset - View', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line', 'Rebate Details'] // Deal Directory 2
  , '7ba75dbee7514783bf66': ['View Details', 'Attachments', 'Comments', 'E-ISA Logs', 'Sales by Production Line'] // Historical Deal Directory
  , '9178512346144f89872a': ['View Details', 'Attachments', 'Comments', 'Related Accounts - View', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Rebate Details'] // All E-ISA

  // RVPO
  , 'fc4bbd7c6efd42d8a054': ['View Details', 'Edit Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  My Approval Needed
  , '3ef9a47811644199a23c': ['View Details', 'Edit Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  Upcoming
  , 'a1bbaaf274dd4f81815b': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
  , 'a59019ad599e4c3da886': ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Deal Sheet
  , '4f85b00edc674c508671': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Contract Phase
  , '2988a6ec8518489d83a4': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Phase
  , '136439fb7aec407cbed5': ['Log AMP - ISA ID', 'View Details', 'Comments', 'Attachments', 'Related Accounts - View - Approvers', 'Allocate Asset - View', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] // Deal Directory
  , 'fbd0edcb06834f76b169': ['Log AMP - ISA ID', 'View Details', 'Comments', 'Attachments', 'Related Accounts - View - Approvers', 'Allocate Asset - View', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line', 'Rebate Details'] // Deal Directory 2
  , 'b4bf730cf8f74ae48005': ['View Details', 'Attachments', 'Comments', 'E-ISA Logs', 'Sales by Production Line'] // Historical Deal Directory
  , 'af1e35d3bda34726838c': ['View Details', 'Attachments', 'Comments', 'Related Accounts - View', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Rebate Details'] // All E-ISA
  , '27b1a68209c846f4b953': ['Attachments'] // Document Exception Report

  // ISA Team
  , 'f21b4c25029f4d0b8119': ['Edit Details - Deal Approval'] //  My Approval Needed - Deal Termination
  , 'a99169350b1b4db3a9ba': ['View Details', 'Edit Details', 'E-ISA Logs', 'Comments', 'Attachments', 'Related Accounts', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  For Approval
  , 'df39ad1f875242d2a00e': ['View Details', 'Edit Details', 'E-ISA Logs', 'Comments', 'Attachments', 'Related Accounts', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  Upcoming
  , 'a09712dd599e4a3c8c6d': ['View Details', 'Edit Details', 'E-ISA Logs', 'Comments', 'Attachments', 'Related Accounts', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  Approved
  , '0819d4e46cda412c91cd': ['View Details', 'Edit Details', 'E-ISA Logs', 'Comments', 'Attachments', 'Related Accounts', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay', 'Contract Summary Exhibit C'] //  Deal Sheet
  , 'fdddd86086af4c4bad51': ['View Details', 'Edit Details', 'E-ISA Logs', 'Comments', 'Attachments', 'Related Accounts', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay', 'Contract Summary Exhibit C'] //  Contract Phase
  , '2374e8f1c2ba439fa800': ['View Details', 'Return to Contract Phase', 'E-ISA Logs', 'Comments', 'Attachments', 'Related Accounts', 'Allocate Asset', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  Execution Phase
  , '63f217cac0c847ad8a1b': ['View Details', 'Edit Details', 'Comments', 'Attachments', 'Related Accounts', 'Allocate Asset', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay', 'Sales by Production Line', 'Manufacturer Subscription Fee Summary', 'Log1c Subscription Fee Summarys'] // Deal Directory
  , '7229fa8e5f50432da038': ['View Details', 'Edit Details', 'Comments', 'Attachments', 'Related Accounts', 'Allocate Asset', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay', 'Sales by Production Line', 'Rebate Details'] // Deal Directory 2
  , 'ffc1c7c866bc4df4b5af': ['View Details', 'Comments', 'Attachments', 'E-ISA Logs', 'Related Accounts - View', 'Return to Deal Directory', 'Allocate Asset', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  Breach Work Queue
  , '4715d70e3b0049f9977e': ['View Details', 'Comments', 'Attachments', 'E-ISA Logs', 'Related Accounts', 'Return to Deal Directory', 'Allocate Asset', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  Breach Work Queue
  , '1fe1ec21b4a5407f9a47': ['View Details', 'Attachments', 'Comments', 'Related Accounts - View', 'E-ISA Logs', 'Sales by Production Line'] // Historical Deal Directory
  , '03f26711e51e4fab9a50': ['View Details', 'Attachments', 'Comments', 'Related Accounts', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Rebate Details'] // All E-ISA
  , '4ca8ca654bd04e73983f': ['View Details', 'Attachments', 'Comments', 'Related Accounts - View', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Rebate Details'] // All E-ISA
  , '3f26307cea88482b9ac9': ['View Details', 'Allocate Asset'] // Deal Amortization
  , 'de68c8357bc94d299955': ['View Details', 'Edit Details', 'Comments', 'Attachments', 'Related Accounts', 'Allocate Asset', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay', 'Sales by Production Line', 'Rebate Details'] // Related Accounts Tabular Modal

  // KN
  , '0dabc5498b964a83a86c': ['View Details', 'Edit Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  For Approval
  , 'db11e61595b14d4ba536': ['View Details', 'Edit Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  Upcoming
  , '9e4c4d40178d42369224': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
  , '7b1d550c683048f3924f': ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Deal Sheet
  , '9d4ba8d1b7734999b100': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Contract Phase
  , '62ebac071ec04163bf0a': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Phase


  // CFO
  , '06ce40d0417f4027b4fc': ['View Details', 'Edit Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  For Approval
  , '9368d56af6fb492fb4ea': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  Upcoming
  , 'dd925984a1c4414f8512': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
  , '61dc141eaf044e038e3c': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Deal Sheet
  , '4f8d4ccb944a4127bb91': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Contract Phase
  , '62ebac071ec04163bf0a': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Phase

  // COO
  , '1269e55e73e34b5cbb88': ['View Details', 'Edit Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  For Approval
  , 'b94b0919d1254effb3e1': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  Upcoming
  , 'ca4b4f90e2e7437cb94a': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved

  // CEO
  , 'd1a02f1ce3d443eab14b': ['View Details', 'Edit Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  For Approval
  , '6c55b7f7f14d4106acba': ['View Details', 'Edit Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  Upcoming
  , '5e3efbb2501443789cf6': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Deal Sheet
  , '5a6aa2aa2e734b97aca6': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Contract Phase

  // Store Manager
  , '39a001159a514e4abfd7': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  For Approval
  , '06ce8ef9da074107ae34': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  Upcoming
  , '9daef365cb2348b3b65a': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
  , '570e6ee879aa4ccca281': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Deal Sheet
  , '3324267a4fcb4139a921': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Contract Phase
  , '9f8b1b08830d48139803': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Phase
  , '4a8f0b79a16c4b589987': ['Log AMP - ISA ID', 'Comments', 'Attachments - Filtered', 'Related Accounts - View - Approvers', 'Create New Deal', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line - TSM', 'Rebate Details'] // Deal Directory 2
  , 'df460ba8283b41008c99': ['View Details', 'Attachments', 'Comments', 'E-ISA Logs', 'Sales by Production Line'] // Historical Deal Directory
  , 'efc74fd048fb4013b3d1': ['View Details', 'Attachments - Filtered', 'Comments', 'Related Accounts - View', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Rebate Details'] // All E-ISA

  // DOM
  , '0d9969d702e049d8bd77': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  For Approval
  , 'c93f972dd87b402aae12': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  Upcoming
  , '71f7a7c3a0b3458f8ac8': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
  , '4618793597d64d6b9094': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Deal Sheet
  , '1436b15bf0bb42a28222': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Contract Phase
  , '327796dcd81547789f6c': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Phase
  , '25262312258a45e3ae1e': ['Log AMP - ISA ID', 'View Details', 'Comments', 'Attachments', 'Related Accounts - View - Approvers', 'Allocate Asset - View', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] // Deal Directory
  , 'addcd06cf8594dfba8b4': ['Log AMP - ISA ID', 'View Details', 'Comments', 'Attachments', 'Related Accounts - View - Approvers', 'Allocate Asset - View', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line', 'Rebate Details'] // Deal Directory 2
  , 'c5134e9e869d4425a967': ['View Details', 'Attachments', 'Comments', 'E-ISA Logs', 'Sales by Production Line'] // Historical Deal Directory
  , '5aa9c94f8e5a444aabd7': ['View Details', 'Attachments', 'Comments', 'Related Accounts - View', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Rebate Details'] // All E-ISA
  , '44579d67bb704b1eadb6': ['Attachments'] // Document Exception Report

  // ISA Pricing
  , 'ef76b73d6082474aadbe': ['View Details', 'Return to Contract Phase', 'Comments', 'Attachments', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - RO'] //  WQ
  , 'd8053e16d8d14ecf8c21': ['View Details', 'Comments', 'Attachments', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - RO'] //  WQ

  // ISA Credit
  , 'c6624f2eb92544e6b89f': ['View Details', 'Return to Contract Phase', 'Comments', 'Attachments', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - RO'] //  WQ
  , '087fc11aa0034a2f8e7d': ['View Details', 'Comments', 'Attachments', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - RO'] //  WQ
  , '6395b6c851194e1c9291': ['View Details', 'Comments', 'Attachments', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - RO'] //  WQ

  // ISA Finance
  , '3d55741dfcb44c6aa8f1': ['View Details', 'Return to Contract Phase', 'Comments', 'Attachments', 'Related Accounts - View - Approvers', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  WQ
  , '7446581508a7475095a0': ['View Details', 'Comments', 'Attachments', 'Related Accounts - View - Approvers', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  WQ
  , '3cba56b852da4645ac6b': ['View Details', 'Comments', 'Attachments', 'Related Accounts - View - Approvers', 'Allocate Asset - View', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay', 'Sales by Production Line'] // Deal Directory
  , '8604295b600d4e91baa4': ['View Details', 'Comments', 'Attachments', 'Related Accounts - View - Approvers', 'Allocate Asset - View', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay', 'Sales by Production Line', 'Rebate Details'] // Deal Directory 2
  , '0d4225fbcf084821ab11': ['View Details']


  // ISA Procurement
  , 'f7400819e1704df39330': ['View Details', 'Return to Contract Phase', 'Comments', 'Attachments', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - RO'] //  WQ
  , 'a850778d63474cd98958': ['View Details', 'Comments', 'Attachments', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - RO'] //  WQ

  // Logic ICS
  , '54dd726bcf644b4bb4fb': ['View Details', 'Comments', 'Attachments', 'Related Accounts - View - Approvers', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - RO', 'E-ISA Logs']
  , '1ded9b7819d34c5894a5': ['View Details', 'Return to Contract Phase', 'Comments', 'Attachments', 'Related Accounts - View - Approvers', 'E-ISA Logs']

  // Logic Team
  , '0faff3f982f24ec8a871': ['Log AMP - ISA ID', 'Attachments', 'Related Accounts - View - Approvers', 'ComCept AR', 'ComCept Pricing', 'Rebate Details'] // Deal Directory 2


  // CFO COO CEO
  , '2282c5791cb246e6b593': ['View Details', 'Attachments', 'Comments', 'E-ISA Logs', 'Sales by Production Line'] // Historical Deal Directory

  // Breach/Termination WQ
  , 'f91c845405554b4f85f7': ['View Details', 'Comments', 'Attachments', 'E-ISA Logs', 'Related Accounts - View - Approvers', 'ComCept AR', 'ComCept Pricing'] //  Breach Work Queue
  , '7e78bfffce2140e897e4': ['View Details', 'Comments', 'Attachments', 'E-ISA Logs', 'Related Accounts - View - Approvers', 'ComCept AR', 'ComCept Pricing'] //  Breach Work Queue
  , '0e4ea070622a487ebc5e': ['View Details', 'Comments', 'Attachments', 'E-ISA Logs', 'Related Accounts - View - Approvers', 'ComCept AR', 'ComCept Pricing'] //  Breach Work Queue
  , '3f9f6daf53f7485298ba': ['View Details', 'Comments', 'Attachments', 'E-ISA Logs', 'Related Accounts - View - Approvers', 'ComCept AR', 'ComCept Pricing'] //  Breach Work Queue
  , '618c4b059e5940538a50': ['View Details', 'Comments', 'Attachments', 'E-ISA Logs', 'Related Accounts - View - Approvers', 'ComCept AR', 'ComCept Pricing'] //  Breach Work Queue

  // Shared
  , 'eceb3babc05f41dcad98': ['View Details']
  , 'da025f6ccee643b7821a': ['Log AMP - ISA ID', 'View Details', 'Comments', 'Attachments', 'Related Accounts - View - Approvers', 'Allocate Asset - View', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] // Deal Directory
  , '47bbef748cce468fb668': ['Log AMP - ISA ID', 'View Details', 'Comments', 'Attachments', 'Related Accounts - View - Approvers', 'Allocate Asset - View', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line', 'Rebate Details'] // Deal Directory 2
  , '7fb89b3497914e4c9e47': ['Log AMP - ISA ID', 'View Details', 'Comments', 'Attachments', 'Related Accounts - View - Approvers', 'Allocate Asset - View', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line', 'Rebate Details'] // Deal Directory 2 - CEO, CFO, COO, KN
  , '71f1f8e38658430eb8ec': ['View Details', 'Attachments - Filtered', 'Comments', 'Related Accounts - View', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Rebate Details'] // All E-ISA - TSM/ISM

  // Shared - DD - Pricing, Procurement, Logic ICS
  , '716389683bcc4bc6a8e8': ['View Details', 'Comments', 'Attachments', 'Related Accounts - View - Approvers', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View']

  // Shared - Accounting, AP, AR, CEO, CFO, COO, KN, Marketing, SI, SO, SRF, VPAS, VPCS
  , 'd874a2c12e7243a7a95b': ['View Details', 'Attachments', 'Comments', 'Related Accounts - View', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Rebate Details'] // All E-ISA

  // Users
  , '9813a8444b764f8590ac': ['Log AMP - ISA ID', 'View Details', 'Comments', 'Attachments', 'Related Accounts - View - Approvers', 'Allocate Asset - View', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] // Deal Directory

  // Corporate View 2 - SO, AR, SRF, AP, Accounting, Marketing, SI, AS
  , 'bfa722118b084563a76b': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
  , '5e1ac67415084caea36a': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View']
  , 'db9b45f96d60499ab60f': ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Deal Sheet
  , '97e681cfd8604a389b78': ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C']
  , '275f9d183007482e952b': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C'] //  Contract Phase
  , '66db975f7ab84cf08b1e': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Contract Summary Exhibit C']
  , '4623dcf06eeb4a09a9cd': ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Work Queue
  , 'ef0488b6fd5a42668381': ['View Details', 'Comments', 'View Attachments', 'E-ISA Logs', 'Related Accounts - View - Approvers', 'ComCept AR', 'ComCept Pricing'] //  Breach Work Queue
  , '372cdb98ea0342b0b0ca': ['View Details', 'Comments', 'View Attachments', 'E-ISA Logs', 'Related Accounts - View - Approvers', 'ComCept AR', 'ComCept Pricing'] //  Breach Work Queue
  // ISA Team DD - Temporary page for formula verification
  , '1c72a60eee144283bcb2': ['View Details', 'Edit Details', 'Comments', 'Attachments', 'Related Accounts', 'Allocate Asset - View', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay', 'Sales by Production Line'] // Deal Directory

  // Document Exception Report
  , '19b3877ad27a414e9e23': ['Attachments'] // SO, AR, SRF, AP, Accounting, SI, AS, Tom Blawsch, CFO, CEO, COO, User Group
  , '9151f78f74d948f8b8be': ['Attachments'] // DOM
};

/*
  TSM
  // , '9b4423d2683543168fc8' : ['Log AMP', 'Create New Deal', 'View Attachments - TSM','ComCept Pricing', 'ComCept AR', 'Deal Termination'] //  Deal Directory
  // , '9b4423d2683543168fc8' : ['Log AMP - ISA ID', 'View Details', 'Comments', 'Attachments', 'Related Accounts - View', 'Allocate Asset - View', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] // Deal Directory
  // , '9b4423d2683543168fc8' : ['Log AMP - ISA ID', 'Comments', 'Attachments - Filtered', 'Related Accounts - View TSM', 'Create New Deal', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] // Deal Directory

  ISM
  // , 'fe0e6382d2444a2bacd2' : ['Log AMP', 'Create New Deal', 'View Attachments - TSM','ComCept Pricing', 'ComCept AR', 'Deal Termination'] //  Deal Directory
  // , 'fe0e6382d2444a2bacd2' : ['Log AMP - ISA ID', 'View Details', 'Comments', 'Attachments', 'Related Accounts - View', 'Allocate Asset - View', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] // Deal Directory
  // , 'fe0e6382d2444a2bacd2' : ['Log AMP - ISA ID', 'Comments', 'Attachments - Filtered', 'Related Accounts - View', 'Create New Deal', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] // Deal Directory

  // VPCS
  // , '30e0e7823ed54d798780' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
  // , 'c98170f9eded4130a19b' : ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Deal Sheet
  // , '423c090012f7461da4c7' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Contract Phase
  // , '634ec4d549ee44c8806e' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Work Queue
  // , '2c7a58724a774de38563' : ['View Details', 'View Attachments', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] //  Deal Directory

  RSM
  // , '7de177a7731b450bbd2e' : ['View Details', 'View Attachments', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] //  Deal Directory

  BDM
  // , '7de177a7731b450bbd2e' : ['View Details', 'View Attachments', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] //  Deal Directory

  SRF
  , '1d60a60c37814804a71d' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
  , '9d28f5ea60504856aafc' : ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Deal Sheet
  , '6d27e86927ec4182a204' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Contract Phase
  , '56e6be491f1046bebe42' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Work Queue
  , 'fc10589851974509a116' : ['View Details', 'View Attachments', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] //  Deal Directory

  Accounting
  // , 'e38a97f2264947ff9437' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
  // , '6a69946586474e9b81f5' : ['View Details', 'View Attachments', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] //  Deal Directory

  DSM
  // , 'fc59a60ab6b84edd9ae5' : ['View Details', 'View Attachments', 'E-ISA Logs', 'Create New Deal', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] //  Deal Directory

  RVPS
  // , '6d2a88fd38854a2a94fd' : ['View Details', 'View Attachments', 'E-ISA Logs', 'Create New Deal', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] //  Deal Directory
  RVPO
  // , '880bbe8872954a8aa533' : ['View Details', 'View Attachments', 'E-ISA Logs', 'Create New Deal', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] //  Deal Directory

  ISA Team
  // , '5eeb15dbeb1a425c908a' : ['View Details', 'Edit Details', 'Comments', 'Attachments', 'Related Accounts', 'Allocate Asset', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay', 'Sales by Production Line'] //  Deal Directory

  Tom B.
  // , '060418d036fb4620b99d' : ['View Details', 'Comments', 'Attachments', 'Related Accounts', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] //  Deal Directory

  CFO
  // , '4b797fb9e94c4e63a277' : ['View Details', 'Comments', 'Attachments', 'Related Accounts - View', 'Allocate Asset - View', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line', 'Contract Summary Exhibit C'] //  Deal Directory

  COO
  // , '4fb97b82947d43e9a1df' : ['View Details', 'Comments', 'Attachments', 'Related Accounts - View', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] //  Deal Directory


  CEO
  // , '63e4ecc84bdc45c8ae24' : ['View Details', 'Comments', 'Attachments', 'Related Accounts - View', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] //  Deal Directory

  SM
  // , 'babdfe7b901543cd97a7' : ['View Details', 'View Attachments', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] //  Deal Directory
  // , 'ba77fd397d0447618aa9' : ['Log AMP - ISA ID', 'View Details', 'Comments', 'Attachments', 'Related Accounts - View - Approvers', 'Allocate Asset - View', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] // Deal Directory
  // , 'ba77fd397d0447618aa9' : ['Log AMP - ISA ID', 'Comments', 'Attachments - Filtered', 'Related Accounts - View - Approvers', 'Create New Deal', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line - TSM'] // Deal Directory

  DOM
  // , '83cd1d9bc2a84bfdbdce' : ['View Details', 'View Attachments', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] //  Deal Directory

  ISA Finance
  // , '557ad1dc6f6d4f37a358' : ['View Details', 'Comments', 'Attachments', 'Related Accounts - View - Approvers', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  DD

  Logic Team
  // , '6480d771014c4ed59ef4' : ['View Details', 'Comments', 'Attachments', 'Related Accounts - View - Approvers', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  WQ
  // , '062b685892134a299a59' : ['View Details', 'Comments', 'Attachments', 'Related Accounts - View - Approvers', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  WQ

  Users
  // , '9efc26337fa547d680f5' : ['View Details', 'View Attachments', 'E-ISA Logs', 'Create New Deal', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View', 'Sales by Production Line'] // DD
*/

var newCogLinks = {};

$.each(cogLinks, function (appkey, links) {
  var loweredAppKey = appkey.toLowerCase();
  newCogLinks[appKeyPrefix + loweredAppKey] = links;
});

cogLinks = newCogLinks;

document.addEventListener('DataPageReady', function (event) {
  $('.cb-cog').each(function () {
    create_cog(this);
    
  });
});

$(document).on('click', '*[name="Mod0InlineEditCancel"]', function (e) {
  $('.cb-cog').each(function () {
    create_cog(this);
  });
});

// View Details
$(document).on('click', '.cb-view-details-btn', function (e) {
  var isaId = $(this).attr('data-isa-id');
  window.open('./approval-view-details.php?ISA_ID=' + isaId);
  e.preventDefault();
});

// View Attachments
$(document).on('click', '.cb-view-attachments-btn', function (e) {
  var isaId = $(this).attr('data-isa-id');
  // window.open('./view-attachments.php?ISA_ID=' + isaId);
  window.open(`../shared/document-hub.php?ISA_ID=${isaId}`)
  e.preventDefault();
});

// Create New Deal
$(document).on('click', '.cb-create-new-deal-btn', function (e) {
  var isaId = $(this).attr('data-isa-id');
  create_new_deal(isaId);
});

// Create New Deal TSM
$(document).on('click', '.cb-create-new-deal-tsm-btn', function (e) {
  var isaId = $(this).attr('data-isa-id');
  create_new_deal_tsm(isaId);
});

// Edit Details
$(document).on('click', '.cb-edit-details-btn', function (e) {
  var isaId = $(this).attr('data-isa-id');
  window.open('./allied-set-up.php?ISA_ID=' + isaId + '&Section_ID=11');
  e.preventDefault();
});

// Approval Log
$(document).on('click', '.cb-approval-log-btn', function (e) {
  var isaId = $(this).attr('data-isa-id');
  window.open('./approval-log.php?ISA_ID=' + isaId);
  e.preventDefault();
});

// Comcept Ar
$(document).on('click', '.cb-comcept-ar-btn', function (e) {
  var isaId = $(this).attr('data-isa-id');
  window.open('https://' + accountId + '/dp/' + appKeyPrefix + 'afc3de934aca44af88d4?ISA_ID=' + isaId);
  e.preventDefault();
});

// Comcept Pricing
$(document).on('click', '.cb-comcept-pricing-btn', function (e) {
  var isaId = $(this).attr('data-isa-id');
  window.open('../shared/comcept-pricing.php?ISA_ID=' + isaId);
  e.preventDefault();
});

// E-ISA Logs
$(document).on('click', '.cb-isa-logs-btn', function (e) {
  var isaId = $(this).attr('data-isa-id');
  var isaName = $(this).attr('data-isa-name') || '';
  window.open('./change-log.php?ISA_ID=' + isaId + '&id=' + isaId + '&ISA_Name=' + isaName);
  e.preventDefault();
});

// Deal Termination
$(document).on('click', '.cb-deal-termination-btn', function (e) {
  var isaId = $(this).attr('data-isa-id');
  window.open('./deal-termination.php?ISA_ID=' + isaId);
  e.preventDefault();
});

// Deal Sheet View
$(document).on('click', '.cb-deal-sheet-view-btn', function (e) {
  var isaId = $(this).attr('data-isa-id');
  window.open('./deal-sheet-view.php?ISA_ID=' + isaId);
  e.preventDefault();
});

// Comments popup
$(document).on('click', '.cb-comments-btn', function (e) {
  var isaId = $(this).attr('data-isa-id');
  view_comments(isaId);
  e.preventDefault();
});

// Attachments popup
$(document).on('click', '.cb-attachments-btn', function (e) {
  var isaId = $(this).attr('data-isa-id');
  // attachments_popup(isaId);
  window.open(`../shared/document-hub.php?ISA_ID=${isaId}`)
  e.preventDefault();
});

// Attachments popup
$(document).on('click', '.cb-attachments-filtered-btn', function (e) {
  var isaId = $(this).attr('data-isa-id');
  //attachments_filtered(isaId);
  window.open(`../shared/document-hub.php?ISA_ID=${isaId}`)
  e.preventDefault();
});

// Related Accounts popup
$(document).on('click', '.cb-related-accounts-btn', function (e) {
  var isaId = $(this).attr('data-isa-id');
  // relatedAccounts(isaId); // 2021-08-18 Jun
  relate_all_accounts_popup(isaId); // 2021-08-18 Jun
  e.preventDefault();
});

// Allocate Asset popup
$(document).on('click', '.cb-allocate-asset-btn', function (e) {
  var isaId = $(this).attr('data-isa-id');
  allocate_assets(isaId);
  e.preventDefault();
});

// Allocate Asset popup
$(document).on('click', '.cb-allocate-asset-view-btn', function (e) {
  var isaId = $(this).attr('data-isa-id');
  allocate_assets_viewonly(isaId);
  e.preventDefault();
});

// Deal Termination
$(document).on('click', '.cb-edit-deal-termination-approval-btn', function (e) {
  var isaId = $(this).attr('data-isa-id');
  window.open('./deal-termination-approval.php?ISA_ID=' + isaId);
  e.preventDefault();
});

// Return to DD
$(document).on('click', '.cb-return-to-dd-btn', function (e) {
  var vendorId = $(this).attr('data-vendor-id');
  returnToDealDirectory(vendorId);
  e.preventDefault();
});

// Direction To Pay
$(document).on('click', '.cb-direction-to-pay-btn', function (e) {
  var isaId = $(this).attr('data-isa-id');
  var isaName = $(this).attr('data-isa-name');
  window.open('./direction-to-pay.php?ISA_ID=' + isaId);
  e.preventDefault();
});

// Direction To Pay - View
$(document).on('click', '.cb-direction-to-pay-view-btn', function (e) {
  var isaId = $(this).attr('data-isa-id');
  var isaName = $(this).attr('data-isa-name');
  window.open('./direction-to-pay-2.php?ISA_ID=' + isaId);
  e.preventDefault();
});

// Direction To Pay - Read Only
$(document).on('click', '.cb-direction-to-pay-ro-btn', function (e) {
  var isaId = $(this).attr('data-isa-id');
  var isaName = $(this).attr('data-isa-name');
  window.open('./direction-to-pay-ro.php?ISA_ID=' + isaId);
  e.preventDefault();
});

// Sales by Production Line - TSM
$(document).on('click', '.cb-sales-by-prod-tsm-btn', function (e) {
  var isaId = $(this).attr('data-isa-id');
  var isaName = $(this).attr('data-isa-name');
  window.open(`https://${accountId}/dp/${appKeyPrefix}f41477fde71c4f8f824b?ISA_ID=${isaId}`);
  e.preventDefault();
});

// Sales by Production Line - Corp 1 and 2
$(document).on('click', '.cb-sales-by-prod-btn', function (e) {
  var isaId = $(this).attr('data-isa-id');
  var isaName = $(this).attr('data-isa-name');
  window.open(`https://${accountId}/dp/${appKeyPrefix}6be4e2361e184c20ac66?ISA_ID=${isaId}`);
  e.preventDefault();
});

// Related Accounts - View
$(document).on('click', '.cb-related-accounts-view-btn', function (e) {
  var isaId = $(this).attr('data-isa-id');
  relate_all_accounts_viewonly_popup(isaId);
  e.preventDefault();
});

// Related Accounts - View TSM
$(document).on('click', '.cb-related-accounts-view-tsm-btn', function (e) {
  var isaId = $(this).attr('data-isa-id');
  relate_all_accounts_viewonly_tsm_popup(isaId);
  e.preventDefault();
});

// Related Accounts - View - Approvers
$(document).on('click', '.cb-related-accounts-view-approvers-btn', function (e) {
  var isaId = $(this).attr('data-isa-id');
  related_accouts_view_approvers_20220325(isaId); // declared in js/dashboard-relate-accounts.js
  e.preventDefault();
});

// Log AMP
$(document).on('click', '.cb-log-amp-btn', function (e) {
  var customerId = $(this).attr('data-customer-id');

  window.open(`https://${accountId}/dp/${appKeyPrefix}085a1a0e10d040a4a304?cid=${customerId}`);
  e.preventDefault();
});

// Log AMP - ISA ID
$(document).on('click', '.cb-log-amp-isa-id-btn', function (e) {
  var isaId = $(this).attr('data-isa-id');

  window.open(`https://${accountId}/dp/${appKeyPrefix}8da940d4399e4b979ab0?ISA_ID=${isaId}`);
  e.preventDefault();
});

// View Attachments DD
$(document).on('click', '.cb-attachments-dd-btn', function (e) {
  var isaId = $(this).attr('data-isa-id');

  attachments_dd_popup(isaId);
  e.preventDefault();
});

// View Attachments - TSM
$(document).on('click', '.cb-attachments-tsm-btn', function (e) {
  var isaId = $(this).attr('data-isa-id');

  attachments_tsm_popup(isaId);
  e.preventDefault();
});

// Return to Contract Phase - 2022-03-28
$(document).on('click', '.cb-return-2-contract-phase-btn', function (e) {
  var isaId = $(this).attr('data-isa-id');

  return_to_contact_phase(isaId); // declared in js / isa-team-dashboard.js
  e.preventDefault();
});

// Rebate Details
$(document).on('click', '.rebate-details-btn', function (e) {
  var isaId = $(this).attr('data-isa-id');

  window.open(`https://${accountId}/dp/${appKeyPrefix}88121621466943ffa380?ID=${isaId}`);
  e.preventDefault();
});

// Appendix C
$(document).on('click', '.appendix-c-btn', function (e) {
  var isaId = $(this).attr('data-isa-id');
  var isaName = $(this).attr('data-isa-name');

  window.open(`./appendix-c.php?ID=${isaId}&Name=${isaName}`);
  e.preventDefault();
});


// MFR Subscription Fee Summary
$(document).on('click', '.mfr-subs-fee-summary-btn', function (e) {
  var isa_id = $(this).attr('data-isa-id');

  jc_open_iframe(`<div class="mb-2">ISA ${isa_id}</div><div>Manufacturer Subscription Fee Summary</div>`, `../shared/mfr-fee-summary.php?ISA_ID=${isa_id}`);
  e.preventDefault();
});

// Logic Subscription Fee Summary
$(document).on('click', '.log1c-subs-fee-summary-btn', function (e) {
  var isa_id = $(this).attr('data-isa-id');

  jc_open_iframe(`<div class="mb-2">ISA ${isa_id}</div><div>Log1c Subscription Fee Summary</div>`, `../shared/log1c-fee-summary.php?ISA_ID=${isa_id}`);
  e.preventDefault();
});

$(document).on('click', '.search-related-btn', function (e) {
  //alert(1)
  var isa_id = $(this).attr('data-isa-id');

  jc_open_iframe(``, `./related-accounts-search.php`);
  e.preventDefault();
})


// fix: drodown is hidden when show
// var timer = setInterval(function(){

// 	$('.cb-report').each(function(){

// 		if($(this).find('.dropdown-menu.show').length == 0)
// 		{
// 			$(this).css({ 'height': 'initial' });
// 			$(this).attr('data-height', 'N' );
// 			$(this).addClass('overflow-auto');
// 		}
// 	});

// }, 100);

// $(document).on('click', '.cb-report .dropdown .btn-link', function(){
// 	$('.cb-report').each(function(){

// 		$(this).css({ 'height': 'initial' });
// 		$(this).attr('data-height', 'N' );
// 		$(this).addClass('overflow-auto');

// 		if($(this).find('.dropdown-menu.show').length && $(this).attr('data-height') != 'Y')
// 		{
// 			$(this).css({ 'height': ($(this).height() + 400).toString() + 'px' });
// 			$(this).attr('data-height', 'Y' );
// 			$('.cb-cog .dropdown-menu').css({ 'transform' : 'translate3d(37px, 0px, 0px)' });
// 		} else {
//                         $(this).css({ 'height': 'initial' });
//                         $(this).attr('data-height', 'N' );

//                 }
// 	});
// });

//
var timer = setInterval(function () {

  $('.cb-report, .cb-results').each(function () {


    $(this).css({ 'height': 'initial' });
    $(this).attr('data-height', 'N');
    $(this).addClass('overflow-auto');

    if ($(this).find('.dropdown-menu.show').length != 0 && $(this).attr('data-height') != 'Y') {
      $(this).css({ 'height': ($(this).height() + 400).toString() + 'px' });
      $(this).attr('data-height', 'Y');
      $('.cb-cog .dropdown-menu').css({ 'transform': 'translate3d(37px, 0px, 0px)' });
    }
  });

}, 100);



// fix: drodown is hidden when shown - deal directory
var timer = setInterval(function () {
  $('.cb-freezeheader').each(function () {
    if ($(this).find('.dropdown-menu.show').length) {
      // prevent cutted dropdown options
      $(this).removeClass('overflow-auto');
      $(this).css({ 'overflow-x': 'initial' });

      // always show dropdown options downward
      $('.cb-cog .dropdown-menu').css({ 'transform': 'translate3d(37px, 0px, 0px)' });
    }
    else {
      $(this).addClass('overflow-auto');
      $(this).css({ 'overflow-x': 'auto' });
    }
  });
}, 100);

function attachments_dd_popup(isaId) {
  openModal_v2('ISA ' + isaId + ' - Attachments', 'https://' + accountId + '/dp/' + appKeyPrefix + '13f9184697fd4de3ae54/emb?ISA_ID=' + isaId + '', '95%', 'Y');
}

function attachments_tsm_popup(isaId) {
  openModal_v2('ISA ' + isaId + ' - Attachments', 'https://' + accountId + '/dp/' + appKeyPrefix + '53c48eadeba7456ba1e7/emb?ISA_ID=' + isaId + '', '95%', 'Y');
}

// Filtered Document ID != P&L and Signed Docs
function attachments_filtered(isaId) {
  openModal_v2('ISA ' + isaId + ' - Attachments', 'https://' + accountId + '/dp/' + appKeyPrefix + '5b967310c1a34607887a/emb?ISA_ID=' + isaId + '', '95%', 'Y');
}

function relate_all_accounts_viewonly_tsm_popup(isaId) {
  selectedAccountsRidArr = [];

  relateAllAccountsPopup = $.confirm({
    scrollToPreviousElement: false,
    scrollToPreviousElementAnimate: false,
    type: 'secondary',
    columnClass: 'col-md-6 col-md-offset-3',
    icon: '',
    title: 'ISA ' + isaId,
    theme: 'material',
    content: ' \
			<div id="cb-relate-all-accounts-main"> \
			<span style="font-size:22px; font-weight:bold;">Related Accounts</span> \
			<div id="cb-relate-all-accounts"><div class="spinner-border text-info" role="status"></div></div> \
		',
    backgroundDismiss: false,
    buttons: false,
    boxWidth: '80%',
    useBootstrap: false,
    onOpen: function () {
      deployDP('cb-relate-all-accounts', 'https://' + accountId + '/dp/' + appKeyPrefix + 'd0744c037b244933ae60/emb?ISA_ID=' + isaId);
    },
    onClose: function () {
      $('.cb-cog').show();
    }
  });
}

function create_cog(elem) {
  var appKey = $(elem).attr('data-appkey').toLowerCase();
  var isaId = $(elem).attr('data-isa-id');
  var vendorId = $(elem).attr('data-vendor-id');
  var isaName = $(elem).attr('data-isa-name');
  var glid = $(elem).attr('data-glid');
  var status = $(elem).attr('data-status');
  var createdBy = $(elem).attr('data-created-by');
  var lastApprover = $(elem).attr('data-last-approver');
  var terminationDate = $(elem).attr('data-termination-date');
  var customerId = $(elem).attr('data-customer-id');
  var loaded = $(elem).attr('data-loaded');

  var cogHTML = ''

  cogHTML += '<div class="dropdown dropright" style="z-index:9999999 !important;" data-height="N">'
  cogHTML += '<a class="btn btn-link btn-sm dropdown-toggle" href="javascript:void(0)" role="button" data-toggle="dropdown" aria-haspopup="true" data-bs-display="static" aria-expanded="false" title="';
  cogHTML += 'ISA ID: ' + isaId;
  cogHTML += glid ? '\nGLID : ' + glid : '';
  cogHTML += status ? '\nStatus : ' + status : '';
  cogHTML += createdBy ? '\nCreated By : ' + createdBy : '';
  cogHTML += lastApprover ? '\nLast Approver : ' + lastApprover : '';
  cogHTML += terminationDate ? '\nTermination Date : ' + terminationDate : '';
  cogHTML += customerId ? '\nCustomer ID : ' + customerId : '';
  cogHTML += '">';
  cogHTML += '<i class="fas fa-cog"></i></a>';
  cogHTML += '<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">';

  if ((appKey || '') == '' && cogLinks[appKey].length == 0) {
    console.log('No links - AppKey:' + appKey);
    return false;
  }

  $.each(cogLinks[appKey], function (i, link) {
    switch (link) {
      case 'View Details':
        cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-view-details-btn" data-isa-id="' + isaId + '">' + link + '</a>';
        break;

      case 'Edit Details':
        cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-edit-details-btn" data-isa-id="' + isaId + '">' + link + '</a>';
        break;

      case 'Approval Log':
        cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-approval-log-btn" data-isa-id="' + isaId + '">' + link + '</a>';
        break;

      case 'ComCept AR':
        cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-comcept-ar-btn" data-isa-id="' + isaId + '">' + link + '</a>';
        break;

      case 'ComCept Pricing':
        cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-comcept-pricing-btn" data-isa-id="' + isaId + '">' + link + '</a>';
        break;

      case 'View Attachments':
        cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-view-attachments-btn" data-isa-id="' + isaId + '">Customer Document Hub</a>';
        break;

      case 'E-ISA Logs':
        cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-isa-logs-btn" data-isa-id="' + isaId + '" data-isa-name="' + isaName + '">' + link + '</a>';
        break;

      case 'Create New Deal':
        cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-create-new-deal-btn" data-isa-id="' + isaId + '">Renew Deal</a>';
        break;

      case 'Deal Termination':
        cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-deal-termination-btn" data-isa-id="' + isaId + '">' + link + '</a>';
        break;

      case 'Deal Sheet View Details':
        cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-deal-sheet-view-btn" data-isa-id="' + isaId + '">View Details</a>';
        break;

      case 'Comments':
        cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-comments-btn" data-isa-id="' + isaId + '">' + link + '</a>';
        break;

      case 'Attachments':
        cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-attachments-btn" data-isa-id="' + isaId + '">Customer Document Hub</a>';
        break;

      case 'Related Accounts':
        cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-related-accounts-btn" data-isa-id="' + isaId + '">' + link + '</a>';
        break;

      case 'Allocate Asset':
        cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-allocate-asset-btn" data-isa-id="' + isaId + '">' + link + '</a>';
        break;

      case 'Allocate Asset - View':
        cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-allocate-asset-view-btn" data-isa-id="' + isaId + '">Allocate Asset</a>';
        break;

      case 'Edit Details - Deal Approval':
        cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-edit-deal-termination-approval-btn" data-isa-id="' + isaId + '">Edit Details</a>';
        break;

      case 'Return to Deal Directory':
        cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-return-to-dd-btn" data-isa-id="' + isaId + '" data-vendor-id="' + vendorId + '">' + link + '</a>';
        break;

      case 'Direction To Pay':
        cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-direction-to-pay-btn" data-isa-id="' + isaId + '">' + link + '</a>';
        break;

      case 'Direction To Pay - View':
        cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-direction-to-pay-view-btn" data-isa-id="' + isaId + '">Direction To Pay</a>';
        break;

      case 'Direction To Pay - RO':
        cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-direction-to-pay-ro-btn" data-isa-id="' + isaId + '">Direction To Pay</a>';
        break;

      case 'Sales by Production Line - TSM':
        cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-sales-by-prod-tsm-btn" data-isa-id="' + isaId + '">Sales by Production Line</a>';
        break;

      case 'Sales by Production Line':
        cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-sales-by-prod-btn" data-isa-id="' + isaId + '">Sales by Production Line</a>';
        break;

      case 'Related Accounts - View':
        cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-related-accounts-view-btn" data-isa-id="' + isaId + '">Related Accounts</a>';
        break;

      case 'Log AMP':
        cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-log-amp-btn" data-customer-id="' + customerId + '">' + link + '</a>';
        break;

      case 'Log AMP - ISA ID':
        cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-log-amp-isa-id-btn" data-isa-id="' + isaId + '">Log AMP</a>';
        break;

      case 'Attachments DD':
        cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-attachments-dd-btn" data-isa-id="' + isaId + '">Customer Document Hub</a>';
        break;

      case 'View Attachments - TSM':
        cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-attachments-tsm-btn" data-isa-id="' + isaId + '">Customer Document Hub</a>';
        break;

      case 'Attachments - Filtered':
        cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-attachments-filtered-btn" data-isa-id="' + isaId + '">Customer Document Hub</a>';
        break;

      case 'Related Accounts - View TSM':
        cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-related-accounts-view-tsm-btn" data-isa-id="' + isaId + '">Related Accounts</a>';
        break;

      case 'Related Accounts - View - Approvers':
        cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-related-accounts-view-approvers-btn" data-isa-id="' + isaId + '">Related Accounts</a>';
        break;

      case 'Return to Contract Phase':
        cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-return-2-contract-phase-btn" data-isa-id="' + isaId + '">' + link + '</a>';
        break;

      case 'Create New Deal - TSM':
        cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-create-new-deal-tsm-btn" data-isa-id="' + isaId + '">Renew Deal</a>';
        break;

      case 'Rebate Details':
        cogHTML += `<a href="#${isaId}" class="dropdown-item rebate-details-btn" data-isa-id="${isaId}">${link}</a>`;
        break;

      case 'Contract Summary Exhibit C':
        cogHTML += `<a href="#${isaId}" class="dropdown-item appendix-c-btn" data-isa-id="${isaId}" data-isa-name="${isaName}">${link}</a>`;
        break;

      case 'Manufacturer Subscription Fee Summary':
        cogHTML += `<a href="#${isaId}" class="dropdown-item mfr-subs-fee-summary-btn" data-isa-id="${isaId}" data-isa-name="${isaName}">${link}</a>`;
        break;

      case 'Log1c Subscription Fee Summary':
        cogHTML += `<a href="#${isaId}" class="dropdown-item log1c-subs-fee-summary-btn" data-isa-id="${isaId}" data-isa-name="${isaName}">${link}</a>`;
        break;

    }
  });

  cogHTML += '</div></div>';

  $(elem).html(cogHTML);
  $(elem).attr('data-loaded', 'Y');
}
