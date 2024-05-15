const user = [
    {
        name: "Maria Clara",
        transactions: [],
        balance: 0
    }
];

function createTransaction(transaction) {
    user[0].transactions.push(transaction);

    if (transaction.type === 'credit') {
        user[0].balance = user[0].balance + transaction.value;
    } else {
        user[0].balance = user[0].balance - transaction.value;
    }
}

function getHigherTransactionByType(type) {
    let higherTransaction;
    let higherValue = 0;

    for (let transaction of user[0].transactions) {
        if (transaction.type === type && transaction.value > higherValue) {
            higherValue = transaction.value;
            higherTransaction = transaction;
        }
    }

    return higherTransaction;
}

function getAverageTransactionValue() {
    let sum = 0;

    for (let transaction of user[0].transactions) {
        sum += transaction.value;
    }

    return sum / user[0].transactions.length;
}

function getTransactionsCount() {
    let count = {
        credit: 0,
        debit: 0,
    };
    
    for (let transaction of user[0].transactions) {
        if (transaction.type === "credit") {
            count.credit++;
        } else {
            count.debit++;
        }
    }
    return count;
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user[0].balance); 

console.log(getHigherTransactionByType("credit")); 
console.log(getHigherTransactionByType("debit")); 

console.log(getAverageTransactionValue()); 

console.log(getTransactionsCount()); 
