// Pipe function for formatting numbers with custom thousands separator
export function pipe(num, sep = " ") {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep);
}

// Custom tooltip template for s4 chart
export const s4Tooltip = (data) =>
    `
    <div class="c-tooltip">
        <div class="c-tooltip-title">${data.canton}</div>
        <div class="c-tooltip-data">
            <table>
                <tr>
                    <td class="c-tooltip-data-label">Inhabitants: </td>
                    <td class="c-tooltip-data-value">${pipe(data.x)}</td>
                </tr>
                <tr>
                    <td class="c-tooltip-data-label">Total Buildings: </td>
                    <td class="c-tooltip-data-value">${pipe(
                        data.total_buildings
                    )}</td>
                </tr>
                <tr>
                    <td class="c-tooltip-data-label">Single Homes [%]: </td>
                    <td class="c-tooltip-data-value">${data.y}%</td>
                </tr>
            </table>
        </div>
    </div>
`;

// Custom tooltip template for s6 chart
export const s6Tooltip = (data) =>
    `
<div class="c-tooltip">
    <div class="c-tooltip-title">${data.x}</div>
    <div class="c-tooltip-data">
        <table>
            <tr>
                <td class="c-tooltip-data-label">Measure 1: </td>
                <td class="c-tooltip-data-value">${pipe(data.y)}</td>
            </tr>
            <tr>
                <td class="c-tooltip-data-label">Additional Info: </td>
                <td class="c-tooltip-data-value">${data.i}</td>
            </tr>
        </table>
    </div>
</div>
`;
