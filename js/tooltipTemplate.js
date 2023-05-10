function pipe(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export const s1TooltipTemplate = (data) =>
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
                    <td class="c-tooltip-data-label">Single Homes: </td>
                    <td class="c-tooltip-data-value">${pipe(
                        data.single_family_home
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
