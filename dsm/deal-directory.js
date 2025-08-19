var caretup = '<i class="fas fa-caret-up" style="color:green;font-size:35px;"></i>';
var caretdown = '<i class="fas fa-caret-down" style="color:red;font-size:35px;"></i>';
var dash = '<i class="fas fa-minus" style="font-size:35px;"></i>';

// --- for % Complete column ---
var dataValue = '<div class="progress mx-2">';
var progressLeft = '<span class="progress-left">';
var leftProgressBar = '<span class="progress-bar border-primary"></span>'
var progressRight = '<span class="progress-right">';
var rightProgressBar = '<span class="progress-bar border-primary"></span>'
var progressValue = '<div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">'
var progressPercent = '<div class="progress-percent">'

// --- for Deal Tracking Score ---
var greenScore = '<div class="rounded-circle" style="background-color: #FFFFFF; border: 8px solid #93c47d; width: 70px; height: 70px; display: flex; justify-content: center; align-items: center">';
var yellowScore = '<div class="rounded-circle" style="background-color: #FFFFFF; border: 8px solid #ffd966; width: 70px; height: 70px; display: flex; justify-content: center; align-items: center">';
var redScore = '<div class="rounded-circle" style="background-color: #FFFFFF; border: 8px solid #e06666; width: 70px; height: 70px; display: flex; justify-content: center; align-items: center">';

// --- for Related Accounts: red, green, yellow circles ---
var circleContainer = '<div class="circle-container">'
var greenCircle = '<div class="result-circle rounded-circle" value="0" data-toggle="tooltip" title="Not related to another deal for this paint company in the Deal Directory" style="background-color: #00FF00; border: 1px solid black; width: 20px; height: 20px">'
var yellowCircle = '<div class="result-circle rounded-circle" value="2" data-toggle="tooltip" title="There is a deal in the Deal Directory for another paint brand. Contact the Deal Desk with questions if you have any." style="background-color: #FFFF00; border: 1px solid black; width: 20px; height: 20px">'
var redCircle = '<div class="result-circle rounded-circle" value="1" data-toggle="tooltip" title="There is a deal in the Deal Directory for the same paint brand. Create a New Deal from the Deal Directory." style="background-color: #FF0000; border: 1px solid black; width: 20px; height: 20px">'


$('#nav-dd').addClass('active');

