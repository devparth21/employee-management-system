const API = 'http://localhost:8080/employees';

// Load all employees on page load
function loadEmployees() {
    fetch(API)
        .then(res => res.json())
        .then(data => {
            const tbody = document.getElementById('employeeTable');
            const count = document.getElementById('empCount');
            count.textContent = data.length + ' employees';

            if (data.length === 0) {
                tbody.innerHTML = '<tr><td colspan="6" class="empty-state">No employees found</td></tr>';
                return;
            }

            tbody.innerHTML = data.map(emp => `
                <tr>
                    <td>#${emp.id}</td>
                    <td>${emp.firstName}</td>
                    <td>${emp.lastName}</td>
                    <td>${emp.email}</td>
                    <td><span class="dept-badge">${emp.department}</span></td>
                    <td><button class="btn-delete" onclick="deleteEmployee(${emp.id})">Delete</button></td>
                </tr>
            `).join('');
        });
}

// Add employee
function addEmployee() {
    const employee = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        department: document.getElementById('department').value
    };

    fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employee)
    })
    .then(res => {
        if (res.ok) {
            showMessage('Employee added successfully!', 'success');
            document.getElementById('firstName').value = '';
            document.getElementById('lastName').value = '';
            document.getElementById('email').value = '';
            document.getElementById('department').value = '';
            loadEmployees();
        } else {
            showMessage('Please fill all fields correctly.', 'error');
        }
    });
}

// Delete employee
function deleteEmployee(id) {
    fetch(API + '/' + id, { method: 'DELETE' })
        .then(() => {
            showMessage('Employee deleted.', 'success');
            loadEmployees();
        });
}

// Show message
function showMessage(text, type) {
    const msg = document.getElementById('message');
    msg.textContent = text;
    msg.className = 'message ' + type;
    setTimeout(() => { msg.className = 'message'; }, 3000);
}

// Load on start
loadEmployees();