let isDarkTheme = false;

function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    const resultDiv = document.getElementById('result');

    if (!birthdate) {
        resultDiv.innerHTML = '<p style="color:red;">Please enter your birthdate.</p>';
        return;
    }

    const birthDateObj = new Date(birthdate);
    const today = new Date();

    let years = today.getFullYear() - birthDateObj.getFullYear();
    let months = today.getMonth() - birthDateObj.getMonth();
    let days = today.getDate() - birthDateObj.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    resultDiv.innerHTML = `<p>You are <strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days old.</p>`;
}

function resetCalculator() {
    document.getElementById('birthdate').value = '';
    document.getElementById('result').innerHTML = '';
}

function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle('dark-theme', isDarkTheme);
}
