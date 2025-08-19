var jqueryConfirm;
var accountId = 'caspio.thenetwork-crm.com';
var appKeyPrefix = '25d55000';

var updateLastSectionNoPopup;
var createNewDealPopup;
var cloneIsaPopup;

// function - set iframe height on load
function iframeLoaded( elementId ){
  setTimeout( function() {
  
  var $iframe = $('#'+ elementId ).length ? $('#'+ elementId ) : window.parent.$('#'+ elementId );
  var padding = -12;
    
  $iframe.css( 'height', '0px' );  
  var height = $iframe.get(0).contentWindow.document.body.scrollHeight + padding;
  $iframe.css( 'height', height + 20 + 'px' );
  
  }, 50 );
}
// function - create iframe 
function openModal( modalTitle, iframeSrc ) {
  $( '#cb-modal-title' ).html( modalTitle );
  $( '#cb-modal-error' ).addClass( 'd-none' );
  $( '#cb-modal-body' ).html( '<iframe frameborder="0" scrolling="no" id="cb-modal-frame" src="' + iframeSrc + '"></iframe>' );
  $( '#cb-modal-frame' ).on( 'load', function() {
    iframeLoaded( this.id );
  });  
  $( '#cb-modal' ).modal();
}
// function - get URL Vars
function getUrlVars()
  {
      var vars = [], hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
   
      for(var i = 0; i < hashes.length; i++)
      {
          hash = hashes[i].split('=');
      hash[1] = unescape(hash[1]);
      vars.push(hash[0]);
          vars[hash[0]] = hash[1];
      }
   
      return vars;
  }
// var urlVars = getUrlVars();

function update_progress_bar()
{
	var LastSectionNo = Number($('#NPC_LastSectionNo').val());
	var CurrentSectionNo = Number($('#NPC_CurrentSectionNo').val());

	CurrentSectionNo = isNaN(CurrentSectionNo) ? 0 : CurrentSectionNo;

	if(CurrentSectionNo == 0)
	{
		$('.progressbar a').addClass('disabled');
		$('.progressbar a').attr('href', 'javascript:void(0)');
		
		$('#progressbar-template-new').addClass('active');
		$('#progressbar-template-update').addClass('active');
		$('#progressbar-customer-sales-no-growth').addClass('disabled');
	}
	else
	{
		$('.progressbar li').each(function(i){

		// console.log((i), CurrentSectionNo, LastSectionNo, this);

			if((i + 1) <= CurrentSectionNo)
			{
				// console.log(2);
				
				$(this).addClass('active');
				
				// console.log('active');
			}
			else
			{
				// skip when direction to pay
				if($(this).hasClass('cb-d2p'))
				{
					if(CurrentSectionNo == 11)
					{
						$(this).addClass('disabled');
					}

					return true;
				}
				
				if((i + 1) > LastSectionNo)
				{	
					$(this).find('a').attr('href', 'javascript:void(0)');
					$(this).find('a').addClass('disabled');
				}
				
				$(this).addClass('disabled');

			}
		});
	}

	// $('#progressbar-d2p').removeClass('disabled');
	// $('#progressbar-d2p a').removeClass('disabled');
}

function filenameTimestamp ()
{
	let today = new Date();
	let year = today.getFullYear();
	let month = today.getMonth() + 1
	let day = today.getDate()
	let hour = today.getHours()
	let minute = today.getMinutes()
	let sec = today.getSeconds()
	let r = year + "-" + month + "-" + day + "__" + hour + "-" + minute + "-" + sec
	console.log(r)
	return r
}

function openModal_v2( title, dataPageSrc, boxWidth, cancelReload)
{
	var cancelReladElem = '';

	if(cancelReload == 'Y')
	{
		cancelReladElem = '<input type="hidden" class="cb-cancel-reload"> ';
	}

	jqueryConfirm = $.confirm({
		scrollToPreviousElement: false,
    		scrollToPreviousElementAnimate: false,
		type : 'secondary',
		columnClass: 'col-md-6 col-md-offset-3',
		title : title,
		boxWidth : boxWidth,
		theme : 'material',
		content : '<div class="spinner-border text-info" role="status"><span class="sr-only">Loading...</span></div><div id="cb-jc-body"></div>' + cancelReladElem,
		buttons : false,
		useBootstrap: false,
		onOpen : function()
		{
			var dataPageScript = document.createElement("script");
			dataPageScript.src = dataPageSrc;
			document.getElementById('cb-jc-body').appendChild( dataPageScript );
		}
	});
}

