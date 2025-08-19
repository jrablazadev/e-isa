var accountId = 'caspio.thenetwork-crm.com';
var appKeyPrefix = '25d55000';

var cogLinks = {
        // TSM
                '25d550001185f2ac033f4e328f6d' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
                , '25d550009a536459cb524a21a164' : ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Deal Sheet
                , '25d550000a2f719017544bc4b36c' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Contract Phase
                , '25d550002223af6dd1c9488e8f06' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Work Queue

        // VPCS
                , '25d5500030e0e7823ed54d798780' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
                , '25d55000c98170f9eded4130a19b' : ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Deal Sheet
                , '25d55000423c090012f7461da4c7' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Contract Phase
                , '25d55000634ec4d549ee44c8806e' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Work Queue
       
        // CSM
                , '25d55000642bf897f8cb4822b114' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
                , '25d550005ba492386e794f759376' : ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Deal Sheet
                , '25d550000d64254591ee4530b99e' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Contract Phase
                , '25d55000a23e74b814f3478ea02e' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Work Queue

	// RSM
		, '25d55000976d73e526d3456baef1' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
		, '25d55000ef4f72f459204f69a3cd' : ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Deal Sheet
		, '25d55000f0fdabaca1fb40dbb4e3' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Contract Phase
		, '25d55000776c517679d747fdbc51' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Work Queue

        // VPAS
                , '25d55000c5c620953d4e41c8a6b0' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
                , '25d550006ced6f3658ae4a5797eb' : ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Deal Sheet
                , '25d550000d1e3c356c34486a949e' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Contract Phase
                , '25d55000a11769bbe9204681b461' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Work Queue
        
        // AS
                , '25d550001b18c61d8377443e915e' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
                , '25d55000c0d9a71fa64048ffba94' : ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Deal Sheet
                , '25d55000abf136362718411482af' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Contract Phase
                , '25d55000167b65d945cf465db644' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Work Queue
        
        // DSM
                , '25d550004edbee9e40e04e2187ea' : ['View Details', 'Edit Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  For Approval
                , '25d55000501b4703902742ba943b' : ['View Details', 'Edit Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Upcoming
                , '25d55000373f68913389461ab0f1' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
                , '25d55000c6e82615b09a4a29b971' : ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Deal Sheet
                , '25d5500091a77b138d894f2981c3' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Contract Phase
                , '25d55000c88787cce98847809654' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Phase,
                , '25d55000fc59a60ab6b84edd9ae5' : ['View Details', 'View Attachments', 'E-ISA Logs', 'Create New Deal', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Deal Directory
                , '25d55000a8b40053c0884c1eb336' : ['View Details', 'Attachments', 'Comments', 'E-ISA Logs'] // Historical Deal Directory

        // RVPS
                , '25d550006f42e1516e404872a6e0' : ['View Details', 'Edit Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  My Approval Needed
                , '25d55000d10e87ac23934e6ea6a7' : ['View Details', 'Edit Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Upcoming
                , '25d55000fe86dc8d828d4789a6cf' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
                , '25d55000d4a52e2b06b842b68621' : ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Deal Sheet
                , '25d550002cf1ddd43f0f481fb7ba' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Contract Phase
                , '25d550009ffa2ad8958f48618244' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Phase
                , '25d550007de177a7731b450bbd2e' : ['View Details', 'View Attachments', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Deal Directory
                , '25d550007ba75dbee7514783bf66' : ['View Details', 'Attachments', 'Comments', 'E-ISA Logs'] // Historical Deal Directory

        // RVPO
                , '25d55000fc4bbd7c6efd42d8a054' : ['View Details', 'Edit Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  My Approval Needed
                , '25d550003ef9a47811644199a23c' : ['View Details', 'Edit Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Upcoming
                , '25d55000a1bbaaf274dd4f81815b' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
                , '25d55000a59019ad599e4c3da886' : ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Deal Sheet
                , '25d550004f85b00edc674c508671' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Contract Phase
                , '25d550002988a6ec8518489d83a4' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Phase
                , '25d55000880bbe8872954a8aa533' : ['View Details', 'View Attachments', 'E-ISA Logs', 'Create New Deal', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Deal Directory
                , '25d55000b4bf730cf8f74ae48005' : ['View Details', 'Attachments', 'Comments', 'E-ISA Logs'] // Historical Deal Directory

        // ISA Team
                , '25d55000f21b4c25029f4d0b8119' : ['Edit Details - Deal Approval'] //  My Approval Needed - Deal Termination
                , '25d55000a99169350b1b4db3a9ba' : ['View Details', 'Edit Details', 'E-ISA Logs', 'Comments', 'Attachments', 'Related Accounts', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  For Approval
                , '25d55000df39ad1f875242d2a00e' : ['View Details', 'Edit Details', 'E-ISA Logs', 'Comments', 'Attachments', 'Related Accounts', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  Upcoming
                , '25d55000a09712dd599e4a3c8c6d' : ['View Details', 'Edit Details', 'E-ISA Logs', 'Comments', 'Attachments', 'Related Accounts', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  Approved
                , '25d550000819d4e46cda412c91cd' : ['View Details', 'Edit Details', 'E-ISA Logs', 'Comments', 'Attachments', 'Related Accounts', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  Deal Sheet
                , '25d55000fdddd86086af4c4bad51' : ['View Details', 'Edit Details', 'E-ISA Logs', 'Comments', 'Attachments', 'Related Accounts', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  Contract Phase
                , '25d550002374e8f1c2ba439fa800' : ['View Details', 'Edit Details', 'E-ISA Logs', 'Comments', 'Attachments', 'Related Accounts', 'Allocate Asset', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  Execution Phase
                , '25d550005eeb15dbeb1a425c908a' : ['View Details', 'Edit Details', 'Comments', 'Attachments', 'Related Accounts', 'Allocate Asset', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  Deal Directory
                , '25d55000ffc1c7c866bc4df4b5af' : ['View Details', 'Comments', 'Attachments', 'Related Accounts', 'Return to Deal Directory', 'Allocate Asset', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  Breach Work Queue
                , '25d550001fe1ec21b4a5407f9a47' : ['View Details', 'Attachments', 'Comments', 'E-ISA Logs'] // Historical Deal Directory
                , '25d55000d874a2c12e7243a7a95b' : ['View Details', 'Attachments', 'Comments', 'Related Accounts', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing'] // All E-ISA
                , '25d550003f26307cea88482b9ac9' : ['View Details', 'Allocate Asset'] // Deal Amortization

        // KN
                , '25d550000dabc5498b964a83a86c' : ['View Details', 'Edit Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  For Approval
                , '25d55000db11e61595b14d4ba536' : ['View Details', 'Edit Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Upcoming
                , '25d550009e4c4d40178d42369224' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
                , '25d550007b1d550c683048f3924f' : ['Deal Sheet View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Deal Sheet
                , '25d550009d4ba8d1b7734999b100' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Contract Phase
                , '25d5500062ebac071ec04163bf0a' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Phase
                , '25d55000060418d036fb4620b99d' : ['View Details', 'Comments', 'Attachments', 'Related Accounts', 'Create New Deal', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Deal Directory
        // CFO
                , '25d5500006ce40d0417f4027b4fc' : ['View Details', 'Edit Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  For Approval
                , '25d550009368d56af6fb492fb4ea' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Upcoming
                , '25d55000dd925984a1c4414f8512' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
                , '25d5500061dc141eaf044e038e3c' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Deal Sheet
                , '25d550004f8d4ccb944a4127bb91' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Contract Phase
                , '25d5500062ebac071ec04163bf0a' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Phase
                , '25d550004b797fb9e94c4e63a277' : ['View Details', 'Comments', 'Attachments', 'Related Accounts', 'Allocate Asset', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Deal Directory

        // COO
                , '25d550001269e55e73e34b5cbb88' : ['View Details', 'Edit Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  For Approval
                , '25d55000b94b0919d1254effb3e1' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Upcoming
                , '25d55000ca4b4f90e2e7437cb94a' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
                , '25d550004fb97b82947d43e9a1df' : ['View Details', 'Comments', 'Attachments', 'Related Accounts', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Deal Directory
        // CEO
                , '25d55000d1a02f1ce3d443eab14b' : ['View Details', 'Edit Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  For Approval
                , '25d550006c55b7f7f14d4106acba' : ['View Details', 'Edit Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Upcoming
                , '25d550005e3efbb2501443789cf6' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Deal Sheet
                , '25d550005a6aa2aa2e734b97aca6' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Contract Phase
                , '25d5500063e4ecc84bdc45c8ae24' : ['View Details', 'Comments', 'Attachments', 'Related Accounts', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Deal Directory

        // Store Manager
                , '25d5500039a001159a514e4abfd7' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  For Approval
                , '25d5500006ce8ef9da074107ae34' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Upcoming
                , '25d550009daef365cb2348b3b65a' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
                , '25d55000570e6ee879aa4ccca281' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Deal Sheet
                , '25d550003324267a4fcb4139a921' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Contract Phase
                , '25d550009f8b1b08830d48139803' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Phase
                , '25d55000babdfe7b901543cd97a7' : ['View Details', 'View Attachments', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Deal Directory
                , '25d55000df460ba8283b41008c99' : ['View Details', 'Attachments', 'Comments', 'E-ISA Logs'] // Historical Deal Directory

        // DOM
                , '25d550000d9969d702e049d8bd77' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  For Approval
                , '25d55000c93f972dd87b402aae12' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Upcoming
                , '25d5500071f7a7c3a0b3458f8ac8' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Approved
                , '25d550004618793597d64d6b9094' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Deal Sheet
                , '25d550001436b15bf0bb42a28222' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Contract Phase
                , '25d55000327796dcd81547789f6c' : ['View Details', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Execution Phase
                , '25d5500083cd1d9bc2a84bfdbdce' : ['View Details', 'View Attachments', 'E-ISA Logs', 'Deal Termination', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  Deal Directory
                , '25d55000c5134e9e869d4425a967' : ['View Details', 'Attachments', 'Comments', 'E-ISA Logs'] // Historical Deal Directory

        // ISA Pricing
                // , '25d55000ef76b73d6082474aadbe' : ['View Details', 'Comments', 'Attachments', 'Related Accounts', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  WQ
                // , '25d55000d8053e16d8d14ecf8c21' : ['View Details', 'Comments', 'Attachments', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View']
                , '25d55000ef76b73d6082474aadbe' : ['View Details', 'Comments', 'Attachments', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  WQ
                , '25d55000d8053e16d8d14ecf8c21' : ['View Details', 'Comments', 'Attachments', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  WQ

        // ISA Credit
                // , '25d55000c6624f2eb92544e6b89f' : ['View Details', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] // WQ
                // , '25d55000087fc11aa0034a2f8e7d' : ['View Details', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View']
                // , '25d550006395b6c851194e1c9291' : ['View Details', 'Comments', 'Attachments', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View']
                , '25d55000c6624f2eb92544e6b89f' : ['View Details', 'Comments', 'Attachments', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  WQ
                , '25d55000087fc11aa0034a2f8e7d' : ['View Details', 'Comments', 'Attachments', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  WQ
                , '25d550006395b6c851194e1c9291' : ['View Details', 'Comments', 'Attachments', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  WQ

        // ISA FInance
                //, '25d550003d55741dfcb44c6aa8f1' : ['View Details', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay',]  // WQ
                // , '25d550007446581508a7475095a0' : ['View Details', 'Comments', 'Attachments', 'Related Accounts', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay',]
                , '25d550003d55741dfcb44c6aa8f1' : ['View Details', 'Comments', 'Attachments', 'Related Accounts', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  WQ
                , '25d550007446581508a7475095a0' : ['View Details', 'Comments', 'Attachments', 'Related Accounts', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay'] //  WQ

        // ISA Procurement
                // , '25d55000f7400819e1704df39330' : ['View Details', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] // WQ
                // , '25d55000a850778d63474cd98958' : ['View Details', 'Comments', 'Attachments', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View']
                , '25d55000f7400819e1704df39330' : ['View Details', 'Comments', 'Attachments', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  WQ
                , '25d55000a850778d63474cd98958' : ['View Details', 'Comments', 'Attachments', 'E-ISA Logs', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View'] //  WQ

        // Logic ICS
                , '25d5500054dd726bcf644b4bb4fb' : ['View Details', 'Comments', 'Attachments', 'Related Accounts', 'ComCept AR', 'ComCept Pricing', 'Direction To Pay - View']
                , '25d550001ded9b7819d34c5894a5' : ['View Details', 'Comments', 'Attachments', 'Related Accounts']

        // CFO COO CEO
                , '25d550002282c5791cb246e6b593' : ['View Details', 'Attachments', 'Comments', 'E-ISA Logs'] // Historical Deal Directory

	// Shared
		, '25d55000eceb3babc05f41dcad98' : ['View Details']
};

var newCogLinks = {};

$.each(cogLinks, function(appkey, links){
        var loweredAppKey = appkey.toLowerCase();
        newCogLinks[loweredAppKey] = links;
});

cogLinks = newCogLinks;

document.addEventListener('DataPageReady', function (event) {
        $('.cb-cog').each(function(){
                create_cog(this);
        });
});

$(document).on('click', '*[name="Mod0InlineEditCancel"]', function(e){
        $('.cb-cog').each(function(){
                create_cog(this);
        });
});

// View Details
$(document).on('click', '.cb-view-details-btn', function(e){
        var isaId = $(this).attr('data-isa-id');
        window.open('./approval-view-details.php?ISA_ID=' + isaId);
        e.preventDefault();
});

// View Attachments
$(document).on('click', '.cb-view-attachments-btn', function(e){
        var isaId = $(this).attr('data-isa-id');
        window.open('./view-attachments.php?ISA_ID=' + isaId);
        e.preventDefault();
});

// Create New Deal
$(document).on('click', '.cb-create-new-deal-btn', function(e){
        var isaId = $(this).attr('data-isa-id');
        create_new_deal(isaId);
});

// Edit Details
$(document).on('click', '.cb-edit-details-btn', function(e){
        var isaId = $(this).attr('data-isa-id');
        window.open('./allied-set-up.php?ISA_ID=' + isaId + '&Section_ID=11');
        e.preventDefault();
});

// Approval Log
$(document).on('click', '.cb-approval-log-btn', function(e){
        var isaId = $(this).attr('data-isa-id');
        window.open('./approval-log.php?ISA_ID=' + isaId);
        e.preventDefault();
});

// Comcept Ar
$(document).on('click', '.cb-comcept-ar-btn', function(e){
        var isaId = $(this).attr('data-isa-id');
        window.open('https://' + accountId + '/dp/' + appKeyPrefix + 'afc3de934aca44af88d4?ISA_ID=' + isaId);
        e.preventDefault();
});

// Comcept Pricing
$(document).on('click', '.cb-comcept-pricing-btn', function(e){
        var isaId = $(this).attr('data-isa-id');
        window.open('https://' + accountId + '/dp/' + appKeyPrefix + '82b75a7577ab476e8950?ISA_ID=' + isaId);
        e.preventDefault();
});

// E-ISA Logs
$(document).on('click', '.cb-isa-logs-btn', function(e){
        var isaId = $(this).attr('data-isa-id');
        var isaName = $(this).attr('data-isa-name') || '';
        window.open('./change-log.php?ISA_ID=' + isaId + '&id=' + isaId + '&ISA_Name=' + isaName);
        e.preventDefault();
});

// Deal Termination
$(document).on('click', '.cb-deal-termination-btn', function(e){
        var isaId = $(this).attr('data-isa-id');
        window.open('./deal-termination.php?ISA_ID=' + isaId);
        e.preventDefault();
});

// Deal Sheet View
$(document).on('click', '.cb-deal-sheet-view-btn', function(e){
        var isaId = $(this).attr('data-isa-id');
        window.open('./deal-sheet-view.php?ISA_ID=' + isaId);
        e.preventDefault();
});

// Comments popup
$(document).on('click', '.cb-comments-btn', function(e){
        var isaId = $(this).attr('data-isa-id');
        view_comments(isaId);
        e.preventDefault();
});

// Attachments popup
$(document).on('click', '.cb-attachments-btn', function(e){
        var isaId = $(this).attr('data-isa-id');
        attachments_popup(isaId);
        e.preventDefault();
});

// Related Accounts popup
$(document).on('click', '.cb-related-accounts-btn', function(e){
        var isaId = $(this).attr('data-isa-id');
        // relatedAccounts(isaId); // 2021-08-18 Jun
	relate_all_accounts_popup(isaId); // 2021-08-18 Jun
        e.preventDefault();
});

// Allocate Asset popup
$(document).on('click', '.cb-allocate-asset-btn', function(e){
        var isaId = $(this).attr('data-isa-id');
        allocate_assets(isaId);
        e.preventDefault();
});

// Allocate Asset popup
$(document).on('click', '.cb-edit-deal-termination-approval-btn', function(e){
        var isaId = $(this).attr('data-isa-id');
        window.open('./deal-termination-approval.php?ISA_ID=' + isaId);
        e.preventDefault();
});

// Allocate Asset popup
$(document).on('click', '.cb-return-to-dd-btn', function(e){
        var vendorId = $(this).attr('data-vendor-id');
        returnToDealDirectory(vendorId);
        e.preventDefault();
});

// Direction To Pay
$(document).on('click', '.cb-direction-to-pay-btn', function(e){
        var isaId = $(this).attr('data-isa-id');
	var isaName = $(this).attr('data-isa-name');
        window.open('./direction-to-pay.php?ISA_ID=' + isaId);
        e.preventDefault();
});

// Direction To Pay - View
$(document).on('click', '.cb-direction-to-pay-view-btn', function(e){
        var isaId = $(this).attr('data-isa-id');
        var isaName = $(this).attr('data-isa-name');
        window.open('./direction-to-pay-2.php?ISA_ID=' + isaId);
        e.preventDefault();
});

// fix: drodown is hidden when shown
var timer = setInterval(function(){
        $('.cb-report').each(function(){
                if($(this).find('.dropdown-menu.show').length)
                {
                        $(this).removeClass('overflow-auto');
                }
                else
                {
                        $(this).addClass('overflow-auto');
                }
        });
}, 100);

function create_cog(elem)
{
        var appKey = $(elem).attr('data-appkey').toLowerCase();
        var isaId = $(elem).attr('data-isa-id');
        var vendorId = $(elem).attr('data-vendor-id');
        var isaName = $(elem).attr('data-isa-name');
        var glid = $(elem).attr('data-glid');
        var status = $(elem).attr('data-status');
        var createdBy = $(elem).attr('data-created-by');
        var lastApprover = $(elem).attr('data-last-approver');
        var terminationDate = $(elem).attr('data-termination-date');
        var loaded = $(elem).attr('data-loaded');

        var cogHTML = ''

        cogHTML += '<div class="dropdown dropright" style="z-index:9999999 !important;">'
        cogHTML += '<a class="btn btn-link btn-sm dropdown-toggle" href="#' + isaId + '" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="';
        cogHTML += 'ISA ID: ' + isaId;
        cogHTML += glid ? '\nGLID : ' + glid : '';
        cogHTML += status ? '\nStatus : ' + status : '';
        cogHTML += createdBy ? '\nCreated By : ' + createdBy : '';
        cogHTML += lastApprover ? '\nLast Approver : ' + lastApprover : '';
        cogHTML += terminationDate ? '\nTermination Date : ' + terminationDate : '';
        cogHTML += '">';
        cogHTML += '<i class="fas fa-cog"></i></a>';
        cogHTML += '<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">';

        if((appKey || '') == '' && cogLinks[appKey].length == 0)
        {
                console.log('No links - AppKey:' + appKey);
                return false;
        }

        $.each(cogLinks[appKey], function(i, link){
                // console.log(link);
                switch(link)
                {
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
                                cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-view-attachments-btn" data-isa-id="' + isaId + '">' + link + '</a>';
                                break;

                        case 'E-ISA Logs':
                                cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-isa-logs-btn" data-isa-id="' + isaId + '" data-isa-name="' + isaName + '">' + link + '</a>';
                                break;

                        case 'Create New Deal':
                                cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-create-new-deal-btn" data-isa-id="' + isaId + '">' + link + '</a>';
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
                                cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-attachments-btn" data-isa-id="' + isaId + '">' + link + '</a>';
                                break;

                        case 'Related Accounts':
                                cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-related-accounts-btn" data-isa-id="' + isaId + '">' + link + '</a>';
                                break;

                        case 'Allocate Asset':
                                cogHTML += '<a href="#' + isaId + '" class="dropdown-item cb-allocate-asset-btn" data-isa-id="' + isaId + '">' + link + '</a>';
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
                }
        });

        cogHTML += '</div></div>';

        $(elem).html(cogHTML);
        $(elem).attr('data-loaded', 'Y');
}