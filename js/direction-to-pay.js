var accountId = "caspio.thenetwork-crm.com";
var appKeyPrefix = "25d55000";

var exclamationIcon =
  '<i class="fas fa-exclamation-circle mr-3 cb-danger-icon" title="Required"></i>';

// activate all sections
$(".progressbar li").addClass("active");

function loadCaspioURL(appKey, params) {
  return `https://${accountId}/dp/${appKeyPrefix}${appKey}/emb${params}`;
}

function notesURL(rid, type) {
  return loadCaspioURL(
    "7a4a73150e574b06abc9",
    `?Reference_RID=${rid}&Type_RID=${type}`
  );
}

//start of linked assets
function notesLinkedAssets(rid) {
  openModal_v2(
    "Direction To Pay / Linked Assets / Notes",
    notesURL(rid, "O4DLC96X"),
    "95%",
    "Y"
  );
}

function editLinkedAssets_popup(isaId, calcManually, calcNotes) {
  // console.log(`checking calcManually from editLinkedAssets_popup...${calcManually}`)
  openModal_v3(
    "ISA " + isaId + " - Linked Assets",
    loadCaspioURL("511497cce189412eba34", `?ISA_ID=${isaId}`),
    "50%",
    "Y",
    calcManually,
    calcNotes
  );
}

//end of linked assets

function notesFdr(rid) {
  openModal_v2(
    "Direction To Pay / Fixed Dollar Rebate / Notes",
    notesURL(rid, "V0AJBO1W"),
    "95%",
    "Y"
  );
}

function notesLiquidSt(rid) {
  openModal_v2(
    "Direction To Pay / Liquid Statement Rebate / Notes",
    notesURL(rid, "GF7OU618"),
    "95%",
    "Y"
  );
}

function notesLiquidEq(rid) {
  openModal_v2(
    "Direction To Pay / Liquid EQ Rebate / Notes",
    notesURL(rid, "LDXIXY49"),
    "95%",
    "Y"
  );
}

function notesAlliedSt(rid) {
  openModal_v2(
    "Direction To Pay / Allied Statement Rebate / Notes",
    notesURL(rid, "19FWNGVC"),
    "95%",
    "Y"
  );
}

function notesAlliedEq(rid) {
  openModal_v2(
    "Direction To Pay / Allied EQ Rebate / Notes",
    notesURL(rid, "3Y34I5UZ"),
    "95%",
    "Y"
  );
}

function notesPromptPay(rid) {
  openModal_v2(
    "Direction To Pay / Prompt Pay / Notes",
    notesURL(rid, "1JYU4SUB"),
    "95%",
    "Y"
  );
}

function notesMFGVarSupport(rid) {
  openModal_v2(
    "Direction To Pay / Manufacturer Variable Support / Notes",
    notesURL(rid, "QXD5XCJA"),
    "95%",
    "Y"
  );
}

function notesMFGRetSupport(rid) {
  openModal_v2(
    "Direction To Pay / Manufacturer Retained Support / Notes",
    notesURL(rid, "P7WPYIDU"),
    "95%",
    "Y"
  );
}