function deployDP(containerId, dataPageSrc)
{
	var dataPageScript = document.createElement("script");
	dataPageScript.src = dataPageSrc;
	document.getElementById(containerId).appendChild( dataPageScript );
}

function view_comments(isaId)
{
	$.confirm({
		scrollToPreviousElement: false,
    		scrollToPreviousElementAnimate: false,
		type: 'secondary',
		columnClass: 'col-md-6 col-md-offset-3',
		icon: 'fa fa-th-list',
		title: 'ISA ' + isaId + ' - Comment Log',
		theme: 'material',
		content: '<div id="cb-comments"></div> <input type="hidden" class="cb-cancel-reload">',
		backgroundDismiss: false,
		buttons: false,
		boxWidth: '70%',
		useBootstrap: false,
		onOpen: function()
		{
			$('#cb-comments').load('./comment-log-2.php?ISA_ID=' + isaId);
		}
	});
}

function reset_isa(ISA_ID)
{
	$.confirm({
		scrollToPreviousElement: false,
    		scrollToPreviousElementAnimate: false,
		type : 'secondary',
		columnClass: 'col-md-6 col-md-offset-3',
		icon: 'fa fa-warning',
		title : 'Reset ISA',
		theme : 'material',
		content : "Are you sure you would like to reset this record? <br/> This record will return to the submitter's work list.",
		backgroundDismiss : true,
		buttons : {
			NO : function (){},
			YES :
			{
				text: 'YES',
				btnClass: 'btn-green',
				action: function()
				{
					window.location.href = './scratch-pad-reset.php?ISA_ID=' + ISA_ID;
				}
			}
		}
	});
}

function create_new_deal(isaId)
{
	createNewDealPopup = $.confirm({
		scrollToPreviousElement: false
    		, scrollToPreviousElementAnimate: false
		, type : 'secondary'
		, columnClass: 'col-md-6 col-md-offset-3'
		// , icon: 'far fa-question-circle'
		, title : ' '
		, theme : 'material'
		, content : ' \
			<div class="cb-create-new-deal-cn mb-5 text-center"> \
				<div>Are you sure you want to create new Deal?</div> \
				<div><div class="spinner-border text-info" role="status"></div></div> \
			</div> \
			<iframe id="cb-create-new-deal-iframe" class="d-none" src="../shared/create-new-deal.php?From_ISA_ID=' + isaId + '"></iframe> \
		'
		, backgroundDismiss : false
		, buttons : {
			buttonNo :
			{
				text: 'NO'
			}
			, buttonYes :
			{
				text: 'YES'
				, btnClass: 'btn-green'
				, action: function()
				{
					$('.cb-create-new-deal-cn').html('<div>Creating.. </div><div class="spinner-border text-info" role="status"></div>');
					$('#cb-create-new-deal-iframe').contents().find('.cb-create-new-deal-cn *[name="Submit"]').click();

					this.buttons.buttonNo.disable();
					this.buttons.buttonYes.disable();

					return false;

					// openModal_v2('', 'https://' + accountId + '/dp/' + appKeyPrefix + 'b3e5f968d3b9476db044/emb?From_ISA_ID=' + isaId, '500px');
				}
			}
			, buttonOk : 
			{
				text: 'OK'
			}
		}
		, onOpen : function()
		{
			this.buttons.buttonNo.disable();
			this.buttons.buttonYes.disable();
			this.buttons.buttonOk.hide();
		}
	});
}

function attachments_popup(isaId)
{
	openModal_v2( 'ISA ' + isaId + ' - Attachments', 'https://' + accountId + '/dp/' + appKeyPrefix + '9bc1d07cd64e4db5af1f/emb?ISA_ID=' + isaId + '', '95%', 'Y'); 
}

function allocate_assets(isaId)
{
	openModal_v2( 'ISA ' + isaId + ' - Assets', 'https://' + accountId + '/dp/' + appKeyPrefix + '90cd9d8472e949049ca8/emb?isa_id=' + isaId + '', '95%', 'Y');
}

