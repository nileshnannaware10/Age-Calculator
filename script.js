let isDarkTheme = false;

        function calculateAge() {
            const birthdate = document.getElementById('birthdate').value;
            if (!birthdate) {
                document.getElementById('result').innerHTML = '<p style="color:red;">Please enter your birthdate.</p>';
                return;
            }

            const birthDateObj = new Date(birthdate);
            const today = new Date();

            let age = today.getFullYear() - birthDateObj.getFullYear();
            const monthDiff = today.getMonth() - birthDateObj.getMonth();

            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
                age--;
            }

            document.getElementById('result').innerHTML = `<p>You are <strong>${age}</strong> years old.</p>`;
        }

        function toggleTheme() {
            isDarkTheme = !isDarkTheme;
            document.body.classList.toggle('dark-theme', isDarkTheme);
            const themeToggleButton = document.querySelector('.theme-toggle');
            themeToggleButton.textContent = isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme';
        }