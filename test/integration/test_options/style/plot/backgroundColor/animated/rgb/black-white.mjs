import Chart from "/test/integration/test_options/style/plot/backgroundColor/chart.js";
import Rgb from "/test/integration/test_options/style/plot/backgroundColor/animated/rgb.js";


const testSteps = [
    Chart.static(Rgb.color(new URL(import.meta.url)).color1),
    Chart.animated(Rgb.color(new URL(import.meta.url)).color2)
]


export default testSteps