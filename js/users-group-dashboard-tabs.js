// Dashboard metrics
var bucketApp_Keys_Pricing = ["ef76b73d6082474aadbe", "d8053e16d8d14ecf8c21"];

// Dashboard metrics
var bucketApp_Keys_Logic = ["1ded9b7819d34c5894a5", "54dd726bcf644b4bb4fb"];

// var bucketApp_Keys_Procure = [
//         "f7400819e1704df39330",
//         "a850778d63474cd98958",
// ]

var bucketApp_Keys_Finance = ["3d55741dfcb44c6aa8f1", "7446581508a7475095a0"];

var bucketApp_Keys_Credit = [
	"c6624f2eb92544e6b89f",
	"087fc11aa0034a2f8e7d",
	"6395b6c851194e1c9291",
];

var bucketApp_Keys_CLevel = [
	"5e3efbb2501443789cf6",
	"5a6aa2aa2e734b97aca6",
	"62ebac071ec04163bf0a",
	// "ffc1c7c866bc4df4b5af"
	"4715d70e3b0049f9977e",
];

var bucketLabels_Credit = [
	"Execution <br>Phase",
	"Suggested Credit <br> Work Queue",
	"Deal <br>Terminations",
];

var bucketLabels_CLevel = [
	"ISAs in Deal Sheet Phase",
	"ISAs in Contract Phase",
	"Execution Work Queue",
	"Breach/Deal Termination Work Queue",
];

var bucketLabels_CLevel = [
	"Deal Sheet <br> Approvals Needed",
	"Contract <br>Phase",
	"Execution <br>Phase",
	"Deal <br>Terminations",
];

var bucketLabels = ["Execution <br>Phase", "Deal <br>Terminations"];

document.addEventListener("DataPageReady", function (event) {
	if (
		event.detail.appKey.includes("ef76b73d6082474aadbe") ||
		event.detail.appKey.includes("d8053e16d8d14ecf8c21")
	) {
		makeDashboardMetricForISATeamGroup(
			".dashboard-metrics-pricing",
			bucketApp_Keys_Pricing,
			bucketLabels,
			"pricing"
		);
	}
	if (
		event.detail.appKey.includes("1ded9b7819d34c5894a5") ||
		event.detail.appKey.includes("54dd726bcf644b4bb4fb")
	) {
		makeDashboardMetricForISATeamGroup(
			".dashboard-metrics-logic",
			bucketApp_Keys_Logic,
			bucketLabels,
			"logic"
		);
	}
	// if (event.detail.appKey.includes("f7400819e1704df39330") || event.detail.appKey.includes("a850778d63474cd98958")) {
	//     makeDashboardMetricForISATeamGroup(".dashboard-metrics-procure", bucketApp_Keys_Procure, bucketLabels, 'procure')
	// }
	if (
		event.detail.appKey.includes("3d55741dfcb44c6aa8f1") ||
		event.detail.appKey.includes("7446581508a7475095a0")
	) {
		makeDashboardMetricForISATeamGroup(
			".dashboard-metrics-finance",
			bucketApp_Keys_Finance,
			bucketLabels,
			"finance"
		);
	}
	if (
		event.detail.appKey.includes("c6624f2eb92544e6b89f") ||
		event.detail.appKey.includes("087fc11aa0034a2f8e7d") ||
		event.detail.appKey.includes("6395b6c851194e1c9291")
	) {
		makeDashboardMetricForISATeamGroup(
			".dashboard-metrics-credit",
			bucketApp_Keys_Credit,
			bucketLabels_Credit,
			"credit"
		);
	}
	// if (event.detail.appKey.includes("c6624f2eb92544e6b89f") || event.detail.appKey.includes("087fc11aa0034a2f8e7d") || event.detail.appKey.includes("6395b6c851194e1c9291")) {
	//     makeDashboardMetricForISATeamGroup(".dashboard-metrics-credit", bucketApp_Keys_Credit, bucketLabels_Credit, 'credit')
	// }
	if (
		event.detail.appKey.includes("5e3efbb2501443789cf6") ||
		event.detail.appKey.includes("5a6aa2aa2e734b97aca6") ||
		event.detail.appKey.includes("62ebac071ec04163bf0a") ||
		event.detail.appKey.includes("4715d70e3b0049f9977e")
	) {
		makeDashboardMetricForISATeamGroup(
			".dashboard-metrics-clevel",
			bucketApp_Keys_CLevel,
			bucketLabels_CLevel,
			"c-level"
		);
	}

	if (event.detail.appKey.includes("3eb46814cace4cfd9c7a")) {
		console.log("bwq loaded");
		makeDashboardMetricForISATeamGroup(
			".dashboard-metrics-breach",
			["3eb46814cace4cfd9c7a"],
			["Deal <br>Terminations"],
			"c-level"
		);
	}
});
