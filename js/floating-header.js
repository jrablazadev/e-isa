$(document).ready(function () {
    let v1 = setInterval(function () {
        let table = $("#float table")
        let table_id = table.attr("id")
        if (table_id) {
            var thead = document.createElement("thead")
            var table_header_sticky = $("#float table tbody tr[data-cb-name='header']")
            var table_header_normal = $("#float table tbody tr[data-cb-name='header']").clone().attr("data-cb-name", "table_header_normal")

            $("#float table").prepend(thead)
            $("#float table thead").prepend(table_header_normal)

            // Hiding Things
            $("#float .cbResultSetHeaderCellNumberDate").hide()

            // Hide at first
            table_header_sticky.hide()

            $(window).scroll(function(){
                var sticky = table_header_sticky,
                    scroll = $(window).scrollTop();
                if (scroll >= 100) {
                    let w = $("#" + table_id).width()
                    console.log(w)
                    sticky.addClass('fixed');
                    table_header_sticky.css({
                        width: w,
                        margin: "auto !important",
                    })
                }
                else sticky.removeClass('fixed');
                
                // Hide and show the Sticky Header
                if (scroll >= 300) table_header_sticky.show()
                else table_header_sticky.hide()
                // console.log(scroll) 
            });
            clearInterval(v1)
        }
    }, 500)
});