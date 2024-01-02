
document.addEventListener('DOMContentLoaded', function() {
    const habitList = document.getElementById('habitList');
    const addHabitBtn = document.getElementById('addHabitBtn');

    let habits = JSON.parse(localStorage.getItem('habits')) || [];

    addHabitBtn.addEventListener('click', addHabit);

    function addHabit() {
        const habitName = prompt('Enter the name of the new habit:');
        if (habitName) {
            const newHabit = {
                name: habitName,
                progress: 0,
                completed: false
            };
            habits.push(newHabit);
            updateLocalStorage();
            renderHabits();
        }
    }

    function toggleHabit(index) {
        habits[index].completed = !habits[index].completed;
        updateLocalStorage();
        renderHabits();
    }

    function updateLocalStorage() {
        localStorage.setItem('habits', JSON.stringify(habits));
    }

    function renderHabits() {
        habitList.innerHTML = '';
        habits.forEach((habit, index) => {
            const habitElement = document.createElement('div');
            habitElement.className = 'habit';
            habitElement.innerHTML = `
                <span>${habit.name}</span>
                <button onclick="toggleHabit(${index})">${habit.completed ? 'Undo' : 'Done'}</button>
            `;
            habitList.appendChild(habitElement);
        });
    }

    renderHabits();
});
