

document.addEventListener("DataPageReady", function(event){
    if(event.detail.appKey.includes('5a1f6380977a4144b939') || //template-new
    event.detail.appKey.includes('86d1ebc230c74a9182dc') ){ //template-update
        if (window.location.href.includes("tsm")) {
            document.querySelector('option[value="Acquisition Customer Template"]').style.display = "none"
        } 
        
    }
})