function checkLiquidStData() {
  var errorsCountAcctToRec = 0;
  var errorsCountRemSt = 0;

  $(".cb-liquid-st-data").each(function () {
    var $row = $(this).closest("tr");
    var $accountToReceive = $row.children("td").eq(8);
    var $remainingSt = $row.children("td").eq(9);

    var st = $(this).attr("data-st");
    var accountToReceive = $(this).attr("data-account-to-receive");

    if (st == "100" && accountToReceive != "") {
      $remainingSt.prepend(exclamationIcon);
      $remainingSt.addClass("cb-danger-light");

      errorsCountRemSt++;
    }

    if (st != "100" && accountToReceive == "") {
      $accountToReceive.prepend(exclamationIcon);
      $accountToReceive.addClass("cb-danger-light");

      errorsCountAcctToRec++;
    }
  });

  if (errorsCountRemSt || errorsCountAcctToRec) {
    // clone 1st row to be used as a container for the required msg
    var $row = $('.cb-liquid-st tr[data-cb-name="data"]').eq(0).clone();
    $row.removeAttr("id");
    $row.removeAttr("data-cb-name");
    $row.removeClass();
    $row.find("td").html("");
    $row.find("td").removeClass();

    $('.cb-liquid-st table[data-cb-name="cbTable"]').append("<tfoot></tfoot>");
    $('.cb-liquid-st table[data-cb-name="cbTable"] tfoot').append($row);

    if (errorsCountAcctToRec) {
      $row
        .children("td")
        .eq(8)
        .html('<span class="cb-required-msg">** REQUIRED **</span>');
    }

    if (errorsCountRemSt) {
      $row
        .children("td")
        .eq(9)
        .html('<span class="cb-required-msg">** REQUIRED **</span>');
    }
  }
}

function checkLiquidEqData() {
  var errorsCountPaidToAcct = 0;
  var errorsCountRemEq = 0;

  $(".cb-liquid-eq-data").each(function () {
    var $row = $(this).closest("tr");
    var $paidToAccount = $row.children("td").eq(8);
    var $remainingEq = $row.children("td").eq(9);

    var eq = $(this).attr("data-eq");
    var paidToAcct = $(this).attr("data-paid-to-acct");

    // console.log({ eq : eq, paidToAcct : paidToAcct });

    if (eq == "100" && paidToAcct != "") {
      $remainingEq.prepend(exclamationIcon);
      $remainingEq.addClass("cb-danger-light");

      errorsCountRemEq++;
    }

    if (eq != "100" && paidToAcct == "") {
      $paidToAccount.prepend(exclamationIcon);
      $paidToAccount.addClass("cb-danger-light");

      errorsCountPaidToAcct++;
    }
  });

  if (errorsCountRemEq || errorsCountPaidToAcct) {
    // clone 1st row to be used as a container for the required msg
    var $row = $('.cb-liquid-eq tr[data-cb-name="data"]').eq(0).clone();
    $row.removeAttr("id");
    $row.removeAttr("data-cb-name");
    $row.removeClass();
    $row.find("td").html("");
    $row.find("td").removeClass();

    $('.cb-liquid-eq table[data-cb-name="cbTable"]').append("<tfoot></tfoot>");
    $('.cb-liquid-eq table[data-cb-name="cbTable"] tfoot').append($row);

    if (errorsCountPaidToAcct) {
      $row
        .children("td")
        .eq(8)
        .html('<span class="cb-required-msg">** REQUIRED **</span>');
    }

    if (errorsCountRemEq) {
      $row
        .children("td")
        .eq(9)
        .html('<span class="cb-required-msg">** REQUIRED **</span>');
    }
  }
}

function checkAlliedStData() {
  var errorsCountAccountToReceive = 0;
  var errorsCountRemEq = 0;

  $(".cb-allied-st-data").each(function () {
    var $row = $(this).closest("tr");
    var $accountToReceive = $row.children("td").eq(8);
    var $remainingEq = $row.children("td").eq(9);

    var allied = $(this).attr("data-allied");
    var accountToReceive = $(this).attr("data-account-to-receive");

    // console.log({ eq : eq, paidToAcct : paidToAcct });

    if (allied == "100" && accountToReceive != "") {
      $remainingEq.prepend(exclamationIcon);
      $remainingEq.addClass("cb-danger-light");

      errorsCountRemEq++;
    }

    if (allied != "100" && accountToReceive == "") {
      $accountToReceive.prepend(exclamationIcon);
      $accountToReceive.addClass("cb-danger-light");

      errorsCountAccountToReceive++;
    }
  });

  if (errorsCountRemEq || errorsCountAccountToReceive) {
    // clone 1st row to be used as a container for the required msg
    var $row = $('.cb-allied-st tr[data-cb-name="data"]').eq(0).clone();
    $row.removeAttr("id");
    $row.removeAttr("data-cb-name");
    $row.removeClass();
    $row.find("td").html("");
    $row.find("td").removeClass();

    $('.cb-allied-st table[data-cb-name="cbTable"]').append("<tfoot></tfoot>");
    $('.cb-allied-st table[data-cb-name="cbTable"] tfoot').append($row);

    if (errorsCountAccountToReceive) {
      $row
        .children("td")
        .eq(8)
        .html('<span class="cb-required-msg">** REQUIRED **</span>');
    }

    if (errorsCountRemEq) {
      $row
        .children("td")
        .eq(9)
        .html('<span class="cb-required-msg">** REQUIRED **</span>');
    }
  }
}

