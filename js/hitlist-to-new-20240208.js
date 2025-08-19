	//EST today's date
	const date = new Date();
	date.setUTCHours(date.getUTCHours() - 5);
	const options = { timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit' };
	const estDate = date.toLocaleDateString('en-US', options);

document.addEventListener("DataPageReady", function(e){
    if(e.detail.appKey.includes('5a1f6380977a4144b939')){ //clevel
        var url = new URL(window.location.href);
        var params = url.searchParams;
        if (params.has('Opportunity_ID')) {
            var opportunityId = params.get('Opportunity_ID');
            deployDP('hitlist-details-dp', `https://caspio.thenetwork-crm.com/dp/25D550001be2f6cd9c7c48b4893c/emb`)
            document.addEventListener("DataPageReady", function(e){
                if(e.detail.appKey.includes('1be2f6cd9c7c48b4893c')){

                    var fieldISAName = document.querySelector('input[name="InsertRecordISA_Name"]')
                    var fieldReasonISA = document.querySelector('select[name="InsertRecordReason_For_New_ISA"]')
                    var fieldCreditTerm = document.querySelector('select[name="InsertRecordCredit_Term_Requested"]')
                    var fieldCreditLimit = document.querySelector('input[name="InsertRecordCredit_Limit"]')
                    var fieldCompany = document.querySelector('select[name="InsertRecordCompany"]')
                    var fieldGLID = document.querySelector('input[name="InsertRecordGLID_No"]')
                    // var fieldAgreementType = document.querySelector('select[name="InsertRecordAgreement_Type"]')
                    var fieldPaintManufacturer = document.querySelector('select[name="InsertRecordPaint_Manufacturer"]')
                    var fieldLegalName = document.querySelector('input[name="InsertRecordLegal_Name"]')
                    var fieldDBAName = document.querySelector('input[name="InsertRecordDBA_NAme"]')
                    var fieldOwnerName = document.querySelector('input[name="InsertRecordOwner_Principal_Name"]')
                    var fieldMainAddress = document.querySelector('input[name="InsertRecordMain_Address"]')
                    var fieldCity = document.querySelector('input[name="InsertRecordCity"]')
                    var fieldState = document.querySelector('input[name="InsertRecordState"]')
                    var fieldZip = document.querySelector('input[name="InsertRecordZip"]')
                    var fieldPhone = document.querySelector('input[name="InsertRecordPhone"]')
                    var fieldStatementPreference = document.querySelector('select[name="InsertRecordStatement_Preference"]')
                    var fieldYears = document.querySelector('input[name="InsertRecordYears_in_Business"]')
                    var fieldCreditCard = document.querySelector('select[name="InsertRecordPays_by_Credit_Card"]')
                    var fieldUserGrowth = document.querySelector('input[name="InsertRecordUser_Growth_Estimate"]')

                    //variables are from 1be2f6cd9c7c48b4893c
                    fieldISAName.value = `${glidNo} - ${companyName} - ${estDate}`;
                    fieldReasonISA.value = `New Business`
                    fieldReasonISA.style.pointerEvents = 'none';
                    fieldCreditTerm.value = `COD`
                    fieldCompany.value = companyPaint;
                    // fieldAgreementType.value = 'NCS/SSI Contract or Contract Amendment'
                    fieldGLID.value = glidNo;
                    fieldLegalName.value = companyName;
                    fieldDBAName.value = companyName;
                    fieldOwnerName.value = ownerName;
                    fieldMainAddress.value = mainAddress;
                    fieldCity.value = city;
                    fieldState.value = state;
                    fieldZip.value = zipCode;
                    fieldPhone.value = phone;
                    fieldStatementPreference.value = 'Paper'
                    fieldYears.value = yearsBusiness; //CR-17652
                    fieldCreditCard.value = 'No'
                    fieldUserGrowth.value = '0'

                    var selectFields = [
                        fieldReasonISA,
                        fieldCreditTerm,
                        fieldCompany,
                        fieldGLID
                    ]

                    var event = new Event("change");
                    selectFields.forEach(sel => sel.dispatchEvent(event))

                    setTimeout(()=>{
                        fieldPaintManufacturer.value = paintManufacturer;
                        fieldPaintManufacturer.dispatchEvent(event)
                        // fieldAgreementType.dispatchEvent(event)
                    },1500)
                    setTimeout(()=>{fieldCreditLimit.parentElement.parentElement.style.cssText = "display: none;"},1500)

                }
            })
        }
    }
})