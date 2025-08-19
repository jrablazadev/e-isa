/**
 * The `startEndDate` function sets event listeners on start and end date input fields to trigger
 * functions when their values change.
 * @param start - The `start` parameter in the `startEndDate` function is used to identify the input
 * element related to the start date.
 * @param end - The `end` parameter in the `startEndDate` function is used to specify the name
 * attribute of the input element that represents the end date. This allows the function to select the
 * end date input element using `document.querySelector` and attach a change event listener to it.
 */
const startEndDate = (start, end) => {
  //Start and End Dates
  var start_date = document.querySelector(`input[name*="${start}"]`);
  var end_date = document.querySelector(`input[name*="${end}"]`);
  start_date.addEventListener("change", function () {
    set_first_date(start_date);
  });

  end_date.addEventListener("change", function () {
    set_last_date(end_date);
  });
};

/**
 * The function `set_first_date` sets the day of the date input to the first day of the month.
 * @param inp - The `inp` parameter in the `set_first_date` function is expected to be an input element
 * that contains a date value in the format "MM/DD/YYYY". The function will set the day part of the
 * date to "01" if the input is in the correct format.
 */
const set_first_date = (inp) => {
  var current = inp.value;
  var parts = current.split("/");
  if (parts.length === 3) {
    parts[1] = "01";
    inp.value = parts.join("/");
  }
};

/**
 * The function `set_last_date` takes a date input in the format "MM/DD/YYYY" and updates the day to
 * the last day of the month.
 * @param inp - The `inp` parameter in the `set_last_date` function is expected to be an input element
 * that contains a date value in the format "MM/DD/YYYY". The function extracts the date components
 * (month, day, year) from the input value, calculates the last day of the month based on
 */
const set_last_date = (inp) => {
  var current = inp.value;
  var parts = current.split("/");
  if (parts.length === 3) {
    var year = parseInt(parts[2], 10);
    var month = parseInt(parts[0], 10);
    var last_day = new Date(year, month, 0).getDate();
    parts[1] = last_day.toString().padStart(2, "0");
    inp.value = parts.join("/");
  }
};

/**
 * The function `setStartDate` sets up a date picker with specific configurations for start and end
 * dates, including handling logic for selecting dates and disabling/enabling the end date picker.
 * @param startDate - The `startDate` parameter is a reference to the input field where the user
 * selects the start date for a date range.
 * @param endDate - The `endDate` parameter is a reference to an input field element that represents
 * the end date in a date range selection.
 * @param [recentEndDate] - The `recentEndDate` parameter in the `setStartDate` function is used to
 * specify the end date of a range. It is an optional parameter that defaults to an empty string if not
 * provided. This end date is used to configure the minimum date allowed in the start date picker. If a
 * `recent
 */
const setStartDate = (startDate, endDate, recentEndDate = "") => {
  let storedStartDate = new Date(startDate.val());
  storedStartDate.setDate(storedStartDate.getDate() + 1);

  const paddedMonth = String(storedStartDate.getMonth() + 1).padStart(2, "0");
  const paddedDay = "01";
  const year = storedStartDate.getFullYear();

  const storedFirstMonth = `${paddedMonth}/${paddedDay}/${year}`;

  const configureMinDate = (pickerInstance, recentEndDate) => {
    if (recentEndDate && recentEndDate.val() !== "") {
      let recentVal = new Date(recentEndDate.val());
      recentVal.setDate(recentVal.getDate() + 1);
      const firstOfMonth = `${
        recentVal.getMonth() + 1
      }/01/${recentVal.getFullYear()}`;
      pickerInstance.set("minDate", firstOfMonth);
      //for edit module
      if (!isNaN(storedStartDate)) {
        startDate.val(storedFirstMonth);
        pickerInstance.jumpToDate(firstOfMonth);
      } else {
        startDate.val("");
      }
    } else {
      pickerInstance.set("defaultDate", new Date());
      pickerInstance.set("minDate", false);
      pickerInstance.set("maxDate", false);
    }
  };

  const startPicker = flatpickr(startDate[0], {
    dateFormat: "m/d/Y",
    disableMobile: true,
    onOpen: function () {
      configureMinDate(this, recentEndDate);
    },
    onChange: function (selectedDates, dateStr) {
      if (dateStr) {
        const [month, , year] = dateStr.split("/");
        const firstOfMonth = `${month}/01/${year}`;

        if (dateStr !== firstOfMonth) {
          this.setDate(firstOfMonth, false);
        }

        startDate.val(firstOfMonth);
        endDate.prop("disabled", false);

        const selectedEndDate = endDate.val();
        if (selectedEndDate) {
          const [endMonth, endDay, endYear] = selectedEndDate.split("/");
          const endDateObj = new Date(`${endYear}-${endMonth}-${endDay}`);
          const startDateObj = new Date(`${year}-${month}-01`);

          if (endDateObj < startDateObj) {
            endDate.val("");
            endDate[0]._flatpickr.clear();
            endDate[0]._flatpickr.set("minDate", firstOfMonth);
            endDate[0]._flatpickr.jumpToDate(firstOfMonth);
          }
        }
      } else {
        endDate.prop("disabled", true);
        endDate.val("");
      }
    },
  });
};