function checkAlliedEqData() {
  var errorsCountPaidToAccount = 0;
  var errorsCountRemEq = 0;

  $(".cb-allied-eq-data").each(function () {
    var $row = $(this).closest("tr");
    var $paidToAccount = $row.children("td").eq(8);
    var $remainingEq = $row.children("td").eq(9);

    var allied = $(this).attr("data-allied");
    var paidToAccount = $(this).attr("data-paid-to-account");

    // console.log({ eq : eq, paidToAcct : paidToAcct });

    if (allied == "100" && paidToAccount != "") {
      $remainingEq.prepend(exclamationIcon);
      $remainingEq.addClass("cb-danger-light");

      errorsCountRemEq++;
    }

    if (allied != "100" && paidToAccount == "") {
      $paidToAccount.prepend(exclamationIcon);
      $paidToAccount.addClass("cb-danger-light");

      errorsCountPaidToAccount++;
    }
  });

  if (errorsCountRemEq || errorsCountPaidToAccount) {
    // clone 1st row to be used as a container for the required msg
    var $row = $('.cb-allied-eq tr[data-cb-name="data"]').eq(0).clone();
    $row.removeAttr("id");
    $row.removeAttr("data-cb-name");
    $row.removeClass();
    $row.find("td").html("");
    $row.find("td").removeClass();

    $('.cb-allied-eq table[data-cb-name="cbTable"]').append("<tfoot></tfoot>");
    $('.cb-allied-eq table[data-cb-name="cbTable"] tfoot').append($row);

    if (errorsCountPaidToAccount) {
      $row
        .children("td")
        .eq(8)
        .html('<span class="cb-required-msg">** REQUIRED **</span>');
    }

    if (errorsCountRemEq) {
      $row
        .children("td")
        .eq(9)
        .html('<span class="cb-required-msg">** REQUIRED **</span>');
    }
  }
}

function showFDRAmounts() {
  var fixedPaymentTotal = $('.cb-fdr-amounts *[name="cbParamVirtual1"]')
    .closest("td")
    .children("span")
    .eq(0)
    .html();
  var fixedDollarRebateTotal = $('.cb-fdr-amounts *[name="cbParamVirtual2"]')
    .closest("td")
    .children("span")
    .eq(0)
    .html();
  var msg = $('.cb-fdr-amounts *[name="cbParamVirtual3"]')
    .closest("td")
    .children("span")
    .eq(0)
    .html();
  var avaiableBalance = $('.cb-fdr-amounts *[name="cbParamVirtual4"]')
    .closest("td")
    .children("span")
    .eq(0)
    .html();

  $(".cb-fdr-entered-tt-amount").html(fixedPaymentTotal);
  $(".cb-fdr-tt-amount").html(fixedDollarRebateTotal);
  $(".cb-fdr-avail-amount").html(avaiableBalance);
  $(".cb-fdr-tt-msg").html(msg);
}

