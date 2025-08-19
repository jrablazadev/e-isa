document.addEventListener("DataPageReady", function (e) {
  if (e.detail.appKey.includes('66bd2be3018a49e495f5')) {
    var spinnerDiv = document.querySelector('.details-dp .spinner-border');

    if (spinnerDiv) {
      spinnerDiv.parentNode.removeChild(spinnerDiv);
    }

    deployDP_v2('docu-hub-prev-attachments', 'a9a30d85f8a14f03bb76', `?cbResetParam=1&OLD_ISA_ID=${oldISAId}`) //variable from 66bd2be3018a49e495f5

    if (opportunityId) { //variable from 66bd2be3018a49e495f5
      $('.buttons-dp a').each(function (index, element) {
        var href = $(element).attr('href');
        $(element).attr('href', `${href}&Opp_ID=${opportunityId}&EnvelopeField_Opp_ID=${opportunityId}`)
      });
    }
  }

  if (e.detail.appKey.includes('a9a30d85f8a14f03bb76')) {
    var dlBtn = document.querySelector('li[id*="DataDownloadButton"]');
    var form = $(`form[action*="${e.detail.appKey}"]`);
    if (dlBtn) {
      dlBtn.classList.add("btn", "btn-light", "p-2")
    }

    if (form.find('tr[data-cb-name="data"]').length == 0) {
      form.find('.cbResultSetRecordMessage').addClass('no-records-container');
    }
  }

  if (e.detail.appKey.includes('a7d6f54fa65e4779b945')) {
    var dlBtn = document.querySelector('li[id*="DataDownloadButton"]')
    var form = $(`form[action*="${e.detail.appKey}"]`);
    if (dlBtn) {
      dlBtn.classList.add("btn", "btn-light", "p-2")
    }

    if (form.find('tr[data-cb-name="data"]').length == 0) {
      form.find('.cbResultSetRecordMessage').addClass('no-records-container');
    }
  }

  if (e.detail.appKey.includes('ea73f40277cb41289096')) {
    $('*[name*="EditRecordUpload_File"]').parent().find('span').addClass('d-block');
    $('form[action*="ea73f40277cb41289096"] .cbUpdateButton').css("visibility", "visible");
  }
});

const addISADoc = () => {
  openModal_v2('Add E-ISA Attachments', `${globalDataPagePrefix}58a918dfc8734e3cb3b3/emb`);
};

const editISADoc = (attachmentId) => {
  openModal_v2('Edit E-ISA Attachments', `${globalDataPagePrefix}ea73f40277cb41289096/emb?Attachment_ID=${attachmentId}`);
};

const openModal_DH = (title, btn1, btn2) => {
  jqueryConfirm = $.confirm({
    scrollToPreviousElement: false,
    scrollToPreviousElementAnimate: false,
    type: 'secondary',
    columnClass: 'col-md-6 col-md-offset-3',
    title: getTitle(title),
    boxWidth: 'fit-content',
    theme: 'material',
    content: '<div class="spinner-border text-info" role="status"><span class="sr-only">Loading...</span></div><div id="cb-jc-body" class="mt-3"></div>',
    buttons: false,
    useBootstrap: false,
    onOpen: function () {
      var div = document.createElement("div");
      div.setAttribute('style', 'display:grid;');
      div.appendChild(buttons(btn1));
      div.appendChild(buttons(btn2));

      document.getElementById('cb-jc-body').appendChild(div);
      $('.spinner-border').hide();
    },
    onClose: function () {
      $('.spinner-border').show();
    }
  });
}

const getTitle = (type) => {
  var title;

  switch (type) {
    case "SCAT":
      title = "Choose Credit Application and Tax Form Workflow";
      break;
    case "SCAO":
      title = "Choose Credit Application Workflow";
      break;
    case "TFO":
      title = "Choose Tax Form Workflow";
      break;
    default:
      title = "";
      break;
  }

  return title;
}

const buttons = (type) => {
  var urlVars = getUrlVars();
  var isaId = urlVars['ISA_ID'];
  var params = `&ISA_ID=${isaId}&EnvelopeField_ISA_ID=${isaId}&Opp_ID=${opportunityId}&EnvelopeField_Opp_ID=${opportunityId}`;

  var a = document.createElement('a');
  a.target = "_blank";
  a.setAttribute('class', 'btn btn-primary btn-md mb-2');

  switch (type) {
    // SCAT
    case "SCAT-0":
      a.href = 'https://na4.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=6f9893ec-1703-40d2-b58d-bab0224ccb3e&env=na4&acct=466be9c3-15f3-4408-ba1a-7c650f567cd3&v=2' + params;
      a.innerText = "Send to Customer who will sign only.";
      break;
    case "SCAT-1":
      a.href = 'https://na4.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=64396076-c137-4403-be04-c872d4346c46&env=na4&acct=466be9c3-15f3-4408-ba1a-7c650f567cd3&v=2' + params;
      a.innerText = "Send to Customer Administrator to complete form, then send to Customer Signer";
      break;
    // SCAO
    case "SCAO-0":
      a.href = 'https://na4.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=aa21e485-a7a2-4fd3-b9e0-3a81f52a4d60&env=na4&acct=466be9c3-15f3-4408-ba1a-7c650f567cd3&v=2' + params;
      a.innerText = "Send to Customer who will sign only.";
      break;
    case "SCAO-1":
      a.href = 'https://na4.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=12fa4303-80fd-431f-bfb8-dd13a3f6028c&env=na4&acct=466be9c3-15f3-4408-ba1a-7c650f567cd3&v=2' + params;
      a.innerText = "Send to Customer Administrator to complete form, then send to Customer Signer";
      break;
    // TFO
    case "TFO-0":
      a.href = 'https://na4.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=d1c557bf-d4cf-402b-84e3-21f4a514f8dd&env=na4&acct=466be9c3-15f3-4408-ba1a-7c650f567cd3&v=2' + params;
      a.innerText = "Send to Customer who will sign only.";
      break;
    case "TFO-1":
      a.href = 'https://na4.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=442a1e2d-8c8a-4c20-819e-3d3a4fc71ce2&env=na4&acct=466be9c3-15f3-4408-ba1a-7c650f567cd3&v=2' + params;
      a.innerText = "Send to Customer Administrator to complete form, then send to Customer Signer";
      break;
    default:
      a.href = "";
      a.innerText = "";
      break;
  }

  return a;
}
