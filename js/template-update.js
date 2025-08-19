var search_customer_popup;
var relateAllAccountsPopup;
var relateAllAccountsAddPopup;
var relatedAllAccountsSubmitPopup;

// var selectedAccountsRidArr = [];
// var selectedAccountsRid = '';

var initialCompany,
  initialPaintMfr,
  initialMpoDetails,
  internalUsageCb,
  editedInternalUsage,
  comp,
  compChanges = [],
  previousComp,
  paintMfr,
  mpoBased,
  mpoBasedChanges = [],
  previousMpoBased,
  paintMfrChanges = [],
  previousPaintMfr,
  mpoDetails,
  editedMPODetails,
  isLookupClicked,
  lookupBtn;

var fieldsToBePopulated = [
  'ISA_Name',
  'Reason_For_New_ISA',
  'Credit_Term_Requested',
  'Credit_Status',
  'Credit_Limit',
  'Company',
  'GLID_No',
  'Paint_Manufacturer',
  'Agreement_Type',
  'Type',
  'No_of_Production_Employees', //New Business
  'Competitive_Distributor', //New Business
  'Competitive_Manufacturer', //New Business
  'Legal_Name',
  'DBA_NAme',
  'Owner_Principal_Name',
  'Main_Address',
  'City',
  'State',
  'Zip',
  'Phone',
  'Statement_Preference',
  'Statement_Email',
  'No_of_Locations',
  'Years_in_Business',
  'Pays_by_Credit_Card',
  'User_Growth_Estimate',
  'MPO_Based',
  'MPO_Details',
  'Exclude_Purchases_MPO'

]

// editedVariables = to store edited values when an ISA is submitted with missing required fields
fieldsToBePopulated.forEach(function (fieldName) {
  var editedFieldName = "edited" + fieldName;
  window[editedFieldName] = undefined;
});



document.addEventListener('DataPageReady', function (event) {
  if (event.detail.appKey.includes('86d1ebc230c74a9182dc')) {
    internalUsageCb = document.querySelector('input[name="EditRecordInternal_Usage"]')

    $('#EditRecordCredit_Limit').autoNumeric('init', { mDec: 10, vMin: 0, aSep: '', aPad: false });
    show_MPO_Details();
    initialCompany = $('.HiddenOriginalCompany').val();
    initialPaintMfr = $('.HiddenOriginalPaintMFR').val();
    initialMpoBased = $('.HiddenOriginalMPOBased').val();
    initialMpoDetails = $('*[name$="RecordMPO_Details"]').val();

    $('*[name$="RecordCurrent_EISA_No"]').prop('readonly', true);

    // console.log(initialMpoDetails);

    /* Not used - Jun 2021-08-04
    $('.spinner-border').remove();

    if((event.detail.appKey).toUpperCase() == (appKeyPrefix + 'c36bdfdc8896457e8efa').toUpperCase())
    {
    $('#cb-relate-all-accounts .spinner-border').remove();
    }

    if((event.detail.appKey).toUpperCase() == (appKeyPrefix + 'd424fe7ab6ae4af9896a').toUpperCase())
    {
    $('#cb-relate-all-accounts-add .spinner-border').remove();
    }
    */
    var hitlistValues = {};
    fieldsToBePopulated.forEach(function (fieldName) {
      var fieldElement = document.querySelector(`[name="EditRecord${fieldName}"]`);
      var fieldValues = [];
      var currentValue = fieldElement != null ? fieldElement.value : '';
      fieldValues.push(window[`edited${fieldName}`], currentValue)
      hitlistValues[fieldName] = fieldValues;
    });

    //assign the values to the  ISA fields
    for (var fieldName in hitlistValues) {
      var fieldElement = document.querySelector(`[name="EditRecord${fieldName}"]`);

      if (fieldElement) {
        if (fieldName !== 'Paint_Manufacturer') {
          var fieldValues = hitlistValues[fieldName];
          var fieldValue = fieldValues.find(value => value !== undefined);
          fieldElement.value = fieldValue;

          //----select dropdowns except cascaded ones
          var event = new Event("input")
          if
            (
            fieldName == 'Reason_For_New_ISA'
            || fieldName == 'Credit_Term_Requested'
            || fieldName == 'Company'
            || fieldName == 'GLID_No'
            || fieldName == 'Agreement_Type'
          ) {

            fieldElement.dispatchEvent(event)
          }
          //----./select dropdowns except cascaded ones


        }
        window[`field${fieldName}`] = fieldElement

      }

    }

    setTimeout(() => {
      paintMfr = hitlistValues['Paint_Manufacturer'][0] ? hitlistValues['Paint_Manufacturer'][0] : initialPaintMfr;
      fieldPaint_Manufacturer.value = paintMfr

      // I-24650 - removed - 08/15/2024
      // var mpoBased = hitlistValues['MPO_Based'][0] ? hitlistValues['MPO_Based'][0] : initialMpoBased;
      // fieldMPO_Based.value = mpoBased

      var event = new Event("input")
      fieldPaint_Manufacturer.dispatchEvent(event)
      fieldMPO_Based.dispatchEvent(event)


      mpoDetails = editedMPODetails ? editedMPODetails : ogMPODetails;
      fieldMPO_Details.value = mpoDetails;
      // fieldMPO_Details.dispatchEvent(event)
    }, 1500)




    //listen to any changes done by a user and store them in editedVariables
    fieldsToBePopulated.forEach(fieldName => {
      var editedField = document.querySelector(`[name="EditRecord${fieldName}"]`)
      if (editedField) {
        editedField.addEventListener("blur", function () {
          window[`edited${fieldName}`] = editedField.value
        })
      }

    })

    //ogInternalUsage is from the app param JS_ISA_Template_Update
    internalUsageCb.checked = editedInternalUsage != undefined ? editedInternalUsage : ogInternalUsage;

    internalUsageCb.addEventListener('click', function (e) {
      editedInternalUsage = this.checked
    })

    fieldCompany.addEventListener('input', function () {
      // alert()
      comp = this.value;
      if (compChanges.length > 2) {
        compChanges = [];
      }
      compChanges.push(comp)
      previousComp = compChanges[compChanges.length - 2] ? compChanges[compChanges.length - 2] : initialCompany;
    })

    fieldPaint_Manufacturer.addEventListener('input', function () {
      paintMfr = this.value
      if (paintMfrChanges.length > 2) {
        paintMfrChanges = [];
      }
      paintMfrChanges.push(paintMfr)
      previousPaintMfr = paintMfrChanges[paintMfrChanges.length - 2];

    })

    fieldMPO_Details.addEventListener('input', function () {
      editedMPODetails = this.value
      // console.log(`checking mpoDetails on eventListener input---- ${editedMPODetails}`)
    })

    fieldMPO_Based.addEventListener('input', function () {
      mpoBased = this.value
      if (mpoBasedChanges.length > 2) {
        mpoBasedChanges = [];
      }
      mpoBasedChanges.push(mpoBased)
      previousMpoBased = mpoBasedChanges[mpoBasedChanges.length - 2];
    })


    //to store current values as previous values upon clicking of the lookup button
    lookupBtn = document.querySelector('button[data-target="#cb-modal-related-customer"]')
    lookupBtn.addEventListener('click', function () {
      // isLookupClicked = true;
      previousComp = fieldCompany.value
      previousPaintMfr = fieldPaint_Manufacturer.value
      previousMpoBased = fieldPaint_Manufacturer.value
      // alert(fieldPaint_Manufacturer.value)
    })
  }


});


