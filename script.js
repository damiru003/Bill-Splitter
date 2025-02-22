document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('billSplitterForm');
    const tipButtons = document.querySelectorAll('.tip-btn');
    let selectedTip = 0;

    tipButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tipButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedTip = parseFloat(btn.getAttribute('data-tip'));
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const billAmount = parseFloat(document.getElementById('billAmount').value);
        const peopleCount = parseInt(document.getElementById('peopleCount').value);

        if (isNaN(billAmount) || isNaN(peopleCount) || peopleCount < 1) {
            alert('Please enter valid amounts.');
            return;
        }

        const tipAmount = billAmount * (selectedTip / 100);
        const totalBill = billAmount + tipAmount;
        const perPerson = totalBill / peopleCount;

        alert(`Each person owes: $${perPerson.toFixed(2)}`);
    });

    document.querySelector('.reset-btn').addEventListener('click', () => {
        form.reset();
        tipButtons.forEach(btn => btn.classList.remove('active'));
        selectedTip = 0;
    });
});