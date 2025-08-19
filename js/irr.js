

function irr_initialize()
{
        // --------------------------------------------------------> create table
                $('.jconfirm-content .spinner-border').remove();
                create_liquid_irr_table();

        // --------------------------------------------------------> header
                $('.cb-isaId').html('ISA ' + isaId);
                $('.cb-termsInMonths').html(termsInMonths);

        //---------------------------------------------------------> gross profit
                $.each(values, function(key, col){
                        switch(key)
                        {
                                case 'inioutlay':
                                        display_amount('.cb-gross-profit .cb-col-' + key, col.grossProfit);
                                        break;
                                default:
                                        whole_amount('.cb-gross-profit .cb-col-' + key, col.grossProfit);
                        }
                });

        //---------------------------------------------------------> Initial Outlay Per Term

                var total_outlayPerTerm = 0;

                $.each(values, function(key, col){
                        switch(key)
                        {
                                case 'inioutlay': break;
                                case 'total':
                                        values[key]['initialOutlay'] = total_outlayPerTerm;
                                        whole_amount('.cb-initial-outlay .cb-col-' + key, total_outlayPerTerm );
                                        break;
                                default:
                                        var newVal = (initialOutlay / (total - initialOutlay) ) * col.grossProfit;
                                        values[key]['initialOutlay'] = newVal;
                                        total_outlayPerTerm += newVal;

                                        whole_amount('.cb-initial-outlay .cb-col-' + key, newVal );
                        }
                });

        //---------------------------------------------------------> others

                irr_variables();

                get_expenses(); // Big Buy / Sales Expense / Delivery Cost / Bad Debt Burden
                get_contributions();
                get_income_tax();
                get_after_tax_cashflow();
                get_working_capital();
                get_irr_outlay();
                $('.cb-wacc .cb-col-yr1').html( (wacc * 100).toFixed(2) );
                get_present_value();
                whole_amount('.cb-sum-present-value .cb-col-yr1', values.total.presentValue); // sum Present Value
                whole_amount('.cb-less-initial .cb-col-yr1', values.inioutlay.grossProfit ); // Less initial Outlay
                whole_amount('.cb-net-present-value .cb-col-yr1', (values.total.presentValue + values.inioutlay.grossProfit) ); // net Present Value
                get_irr_amount();
                $('.cb-breakeven .cb-col-yr1').html( ( ( -1 * (values.inioutlay.grossProfit + values.yr1.workingCapital ) / ( values.total.afterTaxCashFlow / termsInMonths ) ) ).toFixed(1) );
                get_multiple_of_money();
                red_amounts();
                $('.cb-working-capital .cb-col-description').html('Working Capital (' + daysOfOutstandingSales + ' Days)');
                console.log('---------------> IRR Variables');
                console.log(values);
}

function create_liquid_irr_table()
{
        var rows = {
                'cb-gross-profit' : 'Gross Profit',
                'cb-initial-outlay' : 'Initial Outlay Per Term',
                'cb-expenses cb-big-buy' : 'Big Buy',
                'cb-expenses cb-sales-expenses' : 'Sales Expense',
                'cb-expenses cb-delivery-cost' : 'Delivery Cost',
                'cb-expenses cb-bad-debt-burden' : 'Bad Debt Burden',
                'cb-expenses cb-contribution-after' : 'Contribution After Sales Expense / Delivery Cost / Bad Debt Burden',
                'cb-expenses cb-income-tax' : 'Income Tax',
                'cb-after-tax' : 'After Tax Cashflow',
                'cb-working-capital' : 'Working Capital (35 Days)',
                'cb-irr-outlay' : 'IRR Outlay and Profit',
                'cb-blank-1' : '&nbsp;',
                'cb-wacc' : 'WACC',
                'cb-present-value' : 'Present Value',
                'cb-blank-2' : '&nbsp;',
                'cb-sum-present-value' : 'Sum Present Value',
                'cb-less-initial' : 'Less Initial Outlay',
                'cb-net-present-value' : 'Net Present Value',
                'cb-blank-3' : '&nbsp;',
                'cb-irr-amount' : 'IRR',
                'cb-breakeven' : 'Breakeven',
                'cb-multiple-money' : 'Multiple of Money'
        };

        $.each(rows, function(key, val){

		if(key == 'cb-initial-outlay') {
			return true;
		}

                $('.cb-liquid-irr > tbody').append(' \
                        <tr class="' + key + '"> \
                                <td class="cb-col-description">' + val + '</td> \
                                <td class="cb-col-inioutlay"></td> \
                                <td class="cb-col-yr1"></td> \
                                <td class="cb-col-yr2"></td> \
                                <td class="cb-col-yr3"></td> \
                                <td class="cb-col-yr4"></td> \
                                <td class="cb-col-yr5"></td> \
                                <td class="cb-col-yr6"></td> \
                                <td class="cb-col-yr7"></td> \
                                <td class="cb-col-yr8"></td> \
                                <td class="cb-col-yr9"></td> \
                                <td class="cb-col-yr10"></td> \
                                <td class="cb-col-total"></td> \
                        </tr> \
                ');
        });
}