document.addEventListener('DataPageReady', function (event) {
  if (
    (event.detail.appKey).toLowerCase().includes(('da025f6ccee643b7821a').toLowerCase()) // shared - deal directory
    || (event.detail.appKey).toLowerCase().includes(('136439fb7aec407cbed5').toLowerCase()) // rvpo - deal directory
    || (event.detail.appKey).toLowerCase().includes(('bac4985cc0ac485797ae').toLowerCase()) // rvps - deal directory
    || (event.detail.appKey).toLowerCase().includes(('498c7df29bdc4cc492ef').toLowerCase()) // dsm - deal directory
    || (event.detail.appKey).toLowerCase().includes(('25262312258a45e3ae1e').toLowerCase()) // dom - deal directory
    || (event.detail.appKey).toLowerCase().includes(('f0197819e0bb48ac81f8').toLowerCase()) // rsm - deal directory
    // || (event.detail.appKey).toLowerCase().includes(('ba77fd397d0447618aa9').toLowerCase()) // sm - deal directory
    || (event.detail.appKey).toLowerCase().includes(('9813a8444b764f8590ac').toLowerCase()) // users - deal directory
    || (event.detail.appKey).toLowerCase().includes(('63f217cac0c847ad8a1b').toLowerCase()) // isa team - deal directory
    || (event.detail.appKey).toLowerCase().includes(('3cba56b852da4645ac6b').toLowerCase()) // isa finance - deal directory


    // Deal Directory 2
    || (event.detail.appKey).toLowerCase().includes(('1fcfbe0ec9a442fda5e7').toLowerCase()) // DSM //comment out this back one once the new DP is deployed ty
    // || (event.detail.appKey).toLowerCase().includes(('99ba6cb5d82245a5b628').toLowerCase()) // DSM
    || (event.detail.appKey).toLowerCase().includes(('addcd06cf8594dfba8b4').toLowerCase()) // DOM
    || (event.detail.appKey).toLowerCase().includes(('cc670d6248c74a58b3f7').toLowerCase()) // RVPS
    || (event.detail.appKey).toLowerCase().includes(('fbd0edcb06834f76b169').toLowerCase()) // RVPO
    || (event.detail.appKey).toLowerCase().includes(('47bbef748cce468fb668').toLowerCase()) // KN, CEO, CFO, COO
    || (event.detail.appKey).toLowerCase().includes(('7fb89b3497914e4c9e47').toLowerCase()) // CEO, CFO, COO, KN - New DD 2
    || (event.detail.appKey).toLowerCase().includes(('2381f2265d35423f8a95').toLowerCase()) // RSM
    || (event.detail.appKey).toLowerCase().includes(('037cd8daa4744c1095bf').toLowerCase()) // BDM
    || (event.detail.appKey).toLowerCase().includes(('4a8f0b79a16c4b589987').toLowerCase()) // SM
    || (event.detail.appKey).toLowerCase().includes(('7229fa8e5f50432da038').toLowerCase()) // isa team
    || (event.detail.appKey).toLowerCase().includes(('0faff3f982f24ec8a871').toLowerCase()) // Logic
    || (event.detail.appKey).toLowerCase().includes(('8604295b600d4e91baa4').toLowerCase()) // isa finance

    // Historical Deal Directory
    || (event.detail.appKey).toLowerCase().includes(('1fe1ec21b4a5407f9a47').toLowerCase()) // ISA Team
    || (event.detail.appKey).toLowerCase().includes(('2282c5791cb246e6b593').toLowerCase()) // CEO, COO, CFO
    || (event.detail.appKey).toLowerCase().includes(('c5134e9e869d4425a967').toLowerCase()) // DOM
    || (event.detail.appKey).toLowerCase().includes(('a8b40053c0884c1eb336').toLowerCase()) // DSM
    || (event.detail.appKey).toLowerCase().includes(('b4bf730cf8f74ae48005').toLowerCase()) // RVPO
    || (event.detail.appKey).toLowerCase().includes(('7ba75dbee7514783bf66').toLowerCase()) // RVPS
    || (event.detail.appKey).toLowerCase().includes(('df460ba8283b41008c99').toLowerCase()) // SM

  ) {
    // var sales_trend_col = $('*[data-cb-name="data"] td:nth-child(8)');
    // var total_amp_col = $('*[data-cb-name="data"] td:nth-child(5)');

    // return false;

    total_amp_link();
    my_amp_link();
    percent_complete_graph()
    deal_tracking_score();
    sales_trend_icon();
    actual_gp_link()
    float_header_and_scrollbar();
  }
});

function total_amp_link() {
  $('#cb-deal-directory *[data-cb-name="data"] td:nth-child(7)').each(function () {
    if ($(this).attr('data-has-link') == 'Y') {
      return true;
    }

    // console.log($(this).html().split('<')[0]);

    var total = ($(this).html().split('<')[0] || '').toString().trim();
    var isa_id = ($(this).closest('tr').find('.cb-cog').attr('data-isa-id') || '');

    $(this).html(`<a href="${cbDataPagePrefix}139908d8e36e4e9f81e8?ISA_ID=${isa_id}" target="_blank">${total}</a>`);

    $(this).attr('data-has-link', 'Y');
  });

}

function my_amp_link() {
  $('#cb-deal-directory *[data-cb-name="data"] td:nth-child(8)').each(function () {
    if ($(this).attr('data-has-link') == 'Y') {
      return true;
    }

    // console.log($(this).html().split('<')[0])
    var total = ($(this).html().split('<')[0] || '').toString().trim();
    var isa_id = ($(this).closest('tr').find('.cb-cog').attr('data-isa-id') || '');

    $(this).html(`<a href="${cbDataPagePrefix}786546b9a3324c0083dd?ISA_ID=${isa_id}" target="_blank">${total}</a>`);

    $(this).attr('data-has-link', 'Y');
  });

}

