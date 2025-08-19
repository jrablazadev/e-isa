function resizing() {
	$(".equip-1 .cbResultSetTableCell").css("font-size", "9px");
	$(".equip-1 .cbResultSetLabel").css("font-size", "9px");
  
	$(".discount-1 .cbResultSetTableCell").css("font-size", "9px");
	$(".discount-1 td.cbResultSetData").css("font-size", "9px");
	$(".discount-1 th.cbResultSetLabel a").css("font-size", "9px");
	$(".cbResultSetTotalsLabel").css("font-size", "9px");
	$(".cbResultSetTotalsData").css("font-size", "9px");
  
	$(".discount-2 .cbResultSetTableCell").css("font-size", "9px");
	$(".discount-2 td.cbResultSetData").css("font-size", "9px");
	$(".discount-2 th.cbResultSetLabel").css("font-size", "9px");
	$(".cbResultSetTotalsLabel").css("font-size", "9px");
	$(".cbResultSetTotalsData").css("font-size", "9px");
  
	$(".discount-3 .cbResultSetTableCell").css("font-size", "9px");
	$(".discount-3 td.cbResultSetData").css("font-size", "9px");
	$(".discount-3 th.cbResultSetLabel").css("font-size", "9px");
	$(".cbResultSetTotalsLabel").css("font-size", "9px");
	$(".cbResultSetTotalsData").css("font-size", "9px");
  
	$(".contract-1 .cbFormLabelCell").css("font-size", "9px");
	$(".contract-1 .cbFormDataCell").css("font-size", "9px");
	$(".contract-1 .cbFormCalculatedField").css("font-size", "9px");
	$(".contract-1 .cbFormData").css("font-size", "9px");
  
	$(".cb-manufacturers .cbResultSetLabel").css("font-size", "9px");
	$(".cb-manufacturers .cbResultSetData").css("font-size", "9px");
  }
  
  function downloadPDF(isa_number = "") {
	$(document).ready(function () {
	  // Global variable
	  var element = $("#printDiv");
	  // Global variable
	  var getCanvas;
	  $("#downloadPDF").on("click", function () {
		if (element.length) {
		  html2canvas(element[0]).then(function (canvas) {
			// console.log(canvas);
			// $("#previewImage").append(canvas);
			getCanvas = canvas;
			var doc = new jsPDF("l", "mm", [canvas.width, canvas.height]);
			doc.addImage(getCanvas, "PNG", 0, 0, canvas.width, canvas.height);
			doc.save("Deal Sheet - ISA Number " + isa_number + ".pdf");
		  });
		}
	  });
	});
  }
  
  function downloadPDFContractPhase(isa_number = "") {
	$(document).ready(function () {
	  // Global variable
	  var element = $("#printDiv");
	  // Global variable
	  var getCanvas;
	  $("#downloadPDF").on("click", function () {
		if (element.length) {
		  html2canvas(element[0]).then(function (canvas) {
			// console.log(canvas)
			// $("#previewImage").append(canvas);
			getCanvas = canvas;
			var doc = new jsPDF("l", "mm", [canvas.width, canvas.height]);
			doc.addImage(getCanvas, "PNG", 0, 0, canvas.width, canvas.height);
			doc.save("Deal Sheet - ISA Number " + isa_number + ".pdf");
		  });
		}
	  });
	});
  }
  