function fv(rate, nper, pmt, pv, type)
{
        var pow = Math.pow(1 + rate, nper), fv;
        if (rate)
        {
                fv = (pmt*(1+rate*type)*(1-pow)/rate)-pv*pow;
        }
        else
        {
                fv = -1 * (pv + pmt * nper);
        }
        return fv;
}

function irr(cashflow)
{
        var irrValue = 0;

        try
        {
                var finance = new Finance(); // for irr computation
                irrValue = finance.IRR( { cashFlow: cashflow, depth : 9999999 }); // depth can be changed to increase accuracy
        }
        catch(err){}

        return irrValue;
}

function display_amount(elem, value)
{
        $(elem).autoNumeric('init', {
                mDec : 2, vMin : -9999999999999999999,
                nBracket : '(,)',
                aSign : '$'
        }).autoNumeric('set', value);
}

function whole_amount(elem, value)
{
        $(elem).autoNumeric('init', {
                mDec : 0, vMin : -9999999999999999999,
                nBracket : '(,)',
                aSign : '$'
        }).autoNumeric('set', value);
}

function irr_variables()
{
        var irrVar = '';
        irrVar += '<tr><td>Initial Outlay</td><td class="pl-2"> ' + initialOutlay + '</td></tr>';
        irrVar += '<tr><td>Year 1</td><td class="pl-2"> ' + yr1 + '</td></tr>';
        irrVar += '<tr><td>Year 2</td><td class="pl-2"> ' + yr2 + '</td></tr>';
        irrVar += '<tr><td>Year 3</td><td class="pl-2"> ' + yr3 + '</td></tr>';
        irrVar += '<tr><td>Year 4</td><td class="pl-2"> ' + yr4 + '</td></tr>';
        irrVar += '<tr><td>Year 5</td><td class="pl-2"> ' + yr5 + '</td></tr>';
        irrVar += '<tr><td>Year 6</td><td class="pl-2"> ' + yr6 + '</td></tr>';
        irrVar += '<tr><td>Year 7</td><td class="pl-2"> ' + yr7 + '</td></tr>';
        irrVar += '<tr><td>Year 8</td><td class="pl-2"> ' + yr8 + '</td></tr>';
        irrVar += '<tr><td>Year 9</td><td class="pl-2"> ' + yr9 + '</td></tr>';
        irrVar += '<tr><td>Year 10</td><td class="pl-2"> ' + yr10 + '</td></tr>';
        irrVar += '<tr><td>Terms in Months</td><td class="pl-2"> ' + termsInMonths + '</td></tr>';
        irrVar += '<tr><td>% Growth Rate</td><td class="pl-2"> ' + growthRate + '</td></tr>';
        irrVar += '<tr><td>$ Annual Liquid</td><td class="pl-2"> ' + annualLiquid + '</td></tr>';
        irrVar += '<tr><td>$ Annual Allied</td><td class="pl-2"> ' + annualAllied + '</td></tr>';
        irrVar += '<tr><td>% Transaction Discount</td><td class="pl-2"> ' + transactionDiscount + '</td></tr>';
        irrVar += '<tr><td>% NCS Net Effective Discount</td><td class="pl-2"> ' + ncsNetEffectiveDiscount + '</td></tr>';
        irrVar += '<tr><td>% Big Bug</td><td class="pl-2"> ' + bigBuy + '</td></tr>';
        irrVar += '<tr><td>% Sales Expenses</td><td class="pl-2"> ' + salesExpenses + '</td></tr>';
        irrVar += '<tr><td>% Delivery Cost</td><td class="pl-2"> ' + deliveryCost + '</td></tr>';
        irrVar += '<tr><td>% Bad Debt Burden</td><td class="pl-2"> ' + badDebtBurden + '</td></tr>';
        irrVar += '<tr><td>% Income Tax</td><td class="pl-2"> ' + incomeTax + '</td></tr>';
        irrVar += '<tr><td>$ Liquid Net Sales</td><td class="pl-2"> ' + liquidNetSales + '</td></tr>';
        irrVar += '<tr><td>$ Total Net Sales</td><td class="pl-2"> ' + totalNetSales + '</td></tr>';
        irrVar += '<tr><td>$ Days of Outstanding Sales</td><td class="pl-2"> ' + daysOfOutstandingSales + '</td></tr>';
        irrVar += '<tr><td>% WACC</td><td class="pl-2"> ' + wacc + '</td></tr>';
        irrVar = '<table style="font-size:12px;"><tbody>' + irrVar + '</tbody></table>';

        $('.cb-isaId').unbind().click(function(){
                $.confirm({
                        title: 'IRR - Variables',
                        content: irrVar,
                        type: 'dark',
                        typeAnimated: true,
                        buttons: {
                                // tryAgain: {},
                                close: function () {}
                        }
                });
        });
}