function percent_complete_graph() {
  $('#cb-deal-directory *[data-cb-name="data"] td:nth-child(10), #cb-historical-deal-directory *[data-cb-name="data"] td:nth-child(7)').each(function () {
    // console.log($(this).html().split('<')[0]);
    var rawNumber = $(this).html().split('<')[0] || '';
    if (rawNumber === "&nbsp;") {
      rawNumber = "0.0";
    }

    var percentage = (rawNumber * 100).toFixed(1);
    if (percentage == 0) {
      percentage = "0.0";
    }

    $(this).html(
      dataValue
      + progressLeft
      + leftProgressBar
      + '</span>'
      + progressRight
      + rightProgressBar
      + '</span>'
      + progressValue
      + progressPercent
      + percentage
      + '%</div> </div> </div>'
    );

    var left = $(this).find('.progress-left .progress-bar');
    var right = $(this).find('.progress-right .progress-bar');

    $(this).attr('onclick', 'open_mpo_detail_report(this)');

    if (percentage > 0) {
      if (percentage <= 49.9) {
        if (percentage >= 0 && percentage <= 9.9) {
          return right.css('transform', 'rotate(' + percentageToDegrees(0) + 'deg)')
        }

        if (percentage >= 10 && percentage <= 19.9) {
          return right.css('transform', 'rotate(' + percentageToDegrees(10) + 'deg)')
        }

        if (percentage >= 20 && percentage <= 29.9) {
          return right.css('transform', 'rotate(' + percentageToDegrees(20) + 'deg)')
        }

        if (percentage >= 30 && percentage <= 39.9) {
          return right.css('transform', 'rotate(' + percentageToDegrees(30) + 'deg)')
        }

        if (percentage >= 40 && percentage <= 49.9) {
          return right.css('transform', 'rotate(' + percentageToDegrees(40) + 'deg)')
        }


      } else {
        right.css('transform', 'rotate(180deg)')
        if (percentage >= 50 && percentage <= 59.9) {
          return left.css('transform', 'rotate(' + percentageToDegrees(50 - 50) + 'deg)')
        }

        if (percentage >= 60 && percentage <= 69.9) {
          return left.css('transform', 'rotate(' + percentageToDegrees(60 - 50) + 'deg)')
        }

        if (percentage >= 70 && percentage <= 79.9) {
          return left.css('transform', 'rotate(' + percentageToDegrees(70 - 50) + 'deg)')
        }

        if (percentage >= 80 && percentage <= 89.9) {
          return left.css('transform', 'rotate(' + percentageToDegrees(80 - 50) + 'deg)')
        }

        if (percentage >= 90 && percentage <= 99.9) {
          return left.css('transform', 'rotate(' + percentageToDegrees(90 - 50) + 'deg)')
        }

        if (percentage >= 100) {
          return left.css('transform', 'rotate(' + percentageToDegrees(100 - 50) + 'deg)')
        }

      }
    }

    function percentageToDegrees(percentage) {

      return percentage / 100 * 360

    }



  })//end of each function
} //end of percent_complete_graph()

function deal_tracking_score() {
  $('#cb-deal-directory *[data-cb-name="data"] td:nth-child(11)').each(function () {
    var rawNumber = $(this).html().split('<')[0] || '';
    if (rawNumber === "&nbsp;") {
      rawNumber = "0.0";
    }

    var percentage = (rawNumber * 100).toFixed(1);
    if (percentage == 0) {
      percentage = "0.0";
    }

    // console.log(percentage);

    //red
    if (percentage <= -10.1) {
      return $(this).html(circleContainer + redScore + percentage + '%</div></div>');
    }

    //green
    if (percentage >= 0) {
      return $(this).html(circleContainer + greenScore + percentage + '%</div></div>');
    }

    //yellow
    if (percentage <= -0.01 || percentage >= -10) {
      return $(this).html(circleContainer + yellowScore + percentage + '%</div></div>');
    }


  })
}

function sales_trend_icon() {
  $('#cb-deal-directory *[data-cb-name="data"] td:nth-child(12)').each(function () {

    if ($(this).attr('data-has-icon') == 'Y') {
      return true;
    }

    var percentage = ($(this).html().split('<')[0] || '').toString().trim();

    // console.log({
    //  string : percentage,
    //  number : Number(percentage) * 100
    // });

    percentage = Number(percentage) * 100;

    if (percentage > 1) {
      $(this).html(caretup + '<div>' + percentage.toFixed(2).toString() + '%</div>');
    }
    else if (percentage < -1.1) {
      $(this).html(caretdown + '<div>' + percentage.toFixed(2).toString() + '%</div>');
    }
    else {
      $(this).html(dash + '<div>' + percentage.toFixed(2).toString() + '%</div>');
    }

    $(this).attr('data-has-icon', 'Y');
  });
}

