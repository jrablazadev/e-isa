
document.addEventListener("DataPageReady", function (e) {
  //---- Add
  if (e.detail.appKey.includes("f43c7f0c59974384ad91") //paint part number
      || e.detail.appKey.includes("256463b78af14161a9c5") //allied part number
  ) {
    addPartNum(e);
    addPartNumCalculator(e, showCalculator);

  }

  //*---- List 
  if (e.detail.appKey.includes("64fe26ada91146439a40") //paint part number
      || e.detail.appKey.includes("8cea4a833e7d48609f91")  //allied part number
    ) {
    listPartNum(e);
    addHoverOnList(e, "Part Number")

  }

  if (e.detail.appKey.includes("027b4559b4cf41f5b53c") //paint part number
      || e.detail.appKey.includes("661a81f6faed407eb26c") //allied part number
  ){
    addPartNum(e);
    addPartNumCalculator(e, showCalculator); //var showCalculator from DPs


  }
});

const showHideCalculator = (status) => {
  const calculatorDiv = document.querySelector('.cb-calculator-div');
  if(calculatorDiv){
    calculatorDiv.style.cssText = status ? "display: revert;" : "display: none;"
  }


}
// const hideCalculator = (e) => {
//   setTimeout(() => {
//     console.log(`form submitted---${e.detail.appKey}`);
//     const calculatorDiv = document.querySelector('.cb-calculator-div');
//     const isUpdated = document.querySelector('form[action*="PageID=2"]') ? true : false;
//     const currentForm = document.querySelector(`form[action*="${e.detail.appKey}"]`);

//     if (calculatorDiv && currentForm && isUpdated) {
//       calculatorDiv.style.cssText = "display: none;";
//     } else if (showCalculatorDiv){
//       calculatorDiv.style.cssText = "display: revert;";
//     }
//   }, 100); 
// }

document.addEventListener("DOMContentLoaded", function(){

})

//end of DataPage Ready

const addPartNum = (e) => {
  //convert Start and End Dates to first and last of the month respectively
  var start_date = document.querySelector(`form[action*="${e.detail.appKey}"] input[name*="RecordStart_Date"]`);
  var end_date = document.querySelector(`form[action*="${e.detail.appKey}"] input[name*="RecordEnd_Date"]`);

  if(start_date){
    start_date.addEventListener("change", function () {
      set_first_date(start_date);
    });
  }


  if(end_date){
    end_date.addEventListener("change", function () {
      set_last_date(end_date);
    });
  }


  //disable calendar dates
  var partNum = $(
    `form[action*="${e.detail.appKey}"] input[name="cbParamVirtual1"]`
  );
  var startDate = $(
    `form[action*="${e.detail.appKey}"] input[name*="RecordStart_Date"]`
  );
  var endDate = $(
    `form[action*="${e.detail.appKey}"] input[name*="RecordEnd_Date"]`
  );
  var recentEndDate = $(
    `form[action*="${e.detail.appKey}"] input[name="cbParamVirtual8"]`
  );


  startDate.prop("disabled", !partNum.val());
  endDate.prop("disabled", !startDate.val() && !endDate.val());

  if (startDate.length && recentEndDate.length) {
    setStartDate(startDate, endDate, recentEndDate);
  }

  if (endDate.length) {
    setEndDate(endDate, startDate);
  } else {
    console.error("Flatpickr: End date field not found!");
  }

  //Dispatching event so query can work
  var on_change = new Event("change");
  var part_num = document.querySelector('input[name*="Part_Number"]');
  var part_num_field = document.querySelector(
    `form[action*="${e.detail.appKey}"] input[name$="Virtual1"]`
  );

  if(part_num_field){
    part_num_field.addEventListener("change", function () {
      startDate.val("");
      endDate.val("");
      startDate.prop("disabled", !partNum.val());
      endDate.prop("disabled", !partNum.val());
      setStartDate(startDate, endDate, recentEndDate);
      setEndDate(endDate, startDate);
  
      part_num.dispatchEvent(on_change);
      start_date.dispatchEvent(on_change);
      end_date.dispatchEvent(on_change);
    });
  
  }



  //hide mfg fields
  var mfg_support_type = document.querySelector(
    `form[action*="${e.detail.appKey}"] select[name*="RecordMFR_Support"]`
  );
  var mfg_fields = {
    RecordMFG_Support_Dollars_Per_Unit: "input",
    RecordMFG_Support_Percentage_Per_Unit: "input",
    RecordMFR_Support_From: "select",
  };

  if(mfg_support_type && mfg_fields){
    toggle_mfg_sibling_fields(mfg_support_type, mfg_fields);

    mfg_support_type.addEventListener("change", () =>
      toggle_mfg_sibling_fields(mfg_support_type, mfg_fields)
    );
  }

};

