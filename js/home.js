var home = new function()
{
	this.initialload = function()
	{
		document.addEventListener("DataPageReady", function(event){

			if (event.detail.appKey == "CAF26000f6477ae7b4e141c4aced")
			{
				// initiate rating library
				$("select:not(select[name$=RecordAcademy_Attend], select[name$=RecordFuture_Attend])").barrating({
					"theme"                 : "bars-reversed",
					"reverse"               : false,
					"showSelectedRating" 	: true
				});

                                home.assigngroups();
                                home.backandnextbtn();
                                home.createquestions();

                                // Academy > exclude unhidden fields
                                $("tr.group2").each(function(){

                                        if($(this).find("select[name$=RecordAcademy_Attend], #academybackbtn, #academytitle").length)
                                        {
                                                return;
                                        }

                                        $(this).addClass("group2-togglefields");
                                });

                                // Academy > dropdown > toggle of elements ** initial
                                if($("select[name$=RecordAcademy_Attend]").val() == "No")
                                {
                                        $("tr.group2-togglefields").addClass('hidden');
                                }
                                else
                                {
                                        $("tr.group2-togglefields").removeClass('hidden');
                                }

				// Academy > dropdown > toggle of elements
				$("select[name$=RecordAcademy_Attend]").change(function() {
					if(this.value == "No")
					{
						$("tr.group2-togglefields").addClass('hidden');
					}
					else
					{
						$("tr.group2-togglefields").removeClass('hidden');
					}
                                });

                                // save button
                                $("#savebtn").click(function(){
                                        (confirm("Save?") && $("input[type=submit][name=Submit]").click());
                                });

                                // initial hide and show of elements
                                $("tr.group1, tr.group2, tr.group3, tr.group4").hide();
				$("#mycontainer, tr.group1").show();
			}
		});
	};

	this.assigngroups = function()
	{
		// loop rows and assign class to specify group number
		var i_groupid = 0;

		$("#caspioform > table > tbody > tr > td > table > tbody > tr").each(function(){

			if ($(this).find(".thistitle").length)
			{
				i_groupid++;
			}

			$(this).addClass("group" + i_groupid);
		});
	};

	this.backandnextbtn = function()
	{
                // bind data
		$("#conferencenextbtn") .data({"type" : "next", "page" : 1});
		$("#academybackbtn")    .data({"type" : "back", "page" : 2});
		$("#academynextbtn")    .data({"type" : "next", "page" : 2});
		$("#techbackbtn")       .data({"type" : "back", "page" : 3});
		$("#technextbtn")       .data({"type" : "next", "page" : 3});
		$("#futurebackbtn")     .data({"type" : "back", "page" : 4});

                // back and next buttons
		$("#conferencenextbtn, #academybackbtn, #academynextbtn, #techbackbtn, #technextbtn, #futurebackbtn").click(function() {

			var s_type = $(this).data("type") || "";
			var i_page = $(this).data("page") || "";

			$("#mycontainer").slideUp("fast", "linear", function() {
                                $("tr.group" + i_page).hide();

                                if(s_type == 'next'){ i_page++; }
                                if(s_type == 'back'){ i_page--; }

				$("tr.group" + i_page).show(function() {
                                        $("#mycontainer").slideDown("fast", "linear");

                                        if(s_type == 'next')
                                        {
                                                $("#progressbargroup" + i_page).addClass("active");
                                        }
                                        else
                                        {
                                                $("#progressbargroup" +  (++i_page) ).removeClass("active");
                                        }
				});
			});
		});
	};

        this.createquestions = function()
        {
                // create questions position on the right side of the ratings.

                var a_fields = [
			["Overall_Conference_Rating" , "mainitem"],
			["Conference_Location"       , "subitem" ],
			["Conference_Organization"   , "subitem" ],
			["Conference_ContentQuality" , "subitem" ],
			["Conference_KeynoteSpkrs"   , "subitem" ],
			["Conference_FoodBev"        , "subitem" ],
			["Conference_Excursions"     , "subitem" ],
			["Academy_Content"           , "subitem" ],
			["Academy_InstrCommunication", "subitem" ],
			["Academy_Pacing"            , "subitem" ],
			["Tech_DatabaseDesign"       , "subitem" ],
			["Tech_AdvancedReporting"    , "subitem" ],
			["Tech_MapMashups"           , "subitem" ],
			["Tech_Dashboards"           , "subitem" ],
			["Tech_Charts"               , "subitem" ],
			["Tech_TriggeredActions"     , "subitem" ],
			["Tech_Mobile"               , "subitem" ],
			["Academy_LearningValue"     , "subitem" ],
			["Academy_OverallRating"     , "mainitem"],
			["Tech_Overall"              , "mainitem"]
                ];

                for(i = 0; i < a_fields.length; i++)
                {
                        var a_row       = a_fields[i];
                        var s_fieldname = a_row[0] || "";
                        var s_itemtype  = a_row[1] || "";

                        var $dropdown   = $("select[name$=Record" + s_fieldname + "]");
                        var $label      = $("label[for$=Record" + s_fieldname + "]");
                        var $labelclone = $label.clone();

                        $label.addClass("questionlabel1");
                        $label.closest("table").addClass(s_itemtype);
                        $labelclone.addClass("questionlabel2");

                        $dropdown.closest("div").find(".br-widget").prepend($labelclone);
		}
        };
}

home.initialload();

