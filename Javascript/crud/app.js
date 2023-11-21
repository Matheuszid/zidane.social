const firebaseUrl = 'https://crud-a5df0-default-rtdb.firebaseio.com/tasks.json';
const modal = document.getElementById('modal_hidden');

const closeModal = () => {
    modal.style.display = 'none';
    clearForm();
    document.getElementById('crud-form').removeAttribute('data-edit-index');
};

const openModal = () => {
    modal.style.display = 'block';
};

const clearForm = () => {
    document.getElementById('name').value = '';
    document.getElementById('date').value = '';
    document.getElementById('time').value = '';
    document.getElementById('location').value = '';
    document.getElementById('description').value = '';
    document.getElementById('crud-form').removeAttribute('data-edit-index');
};

const addTask = async () => {
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;

    const editIndex = document.getElementById('crud-form').getAttribute('data-edit-index');
    const url = editIndex !== null ? `${firebaseUrl}/${editIndex}.json` : `${firebaseUrl}`;

    const eventData = {
        name: name,
        date: date,
        time: time,
        location: location,
        description: description
    };

    try {
        const response = await fetch(url, {
            method: editIndex !== null ? 'PUT' : 'POST', // Use 'PUT' for updating in Firebase Realtime Database
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(eventData),
        });

        if (!response.ok) {
            throw new Error(`Error adding/updating task. Status: ${response.status}. Message: ${await response.text()}`);
        }

        console.log('Success:', response);
        updateTaskListDisplay();
        closeModal();
    } catch (error) {
        console.error('Error:', error);
    }
};

const editTask = async (taskId) => {
    try {
        console.log('Attempting to fetch task with ID:', taskId);

        const response = await fetch(`${firebaseUrl}/${taskId}.json`);

        if (!response.ok) {
            throw new Error(`Error fetching task details. Status: ${response.status}. Message: ${await response.text()}`);
        }

        const data = await response.json();

        document.getElementById('name').value = data.name || '';
        document.getElementById('date').value = data.date || '';
        document.getElementById('time').value = data.time || '';
        document.getElementById('location').value = data.location || '';
        document.getElementById('description').value = data.description || '';
        document.getElementById('crud-form').setAttribute('data-edit-index', taskId);

        modal.style.display = 'block';
    } catch (error) {
        console.error('Error fetching event details:', error);
    }
};

const deleteTask = async (taskId) => {
    try {
        const response = await fetch(`${firebaseUrl}/${taskId}.json`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`Error deleting task. Status: ${response.status}. Message: ${await response.text()}`);
        }

        console.log('Success:', response);
        updateTaskListDisplay();
    } catch (error) {
        console.error('Error:', error);
    }
};

const updateTaskListDisplay = async () => {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    try {
        const response = await fetch(`${firebaseUrl}`);
        const data = await response.json();

        if (data) {
            const tasks = Object.entries(data);

            tasks.forEach(([taskId, task]) => {
                const card = createCardElement(task, taskId);
                taskList.appendChild(card);
            });
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

const createCardElement = (eventData, taskId) => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <h3>${eventData.name}</h3>
        <p>Data: ${eventData.date}</p>
        <p>Hora: ${eventData.time}</p>
        <p>Local: ${eventData.location}</p>
        <p>Descrição: ${eventData.description}</p>
        <button onclick="editTask('${taskId}')">Editar</button>
        <button onclick="deleteTask('${taskId}')">Excluir</button>
    `;

    return card;
};

updateTaskListDisplay();

async function loadPage(page) {
    try {
        const response = await fetch(page);
        const html = await response.text();
        document.getElementById('app').innerHTML = html;
    } catch (error) {
        console.error('Error loading page:', error);
    }
}