const listPartNum = (e) => {
  var original_aggregate = "Aggregate1";

  var aggregate_placements = {
    Aggregate2: 5, // mfr margin
    Aggregate3: 6, //ncsssi industrial margin
    Aggregate4: 7, // ncsssi financials margin
  };

  display_custom_totals(
    e.detail.appKey,
    original_aggregate,
    aggregate_placements
  );
};




const addPartNumCalculator = (e, show = false) => {

  const modalContainer = document
    .querySelector(`form[action*="${e.detail.appKey}"]`)
    ?.closest("div.jconfirm-content-pane.no-scroll");

  if (modalContainer && !modalContainer.classList.contains("d-flex")) {
    modalContainer.classList.add("d-flex");

    const calculatorDiv = document.createElement("div");
    calculatorDiv.className = "jconfirm-content cb-calculator-div ml-4";

    const marginLabels = {
      "NCSSSI FINANCIALS MARGIN": "financials-margin",
      "NCSSSI INDUSTRIAL MARGIN": "industrial-margin",
      "MFR MARGIN"              : "mfr-margin",
    };

    let contentHTML = `
          <div class="cb-calculator-content p-3 border border-dark">
            <h3 class="cb-calculator-title">Margins</h3>
        `;

    for (const [label, id] of Object.entries(marginLabels)) {
      contentHTML += `
              <div class="cb-margin-item my-3">
                  <div class="cb-margin-label bg-dark text-white p-2">${label}</div>
                  <div class="cb-margin-value text-right" id="${id}">0.0%</div>
              </div>
            `;
    }

    contentHTML += `
    </div>
    <div class="d-flex justify-content-center p-3">
    <button class="btn btn-primary" id="cb-part-num-margins-btn">Calculate Margins</button>
    </div>
    <div id="cb-calculator-missing-fields">
    </div>
    `;
    calculatorDiv.innerHTML = contentHTML;

    if(show){
      modalContainer.appendChild(calculatorDiv);
    } else {
      modalContainer.innerHTML = ''

    }
      // modalContainer.appendChild(calculatorDiv);

  }
  calculateValues(e);
  var calculateMarginsBtn = document.querySelector('#cb-part-num-margins-btn')
  if(calculateMarginsBtn){
    calculateMarginsBtn.addEventListener("click", function(){
      calculateValues(e, 1);
    })
    
  }


  
};



