import { data } from '/test/integration/test_cases/web_content/content_data/chart_types_eu.js';

const testSteps = [
    chart => chart.animate(
        {
            data: data,
            descriptor:
            {
                channels:
                {
                    x: { attach: ['Year', 'Value 5 (+/-)'] },
                    y: { attach: ['$exists'], range: '0,2.0,%'}
                },
                title: 'Dot Plot',
                align: 'none',
                geometry: 'circle'
            }
        }
    )
];

export default testSteps;