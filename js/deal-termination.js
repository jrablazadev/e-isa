

function update_mfg_deal_termination(isa_id){
    jqueryConfirm && jqueryConfirm.close();

    openModal_v2('Update Manufacturer Info ' + isa_id, 'https://' + accountId + '/dp/' + appKeyPrefix + '126fe70bc32d4d178697/emb?ISA_ID=' + isa_id, '40%');

}



document.addEventListener("DataPageReady", function(event){
    if ((event.detail.appKey).includes("126fe70bc32d4d178697")) {
        document.addEventListener("BeforeFormSubmit", function(){
            let newName = document.getElementById('EditRecordManufacturer_Name');
            let newEmail = document.getElementById('EditRecordManufacturer_Email')
            console.log('newName---' + newName.value)
            console.log('newEmail---' + newEmail.value)

            let oldName = document.getElementById('EditRecordManufacturer_Name$Anchor').previousElementSibling;
            let oldEmail = document.getElementById('EditRecordManufacturer_Email$Anchor').previousElementSibling;
            oldName.innerText = newName.value;
            oldEmail.innerText = newEmail.value;

        })
    }
})

