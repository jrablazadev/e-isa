<!doctype html>	
<html lang="en">
	<head>
		<title>E-ISA</title>
		
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		
		<script type="text/javascript" src="../lib/table-to-excel-master/dist/tableToExcel.js"></script>
		<script src="../lib/autonumeric/autoNumeric.js"></script>
		<!--
			<script src="js/investments.js"></script>
		-->
		<script src="../js/investments-2.js"></script>
	</head>
	<body class="hide">

		<div style="margin:10px;font-family:arial;">Downloading please wait.. <span id="progress">0</span> out of 100 </div>
		
		<div id="section1" class="ishidden">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D550006fe41da302da47ee97a3/emb"></script>
		</div>
		
		<div id="section2" class="ishidden expandheader">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D550008d0d90ee058349809bfa/emb"></script>
		</div>
		
		<div id="section3" class="ishidden">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000719f12d4f8174bb59a33/emb"></script>
		</div>
		
		<div id="section4" class="ishidden expandheader">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D5500019f1d283550444cfa258/emb"></script>
		</div>
		
		<div id="section5" class="ishidden expandheader">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D550008a8058ee0c2d4faea78a/emb"></script>
		</div>
		<div id="section6" class="ishidden expandheader">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000460bcd2542f24b36a7df/emb"></script>
		</div>
		<div id="section7" class="ishidden expandheader">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D550006d954b91195043ef9432/emb"></script>
		</div>
		<div id="section8" class="ishidden expandheader">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000ae85b1fdf0c74195a13b/emb"></script>
		</div>
		
		<div id="section9" class="ishidden expandheader">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D550000c8c08f5175f49038d52/emb"></script>
		</div>
		
		<div id="section10-1" class="ishidden">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D550000a82daf550924c9d91b1/emb"></script>
		</div>
		
		<div id="section10-2" class="ishidden expandheader">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000f8e5f590901d4ff59ee6/emb"></script>
		</div>
		
		<div id="section11-1" class="ishidden expandheader">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D5500035e2817111fc4fb78693/emb"></script>
		</div>
		
		<div id="section11-2" class="ishidden expandheader">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000bf105c0f3cdc4d818771/emb"></script>
		</div>
		
		<div id="section11-3" class="ishidden expandheader">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000ae37899cf8884a3bba99/emb"></script>
		</div>
		
		<div id="section12-1" class="ishidden expandheader">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000e6efff9ecd03490fb785/emb"></script>
		</div>
		<div id="section12-2" class="ishidden expandheader">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000dc1ce826947248e6b3b6/emb"></script>
		</div>
		<div id="section12-3" class="ishidden expandheader">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D55000fb056accddd04efea002/emb"></script>
		</div>
		<div id="section12-4" class="ishidden expandheader">
			<script type="text/javascript" src="https://caspio.thenetwork-crm.com/dp/25D550008e45619067f447ca8c8b/emb"></script>
		</div>

		<style>
			.ishidden
			{
				display:none;
			}
		</style>
		
		<script>
			
			var dp_load = 0;
			var tt_dp = 18;
			
			document.addEventListener('DataPageReady', function (event) {
				dp_load++;
				
				$('#progress').html( Math.trunc((dp_load / tt_dp) * 100) );
				
				console.log(dp_load);
				
				if(dp_load == tt_dp)
				{
					deal_total_css();
					monthly_amounts_css();
					qty_css();
					participation_css();
					mfrparticipation_css();
					customerparticipation_css();
					
					export_table();
				}
			})
		
			function export_table()
			{
				table2excel_attributes();
				
				book = TableToExcel.tableToBook(get_dp_table('#section1'), {sheet:{name:"1"}});
				TableToExcel.tableToSheet(book, get_dp_table('#section2'), {sheet:{name:"2"}});
				TableToExcel.tableToSheet(book, get_dp_table('#section3'), {sheet:{name:"3"}});
				TableToExcel.tableToSheet(book, get_dp_table('#section4'), {sheet:{name:"4"}});
				TableToExcel.tableToSheet(book, get_dp_table('#section5'), {sheet:{name:"5"}});
				TableToExcel.tableToSheet(book, get_dp_table('#section6'), {sheet:{name:"6"}});
				TableToExcel.tableToSheet(book, get_dp_table('#section7'), {sheet:{name:"7"}});
				TableToExcel.tableToSheet(book, get_dp_table('#section8'), {sheet:{name:"8"}});
				TableToExcel.tableToSheet(book, get_dp_table('#section9'), {sheet:{name:"9"}});
				
				TableToExcel.tableToSheet(book, get_dp_table('#section10-1'), {sheet:{name:"10.1"}});
				TableToExcel.tableToSheet(book, get_dp_table('#section10-2'), {sheet:{name:"10.2"}});
				
				TableToExcel.tableToSheet(book, get_dp_table('#section11-1'), {sheet:{name:"11.1"}});
				TableToExcel.tableToSheet(book, get_dp_table('#section11-2'), {sheet:{name:"11.2"}});
				TableToExcel.tableToSheet(book, get_dp_table('#section11-3'), {sheet:{name:"11.3"}});
				
				TableToExcel.tableToSheet(book, get_dp_table('#section12-1'), {sheet:{name:"12.1"}});
				TableToExcel.tableToSheet(book, get_dp_table('#section12-2'), {sheet:{name:"12.2"}});
				TableToExcel.tableToSheet(book, get_dp_table('#section12-3'), {sheet:{name:"12.3"}});
				TableToExcel.tableToSheet(book, get_dp_table('#section12-4'), {sheet:{name:"12.4"}});
				// TableToExcel.tableToSheet(book, get_dp_table('#section10-3'), {sheet:{name:"10.3"}});
				// TableToExcel.tableToSheet(book, get_dp_table('#section10-4'), {sheet:{name:"10.4"}});
				TableToExcel.save(book, "E-ISA Calculator.xlsx");
				
				setTimeout(function(){
					window.close();
				}, 1000);
			}
			
			function table2excel_attributes()
			{
				// section2 - remove not used row
				$('*[name="EditRecordCalculated_Field_12$Anchor"]').closest('tr').remove();
				
				auto_size_header('.expandheader');
				
				// section8 - clear values of not used columns
				$('#section8 tr[data-cb-name="data"]').each(function(r){
					$(this).children('td').each(function(c){
						
						// console.log(r, c);
						
						if(c == 1 && ((r >= 2 && r <= 5) || (r == 14 || r == 15)))
						{
							$(this).html('');
						}
						
						if(c == 3 && r == 15)
						{
							$(this).html('');
						}
						
						if(c == 4 && ((r >= 2 && r <= 5) || (r == 14 || r == 15)))
						{
							$(this).html('');
						}
						
					});
				});
				
				// assign width per column
				$('#section1 table[data-cb-name="cbTable"]').attr('data-cols-width', '50,30');
				$('#section2 table[data-cb-name="cbTable"]').attr('data-cols-width', '30,10,10,10');
				$('#section3 table[data-cb-name="cbTable"]').attr('data-cols-width', '30,10,10,10,10');
				$('#section4 table[data-cb-name="cbTable"]').attr('data-cols-width', '20,20,20,20,20,20,20');
				$('#section5 table[data-cb-name="cbTable"]').attr('data-cols-width', '30,20,20,20,20,20,20,20');
				$('#section6 table[data-cb-name="cbTable"]').attr('data-cols-width', '30,20,20,20,20,20,20,20');
				$('#section7 table[data-cb-name="cbTable"]').attr('data-cols-width', '30,20,20,20,20');
				
				$('#section8 table[data-cb-name="cbTable"]').attr('data-cols-width', '40,20,20,20,20');
				$('#section9 table[data-cb-name="cbTable"]').attr('data-cols-width', '40,20,20,20,20,20,20');
				
				$('#section10-1 table[data-cb-name="cbTable"]').attr('data-cols-width', '50,30');
				$('#section10-2 table[data-cb-name="cbTable"]').attr('data-cols-width', '40,20,30,40,30,20,20,20,20');
				
				$('#section11-1 table[data-cb-name="cbTable"]').attr('data-cols-width', '40,20,30,40,30,20,20,20');
				$('#section11-2 table[data-cb-name="cbTable"]').attr('data-cols-width', '20,20,20,20,20,20,20');
				$('#section11-3 table[data-cb-name="cbTable"]').attr('data-cols-width', '20,20,20,20,20,20,20');
				
				$('#section12-1 table[data-cb-name="cbTable"]').attr('data-cols-width', '50,20,20,20,20,20,20');
				
				$('#section12-2 table[data-cb-name="cbTable"]').attr('data-cols-width', '25,20,20,20,20,20,20,20,20,20,20,20,20,20,20');
				$('#section12-3 table[data-cb-name="cbTable"]').attr('data-cols-width', '25,20,20,20,20,20,20,20,20,20,20,20');
				$('#section12-4 table[data-cb-name="cbTable"]').attr('data-cols-width', '25,20,20,20,20,20,20,20,20,20,20,20,20,20,20');
			}
			
			function auto_size_header(elems)
			{
				$(elems).each(function(){
					$(this).find('table[data-cb-name="cbTable"] > tbody > tr:first-child th ').attr('data-a-wrap', 'true');
					$(this).find('table[data-cb-name="cbTable"] > tbody > tr:first-child').attr('data-height', '42.5');
					$(this).find('table[data-cb-name="cbTable"] > tbody > tr:first-child').attr('data-height', '42.5');
				});
			}
			
			function get_dp_table(elem)
			{
				if($(elem).find('table[data-cb-name="cbTable"]').length)
				{
					return $(elem).find('table[data-cb-name="cbTable"]')[0];
				}
				else
				{
					return $('<table><tr><td>No records found</td></tr></table>')[0];
				}
			}
		</script>
	</body>
</html>