/**
 * The `setEndDate` function uses the Flatpickr library to set the end date based on the start date
 * selected, ensuring that the end date is always the last day of the selected month.
 * @param endDate - The `endDate` parameter in the `setEndDate` function is used to specify the input
 * field or element where the end date will be displayed and selected by the user. It is typically a
 * reference to the HTML input element where the end date will be set.
 * @param startDate - The `startDate` parameter is a reference to the start date input element on the
 * webpage. It is used to retrieve the selected start date value and set the minimum date for the end
 * date picker based on the selected start date.
 */
const setEndDate = (endDate, startDate) => {
  const endPicker = flatpickr(endDate[0], {
    dateFormat: "m/d/Y",
    disableMobile: true,
    onOpen: function () {
      let startVal = startDate.val();
      if (startVal) {
        let startParts = startVal.split("/");
        let firstOfMonth = `${startParts[0]}/01/${startParts[2]}`;
        this.set("minDate", firstOfMonth);
      }
    },
    onChange: function (selectedDates, dateStr) {
      if (dateStr) {
        let parts = dateStr.split("/");
        let year = parseInt(parts[2], 10);
        let month = parseInt(parts[0], 10);
        let last_day = new Date(year, month, 0).getDate();

        let lastOfMonth = `${parts[0]}/${last_day
          .toString()
          .padStart(2, "0")}/${parts[2]}`;

        // Prevent double-trigger by setting a flag
        if (dateStr !== lastOfMonth) {
          endPicker.setDate(lastOfMonth, false); // 'false' skips onChange retrigger
        }

        endDate.val(lastOfMonth);
      }
    },
  });
};

/**
 * The function `enable_submit_button` dynamically enables or disables a submit button based on the
 * change events of specified selectors.
 * @param selectors - Selectors is an array of CSS selectors that target the form elements whose change
 * event should trigger the validation logic.
 * @param submitButton - The `submitButton` parameter in the `enable_submit_button` function is a
 * jQuery object representing the button that should be enabled or disabled based on the validation
 * logic inside the function.
 */
const enable_submit_button = (selectors, submitButton) => {
  $(selectors.join(",")).on("change", function () {
    const isInvalid = $(this).val() != 0;
    submitButton.css({
      "pointer-events": isInvalid ? "none" : "initial",
      opacity: isInvalid ? ".5" : "1",
    });
  });

  // Prevent form submission on Enter if input value is invalid
  $(".jconfirm-open").on("keydown", function (e) {
    if (e.key === "Enter") {
      const isInvalid = $(selectors.join(",")).val() != 0;
      if (isInvalid) {
        e.preventDefault(); // Prevent form submission
      }
    }
  });
};

const multiSelectConfig = {
  noneSelectedText: "-- Select --",
  liveSearch: true,
  liveSearchStyle: "contains",
  actionsBox: true,
  width: "100%",
  container: "body",
  selectedTextFormat: "count > 2",
};