function loadD2pDps(
  isaId,
  statusId,
  createdBy,
  userId,
  userRoleId,
  nextApproverId
) {
  // console.log({
  // 	'isaId' : isaId,
  // 	'statusId' : statusId,
  // 	'createdBy' : createdBy,
  // 	'userId' : userId,
  // 	'userRoleId' : userRoleId,
  // 	'nextApproverId' : nextApproverId
  // });

  if (statusId == 1 && createdBy == userId) {
    // 1 - Draft

    loadEditableD2pDps(isaId);
  } else if (userRoleId == 9 || userRoleId == 21) {
    // 9 - ISA Team
    // 21 - Finance

    loadEditableD2pDps(isaId);
  } else if ([31, 32].indexOf(statusId) != -1 && createdBy == userId) {
    // 31 - Denied by Customer with Edits
    // 32 - Denied by Customer, Lost Opportunity

    loadEditableD2pDps(isaId);
  } else if (
    userRoleId == 2 &&
    nextApproverId == userRoleId &&
    [2, 5, 7, 17, 9, 34, 36, 27, 24].indexOf(statusId) != -1
  ) {
    // DSM
    /*
			2 - For Approval of DSM
			5 - Denied by RVPS
			7 - Denied by RVPO
			17 - Denied by ISA Team
			9 - Denied by Tom Blawusch
			34 - Denied by CFO
			36 - Denied by COO
			27 - Denied by CEO
			24 - Manufacturer Denied
		*/

    loadEditableD2pDps(isaId);
  } else if (
    userRoleId == 3 &&
    nextApproverId == userRoleId &&
    [4, 7, 17, 9, 34, 36, 27, 24].indexOf(statusId) != -1
  ) {
    // RVPS
    /*
			4 - For Approval of RVPS
			7 - Denied by RVPO
			17 - Denied by ISA Team
			9 - Denied by Tom Blawusch
			34 - Denied by CFO
			36 - Denied by COO
			27 - Denied by CEO
			24 - Manufacturer Denied
		*/

    loadEditableD2pDps(isaId);
  } else if (
    userRoleId == 4 &&
    nextApproverId == userRoleId &&
    [6, 17, 9, 34, 36, 27, 24].indexOf(statusId) != -1
  ) {
    // RVPO
    /*
			6 - For Approval of RVPO
			17 - Denied by ISA Team
			9 - Denied by Tom Blawusch
			34 - Denied by CFO
			36 - Denied by COO
			27 - Denied by CEO
			24 - Manufacturer Denied
		*/

    loadEditableD2pDps(isaId);
  } else if (
    userRoleId == 6 &&
    nextApproverId == userRoleId &&
    [8, 34, 36, 27, 24].indexOf(statusId) != -1
  ) {
    // Tom Blawusch
    /*
			8 - For Approval of Tom Blawusch
			34 - Denied by CFO
			36 - Denied by COO
			27 - Denied by CEO
			24 - Manufacturer Denied
		*/

    loadEditableD2pDps(isaId);
  } else if (
    userRoleId == 24 &&
    nextApproverId == userRoleId &&
    [33, 36, 27].indexOf(statusId) != -1
  ) {
    // CFO
    /*
			33 - For Approval of CFO
			36 - Denied by COO
			27 - Denied by CEO
		*/

    loadEditableD2pDps(isaId);
  } else if (
    userRoleId == 25 &&
    nextApproverId == userRoleId &&
    [35, 27].indexOf(statusId) != -1
  ) {
    // COO
    /*
			35 - For Approval of COO
			27 - Denied by CEO
		*/

    loadEditableD2pDps(isaId);
  } else if (
    userRoleId == 14 &&
    nextApproverId == userRoleId &&
    [26].indexOf(statusId) != -1
  ) {
    // CEO
    /*
			26 - For Approval of CEO
		*/

    loadEditableD2pDps(isaId);
  } else if (
    createdBy == userId &&
    [3, 5, 7, 17, 9, 34, 36, 27].indexOf(statusId) != -1
  ) {
    // TSM and Users outside the approval process
    /*
			3 - Denied by DSM
			5 - Denied by RVPS
			7 - Denied by RVPO
			17 - Denied by ISA Team
			9 - Denied by Tom Blawusch
			34 - Denied by CFO
			36 - Denied by COO
			27 - Denied by CEO
		*/

    loadEditableD2pDps(isaId);
  } else {
    loadViewonlyD2PDps(isaId);
  }
}

