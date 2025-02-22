document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('billSplitterForm');
    const resultDiv = document.getElementById('result');
    const tipButtons = document.querySelectorAll('.tip-btn');
    let selectedTip = 0;

    // Handle tip button clicks
    tipButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tipButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedTip = parseFloat(btn.getAttribute('data-tip'));
        });
    });

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const billAmount = parseFloat(document.getElementById('billAmount').value);
        const peopleCount = parseInt(document.getElementById('peopleCount').value);

        if (isNaN(billAmount) || isNaN(peopleCount) || peopleCount < 1) {
            resultDiv.textContent = 'Please enter valid amounts.';
            return;
        }

        // Calculate total with tip
        const tipAmount = billAmount * (selectedTip / 100);
        const totalBill = billAmount + tipAmount;
        const perPerson = totalBill / peopleCount;

        resultDiv.textContent = `Each person owes: $${perPerson.toFixed(2)}`;
    });

    // Handle reset button
    document.querySelector('.reset-btn').addEventListener('click', () => {
        form.reset();
        resultDiv.textContent = '';
        tipButtons.forEach(btn => btn.classList.remove('active'));
        selectedTip = 0;
    });
});