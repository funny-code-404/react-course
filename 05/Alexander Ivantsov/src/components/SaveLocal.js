export const saveTasksLS = (key, data) => localStorage.setItem(key, JSON.stringify(data));

export const getTasksLS = key => {
    const data = localStorage.getItem(key);

    let taskItem = null;

    try {
        const parsed = JSON.parse(data);

        if (Array.isArray(parsed)) {
            taskItem = parsed;
        } 
    } catch (e) {
        taskItem = [];
    }
    
    return taskItem;
}