function loadEditableD2pDps(isaId) {
  var ids = [
    "#cb-linked-assets",
    "#cb-mfg-var-support",
    "#cb-mfg-retained-support",
    "#cb-prompt-pay",
    "#cb-fdr-amounts",
    "#cb-fdr",
    "#cb-liquid-st",
    "#cb-liquid-eq",
    "#cb-allied-st",
    "#cb-allied-eq",
  ];
  clearContent(ids);

  deployDP(
    "cb-linked-assets",
    loadCaspioURL("a7e6b179f2f94357bb70", `?ISA_ID=${isaId}`)
  );

  deployDP(
    "cb-mfg-var-support",
    loadCaspioURL("04da65f6d08f44edad7a", `?ISA_ID=${isaId}`)
  );

  deployDP(
    "cb-mfg-retained-support",
    loadCaspioURL("912b68479d6a4b08984c", `?ISA_ID=${isaId}`)
  );

  deployDP(
    "cb-prompt-pay",
    loadCaspioURL("d3c1c044c1294005bd8e", `?ISA_ID=${isaId}`)
  );

  deployDP(
    "cb-fdr-amounts",
    loadCaspioURL("696266a218044c13b86a", `?ISA_ID=${isaId}`)
  );

  deployDP("cb-fdr", loadCaspioURL("e86b5b38b3cd4e21a25b", `?ISA_ID=${isaId}`));

  deployDP(
    "cb-liquid-st",
    loadCaspioURL("be25b401c60b4dc7af23", `?ISA_ID=${isaId}`)
  );

  deployDP(
    "cb-liquid-eq",
    loadCaspioURL("be1ca9d8a86f44989588", `?ISA_ID=${isaId}`)
  );

  deployDP(
    "cb-allied-st",
    loadCaspioURL("f09a8e982c574eadb15a", `?ISA_ID=${isaId}`)
  );

  deployDP(
    "cb-allied-eq",
    loadCaspioURL("f12fc78dc2504400a849", `?ISA_ID=${isaId}`)
  );
}

function loadViewonlyD2PDps(isaId) {
  var ids = [
    "#cb-linked-assets",
    "#cb-mfg-var-support",
    "#cb-mfg-retained-support",
    "#cb-prompt-pay",
    "#cb-fdr",
    "#cb-liquid-st",
    "#cb-liquid-eq",
    "#cb-allied-st",
    "#cb-allied-eq",
  ];
  clearContent(ids);

  deployDP(
    "cb-linked-assets",
    loadCaspioURL("545da7c41cb545b39a43", `?ISA_ID=${isaId}`)
  );

  deployDP(
    "cb-mfg-var-support",
    loadCaspioURL("119b416434674fd898f1", `?ISA_ID=${isaId}`)
  );

  deployDP(
    "cb-mfg-retained-support",
    loadCaspioURL("94c59ce1d9494a5a973a", `?ISA_ID=${isaId}`)
  );

  deployDP(
    "cb-prompt-pay",
    loadCaspioURL("89175ba046a44d20bf4d", `?ISA_ID=${isaId}`)
  );

  deployDP("cb-fdr", loadCaspioURL("ac75604b79ec49e090c8", `?ISA_ID=${isaId}`));

  deployDP(
    "cb-liquid-st",
    loadCaspioURL("3a4317b328a943639d80", `?ISA_ID=${isaId}`)
  );

  deployDP(
    "cb-liquid-eq",
    loadCaspioURL("ed94e817af994b4785d0", `?ISA_ID=${isaId}`)
  );

  deployDP(
    "cb-allied-st",
    loadCaspioURL("6e63c78100fa449db9a4", `?ISA_ID=${isaId}`)
  );

  deployDP(
    "cb-allied-eq",
    loadCaspioURL("99f36b1e13b24ff9b124", `?ISA_ID=${isaId}`)
  );
}

