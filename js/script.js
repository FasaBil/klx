// Extract data from the table
    const tableRows = document.querySelectorAll('.token-table tbody tr');
    const labels = [];
    const data = [];

    tableRows.forEach((row, index) => {
        if (index < tableRows.length - 1) { // Skip the "Total" row
            const cells = row.querySelectorAll('td');
            labels.push(cells[0].innerText); // Category
            data.push(parseFloat(cells[2].innerText)); // Percentage
        }
    });

    // Create the chart
    const ctx = document.createElement('canvas');
    document.querySelector('.chart-container').innerHTML = ''; // Clear existing content
    document.querySelector('.chart-container').appendChild(ctx);

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: [
                    '#F4D03F', '#E59866', '#76D7C4', '#5DADE2',
                    '#AF7AC5', '#F1948A', '#85C1E9', '#F9E79F'
                ],
                borderWidth: 1,
                borderColor: '#222',
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#E0E0E0',
                        font: {
                            size: 14
                        }
                    }
                },
                tooltip: {
                    backgroundColor: '#333',
                    titleColor: '#FFD700',
                    bodyColor: '#E0E0E0',
                    borderColor: '#555',
                    borderWidth: 1
                }
            }
        },
    });