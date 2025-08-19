let is_isa_team = 0;
var caretup =
  '<i class="fas fa-caret-up" style="color:green;font-size:35px;"></i>';
var caretdown =
  '<i class="fas fa-caret-down" style="color:red;font-size:35px;"></i>';
var dash = '<i class="fas fa-minus" style="font-size:35px;"></i>';

var status_checker = 0;
document.addEventListener("DataPageReady", function (e) {
  $(".spinner-border").remove();
  if (
    e.detail.appKey.includes("b96a9d3e109a412da10b") ||
    e.detail.appKey.includes("2e75a1e2338d4a1cbf91")
  ) {
    var close = getUrlVars()['close'] || '';
    if(Number(close) == 1){
      window.close();
    }
    float_header_and_scrollbar();
    sales_trend_icon(e.detail.appKey);
    // searchableSelect(
    //   `form[action*="${e.detail.appKey}"] select[name*="Customer_RID"]`,
    //   true
    // );
    report_init(e.detail.appKey);
    initMultiSelect(e.detail.appKey);
  }

  if (e.detail.appKey.includes("4e131507b75047b990ed")) {
    isa_details_init();
  }

  //Edit Modal
  if (
    e.detail.appKey.includes("1202fecc381246cbb39c") ||
    e.detail.appKey.includes("689ba96865a54ede95db")
  ) {
    searchableSelect(
      `form[action*="${e.detail.appKey}"] select[name*="Customer_RID"]`,
      false
    );
  }

  $(".delete-btn").click(function () {
    $(this)
      .parent()
      .parent()
      .parent()
      .find('a[data-cb-name="InlineDelete"]')
      .click();
  });

  $('*[name$="Subscription_Start_Date"], *[name$="Subscription_Cancellation_Date"]').change(function () {
    validation_subs();
  });


 
});

function edit_btn(id) {
  openModal_v2(
    "Edit ",
    `${cbDataPagePrefix}1202fecc381246cbb39c/emb?ID=${id}`,
    "40%",
    "Y"
  );

  //openModal_v4('Edit', '1202fecc381246cbb39c', '?ID='+id, 'modal-md')
}
function edit_btn_log1c(id) {
  openModal_v2(
    "Edit ",
    `${cbDataPagePrefix}689ba96865a54ede95db/emb?ID=${id}`,
    "40%",
    "Y"
  );

  //openModal_v4('Edit', '1202fecc381246cbb39c', '?ID='+id, 'modal-md')
}

function add_btn(appkey) {
  openModal_v2(
    "Add ",
    `${cbDataPagePrefix}${appkey}/emb`,
    "40%",
    "Y"
  );
}
function sales_trend_icon(appkey) {
  let td_90_Days_Ave = appkey.includes("b96a9d3e109a412da10b")
    ? "td:nth-child(15)"
    : "td:nth-child(13)";
  $(
    `#cb-manufacturer-color-subscription-hub *[data-cb-name="data"] ${td_90_Days_Ave}`
  ).each(function () {
    if ($(this).attr("data-has-icon") == "Y") {
      return true;
    }

    var percentage_raw = ($(this).html().split("<")[0] || "").toString().trim();
    var percentage = Number(percentage_raw.split("%")[0]);
    
   // percentage = Number(percentage) * 100;

    if (percentage > 1) {
      $(this).html(
        caretup + "<div>" + percentage.toFixed(2).toString() + "%</div>"
      );
    } else if (percentage < -1.1) {
      $(this).html(
        caretdown + "<div>" + percentage.toFixed(2).toString() + "%</div>"
      );
    } else {
      $(this).html(
        dash + "<div>" + percentage.toFixed(2).toString() + "%</div>"
      );
    }

    $(this).attr("data-has-icon", "Y");
  });
}

function searchableSelect(select, placeholder) {
  var select_val = $(select).val(); // Get the current value of the select element
  //if(placeholder){
    // $(`${select} option`).each(function() {
    //   var optionValue = $(this).val();
      
    //   // Check if this value has been encountered before
    //   if ($(`${select} option`).filter('[value="' + optionValue + '"]').length > 1) {
    //     // Remove the last duplicate option
    //     $(`${select} option[value="${optionValue}"]:last`).remove();
    //   }
    // });
  //}
  //$(select).find('option:last').hide()
  $(select).attr("data-live-search", true); // Add the "data-live-search" attribute

  // Ensure the "--Select--" option exists and is prepended if necessary
  if (
    !$(select).find('option:contains("-- Select --")').length &&
    placeholder
  ) {
    $(select).prepend(
      '<option value="" disabled selected>-- Select --</option>'
    );
  }
  // Refresh the select picker to apply changes
  $(select).selectpicker();
}

