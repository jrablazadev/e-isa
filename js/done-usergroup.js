var urlVars = getUrlVars();
var isa_id = Number(urlVars["ISA_ID"] || 0);
var clone_from_isa_id = Number(urlVars["Clone_From_ISA_ID"] || 0);
var cloned_isa_id = Number(urlVars["Cloned_ISA_ID"] || 0);
var isa_name = urlVars["ISA_Name"] || "";
isa_name = isa_name != "" ? isa_name.replace("+", " ") : isa_name;
var status_id = Number(urlVars["Status_ID"] || 0);
var CFO = urlVars["CFO"] || "";
var VP = urlVars["VP"] || "";
var COO = urlVars["COO"] || "";

var Resubmit_To_Execution = urlVars["Resubmit_To_Execution"] || "";
var Has_Logic_ICS = urlVars["Has_Logic_ICS"] || "";

var reason = urlVars["Reason"] || "";
reason = reason.replaceAll("+", " ");

var Denial = urlVars.Denial || "";
var Last_Approver = urlVars.Last_Approver || "";
var Next_Approver = urlVars.Next_Approver || "";
Next_Approver = Next_Approver.replace("+", " ");
Last_Approver = Last_Approver.replace("+", " ");

// remove hide
removeHide();

if (Denial) {
  $(".cb-msg").html(
    "E-ISA was denied by " +
      Last_Approver +
      " and has been sent back to " +
      Next_Approver +
      " for review"
  );
} else {
  switch (status_id) {
    case 2:
      // For Approval of DSM
      var msg = "<div>Your E-ISA approval submission is complete.</div>";
      msg += "<div>The next person to approve this E-ISA is DSM</div>";
      msg +=
        '<div class="mt-2">You can view the status of the E-ISA approval <a href="./dashboard.php">here</a>.</div>';

      $(".cb-msg").html(msg);
      for_approval_of_dsm();
      break;

    case 16:
      // For Approval of ISA Team
      var msg = "<div>Your E-ISA approval submission is complete.</div>";
      msg += "<div>The next person to approve this E-ISA is ISA Team</div>";
      msg +=
        '<div class="mt-2">You can view the status of the E-ISA approval <a href="./dashboard.php">here</a>.</div>';
      $(".cb-msg").html(msg);
      for_approval_of_admin();
      break;

    case 4:
      // For Approval of RVPS
      var msg = "<div>Your E-ISA approval submission is complete.</div>";
      msg += "<div>The next person to approve this E-ISA is RVPS</div>";
      msg +=
        '<div class="mt-2">You can view the status of the E-ISA approval <a href="./dashboard.php">here</a>.</div>';
      $(".cb-msg").html(msg);
      break;

    case 3:
      $(".cb-msg").html(
        "E-ISA was denied by DSM and has been sent back to TSM for review."
      );
      break;

    case 6:
      // For Approval of RVPO
      var msg = "<div>Your E-ISA approval submission is complete.</div>";
      msg += "<div>The next person to approve this E-ISA is RVPO</div>";
      msg +=
        '<div class="mt-2">You can view the status of the E-ISA approval <a href="./dashboard.php">here</a>.</div>';

      $(".cb-msg").html(msg);
      break;

    case 7:
      $(".cb-msg").html(
        "E-ISA was denied by RVPO and has been sent back to RVPS for review."
      );
      break;

    case 8:
      // For Approval of Tom Blawusch
      var msg = "<div>Your E-ISA approval submission is complete.</div>";
      msg += "<div>The next person to approve this E-ISA is Tom Blawusch</div>";
      msg +=
        '<div class="mt-2">You can view the status of the E-ISA approval <a href="./dashboard.php">here</a>.</div>';
      $(".cb-msg").html(msg);
      break;

    case 9:
      $(".cb-msg").html(
        "E-ISA was denied by Tom Blawusch and has been sent back to ISA Team for review."
      );
      break;

    case 18:
      $(".cb-msg").html("E-ISA was approved by ISA Team.");
      break;

    case 5:
      $(".cb-msg").html(
        "E-ISA was denied by RVPS and has been sent back to DSM for review."
      );
      break;

    case 25:
      // For Approval of Manufacturer
      var msg = "<div>Your E-ISA approval submission is complete.</div>";
      msg += "<div>The next person to approve this E-ISA is Manufacturer</div>";
      msg +=
        '<div class="mt-2">You can view the status of the E-ISA approval <a href="./dashboard.php">here</a>.</div>';

      $(".cb-msg").html(msg);
      break;

    case 10: // For Approval of CFO, VP, COO
      var approvers = [];
      CFO == "No" && approvers.push("CFO");
      VP == "No" && approvers.push("VP");
      COO == "No" && approvers.push("COO");

      if (approvers.length) {
        var msg = "<div>Your E-ISA approval submission is complete.</div>";
        msg +=
          "<div>The next person to approve this E-ISA " +
          (approvers.length == 1 ? "is" : "are") +
          " " +
          approvers.join(", ") +
          ".</div>";
        msg +=
          '<div class="mt-2">You can view the status of the E-ISA approval <a href="./dashboard.php">here</a>.</div>';
      } else {
        var msg = "<div>Your E-ISA approval submission is complete.</div>";
        msg +=
          "<div>The next person to approve this E-ISA are CFO, VP, COO </div>";
        msg +=
          '<div class="mt-2">You can view the status of the E-ISA approval <a href="./dashboard.php">here</a>.</div>';
      }

      $(".cb-msg").html(msg);
      break;

    case 11: // Denied by CFO, VP, COO
      $(".cb-msg").html(
        "E-ISA was denied by CFO, VP, COO and has been sent back to Tom Blawusch for review."
      );
      break;

    case 17: // Denied ISA Team
      if (reason == "I am entering an OLD E-ISA") {
        $(".cb-msg").html(
          "E-ISA was denied by ISA Team and has been sent back to DSM for review."
        );
      } else {
        $(".cb-msg").html(
          "E-ISA was denied by ISA Team and has been sent back to RVPO for review."
        );
      }
      break;

    case 27: // Denied CEO
      $(".cb-msg").html(
        "E-ISA was denied by CEO and has been sent back to Tom Blawusch for review."
      );
      break;

    case 26:
      // For Approval of CEO
      var msg = "<div>Your E-ISA approval submission is complete.</div>";
      msg += "<div>The next person to approve this E-ISA is CEO </div>";
      msg +=
        '<div class="mt-2">You can view the status of the E-ISA approval <a href="./dashboard.php">here</a>.</div>';

      $(".cb-msg").html(msg);
      break;

    case 20: // Approved by DEAL SHEET
      $(".cb-msg").html("This is now in Deal Sheet Phase.");
      break;

    case 21: // Contract Phase
      $(".cb-msg").html("E-ISA has been Customer Accepted by ISA Team.");
      break;

    case 30: // Deal Execution Phase
      if (Resubmit_To_Execution == "Y") {
        if (Has_Logic_ICS == "Y") {
          $(".cb-msg").html(
            "The ISA was successfully re-submitted to the Pricing, Finance, and Log1c ICS Execution Work Queue."
          );
        } else {
          $(".cb-msg").html(
            "The ISA was successfully re-submitted to the Pricing and Finance Execution Work Queue."
          );
        }
      } else {
        var msg = "E-ISA has been Customer Accepted by ISA Team.";
        // msg += '<iframe style="display: none" src="https://caspio.thenetwork-crm.com/dp/25d550003bbec0cb5c79420a9953?ISA_ID='+clone_from_isa_id+'&Cloned_ISA_ID='+cloned_isa_id+'"></iframe>';
        // msg += '<iframe style="display: none" src="https://caspio.thenetwork-crm.com/dp/25d55000923e1a0583b14624b836?ISA_ID='+isa_id+'"></iframe>';
        $(".cb-msg").html(msg);
      }
      break;

    case 31: // Denied by Customer with Edits
      $(".cb-msg").html(
        "E-ISA has been Denied by Customer with Edits by ISA Team."
      );
      break;

    case 32: // Customer Denied, Lost Opportunity
      $(".cb-msg").html(
        "E-ISA has been Customer Denied, Lost Opportunity by ISA Team and has been sent back to Submitter for review."
      );
      break;

    case 29: // Deal Directory
      $(".cb-msg").html("E-ISA was submitted to Deal Directory.");
      break;
  }
}

function getUrlVars() {
  var vars = [],
    hash;
  var hashes = window.location.href
    .slice(window.location.href.indexOf("?") + 1)
    .split("&");

  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split("=");
    hash[1] = unescape(hash[1]);
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }

  return vars;
}

function for_approval_of_admin() {
  $(".cb-changelog").html(
    '<iframe src="https://caspio.thenetwork-crm.com/dp/25d550001815674c8f034d74bfe7?ISA_ID=' +
      isa_id +
      '"></iframe>'
  );
}

function for_approval_of_dsm() {
  $(".cb-changelog").html(
    '<iframe src="https://caspio.thenetwork-crm.com/dp/25d550001815674c8f034d74bfe7?ISA_ID=' +
      isa_id +
      '"></iframe>'
  );
}

// remove hide
function removeHide() {
  var interval = setInterval(() => {
    $("body").removeClass("hide");

    clearInterval(interval);
  }, 500);
}