function actual_gp_link() {
  $('#cb-deal-directory *[data-cb-name="data"] td:nth-child(19)').each(function () {

    if ($(this).attr('data-has-link') == 'Y') {
      return true;
    }

    var percentage = (Number($(this).html().split('<')[0]) * 100).toFixed(1);
    // console.log(percentage);
    var isa_id = ($(this).closest('tr').find('.cb-cog').attr('data-isa-id') || '');

    $(this).html(`<a href="${cbDataPagePrefix}f55f7f0f540c43efa447?ISA_ID=${isa_id}" target="_blank">${percentage}%</a>`);

    $(this).attr('data-has-link', 'Y');
  });

}

function float_header_and_scrollbar() {
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - floating scroll
  $('#cb-deal-directory table[data-cb-name="cbTable"]').closest('div').addClass('overflow-auto cb-freezeheader');
  $('#cb-deal-directory table[data-cb-name="cbTable"]').closest('div').floatingScroll();

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - freeze header
  $('#cb-deal-directory table[data-cb-name="cbTable"]').closest('div').freezeTable();

  try {
    setTimeout(function () {
      $('.cb-freezeheader').freezeTable('update');
    }, 1000);
  } catch (err) {
    console.log('re-initiate freeze header');
  }
}

function open_mpo_detail_report(elem) {
  let row = $(elem).closest('tr');
  let isa_id = row.find('.cb-cog').attr('data-isa-id');

  // console.log(isa_id);

  window.open(`${cbDataPagePrefix}d73be61d9bb142c8b3bd?cbResetParam=1&ID=${isa_id}`, '_blank');
}

//START: Update for deal-directory result tabular report: 20220223
function deployTable(containerID, appKey, params) {
  var params = params || '';
  var dataPageScript = document.createElement("script");
  var container = document.getElementById(containerID);
  dataPageScript.src = cbDataPagePrefix + appKey + '/emb' + params;

  if (container) {
    container.innerHTML = '';
    container.appendChild(dataPageScript);
  }
}

$(document).on('click', '.cb-customer-number-btn', function (e) {
  var isaId = $(this).attr('cb-data-isa-id');
  var customerNumber = $(this).attr('cb-data-customer-number');
  viewCustomerDetails(isaId, customerNumber);
  e.preventDefault();
});

$(document).on('keydown', '.cb-search input[type="text"]', function (e) {
  return e.which !== 13;
});

document.addEventListener("DataPageReady", function (e) {

  var tabularAppKey = "da025f6ccee643b7821a"; //search form in Deal Directory Page
  var tabularAppKey2 = "47bbef748cce468fb668"; //search form in Deal Directory 2 Page
  var tabularAppKey3 = "7fb89b3497914e4c9e47"; // search form in Deal Directory 2 Page - CEO, CFO, COO, KN
  var tabularReport2_logic = "0faff3f982f24ec8a871"; // Logic Deal Directory 2 Page

  // for the corporate view 1 users
  if (
    ((e.detail.appKey).toLowerCase() == (appKeyPrefix + "a61c415ef11d4f71b5f0").toLowerCase()) ||
    ((e.detail.appKey).toLowerCase() == (appKeyPrefix + "b642df38aaec431392bb").toLowerCase()) ||
    ((e.detail.appKey).toLowerCase() == (appKeyPrefix + "ed645c249cf748e5b2ba").toLowerCase())
  ) {
    initMultiSelect('*[name="cbParamVirtual10]', '*[name="cbParamVirtual13"]');

    var url = new URL(window.location.href);
    var resetParamFlag = url.searchParams.get("cbResetParam");

    if (resetParamFlag == 1) {
      $('#tabularReport').html('<div class="text-center pt-3" styl>** Enter at least 1 search criteria to show the records **</div>');
      $('#tabularReport2').html('<div class="text-center pt-3" styl>** Enter at least 1 search criteria to show the records **</div>');
      $('#tabularReport2_logic').html('<div class="text-center pt-3" styl>** Enter at least 1 search criteria to show the records **</div>');
    }
    else {
      var paramGLID = $("*[name=cbParamVirtual1]").val();
      var paramDSM = $("*[name=cbParamVirtual2]").val();
      var paramEISAID = $("*[name=cbParamVirtual3]").val();
      var paramEISAName = $("*[name=cbParamVirtual4]").val();
      var paramEISAPM = $("*[name=cbParamVirtual7]").val();
      var paramEISAREG = $("*[name=cbParamVirtual8]").val();
      var paramEISADSM = $("*[name=cbParamVirtual9]").val();
      var paramEISAAT = $("*[name=cbParamVirtual10]").val();
      var paramEISACT = $("*[name=cbParamVirtual11]").val();

      if (paramGLID == "" && paramDSM == "" && paramEISAID == "" && paramEISAName == "" && paramEISAPM == "" && paramEISAREG == "" && paramEISADSM == "" && paramEISAAT == "" && paramEISACT == "") {
        $('#tabularReport').html('<div class="text-center pt-3" styl>** Enter at least 1 search criteria to show the records **</div>');
        $('#tabularReport2').html('<div class="text-center pt-3" styl>** Enter at least 1 search criteria to show the records **</div>');
        $('#tabularReport2_logic').html('<div class="text-center pt-3" styl>** Enter at least 1 search criteria to show the records **</div>');
      }
      else {
        console.log("as")
        if ($('#tabularReport').length) {
          deployTable("tabularReport", tabularAppKey, "");
        }
        if ($('#tabularReport2').length) {
          // DD 2
          deployTable("tabularReport2", tabularAppKey2, "");
        }
        if ($('#tabularReport2').length) {
          // DD 2 - CEO, COO
          deployTable("tabularReport2", tabularAppKey3, "");
        }
        if ($('#tabularReport2_logic').length) {
          // DD 2 Logic
          deployTable("tabularReport2_logic", tabularReport2_logic, "");
        }
      }
    }
  }

  // center text when no records found
  $('*[class^="cbResultSetRecordMessage"]').addClass('text-center pt-3');
});
//END: Update for deal-directory result tabular report: 20220223

