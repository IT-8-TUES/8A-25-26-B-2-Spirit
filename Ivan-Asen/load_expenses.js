document.addEventListener('DOMContentLoaded', () => {
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const expensesList = document.getElementById('expenses');

    // Not linked to user
    const user = "Ivan";

    let total = 0;
    let userOwes = 0;
    let owedToUser = 0;

    if (expenses.length === 0) {
        const empty = document.createElement('p');
        empty.className = 'card text-center text-muted';
        empty.textContent = 'No expenses yet.';
        expensesList.appendChild(empty);
    }

    expenses.forEach(expense => {
        // Not linked to group
        if (expense.group !== "Travel") return;

        const card = document.createElement('div');
        card.className = 'card flex-between';

        const left = document.createElement('div');

        const nameEl = document.createElement('p');
        nameEl.className = 'card-title';
        nameEl.textContent = expense.expense;

        const paidByEl = document.createElement('p');
        paidByEl.className = 'text-muted text-small';
        paidByEl.textContent = 'Paid by ' + expense.paid_by;

        left.appendChild(nameEl);
        left.appendChild(paidByEl);

        const amountEl = document.createElement('p');
        amountEl.className = 'heading-md';
        amountEl.textContent = parseFloat(expense.amount).toFixed(2) + ' lv';

        card.appendChild(left);
        card.appendChild(amountEl);
        expensesList.appendChild(card);

        total += expense.amount;
        if (expense.paid_by === user) {
            owedToUser += expense.amount;
        } else {
            userOwes += expense.amount;
        }
    });
    // Not linked to group
    const participants = ["Alex", "Milen", "Kris", "Ivan"];
    const countParticipants = participants.length

    userOwes /= countParticipants;
    owedToUser /= countParticipants;
    const fmt = (n) => n.toFixed(2) + ' lv';
    document.getElementById('total_amount').textContent = fmt(total);
    document.getElementById('user_owes_amount').textContent = fmt(userOwes);
    document.getElementById('owed_to_user_amount').textContent = fmt(owedToUser);

    document.getElementById('count_participants').textContent = participants.length + ' participants';
    document.getElementById('count_expenses').textContent = expenses.length + ' expenses';

    const participantsDiv = document.getElementById('participants');
    participants.forEach(participant => {
        const chip = document.createElement('span');
        chip.className = 'chip';
        chip.textContent = participant;
        participantsDiv.appendChild(chip);
    });
});