function calculateSum() {
    const goal = parseFloat(document.getElementById('goal').value);
    const current = parseFloat(document.getElementById('currentAmount').value);
    const weekly = parseFloat(document.getElementById('weekRate').value);

    if(isNaN(goal) || isNaN(weekly) || isNaN(current)) {
        alert('Please enter a valid number!');
        return;
    };

    const amtLeft = goal - current;
    const weekLeft = Math.floor(amtLeft / weekly);
    const yeLeft = weekLeft / 52.18;

    document.getElementById('monLeft').textContent = amtLeft;
    document.getElementById('weekLeft').textContent = weekLeft;
    document.getElementById('yeLeft').textContent = yeLeft;
}