$(document).on('change', '*[name="EditRecordCompany"], *[name="EditRecordPaint_Manufacturer"]', function () {
  toggle_create_paint_lines();
});

$(document).on('click', '.cb-rl-eisa-id', function () {

  var this_checkbox = this;

  $.confirm({
    type: 'secondary',
    columnClass: 'col-md-6 col-md-offset-3',
    icon: '',
    title: 'Select E-ISA ID',
    theme: 'material',
    content: 'Are sure you want to select this E-ISA ID?',
    backgroundDismiss: false,
    buttons: {
      NO: function () {
        this_checkbox.checked = false;
      },
      YES:
      {
        text: 'YES',
        btnClass: 'btn-green',
        action: function () {
          $('*[name$="RecordCurrent_EISA_No"]').val(this_checkbox.value);
          $('#cb-modal .close').click();
        }
      }
    }
  });
});

$(document).on('change', '*[name="EditRecordCompany"], *[name="EditRecordPaint_Manufacturer"], *[name="EditRecordMPO_Based"]', function () {
  setTimeout(() => {

    var editCompany = $('*[name="EditRecordCompany"]').val();

    //2024-03-03 richae
    //storedMPODetails variable from app param [@app:JS_ISA_Template_Update]

    if (
      compChanges[compChanges.length - 1] != previousComp && compChanges.length > 0
      || paintMfrChanges[paintMfrChanges.length - 1] != previousPaintMfr && paintMfrChanges.length > 1
      || mpoBasedChanges[mpoBasedChanges.length - 1] != previousMpoBased && mpoBasedChanges.length > 1) {
      mpoDetails = ''
    }
    // else {
    //     if(mpoDetails){
    //     //     fieldMPO_Details.value = storedMPODetails
    //     //     alert(fieldMPO_Details.value )

    //     }
    // }

    show_MPO_Details(mpoDetails);
  }, 1500);

});

//2024-03-03 richae
document.addEventListener("BeforeFormSubmit", function (e) {
  if (e.detail.appKey.includes('86d1ebc230c74a9182dc')) {
    mpoDetails = $('*[name$="RecordMPO_Details"]').val()
  }
})


/* Not used - Jun 2021-08-04
$(document).on('click', '#cb-relate-all-accounts-add .cb-account-checkbox', function(){

  if(this.checked)
  {
    selectedAccountsRidArr.push(this.value);
  }
  else
  {
    selectedAccountsRidArr.splice(selectedAccountsRidArr.indexOf(this.value), 1);
  }

  // var rid = [];

  // $('#cb-relate-all-accounts-add .cb-account-checkbox:checked').each(function(){
  // 	rid.push(this.value);
  // });

  selectedAccountsRid = selectedAccountsRidArr.join(',');

  if(selectedAccountsRid == '')
  {
    $('.cb-relate-all-accounts-submit-btn').addClass('d-none');
  }
  else
  {
    $('.cb-relate-all-accounts-submit-btn').removeClass('d-none');
  }

  console.log(selectedAccountsRid);

});
*/

