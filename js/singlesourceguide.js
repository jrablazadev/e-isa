var title = "[@authfield:EIDs_Job_Title]";

if (title.indexOf("Sr. TSM") >= 0) {
  document.getElementById("menu").innerHTML = "[@app:ASM_Dropdown_Menu]";
} else if (title.indexOf("ISM") >= 0) {
  document.getElementById("menu").innerHTML = "[@app:TSM_Dropdown_Menu]";
} else if (title.indexOf("IAM") >= 0) {
  document.getElementById("menu").innerHTML = "[@app:TSM_Dropdown_Menu]";
} else if (title.indexOf("DSM") >= 0) {
  document.getElementById("menu").innerHTML = "[@app:DSM_Dropdown_Menu]";
} else if (title.indexOf("Business Development Manager") >= 0) {
  document.getElementById("menu").innerHTML = "[@app:DSM_Dropdown_Menu]";
} else if (title.indexOf("Technical Consultant") >= 0) {
  document.getElementById("menu").innerHTML = "[@app:TSM_Dropdown_Menu]";
} else if (title.indexOf("TSM") >= 0) {
  document.getElementById("menu").innerHTML = "[@app:TSM_Dropdown_Menu]";
} else if (title.indexOf("Strategic Account") >= 0) {
  document.getElementById("menu").innerHTML = "[@app:Auto_Strat_Dropdown_Menu]";
} else if (title.indexOf("Regional Commercial Sales Manager") >= 0) {
  document.getElementById("menu").innerHTML =
    "[@app:Director_SalesFleet_Dropdown_Menu]";
} else if (title.indexOf("Commercial Sales Manager") >= 0) {
  document.getElementById("menu").innerHTML = "[@app:CSM_Dropdown_Menu]";
} else if (title.indexOf("Regional VP Sales") >= 0) {
  document.getElementById("menu").innerHTML = "[@app:RVP_Dropdown_Menu]";
} else if (title.indexOf("VP Sales") >= 0) {
  document.getElementById("menu").innerHTML = "[@app:VP_Sales_Dropdown_Menu]";
} else if (title.indexOf("Mobile Store Manager") >= 0) {
  document.getElementById("menu").innerHTML = "[@app:TSM_Dropdown_Menu]";
} else if (title.indexOf("Store Manager") >= 0) {
  document.getElementById("menu").innerHTML = "[@app:StoreMGR_Dropdown_Menu]";
} else if (title.indexOf("Executive Director of Operations") >= 0) {
  document.getElementById("menu").innerHTML = "[@app:EDOP_Dropdown_Menu]";
} else if (title.indexOf("VP Operations") >= 0) {
  document.getElementById("menu").innerHTML = "[@app:EDOP_Dropdown_Menu]";
} else if (title.indexOf("VP of Strategic Initiatives") >= 0) {
  document.getElementById("menu").innerHTML = "[@app:VP_MSO_Menu]";
} else if (title.indexOf("VP Industrial") >= 0) {
  document.getElementById("menu").innerHTML =
    "[@app:VP_Industrial_Dropdown_Menu]";
} else if (title.indexOf("District Operations Manager") >= 0) {
  document.getElementById("menu").innerHTML = "[@app:DOM_Dropdown_Menu]";
} else if (title.indexOf("Regional Vice President Operations") >= 0) {
  document.getElementById("menu").innerHTML = "[@app:ROM_Dropdown_Menu]";
} else if (title.indexOf("Credit") >= 0) {
  document.getElementById("menu").innerHTML = "[@app:Credit_Dropdown_Menu]";
} else if (title.indexOf("VP Accounting Operations") >= 0) {
  document.getElementById("menu").innerHTML = "[@app:Credit_Dropdown_Menu]";
} else if (title.indexOf("Director Sales Fleet") >= 0) {
  document.getElementById("menu").innerHTML =
    "[@app:Director_SalesFleet_Dropdown_Menu]";
} else if (title.indexOf("VP Procurement") >= 0) {
  document.getElementById("menu").innerHTML =
    "[@app:Procurement_Dropdown_Menu]";
} else if (title.indexOf("Continuous Improvement") >= 0) {
  document.getElementById("menu").innerHTML = "[@app:CI_Dropdown_Menu]";
} else if (title.indexOf("CEO") >= 0) {
  document.getElementById("menu").innerHTML = "[@app:CLevel_Dropdown_Menu]";
} else if (title.indexOf("Officer") >= 0) {
  document.getElementById("menu").innerHTML = "[@app:CLevel_Dropdown_Menu]";
} else if (title.indexOf("Chairman") >= 0) {
  document.getElementById("menu").innerHTML = "[@app:CLevel_Dropdown_Menu]";
} else if (title.indexOf("President") >= 0) {
  document.getElementById("menu").innerHTML = "[@app:CLevel_Dropdown_Menu]";
} else if (title.indexOf("Contracts Administrator") >= 0) {
  document.getElementById("menu").innerHTML = "[@app:CLevel_Dropdown_Menu]";
} else if (title.indexOf("Marketing") >= 0) {
  document.getElementById("menu").innerHTML = "[@app:Marketing_Dropdown_Menu]";
} else if (title.indexOf("Brands Development") >= 0) {
  document.getElementById("menu").innerHTML = "[@app:Marketing_Dropdown_Menu]";
} else if (title.indexOf("Brand Development") >= 0) {
  document.getElementById("menu").innerHTML = "[@app:Marketing_Dropdown_Menu]";
} else if (title.indexOf("Operations Analyst") >= 0) {
  document.getElementById("menu").innerHTML =
    "[@app:Ops_Analyst_Dropdown_Menu]";
} else {
  document.getElementById("menu").innerHTML = "[@app:Other_Dropdown_Menu]";
}