document.addEventListener("DataPageReady", function (e) {
  if (
    e.detail.appKey.includes("a61c415ef11d4f71b5f0") ||
    e.detail.appKey.includes("05dabd8ea2034ffd9a0d") ||
    e.detail.appKey.includes("b642df38aaec431392bb") ||
    e.detail.appKey.includes("ed645c249cf748e5b2ba")
  ) {
    initMultiSelect('*[name="cbParamVirtual10"]', '*[name="cbParamVirtual13"]');
    $('.cb-search').show();
  }

  // Format Actual GP Percentage
  if (document.querySelectorAll("#actual-gp-percentage").length) {
    var actual_gp_percentage = document.querySelectorAll("#actual-gp-percentage")
    for (let index = 0; index < actual_gp_percentage.length; index++) {
      const element = actual_gp_percentage[index];
      element.innerText = parseFloat(element.innerText).toFixed(1) + "%"
    }
  }
})

function initMultiSelect(virtualElementSelector, selector) {
  $(virtualElementSelector).prop('multiple', true);

  if ($(selector).val()) {
    $(virtualElementSelector).val($(selector).val().split(' OR '));
  } else {
    $(virtualElementSelector).val('');
  };

  $(virtualElementSelector).selectpicker({
    noneSelectedText: '-Any-',
    actionsBox: true,
  });

  $(virtualElementSelector).on('changed.bs.select', function () {
    $(selector).val($(this).val().join(' OR '));
  });
}

//for Related Accounts
document.addEventListener("DataPageReady", function (e) {
  if (e.detail.appKey.includes("d424fe7ab6ae4af9896a")) {
    console.log('related accounts loaded')

    $('#cb-relate-all-accounts-add *[data-cb-name="data"] td:nth-child(5)').each(function () {
      var result = $(this).html() || '';

      //no attachments
      if (result == 0) {
        $(this).html(circleContainer + greenCircle + '</div>')
        var otherRelated = $(this).next().children('div');
        otherRelated.css("visibility", "hidden");

      }
      //with attachments and the same manufacturer
      if (result == 1) {
        $(this).html(circleContainer + redCircle + '</div>')
        var relAcctCb = $(this).prevAll().children('input')
        relAcctCb.css("display", "none");
      }
      //with attachments but different manufacturer
      if (result == 2) {
        $(this).html(circleContainer + yellowCircle + '</div>')
      }
    })
  }
})

function view_attached_ISAs(rnd_id) {
  openModal_v2('Deal Info', `${cbDataPagePrefix}9fdcabfa2ecc487a8d4f/emb?RND_ID=${rnd_id}`, '95%', 'Y');
}
