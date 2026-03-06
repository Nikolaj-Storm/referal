
    // Get all checkboxes and labels
    const checkboxes = document.querySelectorAll('.checkbox');
    const labels = document.querySelectorAll('.color-label');

    // Function to update label border when checkbox is checked
    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', function () {
            // Set a fixed gray color for the border when checked
            const label = labels[index];
            const grayColor = '#7B53E7'; // Gray color for the border

            // Add or remove the border depending on the checkbox state
            if (checkbox.checked) {
                label.style.border = `2px solid ${grayColor}`; // Add gray border
            } else {
                label.style.border = 'none'; // Remove border
            }
        });
    });
