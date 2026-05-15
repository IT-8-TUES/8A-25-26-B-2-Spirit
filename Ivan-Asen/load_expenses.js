document.addEventListener('DOMContentLoaded', () => {
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const divExpensesList = document.getElementById('expenses');

    if (expenses.length === 0) {
        const empty = document.createElement('p');
        empty.textContent = 'No expenses yet.';
        divExpensesList.appendChild(empty);
        return;
    }

    expenses.forEach(expense => {
        const div = document.createElement('div');

        const nameEl = document.createElement('p');
        nameEl.textContent = 'Expense: ' + expense.expense;

        const amountEl = document.createElement('p');
        amountEl.textContent = 'Amount: ' + parseFloat(expense.amount).toFixed(2);

        const paidByEl = document.createElement('p');
        paidByEl.textContent = 'Paid by: ' + expense.paid_by;

        div.appendChild(nameEl);
        div.appendChild(amountEl);
        div.appendChild(paidByEl);
        divExpensesList.appendChild(div);
    });
});
