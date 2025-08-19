$('#nav-reports').addClass('active');

document.addEventListener('DataPageReady', function (event) {
	if( event.detail.appKey == '25D550009a6a5a76c2ed40d684fe' )
	{
		rename_header();

		$('.cb-approval-timeline *[data-cb-name="data"] > td').addClass('text-center');
		$('.cb-approval-timeline *[data-cb-name="data"] td:first-child').removeClass('text-center');
		$('.cb-approval-timeline *[data-cb-name="data"] td:nth-child(2)').removeClass('text-center');
	}

	if( event.detail.appKey == '25D5500092eadb51b25a4ad29f24' )
	{
		initMultiSelect('*[name="cbParamVirtual5"]', '*[name="cbParamVirtual6"]');

		$('.dropdown.bootstrap-select.show-tick').addClass('p-0');
		// $('*[name="cbParamVirtual5"]').closest('div').find('.btn.dropdown-toggle').addClass('pl-2 pt-1 pb-1 pr-2');
		$('*[name="cbParamVirtual5"]').closest('div').find('.btn.dropdown-toggle').css({
			'font-size' : '14px',
			'padding' : '3px 6px'
		});
	}
	
});

var lu_months = {
	'1' : 'January',
	'2' : 'February',
	'3' : 'March',
	'4' : 'April',
	'5' : 'May',
	'6' : 'June',
	'7' : 'July',
	'8' : 'August',
	'9' : 'September',
	'10' : 'October',
	'11' : 'November',
	'12' : 'December'
};

function rename_header()
{
	var approval_timeline_months = [];

	var est_time_now_s = est_time_now.toString().split('/');
	var current_month = Number(est_time_now_s[0]);
	var current_year = Number(est_time_now_s[2]);

	var month = current_month;
	var year = current_year;

	for(i = 0; i < 12; i++)
	{
		if(month == 0)
		{
			month = 12;
			year--;
		}
		
		approval_timeline_months.push({
			month : month,
			year : year,
			month_desc : lu_months[month]
		});

		month--;
	}

	// console.log( approval_timeline_months );

	var main_header = '';

	// build main header
	$.each(approval_timeline_months, function(i, rows){
		// console.log(rows);

		main_header += '<th class="cbResultSetLabel cbResultSetHeaderCell text-center pb-0" colspan="2">' + rows.month_desc + ' ' + rows.year + '</th>';
	});

	main_header = ' \
		<tr> \
			<th class="cbResultSetLabel cbResultSetHeaderCell"></th> \
			<th class="cbResultSetLabel cbResultSetHeaderCell"></th> \
			' + main_header + ' \
			<th></th> \
		</tr>';

	$('.cb-approval-timeline table[data-cb-name="cbTable"] thead').prepend( main_header );

	$('.cb-approval-timeline *[data-cb-name="header"] > th').addClass('text-center pt-0 pb-0');

	$('.cb-approval-timeline *[data-cb-name="header"] > th').each(function(){
		var header_label = ($(this).html() || '').trim();

		var header_label_s = header_label.toString().split('-');
		// var column_month = header_label_s[0];
		var column_type =  header_label_s[1];

		$(this).html( column_type );
	});

	// console.log(current_month);
	// console.log(current_year);
}

function initMultiSelect(virtualElementSelector, selector)
{
	$(virtualElementSelector).prop('multiple', true);

	if ($(selector).val()) {
		$(virtualElementSelector).val($(selector).val().split('||'));
	} else {
		$(virtualElementSelector).val('');
	};

	$(virtualElementSelector).selectpicker({
		noneSelectedText : '-- Any --'
	});

	$(virtualElementSelector).on('changed.bs.select', function() {
		$(selector).val($(this).val().join('||'));
	});
}