function get_expenses()
{
        var expenses = {
                'cb-big-buy' : bigBuy,
                'cb-sales-expenses' : salesExpenses,
                'cb-delivery-cost' : deliveryCost,
                'cb-bad-debt-burden' : badDebtBurden
        };

        $.each(expenses, function(expenses_key, expenses_val){
                var i = 0;
                var total = 0;

                $.each(values, function(key, val){

                        switch(key)
                        {
                                case 'inioutlay':
                                        $('.' + expenses_key + ' .cb-col-' + key).html( (expenses_val * 100).toFixed(2) );
                                        break;

                                case 'total':
                                        whole_amount('.' + expenses_key + ' .cb-col-' + key, total );
                                        break;

                                default:
                                        var newVal = 0;

					// expenses computation
                                        if((termsInMonths / 12) >= i )
                                        {
						if(irrType == 'Liquid Purchases')
						{
							newVal = ( fv(growthRate, i, annualLiquid, 0, 0) * -1 ) * (1 - ncsNetEffectiveDiscount) - (fv(growthRate,(i - 1), annualLiquid, 0, 0) * -1) * (1 - ncsNetEffectiveDiscount);
							newVal = newVal * expenses_val;
							// console.log( {
							// 	key : key,
							// 	amount : newVal,
							// 	f1 : (fv(growthRate, i, annualLiquid, 0, 0) * -1 ),
							// 	f2 : (1 - ncsNetEffectiveDiscount),
							// 	f3 : (fv(growthRate,(i - 1), annualLiquid, 0, 0) * -1),
							// 	f4 : ( fv(growthRate, i, annualLiquid, 0, 0) * -1 ) * (1 - ncsNetEffectiveDiscount) - (fv(growthRate,(i - 1), annualLiquid, 0, 0) * -1) * (1 - ncsNetEffectiveDiscount),
							// 	f5 : expenses_val,
							// 	expenses_key : expenses_key,
							// } );
						}
						else if (irrType == 'Total Purchases')
						{
							newVal = ( fv(growthRate, i, annualLiquid, 0, 0) * -1 ) * (1 - ncsNetEffectiveDiscount) - (fv(growthRate,(i - 1), annualLiquid, 0, 0) * -1) * (1 - ncsNetEffectiveDiscount);
							newVal += ( fv(growthRate, i, annualAllied, 0, 0) * -1 ) - ( fv(growthRate, (i - 1), annualAllied, 0, 0) * -1 );
							newVal = newVal * expenses_val;

							// console.log( {
							// 	key : key,
							// 	amount : newVal,
							// 	f1 : ( fv(growthRate, i, annualLiquid, 0, 0) * -1 ) * (1 - ncsNetEffectiveDiscount) - (fv(growthRate,(i - 1), annualLiquid, 0, 0) * -1) * (1 - ncsNetEffectiveDiscount),
							// 	f2 : ( fv(growthRate, i, annualAllied, 0, 0) * -1 ) - ( fv(growthRate, (i - 1), annualAllied, 0, 0) * -1 ),
							// 	f2_2 : (fv(growthRate, i, annualAllied, 0, 0) * -1 ),
							// 	expenses_key : expenses_key,
							// 	annualAllied : annualAllied,
							// 	growthRate : growthRate,
							// } );
						}
                                        }

                                        total += newVal;

                                        // store expenses
                                                if(values[key]['expenses'] == undefined)
                                                {
                                                        values[key]['expenses'] = [];
                                                }

                                                values[key]['expenses'].push( newVal );

                                        // display value
                                        whole_amount('.' + expenses_key + ' .cb-col-' + key, newVal );
                        }

                        i++;
                });
        });
}