function initMultiSelect(
  virtualElementSelector,
  selector,
  delimiter = "",
  cascade = false
) {
  var virtual = $(virtualElementSelector);
  var original = $(selector);

  if (cascade) {
    virtual.selectpicker("destroy");
  }

  virtual.prop("multiple", true);

  if (original.val()) {
    virtual.val(
      original
        .val()
        .split("||")
        .map((value) => value.slice(1, -1))
    );
  } else {
    virtual.val("");
  }

  virtual.selectpicker(multiSelectConfig);

  virtual.on("changed.bs.select", function () {
    original.val(
      $(this)
        .val()
        .map((value) => `${delimiter}${value}${delimiter}`)
        .join("||")
    );

    if (cascade) {
      original[0].dispatchEvent(new Event("change"));
    }
  });
}

/**
 * The function `display_custom_totals` updates specific table rows with custom totals based on
 * provided keys and values.
 * @param appKey - The `appKey` parameter in the `display_custom_totals` function is used to identify a
 * specific application key that is being targeted for displaying custom totals.
 * @param original - The `original` parameter in the `display_custom_totals` function is used to
 * specify the key of the original total row in the form. This key is used to identify the row in the
 * form where the original total is displayed.
 * @param custom - The `custom` parameter in the `display_custom_totals` function is an object that
 * contains custom totals for specific keys. The function iterates over the entries of this object and
 * updates the corresponding rows in a form based on the provided `appKey`.
 */
const display_custom_totals = (appKey, original, custom) => {
  Object.entries(custom).forEach(function ([key, value]) {
    var row = document.querySelector(
      `form[action*="${appKey}"] tr[data-cb-aggregation="${key}"]`
    );

    if (row && row.children[1]) {
      var new_total = row.children[1].innerText.trim();
      var aggregate1_row = document.querySelector(
        `form[action*="${appKey}"] tr[data-cb-aggregation="${original}"]`
      );

      aggregate1_row.children[value].innerText = new_total;
      aggregate1_row.children[value].classList.replace(
        "cbResultSetTotalsDataCell",
        "cbResultSetTotalsDataCellNumberDate"
      );
    }
  });
};

/**
 * The function `toggle_mfg_sibling_fields` toggles the visibility of sibling fields based on the value
 * of a specified input field.
 * @param mfg_support_type - mfg_support_type is a DOM element representing the input field for
 * selecting a manufacturing support type.
 * @param mfg_fields - The `mfg_fields` parameter in the `toggle_mfg_sibling_fields` function seems to
 * be an object that contains key-value pairs. Each key represents a field name, and each value
 * represents a CSS selector for the corresponding input field.
 */
const toggle_mfg_sibling_fields = (mfg_support_type, mfg_fields) => {
  const toggleClass = mfg_support_type.value == "" ? "add" : "remove";

  Object.entries(mfg_fields).forEach(([key, value]) => {
    const form = mfg_support_type.closest("form");
    const sibling_label = form.querySelector(`label[for*="${key}"]`);
    const sibling_input = form.querySelector(`${value}[name*="${key}"]`);

    [sibling_label, sibling_input].forEach((element) => {
      if (element) element.parentElement.classList[toggleClass]("hide-div");
    });
  });
};

/**
 * The function `modalButton` opens a modal with a specified title and URL based on the provided
 * parameters.
 * @param title - The `title` parameter is the title of the paint button that will be displayed on the
 * interface.
 * @param appKey - The `appKey` parameter is used to specify the key of the application being accessed
 * or embedded.
 * @param [params] - The `params` parameter in the `modalButton` function is used to pass additional
 * parameters to the URL that is being constructed. These parameters can be used to customize the
 * behavior or appearance of the embedded application specified by the `appKey`.
 * @param [width=50] - The `width` parameter in the `modalButton` function specifies the width of
 * the modal window that will be opened when the button is clicked. The default value for the `width`
 * parameter is 50, but you can customize it by providing a different value when calling the function.
 */
function modalButton(title, appKey, params = "", width = 50) {
  openModal_v2(
    title,
    `https://${accountId}/dp/${appKeyPrefix}${appKey}/emb${params} `,
    `${width}%`,
    "Y"
  );
}

/**
 * The function `deletePPL` is designed to trigger a click event on a delete button when a specific
 * button is clicked.
 *
 * Used on the tabular reports
 */
