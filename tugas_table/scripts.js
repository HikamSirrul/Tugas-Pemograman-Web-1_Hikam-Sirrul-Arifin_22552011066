let currentPage = 1;
const rowsPerPage = 3;

function searchTable() {
    const input = document.getElementById("search").value.toLowerCase();
    const table = document.getElementById("dataTable");
    const trs = table.getElementsByTagName("tr");

    for (let i = 1; i < trs.length; i++) {
        const row = trs[i];
        const name = row.getElementsByTagName("td")[1].innerText.toLowerCase();
        row.style.display = name.includes(input) ? "" : "none";
    }
}

function showPage(page) {
    const table = document.getElementById("dataTable");
    const rows = table.getElementsByTagName("tr");
    const totalRows = rows.length - 1;
    const totalPages = Math.ceil(totalRows / rowsPerPage);
    
    currentPage = Math.max(1, Math.min(page, totalPages));
    
    for (let i = 1; i < rows.length; i++) {
        const isVisible = (i > (currentPage - 1) * rowsPerPage) && (i <= currentPage * rowsPerPage);
        rows[i].style.display = isVisible ? "" : "none";
    }
    
    document.getElementById("pageNumber").innerText = currentPage;
}

function nextPage() {
    showPage(currentPage + 1);
}

function prevPage() {
    showPage(currentPage - 1);
}

// Initial load
showPage(currentPage);