function append_home_run_btn(appKey)
{
	var urlVars = getUrlVars();
	var isaId = urlVars['ISA_ID'];
	var sectionId = urlVars['Section_ID'];

	var btn = '';

	var subfolder = ((window.parent.location.href).split('/'))[((window.parent.location.href).split('/')).length-2];
        if(subfolder == 'sm' || subfolder == 'dom' || subfolder == 'tsm')
        {
                return false;
	}

	switch(appKey.toLowerCase())
	{
		case '25d5500086d1ebc230c74a9182dc': // Section 1
			btn = '<a href="javascript:void(0)" onclick="home_run(' + sectionId + ')" class="btn-success cb-home-run-btn">Save to page 9</a>';
			if($('.cb-home-run-btn').length){ $('.cb-home-run-btn').remove(); }
			$('*[name="AppKey"][value="' + appKey + '"]').closest('form').find('.cbUpdateButtonContainer').append(btn);
			break;

		case '25d55000c00e9414db644c4fbb7f': // Section 2
			btn = '<a href="javascript:void(0)" onclick="home_run(' + sectionId + ')" class="btn-success cb-home-run-btn">Save to page 9</a>';
			if($('.cb-home-run-btn').length){ $('.cb-home-run-btn').remove(); }
			$('.cbBackButtonContainer').append(btn);
			break;

		case '25d55000e67cd6ecfba94394a8b7': // Section 3
			btn = '<a href="javascript:void(0)" onclick="home_run(' + sectionId + ')" class="btn-success cb-home-run-btn">Save to page 9</a>';
			if($('.cb-home-run-btn').length){ $('.cb-home-run-btn').remove(); }
			$('.cb-cswgf-btns').append(btn);
			break;

		case '25d55000d3e8f98b087d439a918e': // Section 4
			btn = '<a href="javascript:void(0)" onclick="updateLastSectionNo(' + isaId + ', 9)" class="btn-success cb-home-run-btn">Save to page 9</a>';
			if($('.cb-home-run-btn').length){ $('.cb-home-run-btn').remove(); }
			$('.cb-invoice-discounts-btns').append(btn);
			break;

		case '25d550000acbae05d7954542a1cd': // Section 5
			btn = '<a href="javascript:void(0)" onclick="updateLastSectionNo(' + isaId + ', 9)" class="btn-success cb-home-run-btn">Save to page 9</a>';
			if($('.cb-home-run-btn').length){ $('.cb-home-run-btn').remove(); }
			$('.cb-statement-rebates-btns').append(btn);
			break;

		case '25d55000e0efc4665b5344579a28': // Section 6
			btn = '<a href="javascript:void(0)" onclick="updateLastSectionNo(' + isaId + ', 9)" class="btn-success cb-home-run-btn">Save to page 9</a>';
			if($('.cb-home-run-btn').length){ $('.cb-home-run-btn').remove(); }
			$('.cb-eq-rebates-btns').append(btn);
			break;

		case '25d5500051ba494d753f49b0a82e': // Section 7
			btn = '<a href="javascript:void(0)" onclick="home_run(' + sectionId + ')" class="btn-success cb-home-run-btn">Save to page 9</a>';
			if($('.cb-home-run-btn').length){ $('.cb-home-run-btn').remove(); }
			$('.cb-investments-btns').append(btn);
			break;
	}

	// ./home-run.php?ISA_ID=' + isaId + '&Section_ID=' + (sectionId + 1) + '
}

function home_run(sectionId)
{
	$('.cb-home-run-btn').prop('disabled', true);
	$('.cb-home-run-btn').addClass('disabled');

	switch(sectionId)
	{
		case 1:
			$('*[name="EditRecordLast_Section_No"]').val('9');
			$('*[name="Mod0EditRecord"]').click();
			break;

		case 2:
			$('*[name="EditRecordLast_Section_No"]').val('9');
			$('*[name="Mod0EditRecord"]').click();
			break;

		case 3:
			$('div.cb-cswgf-btns a.nextbtn').addClass('disabled').prop('disabled', true);
			$('*[name="EditRecordLast_Section_No"]').val('9');
			document.querySelector('#cswogf-container #caspioform').submit();
			break;

		case 7:
			$('div.cb-cswgf-btns a.nextbtn').addClass('disabled').prop('disabled', true);
			$('*[name="InsertRecordLast_Section_No"]').val('9');
			$('.cb-investments-btns .nextbtn').click();
			break;

	}
}

function report_error(isaId)
{
	window.open('https://' + accountId + '/dp/' + appKeyPrefix + '629411a11f9145949327?ISA_ID=' + isaId);

	setTimeout(function(){
		$('.cb-hotbuttons button').removeClass('disabled');
		$('.cb-hotbuttons button').prop('disabled', false);
	}, 1000);
}