function float_header_and_scrollbar() {
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - floating scroll
  $('#cb-manufacturer-color-subscription-hub table[data-cb-name="cbTable"]')
    .closest("div")
    .addClass("overflow-auto cb-freezeheader");
  setTimeout(function () {
    $('#cb-manufacturer-color-subscription-hub table[data-cb-name="cbTable"]')
      .closest("div")
      .floatingScroll();
  }, 1000);

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - freeze header
  // $('#cb-manufacturer-color-subscription-hub table[data-cb-name="cbTable"]')
  //   .closest("div")
  //   .freezeTable();

  // try {
  //   setTimeout(function () {
  //     $(".cb-freezeheader").freezeTable("update");
  //   }, 1000);
  // } catch (err) {
  //   console.log("re-initiate freeze header");
  // }
}
const callMasking = (elem) => {
  const config_disc = {
    alias: "numeric",
    min: 0, // Minimum value allowed
    max: 100, // Maximum value allowed
    digits: 2, // Allow only one decimal place
    placeholder: "", // No placeholder character
    radixPoint: ".", // Decimal separator
    allowMinus: false, // Disallow negative values
    rightAlign: false // Ensures left alignment
  };
  Inputmask(config_disc).mask(elem);
};
function validation_subs() {
  var subs_startDate = $('input[name$="Subscription_Start_Date"]');
  var subs_cancelDate = $('input[name$="Subscription_Cancellation_Date"]');
  var d_startDate =
    subs_startDate.val() != ""
      ? new Date(subs_startDate.val())
      : new Date("1900-01-01");
  var d_cancelDate =
    subs_cancelDate.val() != ""
      ? new Date(subs_cancelDate.val())
      : new Date("1900-01-01");

  if (d_cancelDate <= d_startDate && subs_cancelDate.val() != "") {
    alert(
      "Subscription Cancellation Date should be greater than Subscription Start Date"
    );
    subs_cancelDate.val("");
  }

  //return false;
};
$(document).on(
  "focus",
  '*[name$="Log1c_Cx_Disc"]',
  function () {
    callMasking(this);
  }
);

$(document).on(
  "focus",
  '*[name$="Color_Software_Discount"]',
  function () {
    callMasking(this);
  }
);


window.onload = function () {
  if (typeof window.cbAjaxEventHandler !== "undefined") {
    window.cbAjaxEventHandler.addEventListener("DeleteRow", function (v_event) {
      if (v_event) {
        refreshDP("4e131507b75047b990ed");
      }
    });

    window.cbAjaxEventHandler.addEventListener(
      "SwitchMode",
      function (v_event) {
        console.log(v_event.length);
        if (v_event) {
          // setInterval(function () {
          //   //refreshDP("4e131507b75047b990ed");
          //   validation_subs();
          // }, 500);

          setTimeout(function () {
            //refreshDP("4e131507b75047b990ed");
            validation_subs();
          }, 500);
        }
      }
    );
  }
};

/**
 * Created on: 2024-10-18 13:48
 * Description: Remove edit/add function if not isa team
 */

const report_init = (appkey) => {
  // validation to prevent users to edit when the it is already in the deal directory and the user is isa team
  if (Number(is_isa_team) == 0) {
    var form = $(`form[action*="${appkey}"]`);
    //totally removed innerHTML to avoid modifying elements via dev tools
    form.find('*[data-cb-name="inlineaddrow"]').html("");
    form.find('*[data-cb-name="InlineDelete"]').parent().html("");
    form.find('*[data-cb-name="GridEditButton"]').parent().html("");
    form.find(".custom_btn_div").parent().html("");
    $('.add-btn').remove();
  }
};

const isa_details_init = () => {
  is_isa_team = $(".is-isa-team").val();
  if ($('form[action*="b96a9d3e109a412da10b"]').length > 0) {
    report_init("b96a9d3e109a412da10b");
  }
  if ($('form[action*="2e75a1e2338d4a1cbf91"]').length > 0) {
    report_init("2e75a1e2338d4a1cbf91");
  }
};

function initMultiSelect(appKey) {
  var virtualElementSelector = '*[name="cbParamVirtual1"]'; //
  var selector = appKey.includes("b96a9d3e109a412da10b")
    ? '*[name="Value20_1"]'
    : '*[name="Value16_1"]';
  var StatusChange_checker = appKey.includes("b96a9d3e109a412da10b")
    ? $('input[name*="cbParamVirtual5"]')
    : $('input[name*="cbParamVirtual2"]');
  let default_status = ["-0-", "Deal Directory"];
  $(virtualElementSelector).prop("multiple", true);

  if ($(selector).val()) {
    $(virtualElementSelector).val($(selector).val().split(" OR "));
  } else {
    if (!status_checker) {
      $(virtualElementSelector).val(default_status); //default value
      $(selector).val(default_status.join(" OR "));
    } else {
      if (
        $(virtualElementSelector).val().length == 1 &&
        $(virtualElementSelector).val()[0] == ""
      ) {
        $(virtualElementSelector).val([]);
      }
    }
  }

  $(virtualElementSelector).selectpicker({
    noneSelectedText: "-- Any --",
    actionsBox: true,
  });
  $(virtualElementSelector).find("option:first").hide();
  $(virtualElementSelector).selectpicker("refresh");
  $(virtualElementSelector).on("changed.bs.select", function () {
    $(selector).val($(this).val().join(" OR "));
    status_checker = 1;
    StatusChange_checker.val(status_checker);
    checkIfSelectedNoISA(appKey);
  });

  function checkIfSelectedNoISA(appKey) {
    var selector = appKey.includes("b96a9d3e109a412da10b")
      ? '*[name="Value20_1"]'
      : '*[name="Value16_1"]';
    var NoISA_element = appKey.includes("b96a9d3e109a412da10b")
      ? '*[name="Value21_1"]'
      : '*[name="Value17_1"]';
    if ($(selector).val().includes("-0-")) {
      $(NoISA_element).val("Yes");
    } else {
      $(NoISA_element).val("");
    }
  }
}
