 // Function to initialize and update slider values
            function setupSlider(sliderId, displayId, interval, currency = '') {
                const slider = document.getElementById(sliderId);
                const display = document.getElementById(displayId);

                // Function to update display and fill color
                function updateDisplay() {
                    const value = (slider.value / 10) * interval;
                    display.textContent = `${currency}${value}`;
                    slider.style.setProperty('--value', slider.value);
                }

                // Initialize with initial values
                updateDisplay();

                // Update on slider input
                slider.addEventListener('input', updateDisplay);
            }

            // Setup each slider with its respective interval multiplier
            setupSlider('orderRange', 'orderValue', 5);           // 5-unit intervals for "Orders per month"
            setupSlider('averageorderRange', 'averageValue', 50, '€'); // 50 EUR intervals for "Average order value"