function calculateSum() {
    const goal = parseFloat(document.getElementById('goal').value);
    const current = parseFloat(document.getElementById('currentAmount').value);
    const weekly = parseFloat(document.getElementById('weeklyRate').value);

    if(isNaN(goal) || isNaN(weekly) || isNaN(current)) {
        alert('Please enter a valid number!');
        return;
    };

    const amtLeft = goal - current;
    const weekLeft = amtLeft / weekly;

    document.getElementById('monLeft').textContent = amtLeft;
    document.getElementById('weekLeft').textContent = weekLeft;
}