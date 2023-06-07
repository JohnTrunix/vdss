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
        <div class="c-tooltip-series">
            <span class="c-tooltip-data-label">Inhabitants: </span>
            <span class="c-tooltip-data-value">${pipe(data.x, "'")}</span>
        </div>
        <div class="c-tooltip-series">
            <span class="c-tooltip-data-label">Total Buildings: </span>
            <span class="c-tooltip-data-value"
                >${pipe(data.total_buildings, "'")}</span
            >
        </div>
        <div class="c-tooltip-series">
            <span class="c-tooltip-data-label">Single Homes [%]: </span>
            <span class="c-tooltip-data-value">${data.y}%</span>
        </div>
    </div>
</div>
`;
