document.addEventListener("DataPageReady", function (event) {
  if (
    event.detail.appKey
      .toLowerCase()
      .includes("51ba494d753f49b0a82e".toLowerCase())
  ) {
    let form = $(`form[action*="51ba494d753f49b0a82e"]`);

    // onload amount contract validation
    form.find(".amount-contract").each(function () {
      amount_contract_validation(this);
    });

    total_amount_contract();
    notes_btn_validation();
  }

  if (
    event.detail.appKey
      .toLowerCase()
      .includes("d45ec1ea789448e29b84".toLowerCase())
  ) {
    let form = $(`form[action*="d45ec1ea789448e29b84"]`);

    // console.log(form.find('*[name="cbParamVirtual2"]'));

    form.find('*[name="cbParamVirtual2"]').change(function () {
      // console.log('editable amount contract', Number(this.value) );

      if (Number(this.value) == 0) {
        $('form[action*="51ba494d753f49b0a82e"] .amount-contract').prop(
          "readonly",
          true
        );
        $('form[action*="51ba494d753f49b0a82e"] .amount-contract').attr(
          "title",
          "Not editable"
        );
      }
    });
  }
});

$(document).on(
  "keyup",
  `form[action*="51ba494d753f49b0a82e"] .amount-contract`,
  function () {
    amount_contract_validation(this);
    notes_btn_validation();
    total_amount_contract();
  }
);

// NCS/SSI Cost
$(document).on(
  "keyup",
  `form[action*="51ba494d753f49b0a82e"] .participation`,
  function () {
    calc_amount_contract(this);
    amount_contract_validation(this);
    notes_btn_validation();
    total_amount_contract();
  }
);

// QTY ( Default from # of shops )
$(document).on(
  "keyup",
  `form[action*="51ba494d753f49b0a82e"] .qty`,
  function () {
    calc_amount_contract(this);
    amount_contract_validation(this);
    notes_btn_validation();
    total_amount_contract();
  }
);

const amount_contract_validation = (elem) => {
  // return false;

  const row = $(elem).closest("tr");

  const investment_id = $(elem).attr("data-investmentid");
  const amount_contract = row.find(
    `.amount-contract[data-investmentid="${investment_id}"]`
  );
  const participation = row.find(
    `.participation[data-investmentid="${investment_id}"]`
  );

  const notes_btn = row.find(".notesbtn");
  let notes_count = Number(notes_btn.attr("data-notescount") || "");
  notes_count = isNaN(notes_count) ? 0 : notes_count;

  if (
    Number(investment_id) == 17 || // skip validation - LB Inventory
    Number(investment_id) == 26 // Prompt Pay %
  ) {
    return false;
  }

  // required notes
  // if(Number(amount_contract.val()) != Number(participation.val()) && notes_count == 0)
  // {
  //         notes_btn.removeClass('btn-primary');
  //         notes_btn.addClass('btn-danger');
  //         notes_btn.html(`Notes <span class="badge badge-light">${notes_count}</span>`);
  // }
  // else
  // {
  // 	notes_btn.removeClass('btn-danger');
  // 	notes_btn.addClass('btn-primary');
  // 	notes_btn.html(`Notes <span class="badge badge-light">${notes_count}</span>`);
  // }

  // amount contract highlight

  amount_contract.removeClass("btn-success");
  amount_contract.removeClass("btn-danger");

  if (Number(amount_contract.val()) > Number(participation.val())) {
    amount_contract.addClass("btn-success");
  }

  if (Number(amount_contract.val()) < Number(participation.val())) {
    amount_contract.addClass("btn-danger");
  }
};

const total_amount_contract = () => {
  let form = $('form[action*="51ba494d753f49b0a82e"]');
  let total = 0;

  var skip_investment_id = [
    3, // Monthly Computer Support Fees
    4, // Monthly Logic ICS Fees
    17, // LB Inventory
    26, // Prompt Pay %
  ];

  form.find(".amount-contract").each(function () {
    var investment_id = Number($(this).attr("data-investmentid"));

    // console.log(skip_investment_id, investment_id, skip_investment_id.includes(investment_id));

    if (skip_investment_id.includes(investment_id)) {
      return true;
    } else {
      console.log(this.value);

      total += Number(this.value);
    }
  });

  form.find(".total-bdf").val(total);
};

const calc_amount_contract = (elem) => {
  let row = $(elem).closest("tr");
  let investment_id = $(elem).attr("data-investmentid");
  let amount_contract = row.find(
    `.amount-contract[data-investmentid="${investment_id}"]`
  );
  let qty = row.find(`.qty[data-investmentid="${investment_id}"]`);
  let participation = row.find(
    `.participation[data-investmentid="${investment_id}"]`
  );
  let agreement_type = $(
    '#entryraw-container input[name="cbParamVirtual3"]'
  ).val();

  if (
    agreement_type == "Pricing ONLY DEAL - Customer Does not have a Contract"
  ) {
    return false;
  }

  amount_contract.val(qty.val() * participation.val());
};
