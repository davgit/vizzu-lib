import { data } from '/test/integration/test_data/chart_types_eu.js';

const testSteps = [
    chart => chart.animate(
        {
            data: data,
            descriptor:
            {
                channels:
                {
                    y: { attach: ['Country', 'Year', 'Negative nums'], range: '0,1.1,%' },
                    x: { attach: ['Country_code'] },
                    color: { attach: ['Country_code'] },
                    lightness: { attach: ['Negative nums'] },
                },
                title: 'Stacked Column Chart with (-) Numbers',
                legend: 'lightness'
            },
            style: {
                data: 
                { 
                    columnMaxPadding: 0.14 
                },
                plot: 
                {
                    marker: 
                    {
                        borderWidth: 0,
                        borderOpacity: 1
                    }
                }
            }
        }
    )
];

export default testSteps;
