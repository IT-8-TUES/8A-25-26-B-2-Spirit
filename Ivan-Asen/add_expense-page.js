const form = document.querySelector('form');
const msg = document.getElementById('success-msg');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const expense = document.getElementById('expense').value.trim();
    const amount = parseFloat(document.getElementById('amount').value);
    const paid_by = document.getElementById('paid_by').value;
    // Not linked to group
    const group = "Travel";

    if (!expense || isNaN(amount) || amount <= 0) {
        return;
    }

    const newExpense = { expense, amount, paid_by, group };

    const parsed = JSON.parse(localStorage.getItem('expenses'));
    const expenses = Array.isArray(parsed) ? parsed : [];
    expenses.push(newExpense);
    localStorage.setItem('expenses', JSON.stringify(expenses));

    form.reset();

    msg.textContent = 'Expense added!';
    msg.classList.remove('hidden');
    setTimeout(() => {
        msg.textContent = '';
        msg.classList.add('hidden');
    }, 2000);
});

document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById('paid_by');

    // Not linked to group
    const names = ["Alex", "Milen", "Kris", "Ivan"];

    names.forEach(name => {
        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        select.appendChild(option);
    });
});