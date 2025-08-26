/*
Below variables are declared on DataPage level (AppKey: 25d550002713d79af8ef48c29caf):
        var roleId = '[@authfield:LU_Approver_EIDs_Role_ID]';
        var jobTitle = '[@authfield:EIDs_Job_Title]';
	var userGroupId = '[@authfield:Users_Group_ID]';

External params from DataPage level (AppKey: 25d550002713d79af8ef48c29caf):
	[@Old_ISA_ID]
*/

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

function getSubfolder(lastApproverId) {
	var subfolder = "";

	var higherApproversSubfolder = {
		6: "../kn/",
		24: "../cfo/",
		25: "../coo/",
		14: "../ceo/",
	};

	var lowerApproversSubfolder = {
		"Territory Sales Manager -TSM": "../tsm/",
		"District Sales Mgr- DSM": "../dsm/",
		"Regional VP Sales": "../rvps/",
		"Regional Vice President Operations": "../rvpo/",
		"District Operations Manager": "../dom/",
		"Store Manager": "../sm/",
		"Regional Service Manager": "../rsm/",
		"VP Commercial/Light Industrial": "../vpcs/",
		"Commercial Sales Manager- CSM": "../csm/",
		"Vice President Commercial and Strategic Accts": "../vpas/",
		"Director, Strategic Accounts": "../as/",
		"Director, Technical Support": "../as/",
		"National Accounts Manager": "../as/",
	};

	if (lastApproverId == "32") {
		subfolder = "../users/";
	} else {
		if (higherApproversSubfolder[roleId]) {
			subfolder = higherApproversSubfolder[roleId];
		} else {
			if (lowerApproversSubfolder[jobTitle]) {
				subfolder = lowerApproversSubfolder[jobTitle];
			} else {
				if (userGroupId > "") {
					subfolder = "../user-group/";
				}
			}
		}
	}

	return subfolder;
}

function getSectionAddress() {
	var urlVars = getUrlVars();
	var redirectTo = urlVars.Redirect_To || "";
	var isaId = urlVars.ISA_ID || "";
	var oldIsaId = $('*[name="cbParamVirtual1"]').val();

	var sectionAddress = {
		2:
			"customer-sales-no-growth.php?ISA_ID=" +
			isaId +
			"&Section_ID=2",
		3:
			"customer-sales-growth.php?ISA_ID=" +
			isaId +
			"&Section_ID=3",
		4: "invoice-discounts.php?ISA_ID=" + isaId + "&Section_ID=4",
		5: "statement-rebates.php?ISA_ID=" + isaId + "&Section_ID=5",
		6: "eq-rebates.php?ISA_ID=" + isaId + "&Section_ID=6",
		7:
			"manufacturer-rebates-investments.php?ISA_ID=" +
			isaId +
			"&Section_ID=7",
		8: "investments.php?ISA_ID=" + isaId + "&Section_ID=8",
		9: "estimated-returns.php?ISA_ID=" + isaId + "&Section_ID=9",
		10:
			"attachments.php?cbResetParam=1&ISA_ID=" +
			isaId +
			"&Old_ISA_ID=" +
			oldIsaId +
			"&Section_ID=10",
		11: "allied-set-up.php?ISA_ID=" + isaId + "&Section_ID=11",
	};

	if (sectionAddress[redirectTo]) {
		return sectionAddress[redirectTo];
	}
}

var changedCount = 1;

$(document).on(
	"change",
	'*[name="cbParamVirtual1"], *[name="cbParamVirtual3"]',
	function () {
		if (changedCount == 2) {
			var lastApproverId = $(
				'[name="cbParamVirtual3"]'
			).val();

			var subfolder = getSubfolder(lastApproverId);
			var sectionAddress = getSectionAddress();

			// window.location.href = subfolder + sectionAddress;

			$('*[name="cbParamVirtual2"]').val(
				subfolder + sectionAddress
			);

			// console.log('Redirect');
			$('*[name="Submit"]').click();
		}

		changedCount++;
	}
);