const deletePL = () => {
  var btn = event.target;
  var containerRow = btn.parentElement.parentElement.parentElement;
  var deleteBtn = containerRow.querySelector('a[data-cb-name="InlineDelete"]');
  deleteBtn.click();
};

/**
 * The `editPPL` function opens a modal to edit a Paint Product Line.
 *
 * @param {string} PPL_ID - Paint Product Line ID
 */
const editPPL = (PPL_ID) => {
  modalButton(
    "Edit Paint Product Line",
    "2832840a80724862b5b9",
    `?PPL_ID=${PPL_ID}`,
    27
  );
};

/**
 * The `editAPL` function opens a modal to edit a Allied Product Line.
 *
 * @param {string} APL_ID - Paint Product Line ID
 */
const editAPL = (APL_ID) => {
  modalButton(
    "Edit Allied Product Line",
    "6c654600e72e402c83b2",
    `?APL_ID=${APL_ID}`,
    27
  );
};

/**
 * The `addPercentage` function appends a percentage symbol (%) to the parent element of input fields
 * with names containing a specified field value.
 * @param field - The `field` parameter in the `addPercentage` function is used to specify a part of
 * the name attribute of input elements. This function selects input elements whose name attribute
 * contains the specified `field` value and appends a percentage symbol (%) after the input element.
 */
const addPercentage = (field) => {
  $(`input[name*="${field}"]`).parent().append(" %");
};

/**
 * The function `validateMFG_Support` ensures that the input value for MFG Support does not exceed
 * 100%.
 * @param field - The `field` parameter in the `validateMFG_Support` function is used to specify the
 * name attribute of the input field that you want to validate for MFG (Manufacturing) support
 * percentage.
 */
const validateMFG_Support = (field) => {
  var input = $(`input[name*="${field}"]`);

  input.on("keyup", function () {
    var value = parseFloat($(this).val()) || 0;

    if (value > 100) {
      $(this).val(100); // Reset to max allowed value
      alert("MFG Support cannot exceed 100%.");
    }
  });
};

// const addHoverOnList = (e, label) => {
//   const form = document.querySelector(`form[action*="${e.detail.appKey}"]`);

//   const tableHeaders = [...form.querySelectorAll('th')];

//   const targetField = tableHeaders.find(tableHeader => {
//     const a = tableHeader.querySelector('a');
//     return a && a.textContent.trim() === label;
//   });

//   if (targetField) {
//     const parentRow = targetField.parentElement;
//     const headerIndex = Array.from(parentRow.children).indexOf(targetField);
//     const targetColumnIndex = headerIndex + 1;

//     const targetColumns = [...form.querySelectorAll(`tbody > tr.cbResultSetDataRow > td:nth-child(${targetColumnIndex})`)];

//     // Create tooltip element
//     const tooltip = document.createElement('div');
//     tooltip.style.position = 'absolute';
//     tooltip.style.background = '#333';
//     tooltip.style.color = '#fff';
//     tooltip.style.padding = '8px';
//     tooltip.style.borderRadius = '4px';
//     tooltip.style.fontSize = '12px';
//     tooltip.style.maxWidth = '300px';
//     tooltip.style.display = 'none';
//     tooltip.style.zIndex = '9999';
//     tooltip.style.whiteSpace = 'normal';
//     tooltip.style.lineHeight = '1.4';
//     tooltip.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
//     document.body.appendChild(tooltip);

//     targetColumns.forEach(targetColumn => {
//       const row = targetColumn.parentElement;
//       const data = row.querySelector('span[cb-hover-details]');

//       if (data) {
//         const hoverValue = data.getAttribute('cb-hover-details');

//         targetColumn.addEventListener('mouseenter', (event) => {
//           targetColumn.setAttribute('title', ''); //override default title
//           tooltip.innerHTML = hoverValue;
//           tooltip.style.display = 'block';
//           const rect = event.target.getBoundingClientRect();
//           tooltip.style.top = `${window.scrollY + rect.top - tooltip.offsetHeight - 5}px`;
//           tooltip.style.left = `${window.scrollX + rect.left}px`;
//         });

