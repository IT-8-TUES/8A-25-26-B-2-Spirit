document.addEventListener('DOMContentLoaded', () => {
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const divExpensesList = document.getElementById('expenses');

    if (expenses.length === 0) {
        const empty = document.createElement('p');
        empty.textContent = 'No expenses yet.';
        divExpensesList.appendChild(empty);
        return;
    }

    // Not linked to user
    const user = "Ivan";

    let total = 0;
    let userOwes = 0;
    let owedToUser = 0;

    expenses.forEach(expense => {
        const div = document.createElement('div');

        const nameEl = document.createElement('p');
        nameEl.textContent = expense.expense;

        const amountEl = document.createElement('p');
        amountEl.textContent = 'Amount: ' + parseFloat(expense.amount).toFixed(2) + "lv";

        const paidByEl = document.createElement('p');
        paidByEl.textContent = 'Paid by: ' + expense.paid_by;

        div.appendChild(nameEl);
        div.appendChild(amountEl);
        div.appendChild(paidByEl);
        divExpensesList.appendChild(div);

        total += expense.amount;
        if (expense.paid_by === user) {
            owedToUser += expense.amount;
        }
        else {
            userOwes += expense.amount;
        }
    });

    const totalEl = document.getElementById("total_amount");
    const userOwesEl = document.getElementById("user_owes_amount");
    const owedToUserEl = document.getElementById("owed_to_user_amount");

    totalEl.innerText = total;
    userOwesEl.innerText = userOwes;
    owedToUserEl.innerText = owedToUser;

    // Not linked to group
    const participants = ["Alex", "Milen", "Kris", "Ivan"];
    const countParticipants = document.getElementById("count_participants");
    countParticipants.innerText = participants.length + " participants";

    const countExpenses = document.getElementById("count_expenses");
    countExpenses.innerText = expenses.length + " expenses";

    participants.forEach(participant => {
        const div = document.getElementById("participants");

        const name = document.createElement("p");
        name.innerText = participant;

        div.appendChild(name);
    });

});