function clearContent(ids) {
  return ids.map((id) => {
    $(id).html("");
  });
}

function bulkUpdate(appKey) {
  setTimeout(function () {
    $(
      'form[action*="' +
        appKey +
        '"] *[class^="cbResultSetHeaderCheckBoxCell"] input[type="checkbox"]'
    ).click();
  }, 1000);
}

$(document).on(
  "focusout",
  '.cb-fdr *[name="InlineEditFixed_Payment"]',
  function () {
    // refresh DataPage
    for (var key in window.dataPageManagerObj.dataPages) {
      if (key.search(`${appKeyPrefix}696266a218044c13b86a`) != -1) {
        window.dataPageManagerObj.dataPages[key].refresh();
      }
    }

    showFDRAmounts();
  }
);

const appkeysHiddenCheckboxesOnGrid = [
  `${appKeyPrefix}be25b401c60b4dc7af23`,
  `${appKeyPrefix}be1ca9d8a86f44989588`,
  `${appKeyPrefix}f09a8e982c574eadb15a`,
  `${appKeyPrefix}f12fc78dc2504400a849`,
];

document.addEventListener("DataPageReady", function (event) {
  const appKey = event.detail.appKey;

  if (appKey.includes("be25b401c60b4dc7af23")) {
    // Liquid Statement Rebate
    checkLiquidStData();
    bulkUpdate(appKey);
  }

  if (appKey.includes("be1ca9d8a86f44989588")) {
    // Liquid EQ Rebate
    checkLiquidEqData();
    bulkUpdate(appKey);
  }

  if (appKey.includes("f09a8e982c574eadb15a")) {
    // Allied Statement Rebate
    checkAlliedStData();
    bulkUpdate(appKey);
  }

  if (appKey.includes("f12fc78dc2504400a849")) {
    // Allied EQ Rebate
    checkAlliedEqData();
    bulkUpdate(appKey);
  }

  if (appKey.includes("696266a218044c13b86a")) {
    // Fixed Dollar Rebate - Amounts
    $('.cb-fdr-amounts *[name^="cbParamVirtual"]')
      .unbind()
      .change(function () {
        showFDRAmounts();
      });
  }

  if (appKey.includes("e86b5b38b3cd4e21a25b")) {
    // Fixed Dollar Rebate
    if (typeof window.cbAjaxEventHandler !== "undefined") {
      window.cbAjaxEventHandler.addEventListener(
        "SwitchMode",
        function (v_event) {
          $(".cb-fdr .cbGridCtnr .BodyCtnr > table").append(
            ' \
          <tfoot> \
            <tr> \
              <td colspan="4" class="text-right" style="padding:9px 12px;">FIXED $ PAYMENT TOTAL</td> \
              <td colspan="5" class="cb-fdr-entered-tt-amount"></td> \
            </tr> \
            <tr> \
              <td colspan="4" class="text-right" style="padding:9px 12px;">FIXED DOLLAR REBATE TOTAL</td> \
              <td colspan="5" class="cb-fdr-tt-amount"></td> \
            </tr> \
            <tr> \
              <td colspan="4" class="text-right" style="padding:9px 12px;">AVAILABLE AMOUNT</td> \
              <td colspan="5" class="cb-fdr-avail-amount"></td> \
            </tr> \
            <tr> \
              <td colspan="4" class="text-right" style="padding:9px 12px;"></td> \
              <td colspan="5" class="cb-fdr-tt-msg font-weight-bold" style="color:red;"></td> \
            </tr> \
          </tfoot> \
        '
          );

          showFDRAmounts();

          if (appkeysHiddenCheckboxesOnGrid.indexOf(v_event.data.AppKey) >= 0) {
            let form = $('form[action*="' + v_event.data.AppKey + '"]');

            if (form.find('tr[data-cb-name="data"]').length == 0) {
              form.find('*[data-cb-name="BulkEditButton"]').hide();
            }
          }
        }
      );
    }
  }
});
