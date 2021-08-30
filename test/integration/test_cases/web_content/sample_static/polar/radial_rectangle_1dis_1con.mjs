import { data } from '/test/integration/test_cases/web_content/content_data/chart_types_eu.js';

const testSteps = [
    chart => chart.animate(
        {
            data: data,
            descriptor:
            {
                channels:
                {
                    y: { attach: ['Joy factors'] },
                    x: { attach: ['Value 2 (+)'], range: '0,1.33,%' },
                    color: { attach: ['Joy factors'] }
                },
                title: 'Radial Bar Chart',
                coordSystem: 'polar'
            },
            style:
            {
                data:
                {
                    barMaxPadding: 0.25
                },
                plot:
                { 
                  yAxis:
                    { 
                        label:
                        { 
                            paddingRight: 20
                        }
                    
                    }
                }
            }
        }
    )
];

export default testSteps;