//         targetColumn.addEventListener('mousemove', (event) => {
//           tooltip.style.top = `${event.pageY - tooltip.offsetHeight - 10}px`;
//           tooltip.style.left = `${event.pageX + 10}px`;
//         });

//         targetColumn.addEventListener('mouseleave', () => {
//           tooltip.style.display = 'none';
//         });
//       }
//     });
//   }
// };

const addHoverOnList = (e, label) => {
  const form = document.querySelector(`form[action*="${e.detail.appKey}"]`);
  const targetField = getTargetField(form, label);

  if (targetField) {
    const targetColumns = getTargetColumns(form, targetField);

    // Custom tooltip that mimics the default browser tooltip
    const tooltip = document.createElement("div");
    tooltip.style.position = "absolute";
    tooltip.style.background = "#ffffe1";
    tooltip.style.color = "#000";
    tooltip.style.padding = "4px 8px";
    tooltip.style.border = "1px solid #c0c0c0";
    tooltip.style.borderRadius = "4px";
    tooltip.style.fontSize = "12px";
    tooltip.style.fontFamily = "sans-serif";
    tooltip.style.maxWidth = "300px";
    tooltip.style.whiteSpace = "normal";
    tooltip.style.display = "none";
    tooltip.style.zIndex = "9999";
    tooltip.style.boxShadow = "2px 2px 5px rgba(0,0,0,0.2)";
    document.body.appendChild(tooltip);

    targetColumns.forEach((targetColumn) => {
      const row = targetColumn.parentElement;
      const data = row.querySelector("span[cb-hover-details]");

      targetColumn.addEventListener("mousemove", (event) => {
        targetColumn.setAttribute("title", "");
      });

      if (data) {
        const hoverValue = data.getAttribute("cb-hover-details");

        const textSpan = document.createElement("span");
        textSpan.textContent = targetColumn.textContent;
        targetColumn.textContent = "";
        targetColumn.appendChild(textSpan);

        textSpan.addEventListener("mouseenter", (event) => {
          tooltip.innerHTML = hoverValue;
          tooltip.style.display = "block";
          const rect = event.target.getBoundingClientRect();
          tooltip.style.top = `${
            window.scrollY + rect.top - tooltip.offsetHeight - 4
          }px`;
          tooltip.style.left = `${window.scrollX + rect.left + 6}px`;
        });

        textSpan.addEventListener("mousemove", (event) => {
          textSpan.setAttribute("title", "");
          tooltip.style.top = `${event.pageY - tooltip.offsetHeight - 4}px`;
          tooltip.style.left = `${event.pageX + 6}px`;
        });

        textSpan.addEventListener("mouseleave", () => {
          tooltip.style.display = "none";
        });
      }
    });
  }
};

const getTargetField = (form, label) => {
  const tableHeaders = [...form.querySelectorAll("th")];
  const targetField = tableHeaders.find((tableHeader) => {
    const a = tableHeader.querySelector("a");
    return a && a.textContent.trim() === label;
  });

  return targetField;
};

const getTargetColumns = (form, field) => {
  const parentRow = field.parentElement;
  const headerIndex = Array.from(parentRow.children).indexOf(field);
  const targetColumnIndex = headerIndex + 1;
  const targetColumns = [
    ...form.querySelectorAll(
      `tbody > tr.cbResultSetDataRow > td:nth-child(${targetColumnIndex})`
    ),
  ];

  return targetColumns;
};

const addProductLineLink = (e, field) => {
  const form = document.querySelector(`form[action*="${e.detail.appKey}"]`);
  const targetField = getTargetField(form, field);

  if (targetField) {
    const targetColumns = getTargetColumns(form, targetField);

    targetColumns.forEach((targetColumn) => {
      const row = targetColumn.parentElement;
      const data = row.querySelector("span[cb_product_line_link]");

      if (data) {
        const aHref = data.getAttribute("cb_product_line_link");

        var a = document.createElement("a");
        a.innerHTML = targetColumn.textContent;
        a.href = aHref;
        a.target = "_blank";

        targetColumn.querySelector("span").innerHTML = "";
        targetColumn.querySelector("span").appendChild(a);
      }
    });
  }
};