const calculateValues = (e, showError = 0) => {
  var formFields = {
    'paintPartNumVirtual'     : 'input[name*="cbParamVirtual1"]',
    'paintPartNumberID'       : 'input[name*="RecordPart_Number_ID"]',
    'validityChecker'         : 'input[name="cbParamVirtual4"]',
    'startDate'               : 'input[name*="RecordStart_Date"]',
    'endDate'                 : 'input[name*="RecordEnd_Date"]',
    'term'                    : 'input[name*="RecordTerm"]',
    'itemCostEachP7'          : 'input[name*="RecordItem_Cost_Each_P7"]', //jobber price
    'monthlyUnits'            : 'input[name*="RecordMonthly_Units"]',
    'customerUnitPrice'       : 'input[name*="RecordCustomer_Unit_Price"]',
    // 'mfgSupport'              : 'select[name="cbParamVirtual6"]',
    'mfgSupport'              : 'select[name*="RecordMFR_Support"]',
    'mfgSupportDollarsPerUnit': 'input[name*="RecordMFG_Support_Dollars_Per_Unit"]',
    'mfrSupportPctPerUnit'    : 'input[name*="RecordMFG_Support_Percentage_Per_Unit"]',
    'mfrSupportFrom'          : 'select[name*="RecordMFR_Support_From"]',
    
    //hidden field
    'itemPublishedCostEach'   : 'input[name*="RecordItem_Published_Cost_Each"]'
  };

  var   totalUnits = 0, 
        totalCustomerPurchase = 0, 
        dealTotalCost = 0, 
        dealTotalPublishedCost = 0, 
        totalDealCompDollars = 0, 
        totalDealAdjustedCost = 0, 
        totalDealAdjustedProfit = 0,
        mfrMargin = 0, 
        ncsssiIndustrialMargin = 0, 
        ncsssiFinancialsMargin = 0

  var formSelector = `form[action*="${e.detail.appKey}"]`;
  var elements = {};

  for (var key in formFields) {
      elements[key] = document.querySelector(`${formSelector} ${formFields[key]}`);
  }


  const validateParNum = () => {
    elements.paintPartNumberID.addEventListener("change", function() {
            var invalidPartNum = elements.paintPartNumVirtual.value != '' && elements.paintPartNumberID.value == '' ? 1 : 0;
            elements.validityChecker.value = invalidPartNum;
            var on_change = new Event("change");
            elements.validityChecker.dispatchEvent(on_change);
    });


    
 
  
  }
  

  if (elements.paintPartNumVirtual, elements.paintPartNumberID && elements.validityChecker) {
    validateParNum()

    const inputCheckers = [
      '.jconfirm-open input[name*="Virtual2"]', //conflict dates
      '.jconfirm-open input[name*="Virtual4"]' //is invalid
    ];
    const submitBtn = $(".jconfirm-open .cbSubmitButton").length 
    ? $(".jconfirm-open .cbSubmitButton") 
    : $(".jconfirm-open .cbUpdateButton");

    enable_submit_button(inputCheckers, submitBtn);
  }



  //calculation functions
  const getMfrSupportPct = () => {
    if(elements.mfrSupportFrom.value == 'Invoice'){
      return (elements.mfrSupportPctPerUnit.value * totalCustomerPurchase) / 100
    }
    if(elements.mfrSupportFrom.value == 'Jobber Cost'){
      return (elements.mfrSupportPctPerUnit.value * dealTotalCost) / 100
    }
    if(elements.mfrSupportFrom.value == ''){
      return 0
    }
  
  }

  const updateTotalDealCompDollars = () => {
    //Percentage $
    if(elements.mfgSupport.value == 2){
      return  getMfrSupportPct(
          elements.mfrSupportPctPerUnit.value, 
          elements.mfrSupportFrom.value, 
          totalCustomerPurchase, 
          dealTotalCost //itemCostEachP7 * totalUnits
        )
    }
    //Dollar
    if(elements.mfgSupport.value == 1){
      return elements.mfgSupportDollarsPerUnit.value * totalUnits
    } 

    if(elements.mfgSupport.value == ''){
      return 0
    }


  }



  const displayMargins = (mfrMargin, ncsssiIndustrialMargin, ncsssiFinancialsMargin) => {

    var containerMargins = {
      'financials-margin'   : ncsssiFinancialsMargin,
      'industrial-margin'   : ncsssiIndustrialMargin,
      'mfr-margin'          : mfrMargin
    };

    function convertPercent(marginValue){
      return  marginValue == 0
              ? '0.0'
              : (Math.sign(marginValue) * Math.round(Math.abs(parseFloat(marginValue)) * 10) / 10).toFixed(1);
    }
  
    Object.entries(containerMargins).forEach(([containerId, marginValue]) => {
      var displayElement = document.querySelector(`#${containerId}`);
  
      displayElement.innerHTML = `${convertPercent(marginValue)}%`;
    });
  
  
  }

  const displayLackingInputs = () => {
    clearMissingFieldHighlights();
    clearMissingFieldMessages();
  
    const missingLabels = getMissingLabels([
      'paintPartNumVirtual',
      'startDate',
      'endDate',
      'term',
      'monthlyUnits',
      'customerUnitPrice',
      'itemCostEachP7',
      'mfgSupport'
    ]);
  
    if (missingLabels.length) {
      renderMissingFieldsMessage(missingLabels);
    }
  };
  
  const clearMissingFieldHighlights = () => {
    Object.values(elements).forEach(el => el?.classList.remove('cb-missing-field'));
  };
  
  const clearMissingFieldMessages = () => {
    const container = document.querySelector('#cb-calculator-missing-fields');
    if (container) container.innerHTML = '';
  };
  
  const getMissingLabels = (requiredKeys) => {
    const labels = [];
  
    requiredKeys.forEach(key => {
      const inputEl = elements[key];
  
      if (!inputEl || inputEl.value.trim() === '') {
        highlightElement(inputEl);
        labels.push(getLabelTextForInput(inputEl, key));
        return;
      }
  
      if (key === 'mfgSupport') {
        const conditionalKeys = getConditionalSupportFields(inputEl.value);
        conditionalKeys.forEach(supportKey => {
          const supportEl = elements[supportKey];
          if (!supportEl || supportEl.value.trim() === '') {
            highlightElement(supportEl);
            labels.push(getLabelTextForInput(supportEl, supportKey));
          }
        });
      }
    });
  
    return labels;
  };
  
  const highlightElement = (el) => {
    el?.classList.add('cb-missing-field');
  };
  
  const getLabelTextForInput = (inputEl, fallbackText) => {
    if (!inputEl) return fallbackText;
    const label = document.querySelector(`label[for*="${inputEl.name}"]`);
    return label?.firstChild?.textContent?.trim() || fallbackText;
  };
  
  const getConditionalSupportFields = (supportType) => {
    if (supportType == 1) return ['mfgSupportDollarsPerUnit'];
    if (supportType == 2) return ['mfrSupportPctPerUnit', 'mfrSupportFrom'];
    return [];
  };
  
  const renderMissingFieldsMessage = (labels) => {
    const container = document.createElement('div');
    Object.assign(container.style, {
      padding: '1em',
      backgroundColor: '#fff8e1',
      border: '1px solid #f1c40f',
      borderRadius: '8px',
      marginTop: '10px',
      fontFamily: 'Segoe UI, sans-serif',
    });
  
    const heading = document.createElement('div');
    heading.innerHTML = `
      <div style="
        display: inline-block;
        background-color: #f39c12;
        color: white;
        padding: 6px 12px;
        border-radius: 20px;
        font-weight: 600;
        font-size: 14px;
        margin-bottom: 10px;
      ">
        ⚠️ Please complete the following fields
      </div>
    `;
    container.appendChild(heading);
  
    const ul = document.createElement('ul');
    Object.assign(ul.style, {
      margin: '10px 0 0 0',
      paddingLeft: '20px',
      fontSize: '14px',
      color: '#333'
    });
  
    labels.forEach(label => {
      const li = document.createElement('li');
      li.textContent = label;
      li.style.marginBottom = '4px';
      ul.appendChild(li);
    });
  
    container.appendChild(ul);
    document.querySelector('#cb-calculator-missing-fields')?.appendChild(container);
  };
  
  
  

  if(elements.monthlyUnits){
    totalUnits = elements.monthlyUnits.value * elements.term.value
    totalCustomerPurchase = totalUnits * elements.customerUnitPrice.value;  
    dealTotalCost =   elements.itemCostEachP7.value * totalUnits
    dealTotalPublishedCost = elements.itemPublishedCostEach.value * totalUnits
    totalDealCompDollars = updateTotalDealCompDollars();
    totalDealAdjustedCost = dealTotalCost - totalDealCompDollars;
    totalDealAdjustedProfit = totalCustomerPurchase - totalDealAdjustedCost;
    
    mfrMargin = totalCustomerPurchase == 0 ? 0 : (totalDealAdjustedProfit / totalCustomerPurchase) * 100;
    ncsssiIndustrialMargin  = (totalCustomerPurchase - dealTotalPublishedCost) == 0 || totalCustomerPurchase == 0
                            ? 0 
                            : (((totalCustomerPurchase) - (dealTotalPublishedCost - totalDealCompDollars))/ totalCustomerPurchase) * 100;
    ncsssiFinancialsMargin  = (totalCustomerPurchase + totalDealCompDollars) == 0
                            ? 0
                            : (((totalCustomerPurchase + totalDealCompDollars) - dealTotalPublishedCost) / (totalCustomerPurchase + totalDealCompDollars)) * 100;
  
    displayMargins(mfrMargin, ncsssiIndustrialMargin, ncsssiFinancialsMargin)
    showError == 1 ? displayLackingInputs() : '';
  }

}

