class TaskManager {
    private tasks: { id: number; name: string; status: string }[] = [];
    private currentId: number = 1;
    addTask(name: string): void {
        this.tasks.push({id:this.currentId,name:name,status:"notComplete"});
        this.currentId++;
    }
    completeTask(id: number): void {
        const task= this.tasks.find(task=>task.id===id);
        if(task){
            task.status="Completed";
        }
    }
    displayTasks(): void {
        for(let i=0;i<this.tasks.length;i++){
            console.log(`Task ID: ${this.tasks[i].id}, Name: ${this.tasks[i].name}, Status: ${this.tasks[i].status}`);
           }
    }
}

const taskManager = new TaskManager();
taskManager.addTask("Learn TypeScript");
taskManager.completeTask(1);
taskManager.displayTasks();
taskManager.addTask("This is a task");
taskManager.completeTask(2);
taskManager.displayTasks();