function returnToDealDirectory(vendorId)
{
	$.confirm({
		scrollToPreviousElement: false,
    		scrollToPreviousElementAnimate: false,
		type : 'secondary',
		columnClass: 'col-md-6 col-md-offset-3',
		title : ' ',
		theme : 'material',
		content : 'Are you sure you want to return this to the Deal Directory?',
		backgroundDismiss : true,
		buttons : {
			NO : function (){},
			YES :
			{
				text: 'YES',
				btnClass: 'btn-green',
				action: function()
				{
					// alert(1);
					openModal_v2('', 'https://' + accountId + '/dp/' + appKeyPrefix + 'd60b69de2051463b9f78/emb?Vendor_ID=' + vendorId, '500px', 'Y');
				}
			}
		}
	});
}

function comCept12monthPurchaseReport(isaId)
{
	window.open('https://' + accountId + '/dp/' + appKeyPrefix + 'dee2f83f2ae4434a99e5?ID=' + isaId);
}

function view_comment_log(isa_id)
{
	jqueryConfirm_ExecuteISA = $.confirm({
		type: 'secondary'
		, columnClass: 'col-md-6 col-md-offset-3'
		, icon: 'fa fa-th-list'
		, title: 'Comment Log'
		, theme: 'material'
		, content: '<iframe id="cb-comment-log-div" src="./comment-log.php?ISA_ID=' + isa_id + '" style="height:70vh;"></iframe>'
		, backgroundDismiss: false
		, buttons: false
		, boxWidth: '70%'
		, useBootstrap: false
	});
}

function updateLastSectionNo(isaId, lastSectionNo)
{
	updateLastSectionNoPopup = $.confirm({
		scrollToPreviousElement: false
    		, scrollToPreviousElementAnimate: false
		, closeIcon : false
		, icon : ''
		, title : ' '
		, theme : 'material'
		, type : 'blue'
		, content : ' \
			<div class="mb-5"> \
			<div class="text-center"> \
				Saving \
				<div class="cb-delete-account-related-spinner"><div class="spinner-border text-info" role="status"></div></div> \
			</div> \
			<div id="cb-update-last-section-no-cn" class="d-none"></div> \
			</div>'
		, backgroundDismiss : false
		, buttons: false
		, onOpen : function()
		{
			deployDP('cb-update-last-section-no-cn', 'https://' + accountId + '/dp/' + appKeyPrefix + '2b273abde5a34f36b9a6/emb?ISA_ID=' + isaId + '&Last_Section_No=' + lastSectionNo);
		}
	});
}

function liquidReturnsIRR(liquidReturnsId)
{
	openModal_v2('', 'https://' + accountId + '/dp/' + appKeyPrefix + '527fa41138894755ab55/emb?id=' + liquidReturnsId, '80%');
}

function totalReturnsIRR(totalReturnsId)
{
	openModal_v2('', 'https://' + accountId + '/dp/' + appKeyPrefix + '527fa41138894755ab55/emb?id=' + totalReturnsId, '80%');
}

