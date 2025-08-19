document.addEventListener("DataPageReady", function (e) {
  // ----- Add Product Line
  if (
    e.detail.appKey.includes("e61dfd65f3ca4e0e9b56") ||
    e.detail.appKey.includes("a795171649ee4887b11f")
  ) {
    addProductLine(e);
  }

  // ----- List Paint Product Line
  if (e.detail.appKey.includes("2bcab6edebec445094ec")) {
    listProductLine(e, ".cb-product-report");
    addHoverOnList(e, "Product Line");
    addProductLineLink(e, "Product Line");
  }

  // ----- List Allied Product Line
  if (e.detail.appKey.includes("59c23124ba69423c8c3d")) {
    listProductLine(e, ".cb-allied-report");
    addHoverOnList(e, "Allied Product Line");
    addProductLineLink(e, "Allied Product Line");
  }

  // ----- Edit Product Line
  if (
    e.detail.appKey.includes("2832840a80724862b5b9") ||
    e.detail.appKey.includes("6c654600e72e402c83b2")
  ) {
    editProductLine(e);
  }
});
//end of DataPage Ready

const addProductLine = (e) => {
  //Start and End Dates
  startEndDate("RecordStart_Date", "RecordEnd_Date");

  //disable calendar
  var startDate = $('input[name*="RecordStart_Date"]');
  var endDate = $('input[name*="RecordEnd_Date"]');
  endDate.prop("disabled", !startDate.val() && !endDate.val());

  if (startDate.length) {
    setStartDate(startDate, endDate);
  }

  if (endDate.length) {
    setEndDate(endDate, startDate);
  } else {
    console.error("Flatpickr: End date field not found!");
  }

  // Product Line
  // Multi-select
  initMultiSelect(
    'select[name$="Virtual5"]',
    'input[name$="RecordProduct_Line"]',
    "",
    true
  );

  // adding %
  addPercentage("Up_From_P7");
  addPercentage("MFG_Support");

  // MFG Support must not exceed 100%
  validateMFG_Support("MFG_Support");

  // check if no existing before submit
  var is_valid = $('.jconfirm-open input[name*="Virtual2"]');
  var submitBtn = $(".jconfirm-open .cbSubmitButton");

  is_valid.on("change", function () {
    if ($(this).val() == 0) {
      submitBtn.css({
        "pointer-events": "initial",
        opacity: "1",
      });
    } else {
      submitBtn.css({
        "pointer-events": "none",
        opacity: ".5",
      });
    }
  });

  //Dispatching event so query can work
  var manufacturer = $('select[name*="Manufacturer_ID"]');
  var product_line = $('input[name*="Product_Line"]');
  var start_date = $('input[name*="RecordStart_Date"]');
  var product_line_field = $('select[name$="Virtual1"]');
  var product_line_dummy = $('select[name$="Virtual5"]');

  manufacturer.on("change", () => {
    // make it empty
    product_line.val("");

    product_line_field.on("change", () => {
      // copy options
      product_line_dummy.html(product_line_field.html());

      initMultiSelect(
        'select[name$="Virtual5"]',
        'input[name$="RecordProduct_Line"]',
        "",
        true
      );

      product_line_field.off("change");
      product_line.trigger("change");
      start_date.trigger("change");
    });
  });

  manufacturer.trigger("change");
};

const listProductLine = (e, container) => {
  $(`${container} tr[data-cb-name="grand_total"] td:nth-child(1)`).prop(
    "colspan",
    5
  );

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

const editProductLine = (e) => {
  //Start and End Dates
  startEndDate("RecordStart_Date", "RecordEnd_Date");

  //disable calendar
  var startDate = $('input[name*="RecordStart_Date"]');
  var endDate = $('input[name*="RecordEnd_Date"]');

  if (startDate.length) {
    setStartDate(startDate, endDate);
  }

  if (endDate.length) {
    setEndDate(endDate, startDate);
  } else {
    console.error("Flatpickr: End date field not found!");
  }

  // adding %
  addPercentage("Up_From_P7");
  addPercentage("MFG_Support");

  // MFG Support must not exceed 100%
  validateMFG_Support("MFG_Support");

  // check if no existing before submit
  var is_valid = $('.jconfirm-open input[name*="Virtual2"]');
  var submitBtn = $(".jconfirm-open .cbUpdateButton");

  is_valid.on("change", function () {
    if ($(this).val() == 0) {
      submitBtn.css({
        "pointer-events": "initial",
        opacity: "1",
      });
    } else {
      submitBtn.css({
        "pointer-events": "none",
        opacity: ".5",
      });
    }
  });
};
