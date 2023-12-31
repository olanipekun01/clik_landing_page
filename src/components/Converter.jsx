import toCelsius from "./ToCelsius";
import toFahrenheit from "./ToFahrenheit";

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString()
}

export default tryConvert;