//Status Not Done and In Process in red
const notProcess = ['Not Done', 'In Process', 'In Progress']; 
const doneApplicable = ['Done', 'Not Applicable'];


document.addEventListener("DataPageReady", function(){
    [...document.querySelectorAll("td")]
    .filter(a => notProcess.includes(a.textContent))
    .forEach(a => a.style.cssText ="color: red !important")
});

document.addEventListener("change",function(){
    [... document.querySelectorAll('input[name="Mod0InlineEdit"]')]
    .forEach(edit => edit.addEventListener('click', function(){

        [...document.querySelectorAll("td")]
        .filter(a => notProcess.includes(a.textContent))
        .forEach(a => a.style.cssText ="color: red !important");

        [...document.querySelectorAll("td")]
        .filter(a => doneApplicable.includes(a.textContent))
        .forEach(a => a.style.cssText ="color: black !important")
    
    }))
})