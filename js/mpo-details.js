document.addEventListener("DataPageReady", function (event) {
	if ((event.detail.appKey).toLowerCase().includes("df97571f43354dad8ec4".toLowerCase())) {
  
	  if ($('tr[data-cb-name="data"]').length == 0) {
		$(".cbResultSetRecordMessage").html(
		  "Required Company and Paint Manufacturer"
		);
	  } else {
		autocheck();
	  }
  
	  update_MPO_Details();
  
	  // MPO Details Condition
	  var elmnt = $("table[data-cb-name=cbTable] input[type=checkbox]");
  
	  for (var i = 0; i < elmnt.length; i++) {
		elmnt[i].addEventListener("click", function () {
		  var checked_count = $(
			"table[data-cb-name=cbTable] input[type=checkbox]:checked"
		  ).length;
		  // console.log({checked_count, "elem" : this })
  
		  if (checked_count == 0) {
			alert(
			  "Deselecting failed. MPO Details is required, please select 1 or more item"
			);
			// Force to Checked
			this.checked = true;
		  }
		  // console.log({checked_count, "elem" : this })
  
		  var mpoDetailsInput = window.parent.document.querySelector(
			'[name*="RecordMPO_Details"]'
		  );
		  mpoDetailsInput.value = update_MPO_Details();
		  var event = new Event("input");
		  mpoDetailsInput.dispatchEvent(event);
		});
	  }
	} 
  });
  
  $(document).on("change", ".Manifacturer_ID", function () {
	update_MPO_Details();
  });
  
  $(document).on("change", ".SelectAllCB", function () {
	if (this.checked) {
	  $(".Manifacturer_ID").prop("checked", true);
	} else {
	  $(".Manifacturer_ID").prop("checked", false);
	}
	autocheck(); //2024-03-03 richae to default check all premiums
	update_MPO_Details();
  });
  
  function autocheck() {
	var Selected = $("#Hidden_Selected").val();
  
	if (Selected == "") {
	  $('.Manifacturer_ID[data-pnp="Premium"]').prop("checked", true);
	  isMPODetailsChanged = false;
	  var mpoDetailsInput = window.parent.document.querySelector(
		'[name*="RecordMPO_Details"]'
	  );
	  mpoDetailsInput.value = update_MPO_Details();
	  var event = new Event("input");
	  mpoDetailsInput.dispatchEvent(event);
	} else {
	  Selected = Selected.split("|");
  
	  for (s = 0; s < Selected.length; s++) {
		var Selected_Row = Selected[s];
		Selected_Row = Selected_Row.replace(/-/g, "");
  
		// console.log(Selected_Row);
  
		$('.Manifacturer_ID[data-id="' + Selected_Row + '"]').prop(
		  "checked",
		  true
		);
	  }
	}
  }
  
  function update_MPO_Details() {
	var Checkboxes = $(".Manifacturer_ID");
	var MPO_Details = "";
  
	Checkboxes.each(function () {
	  if (this.checked) {
		MPO_Details += "-" + this.value + "-|";
	  }
	});
  
	var mpoDetailsInput = $('*[name$="RecordMPO_Details"]');
	mpoDetailsInput.val(MPO_Details);
	// console.log(`checking MPO_Details----- ${MPO_Details}`)
  
	// Return the constructed MPO_Details string
	return MPO_Details;
  }
  