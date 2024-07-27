document.getElementById('getReports').addEventListener('click', function() {
    const fileInput = document.getElementById('imageUpload');
    const imagePreview = document.getElementById('imagePreview');
    const dataTableBody = document.getElementById('data-table-body');

    if (fileInput.files.length === 0) {
        alert('Please upload an image first.');
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.style.maxWidth = '100%';
        imagePreview.innerHTML = '';  // Clear previous image
        imagePreview.appendChild(img);

        // Example data - replace with actual data analysis
        const exampleData = [
            { point: 'Color', value: 'Green' },
            { point: 'Size', value: 'Medium' },
            { point: 'Count', value: '150' }
        ];

        dataTableBody.innerHTML = '';  // Clear previous data
        exampleData.forEach(data => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${data.point}</td><td>${data.value}</td>`;
            dataTableBody.appendChild(row);
        });
    };

    reader.readAsDataURL(file);
});
