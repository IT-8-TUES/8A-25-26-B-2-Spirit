const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const expense = document.getElementById('expense').value.trim();
    const amount = parseFloat(document.getElementById('amount').value);
    const paid_by = document.getElementById('paid_by').value;

    if (!expense || isNaN(amount) || amount <= 0) {
        return;
    }

    const newExpense = { expense, amount, paid_by };

    const parsed = JSON.parse(localStorage.getItem('expenses'));
    const expenses = Array.isArray(parsed) ? parsed : [];
    expenses.push(newExpense);
    localStorage.setItem('expenses', JSON.stringify(expenses));

    form.reset();

    const msg = document.getElementById('success-msg');
    msg.textContent = 'Expense added!';
    setTimeout(() => { msg.textContent = ''; }, 2000);
});

document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById('paid_by');

    // Not linked to group
    const names = ["Alex", "Milen", "Kris"];

    names.forEach(name => {
        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        select.appendChild(option);
    });
});