function show_MPO_Details(storedMPODetails) {
  var URL_Param = '?cbResetParam=1';
  URL_Param += '&Company=' + $('*[name="EditRecordCompany"]').val();
  URL_Param += '&Manufacturer=' + $('*[name="EditRecordPaint_Manufacturer"]').val();
  URL_Param += '&Selected=' + storedMPODetails;

  if ($('*[name="EditRecordCompany"]').val() == '' || $('*[name="EditRecordPaint_Manufacturer"]').val() == '' || $('*[name="EditRecordMPO_Based"]').val() == '') {
    $('#MPO_Details_Iframe').removeAttr('src');
    return false;
  }

  $('#MPO_Details_Iframe').attr({ 'src': './mpo-details.php' + URL_Param });
}

function iframe_autoresize(elem) {
  var $iframe = $(elem).length ? $(elem) : window.parent.$(elem);
  var padding = 10;

  $iframe.css('height', '0px');
  var height = $iframe.get(0).contentWindow.document.body.scrollHeight + padding;
  $iframe.css('height', (height + 70) + 'px');
}

function toggle_create_paint_lines() {
  var company = $('*[name="EditRecordCompany"]').val();
  var paint_mfr = $('*[name="EditRecordPaint_Manufacturer"]').val();

  var orig_company = $('.HiddenOriginalCompany').val();
  var orig_paint_mfr = $('.HiddenOriginalPaintMFR').val();

  if (company != orig_company || paint_mfr != orig_paint_mfr) {
    $('*[name="EditRecordCreate_Paint_Lines"]').val('Y');
  }
  else {
    $('*[name="EditRecordCreate_Paint_Lines"]').val('');
  }
}

/* Not used - Jun 2021-08-04
function related_accounts_popup(ISAId)
{
    $.confirm({
        type : 'secondary',
        columnClass : 'col-md-6 col-md-offset-3',
        icon : '',
        title : ' Related Accounts | E-ISA ID: ' + ISAId,
        theme : 'material',
        content : '<iframe frameBorder="0" src="./related-accounts.php?ISA_ID=' + ISAId + '" onload="iframe_autoresize(this)" style="width:100%;"></iframe>',
        backgroundDismiss : true,
        buttons : false,
        boxWidth: '800px',
        useBootstrap: false,
    });
}

function relate_all_accounts_popup(isaId)
{
  selectedAccountsRidArr = [];

        relateAllAccountsPopup = $.confirm({
    scrollToPreviousElement: false,
        scrollToPreviousElementAnimate: false,
    type : 'secondary',
    columnClass : 'col-md-6 col-md-offset-3',
    icon : '',
    title : 'ISA ' + isaId ,
    theme : 'material',
    content : ' \
      <div id="cb-relate-all-accounts-main"> \
      <span style="font-size:22px; font-weight:bold;">Related Accounts</span> \
      <div id="cb-relate-all-accounts"><div class="spinner-border text-info" role="status"></div></div> \
      <hr> \
      <span style="font-size:22px; font-weight:bold;">Add Accounts</span> \
      <div id="cb-relate-all-accounts-add"><div class="spinner-border text-info" role="status"></div></div> \
      <div><button type="button" class="btn btn-primary btn-sm mb-5 d-none cb-relate-all-accounts-submit-btn" onclick="relate_all_accounts_submit(' + isaId + ')">Submit</button> </div> \
      <div id="cb-relate-all-accounts-submit"></div> \
      <input type="hidden" class="cb-cancel-reload"> \
      </div> ',
    backgroundDismiss : false,
    buttons : false,
    boxWidth: '80%',
    useBootstrap: false,
    onOpen : function()
    {
      deployDP('cb-relate-all-accounts', 'https://' + accountId + '.caspio.com/dp/' + appKeyPrefix + 'c36bdfdc8896457e8efa/emb?ISA_ID=' + isaId);
      deployDP('cb-relate-all-accounts-add', 'https://' + accountId + '.caspio.com/dp/' + appKeyPrefix + 'd424fe7ab6ae4af9896a/emb?ISA_ID=' + isaId);
    }
  });
}

function relate_all_accounts_submit(isaId)
{
  deployDP('cb-relate-all-accounts-submit', 'https://' + accountId + '.caspio.com/dp/' + appKeyPrefix + '93e7b910fe384cc88bf3/emb?ISA_ID=' + isaId + '&Network_Customer_IDs=' + selectedAccountsRid);
  $('#cb-relate-all-accounts-main > span').hide();
  $('#cb-relate-all-accounts-main > div').hide();
  $('#cb-relate-all-accounts-main > hr').hide();
  $('#cb-relate-all-accounts-main').append('<div class="spinner-border text-info" role="status"></div>');
}
*/
