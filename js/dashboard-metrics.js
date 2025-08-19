var shouldLoadTabContent = true;

// Returns Array || Object
function recordCount(app_key) {
  var r = []

  // Check if app_key was array
  if (Array.isArray(app_key)) {
    var app_keys = app_key

    for (let index = 0; index < app_keys.length; index++) {
      const app_keys_index = app_keys[index];
      r.push(recordCountData(app_keys_index))
    }
  }
  // Not Array
  else r = recordCountData(app_key)

  return r
}

// Return Raw Number
function recordCountData(app_key) {
  var recordCount = $("form[action$=" + app_key.toLowerCase() + "] .cbRecordCountMessage").text()
  var recordCountTotal = 0
  if (recordCount.includes("of")) {
    var recordCountTotal = recordCount.split("of")
    recordCountTotal = recordCountTotal[1].trim()
  } else {
    recordCountTotal = 0
  }
  return recordCountTotal
}

// Generate HTML Table
function makeDashboardMetric(parentDiv, bucketLabels = [], boxClass = "dashboard-metrics-content-sm") {
  if ($("#dashboard-metrics").length == 0) {

    if (bucketLabels.length == 0) {
      bucketLabels = [
        "Approved <br>E-ISA’s",
        "Deal Sheet <br>Approvals Needed",
        "Contract <br>Phase",
        "Execution <br>Phase",
        "Deal <br>Terminations",
      ]
    }
    var table = document.createElement("table")
    table.setAttribute("width", "100%")
    table.setAttribute("border", "0")
    table.setAttribute("id", "dashboard-metrics")

    document.querySelector(parentDiv).prepend(table)

    var tr = document.createElement("tr")
    tr.setAttribute("class", "text-center")

    table.prepend(tr)

    for (let index = 0; index < bucketApp_Keys.length; index++) {
      var td = document.createElement("td")

      var label_DNCTitle = document.createElement("label")
      label_DNCTitle.setAttribute("class", "dnc-title")
      label_DNCTitle.innerHTML = bucketLabels[index]

      var div_flex = document.createElement("div")
      div_flex.setAttribute("class", "d-flex")

      var div_dm_content = document.createElement("div")
      div_dm_content.setAttribute("class", boxClass + " text-center")

      var label_DNCContent = document.createElement("label")
      label_DNCContent.setAttribute("id", "dnc-" + index)

      var span_ArrowRight = document.createElement("span")
      span_ArrowRight.setAttribute("class", "fa fa-arrow-right fa-2x")

      td.append(label_DNCTitle)
      td.append(div_flex)
      div_flex.append(div_dm_content)
      if (index < bucketApp_Keys.length - 1) {
        div_flex.append(span_ArrowRight)
      }
      div_dm_content.append(label_DNCContent)

      tr.append(td)
    }
  }

  // Update Count
  var recordCountReturn = recordCount(bucketApp_Keys)
  if (Array.isArray(recordCount(bucketApp_Keys)) && shouldLoadTabContent) {
    for (let index = 0; index < recordCountReturn.length; index++) {
      const data_index = recordCountReturn[index];
      $("#dnc-" + index).html(data_index)
    }
  }
  // var recordCountReturn = recordCount(bucketApp_Keys)
  // if (Array.isArray(recordCount(bucketApp_Keys))) {
  //     for (let index = 0; index < recordCountReturn.length; index++) {
  //         const data_index = recordCountReturn[index];
  //         $("#dnc-" + index).html(data_index)
  //     }
  // }

}

function makeDashboardMetricForISATeamGroup(parentDiv, bucketApp_Keys, bucketLabels = [], tab) {
  if ($("#dashboard-metrics-" + tab).length == 0) {

    if (bucketLabels.length == 0) {
      bucketLabels = [
        "Approved <br>E-ISA’s",
        "Deal Sheet <br>Approvals Needed",
        "Contract <br>Phase",
        "Execution <br>Phase",
        "Deal <br>Terminations",
      ]
    }
    var boxClass = "dashboard-metrics-content-sm"
    var table = document.createElement("table")
    table.setAttribute("width", "100%")
    table.setAttribute("border", "0")
    table.setAttribute("id", "dashboard-metrics-" + tab)

    document.querySelector(parentDiv).prepend(table)

    var tr = document.createElement("tr")
    tr.setAttribute("class", "text-center")

    table.prepend(tr)

    console.log({ bucketApp_Keys })

    for (let index = 0; index < bucketApp_Keys.length; index++) {
      var td = document.createElement("td")

      var label_DNCTitle = document.createElement("label")
      label_DNCTitle.setAttribute("class", "dnc-title")
      label_DNCTitle.innerHTML = bucketLabels[index]

      var div_flex = document.createElement("div")
      div_flex.setAttribute("class", "d-flex")

      var div_dm_content = document.createElement("div")
      div_dm_content.setAttribute("class", boxClass + " text-center")

      var label_DNCContent = document.createElement("label")
      label_DNCContent.setAttribute("id", "dnc-" + tab + "-" + index)

      var span_ArrowRight = document.createElement("span")
      span_ArrowRight.setAttribute("class", "fa fa-arrow-right fa-2x")

      td.append(label_DNCTitle)
      td.append(div_flex)
      div_flex.append(div_dm_content)
      if (index < bucketApp_Keys.length - 1) {
        div_flex.append(span_ArrowRight)
      }
      div_dm_content.append(label_DNCContent)

      tr.append(td)
    }
  }

  // Update Count
  var recordCountReturn = recordCount(bucketApp_Keys)

  // if (Array.isArray(recordCount(bucketApp_Keys)) && shouldLoadTabContent) {
  //     for (let index = 0; index < recordCountReturn.length; index++) {
  //         const data_index = recordCountReturn[index];
  //         $("#dnc-" + tab + "-" + index).html(data_index)
  //     }
  // }
  if (Array.isArray(recordCount(bucketApp_Keys))) {
    for (let index = 0; index < recordCountReturn.length; index++) {
      const data_index = recordCountReturn[index];
      $("#dnc-" + tab + "-" + index).html(data_index)
    }
  }

}

//Status Not Done and In Process in red
document.addEventListener("DataPageReady", function () {

  const isaStatus = ['Not Done', 'In Process', 'In Progress'];

  [...document.querySelectorAll("td")]
    .filter(a => isaStatus.includes(a.textContent))
    .forEach(a => a.style.cssText = "color: red !important")
})