function get_contributions()
{
        var total = 0;

        $.each(values, function(key, col){

                switch(key)
                {
                        case 'inioutlay': break;
                        case 'total':
                                whole_amount('.cb-contribution-after .cb-col-' + key, total );
                                break;

                        default:
                                // var newVal = col.grossProfit - col.initialOutlay;
                                var newVal = col.grossProfit; // as of 2022-08-04

                                $.each(col.expenses, function(i, expen_val){
                                        newVal -= expen_val;
                                });

                                values[key]['contributionAfter'] = newVal;

                                total += newVal;

                                // display value
                                whole_amount('.cb-contribution-after .cb-col-' + key, newVal );
                }
        });
}

function get_income_tax()
{
        var total = 0;

        $.each(values, function(key, col){

                switch(key)
                {
                        case 'inioutlay':
                                $('.cb-income-tax .cb-col-' + key).html( (incomeTax * 100).toFixed(2) );
                                break;

                        case 'total':
                                whole_amount('.cb-income-tax .cb-col-' + key, total );
                                break;

                        default:
                                var newVal = col.contributionAfter * incomeTax;

                                values[key]['incomeTax'] = newVal;
                                total+= newVal;

                                // display value
                                whole_amount('.cb-income-tax .cb-col-' + key, newVal );
                }
        });
}

function get_after_tax_cashflow()
{
        var total = 0;

        $.each(values, function(key, col){

                switch(key)
                {
                        case 'inioutlay': break;
                        case 'total':
                                whole_amount('.cb-after-tax .cb-col-' + key, total );
                                values[key]['afterTaxCashFlow'] = total;
                                break;

                        default:
                                var newVal = col.contributionAfter - col.incomeTax;

                                values[key]['afterTaxCashFlow'] = newVal;
                                total += newVal;

                                // display value
                                whole_amount('.cb-after-tax .cb-col-' + key, newVal );
                }
        });
}

function get_working_capital()
{
	if(irrType == 'Liquid Purchases')
	{
		var val = ( ( ( liquidNetSales / ( ( termsInMonths / 12 ) * 365 ) ) * daysOfOutstandingSales ) * -1 );
	}
	else if (irrType == 'Total Purchases')
	{
		var val = ( ( ( totalNetSales / ( ( termsInMonths / 12 ) * 365 ) ) * daysOfOutstandingSales ) * -1 );
	}
	else
	{
		var val = 0;
	}

        
        values.yr1.workingCapital = val;
        whole_amount('.cb-working-capital .cb-col-yr1', val );
}

function get_irr_outlay()
{
        var total = 0;

        $.each(values, function(key, col){

                var newVal = 0;

                switch(key)
                {
                        case 'inioutlay':
                                newVal = col.grossProfit;
                                break;

                        case 'total':
                                newVal = total;
                                break;

                        case 'yr1':
                                newVal = (col.afterTaxCashFlow + col.workingCapital);
                                break;

                        default:
                                newVal = col.afterTaxCashFlow;
                }

                if(key == 'inioutlay')
                {
                        display_amount('.cb-irr-outlay .cb-col-' + key, newVal );
                }
                else
                {
                        whole_amount('.cb-irr-outlay .cb-col-' + key, newVal );
                }


                total += newVal;
                values[key]['irrOutlay'] = newVal;
        });
}

function get_present_value()
{
        var total = 0;

        $.each(values, function(key, col){

                var newVal = 0;

                switch(key)
                {
                        case 'inioutlay': return true;

                        case 'total':
                                newVal = total;
                                break;

                        default:
                                var yr = key.replace('yr', '');
                                yr = Number(yr);

                                newVal =  col.irrOutlay /  Math.pow( ( 1 + wacc ), yr ) ;
                }

                whole_amount('.cb-present-value .cb-col-' + key, newVal );

                total += newVal;
                values[key]['presentValue'] = newVal;
        });
}

function get_irr_amount()
{
        var cashFlow = [];

        $.each(values, function(key, col){

                var newVal = 0;

                switch(key)
                {
                        case 'total': return true;

                        default:
                                cashFlow.push(col.irrOutlay);
                }
        });

        $('.cb-irr-amount .cb-col-yr1').html( irr(cashFlow) );
}

function get_multiple_of_money()
{
        var ttAfterTaxCashflow = values.yr1.afterTaxCashFlow + values.yr2.afterTaxCashFlow + values.yr3.afterTaxCashFlow + values.yr4.afterTaxCashFlow + values.yr5.afterTaxCashFlow;
        var newValue = 0;

        if(values.inioutlay.grossProfit != 0)
        {
                var newValue = ( ( (ttAfterTaxCashflow + ( values.inioutlay.grossProfit *-1)) / ( values.inioutlay.grossProfit * -1 ) ) );
        }

        $('.cb-multiple-money .cb-col-yr1').html( newValue.toFixed(1) );
}