function clone_isa(isaId)
{
	cloneIsaPopup = $.confirm({
		type: 'secondary'
		, columnClass: 'col-md-6 col-md-offset-3'
		, icon: 'fa fa-warning'
		, title: 'Clone ISA'
		, theme: 'material'
		, content: ' \
			<div class="cb-clone-isa-cn mb-5 text-center"> \
				<div>Are you sure you want to clone this E-ISA? </div> \
				<div><div class="spinner-border text-info" role="status"></div></div> \
			</div> \
			<iframe id="cb-clone-isa-iframe" class="d-none" src="../shared/clone-isa.php?Clone_From_ISA_ID=' + isaId + '"></iframe>'
		, backgroundDismiss: false
		, buttons:
		{
			buttonNo:
			{
				text: 'NO'
			}
			, buttonYes:
			{
				text: 'YES'
				, btnClass: 'btn-green'
				, action: function()
				{
					$('.cb-clone-isa-cn').html('<div>Cloaning.. </div><div class="spinner-border text-info" role="status"></div>');
					$('#cb-clone-isa-iframe').contents().find('.cb-clone-isa *[name="Submit"]').click();

					this.buttons.buttonNo.disable();
					this.buttons.buttonYes.disable();

					return false;
				}
			}
			, buttonOk : 
			{
				text: 'Ok'
				, action : function()
				{
					// refresh scratch pad
					for (var key in window.dataPageManagerObj.dataPages)
					{
						$.each([
							'25d550008ee50769a0604cedb505' // AS 
							, '25d55000ef846788b6084c409415' // ISA Team
							, '25d550007a4ce4c31f764e858c02' // CSM
							, '25d550009ec3bc79af5a46b59b62' // DOM
							, '25d550006ca1c85bb0184f5992ce' // DSM
							, '25d550004ea958a0844749d88097' // Tom B
							, '25d55000aca17a2ae9a84c859572' // RSM
							, '25d550004e653244f64741aabc44' // RVPO
							, '25d550004199635e44154be294b4' // RVPS
							, '25d550008ee50769a0604cedb505' // TSM
							, '25d5500018fadc0dd5924b78a67b' // VPAS
							, '25d550002c05af4717284cb78f5e' // VPCS
						], function(appKey){
							if(key.search(appKey) != -1)
							{
								window.dataPageManagerObj.dataPages[key].refresh();
							}
						});

						
					}
				}
			}
		}
		, onOpen : function()
		{
			this.buttons.buttonNo.disable();
			this.buttons.buttonYes.disable();
			this.buttons.buttonOk.hide();
		}
	});
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Disable button on click then submit form

// section 1 - Add
$(document).on('click', 'input[class^="cbSubmitButton"]', function(){
	$(this).prop('disabled', true);
	$(this).closest('form').submit();
});

// section 1 - Update
$(document).on('click', 'input[name="Mod0EditRecord"]', function(){

	$('.cb-home-run-btn').addClass('disabled').prop('disabled', true);

	$(this).prop('disabled', true);
	$(this).closest('form').submit();
});

// section 2
$(document).on('click', '.cb-cagr-entry-container .cb-save-n-next-btn', function(){

	$('.cb-home-run-btn').addClass('disabled').prop('disabled', true);

	$('.cb-cagr-entry-container .cb-save-n-next-btn').prop('disabled', true);
	$(this).addClass('disabled');
});

// section 3
$(document).on('click', 'div.cb-cswgf-btns a.nextbtn', function(){

	$('.cb-home-run-btn').addClass('disabled').prop('disabled', true);

	$(this).prop('disabled', true);
	$(this).addClass('disabled');
	$(this).removeAttr('onclick');
});

// section 4
$(document).on('click', '.cb-invoice-discounts-btns .nextbtn', function(e){
	$(this).addClass('disabled');
	$(this).prop('disabled', true);
});

// section 5
$(document).on('click', '.cb-statement-rebates-btns .nextbtn', function(e){
	$(this).addClass('disabled');
	$(this).prop('disabled', true);
});

// section 6
$(document).on('click', '.cb-eq-rebates-btns .nextbtn', function(e){
	$(this).addClass('disabled');
	$(this).prop('disabled', true);
});

// section 7
$(document).on('click', '.cb-investments-btns .nextbtn', function(){

	$('.cb-home-run-btn').addClass('disabled').prop('disabled', true);

	$('.cb-investments-btns .nextbtn').prop('disabled', true);
	$(this).addClass('disabled');
});

// section 8
$(document).on('click', '.cb-old-eisa .cb-next-btn', function(){
	// console.log(11);
	$('.cb-old-eisa .cb-next-btn').prop('disabled', true);
	$(this).addClass('disabled');
});

$(document).on('click', '#cb-attachments-form #fake_save_and_next', function(){
	$(this).addClass('disabled');
	$(this).prop('disabled', true);
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Disable buttons in allied setup on click

$(document).on('click', '.cb-hotbuttons button', function(e){
	$('.cb-hotbuttons button').addClass('disabled');
	$('.cb-hotbuttons button').prop('disabled', true);

	e.preventDefault();
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Dashboard Buttons

// Delete Related Account
$(document).on('click', '.cb-db-delete-related-acct-btn', function(){
	var relatedAccountId = $(this).attr('data-related-account-id');
	dashboard_delete_related_accounts(relatedAccountId);
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Save to Page 9

$(document).on('click', '.cb-home-run-btn', function(){
	$('.cb-home-run-btn').addClass('disabled').prop('disabled', true);

	$('div.cb-cswgf-btns a.nextbtn').addClass('disabled').prop('disabled', true);
	$('.cb-invoice-discounts-btns .nextbtn').addClass('disabled').prop('disabled', true);
	$('.cb-statement-rebates-btns .nextbtn').addClass('disabled').prop('disabled', true);
	$('.cb-eq-rebates-btns .nextbtn').addClass('disabled').prop('disabled', true);
	$('.cb-investments-btns .nextbtn').addClass('disabled').prop('disabled', true);
	$('.cb-old-eisa .cb-next-btn').addClass('disabled').prop('disabled', true);
	$('#cb-attachments-form #fake_save_and_next').addClass('disabled').prop('disabled', true);
});

document.addEventListener('DataPageReady', function (event) {
	append_home_run_btn(event.detail.appKey);
});


