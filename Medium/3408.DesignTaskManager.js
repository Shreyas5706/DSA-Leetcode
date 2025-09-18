class TaskManager {
    constructor(tasks) {
        this.heap = new PriorityQueue((a, b) => b[2] - a[2] || b[1] - a[1], tasks);
        this.tasks = new Map(tasks.map(task => [task[1], task]));
    }

    add(userId, taskId, priority) {
        const task = [userId, taskId, priority];
        this.heap.enqueue(task);
        this.tasks.set(taskId, task);
    }

    edit(taskId, newPriority) {
        const oldTask = this.tasks.get(taskId);
        if (!oldTask) return;
        const newTask = [oldTask[0], taskId, newPriority];
        this.tasks.set(taskId, newTask);
        this.heap.enqueue(newTask);
    }

    rmv(taskId) {
        this.tasks.delete(taskId);
    }

    execTop() {
        while (!this.heap.isEmpty()) {
            const task = this.heap.dequeue();
            const cur = this.tasks.get(task[1]);
            if (cur && cur[0] === task[0] && cur[2] === task[2]) {
                this.rmv(task[1]);
                return task[0];
            }
        }
        return -1;
    }
}