function red_amounts()
{
        $.each(values, function(key, col){
                $('.cb-col-' + key).each(function(){
                        if($(this).html().includes('('))
                        {
                                $(this).addClass('text-danger');
                        }
                });
        });
}

function download_irr()
{
        generate_excel_template();

        var book = TableToExcel.tableToBook(document.getElementById('cb-irr-excel-template'), { sheet: { name : 'IRR' } });
        TableToExcel.save(book, irrType + ' IRR - ISA ' + isaId + '.xlsx');
        $('#cb-irr-excel-template').empty();
}

function generate_excel_template()
{
        var excelTemplate = $('#cb-irr-excel-template');

        $('.cb-irr-info tr').each(function(){
                excelTemplate.append('<tr><td> ' + $(this).find('td').eq(0).html() + $(this).find('td').eq(1).html() + ' </td></tr>');
        });

        var blankRow = '<tr><td></td></tr>';

        excelTemplate.append(blankRow);
        excelTemplate.append('<tr><td>ISA ' + isaId + '</td></tr>');
        excelTemplate.append('<tr><td>Liquid Purchases IRR Based on ' + termsInMonths + ' Month Terms</td></tr>');
        excelTemplate.append(blankRow);

        $('.cb-liquid-irr tr').each(function(i){
                var clone = $(this).clone();

                clone.find('th:not(.cb-col-description)').attr('data-a-h', 'right');
                clone.find('td:not(.cb-col-description)').attr('data-a-h', 'right');

                if(i > 11)
                {
                        clone.find('.cb-col-description').attr('data-a-h', 'right');
                }

                excelTemplate.append(clone);
        });

        excelTemplate.find('th').attr('data-fill-color', 'E5E5E5');
        excelTemplate.find('th').attr('data-f-bold', 'true');

        excelTemplate.find('.text-danger').each(function(){
                $(this).attr('data-f-color', 'FF0000');
        });

        excelTemplate.find('.cb-gross-profit, .cb-irr-outlay').each(function(){
                $(this).find('td:not(.cb-col-description)').each(function(){
                        var val = reformat_amount($(this).html());

                        if($(this).hasClass('cb-col-inioutlay'))
                        {
                                $(this).attr('data-num-fmt', '0.00');
                        }
                        else
                        {
                                $(this).attr('data-num-fmt', '0');
                        }

                        $(this).html(val);
                        $(this).attr('data-t', 'n');
                });
        });

        excelTemplate.find('.cb-expenses td:not(.cb-col-description)').each(function(){
                var val = reformat_amount($(this).html());

                if($(this).closest('tr').hasClass('cb-contribution-after'))
                {
                        return true;
                }

                if($(this).hasClass('cb-col-inioutlay'))
                {
                        val = val / 100;
                        $(this).html(val);
                        $(this).attr('data-num-fmt', '0.00%');
                        $(this).attr('data-t', 'n');
                        return true;
                }

                $(this).html(val);
                $(this).attr('data-t', 'n');
                $(this).attr('data-num-fmt', '0');
        });

        excelTemplate.find('.cb-initial-outlay, .cb-after-tax, .cb-contribution-after, .cb-present-value').each(function(){
                $(this).find('td:not(.cb-col-description)').each(function(){
                        var val = reformat_amount($(this).html());

                        if($(this).hasClass('cb-col-inioutlay'))
                        {
                                return true; // skip
                        }

                        $(this).html(val);
                        $(this).attr('data-t', 'n');
                        $(this).attr('data-num-fmt', '0');
                });
        });

        excelTemplate.find('.cb-working-capital, .cb-sum-present-value, .cb-less-initial, .cb-net-present-value').each(function(){

                var col = $(this).find('.cb-col-yr1');

                var val = reformat_amount(col.html());
                col.html(val);
                col.attr('data-t', 'n');
                col.attr('data-num-fmt', '0');
        });

        excelTemplate.find('.cb-wacc, .cb-irr-amount').each(function(){

                var col = $(this).find('.cb-col-yr1');

                var val = reformat_amount(col.html());
                val = val / 100;
                col.html(val);
                col.attr('data-t', 'n');
                col.attr('data-num-fmt', '0.00%');
        });

        excelTemplate.find('.cb-breakeven, .cb-multiple-money').each(function(){

                var col = $(this).find('.cb-col-yr1');

                var val = reformat_amount(col.html());
                col.html(val);
                col.attr('data-t', 'n');
                col.attr('data-num-fmt', '0.0');
        });
}

function reformat_amount(val)
{
        val = val.replaceAll('$', '');
        val = val.replaceAll(',', '');
        val = val.replaceAll(')', '');
        val = val.replaceAll('(', '-');
        return Number(val);
}