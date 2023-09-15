window.onload = function() {
    adjustTableSize();
};

window.onresize = function() {
    adjustTableSize();
};

function adjustTableSize() {
    const tableContainer = document.getElementById('table-container');
    const table = document.getElementById('timetable');
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const tableWidth = table.offsetWidth;

    if (tableWidth > tableContainer.offsetWidth) {
        const scaleValue = tableContainer.offsetWidth / tableWidth;
        table.style.transform = `scale(${scaleValue})`;
    } else {
        table.style.transform = 'scale(1)';
    }
}
