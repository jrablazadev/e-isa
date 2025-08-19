//EST today's date
const date = new Date();
date.setUTCHours(date.getUTCHours() - 5);
const options = { timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit' };
const estDate = date.toLocaleDateString('en-US', options);

var internalUsageCb,
editedInternalUsage;


var fieldsToBePopulated = [
    'ISA_Name',
    'Reason_For_New_ISA',
    'Credit_Term_Requested',
    'Credit_Limit',
    'Company',
    'GLID_No',
    'Paint_Manufacturer',
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
    'Years_in_Business',
    'Pays_by_Credit_Card',
    'User_Growth_Estimate'
]

// editedVariables = to store edited values when an ISA is submitted with missing required fields
fieldsToBePopulated.forEach(function(fieldName) {
    var editedFieldName = "edited" + fieldName;
    window[editedFieldName] = undefined; 
});

document.addEventListener("DataPageReady", function(e){
    if(e.detail.appKey.includes('5a1f6380977a4144b939')){ 
        internalUsageCb = document.querySelector('input[name="InsertRecordInternal_Usage"]')

        var url = new URL(window.location.href);
        var params = url.searchParams;
        //if New Business from Hitlist
        if (params.has('Opportunity_ID')) {
            var opportunityId = params.get('Opportunity_ID');
            deployDP('hitlist-details-dp', `https://caspio.thenetwork-crm.com/dp/25D550001be2f6cd9c7c48b4893c/emb`)
            document.addEventListener("DataPageReady", function(e){
                if(e.detail.appKey.includes('1be2f6cd9c7c48b4893c')){

                    //hide lookup button
                    var button = document.querySelector('button[data-target="#cb-modal-related-customer"]');
                    var tr = button.closest('tr.cbFormTableRow');
                    if (tr) {
                        tr.style.cssText = "display: none";
                    }

                    //HL_inputs are from 1be2f6cd9c7c48b4893c
                    //get values from hitlist
                    var HL_inputs = document.querySelectorAll('.cb-inputs-holder');
                    HL_inputs.forEach(function(HL_input) {
                        var id = HL_input.id;
                        window[id] = document.getElementById(id).textContent;

                    });

                    var HL_ISA_Name = `${HL_GLID_No} - ${HL_Legal_Name} - ${estDate}`

                    //query fields to be populated and assign values from hitlist when editedVariables are empty
                    var hitlistValues = {};
                    fieldsToBePopulated.forEach(function(fieldName) {
                        var fieldElement = document.querySelector(`[name*="${fieldName}"]`)
                        var fieldValues = [];
                        //stores edited Values or Hitlist values...
                        if (fieldName == 'ISA_Name'){
                            fieldValues.push(window[`edited${fieldName}`], HL_ISA_Name)
                        } else if (fieldName == 'Reason_For_New_ISA'){
                            fieldValues.push('New Business')
                        } else if(fieldName == 'Credit_Term_Requested'){
                            fieldValues.push(window[`edited${fieldName}`],'COD')
                        } else if(fieldName == 'Pays_by_Credit_Card'){
                            fieldValues.push(window[`edited${fieldName}`],'No')
                        } else if(fieldName == 'Statement_Preference'){
                            fieldValues.push(window[`edited${fieldName}`],window[`HL_${fieldName}`], 'Paper')
                        } else if(fieldName == 'User_Growth_Estimate'){
                            fieldValues.push(window[`edited${fieldName}`],'0')
                        }
                        else {
                            fieldValues.push(window[`edited${fieldName}`],window[`HL_${fieldName}`])
                        }
                        hitlistValues[fieldName] = fieldValues;
                    });

                    //assign the values to the Create ISA fields
                    for (var fieldName in hitlistValues) {
                        var fieldElement = document.querySelector(`[name="InsertRecord${fieldName}"]`);
                        if(fieldElement){
                            if(fieldName !== 'Paint_Manufacturer' || fieldName !== 'Internal_Usage'){
                                var fieldValues = hitlistValues[fieldName];
                                var fieldValue = fieldValues.find(value => value !== undefined);
                                fieldElement.value = fieldValue;
        
                                var event = new Event("change")
                                if(
                                    fieldName == 'Reason_For_New_ISA'
                                    || fieldName == 'Credit_Term_Requested'
                                    || fieldName == 'Company'
                                    || fieldName == 'GLID_No'){
                                    fieldElement.dispatchEvent(event)
                                }
        
                            }
                            window[`field${fieldName}`] = fieldElement    
                        }
                    }

                    setTimeout(()=>{
                        var event = new Event("change")
                        fieldPaint_Manufacturer.value = HL_Paint_Manufacturer;
                        fieldPaint_Manufacturer.dispatchEvent(event)
                    },1500)
                    
                    //apply css
                    setTimeout(()=>{fieldCredit_Limit.parentElement.parentElement.style.cssText = "display: none;"},1500)
                    fieldReason_For_New_ISA.style.pointerEvents = 'none';

                }

                //listen to any changes done by a user and store them in editedVariables
                fieldsToBePopulated.forEach(fieldName => {
                    var editedField = document.querySelector(`[name="InsertRecord${fieldName}"]`)
                    if(editedField){
                        editedField.addEventListener("change", function(){
                            window[`edited${fieldName}`] = editedField.value
                        })
    
                    }
                })

                internalUsageCb.checked = editedInternalUsage != undefined ? editedInternalUsage : '';

                internalUsageCb.addEventListener('click', function(e){
                    editedInternalUsage = this.checked
                })
    

            })
        }
        //.end of New Business
        else{
                    //------------------------else for other E-ISA Type: Acquisition or OLD------------------------------------------
            var hitlistValues = {};
            fieldsToBePopulated.push('Credit_Status','Agreement_Type', 'Type','No_of_Locations','MPO_Based', 'MPO_Details','Exclude_Purchases_MPO')

            fieldsToBePopulated.forEach(function(fieldName) {
                var fieldValues = [];
                if (fieldName == 'No_of_Locations'){
                    fieldValues.push(window[`edited${fieldName}`], '1')
                } 
                if (fieldName == 'Statement_Preference'){
                    fieldValues.push(window[`edited${fieldName}`], 'Paper')
                } 
                if (fieldName == 'Exclude_Purchases_MPO'){
                    fieldValues.push(window[`edited${fieldName}`], 'Yes')
                } 
                fieldValues.push(window[`edited${fieldName}`],'')
                hitlistValues[fieldName] = fieldValues;
            });

                console.log(`checking hitlistValues------------- `)
                console.log(hitlistValues)
                console.log(hitlistValues['Credit_Status'][0])



            //assign the values to the Create ISA fields
            for (var fieldName in hitlistValues) {
                var fieldElement = document.querySelector(`[name="InsertRecord${fieldName}"]`);
                        
                if(fieldElement){
                    if(fieldName !== 'Paint_Manufacturer'){
                        var fieldValues = hitlistValues[fieldName];
                        var fieldValue = fieldValues.find(value => value !== undefined);
                        fieldElement.value = fieldValue;
                                
                            var event = new Event("change")
                            if
                            (
                                fieldName == 'Reason_For_New_ISA'
                                || fieldName == 'Credit_Term_Requested'
                                || fieldName == 'Company'
                                || fieldName == 'GLID_No'
                                || fieldName == 'Agreement_Type'
                                || fieldName == 'Statement_Preference'
                            ){
                                
                                    fieldElement.dispatchEvent(event)
                                }
                                
                    }
                    window[`field${fieldName}`] = fieldElement    
                }
                        
            }

            setTimeout(()=>{
                var event = new Event("change")

                var editedCreditStatus = String(hitlistValues['Credit_Status']).replace(/,/g, '') 
                                        ? String(hitlistValues['Credit_Status']).replace(/,/g, '') 
                                        : '';

                var editedPaintManufacturer =   String(hitlistValues['Paint_Manufacturer']).replace(/,/g, '') 
                                                ? String(hitlistValues['Paint_Manufacturer']).replace(/,/g, '') 
                                                : '';
                var editedMPOBased =   String(hitlistValues['MPO_Based']).replace(/,/g, '') 
                                                ? String(hitlistValues['MPO_Based']).replace(/,/g, '') 
                                                : '';

                
                fieldCredit_Status.value = editedCreditStatus;
                fieldPaint_Manufacturer.value = editedPaintManufacturer;
                fieldMPO_Based.value = editedMPOBased;

                fieldCredit_Status.dispatchEvent(event)
                fieldPaint_Manufacturer.dispatchEvent(event)
                fieldMPO_Based.dispatchEvent(event)

            },1500)
                        
            //listen to any changes done by a user and store them in editedVariables
            fieldsToBePopulated.forEach(fieldName => {
                var editedField = document.querySelector(`[name="InsertRecord${fieldName}"]`)
                if(editedField){
                    editedField.addEventListener("change", function(){
                        window[`edited${fieldName}`] = editedField.value
                    })
        
                }
            })

            internalUsageCb.checked = editedInternalUsage != undefined ? editedInternalUsage : '';

            internalUsageCb.addEventListener('click', function(e){
                editedInternalUsage = this.checked
            })
            

        }

        

        
    }
})