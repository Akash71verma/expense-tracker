let total = 0;

    function addExpense() {
        const desc = document.getElementById("desc").value;
        const amount = parseFloat(document.getElementById("amount").value);

        if (!desc || isNaN(amount)) return;

        const table = document.getElementById("expenseList");
        const row = table.insertRow();

        row.insertCell(0).innerText = desc;
        row.insertCell(1).innerText = amount;
        
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.onclick = function () {
            total -= amount;
            document.getElementById("total").innerText = total;
            row.remove();
        };
        row.insertCell(2).appendChild(deleteBtn);

        total += amount;
        document.getElementById("total").innerText = total;

        document.getElementById("desc").value = "";
        document.getElementById("amount").value = "";
    }