const editPPN = (ISA_ID, PPN_ID) => {
  modalButton(
    "Edit Paint Part Number",
    "027b4559b4cf41f5b53c",
    `?PPN_ID=${PPN_ID}`
  );
};

const editAPN = (ISA_ID, APN_ID) => {
  modalButton(
    "Edit Allied Part Number",
    "661a81f6faed407eb26c",
    `?APN_ID=${APN_ID}`
  );
};



//--------------archived

// const displayMargins = (e) => {

//   var containerMargins = {
//     'financials-margin'   : 'RecordNCSSSI_Financial_Margin',
//     'industrial-margin'   : 'RecordNCSSSI_Industrial_Margin',
//     'mfr-margin'          : 'RecordMFR_Margin'
//   };

//   function handleMarginChange(inputElement, targetElement) {
//     var convertPercent = isNaN(inputElement.value) || inputElement.value === ""
//         ? "0.0"
//         //cannot use simple toFixed as it wont round up negative numbers < 1
//         : (Math.sign(inputElement.value) * Math.round(Math.abs(parseFloat(inputElement.value) * 100) * 10) / 10).toFixed(1);

//     targetElement.innerHTML = `${convertPercent}%`;
//   }

//   Object.entries(containerMargins).forEach(([containerId, inputName]) => {
//     var formElement = document.querySelector(`form[action*="${e.detail.appKey}"] input[name*="${inputName}"]`);
//     var displayElement = document.querySelector(`#${containerId}`);

//     if (formElement && displayElement) {
//         formElement.addEventListener("change", function() {
//             handleMarginChange(this, displayElement);
//         });
//     }
//   });


// }



// const calculateMargins = (e) => {
//   var calculateMarginsBtn = document.querySelector('#cb-part-num-margins-btn')
//   calculateMarginsBtn.addEventListener("click", function(){
//     calculateValues(e);
//   })
// }

