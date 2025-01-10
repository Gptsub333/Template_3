import "./KanbanBoard.css";
import data from "../data/data.json";

function KanbanBoard() {
  const { columns } = data.kanbanBoard; // Fetch kanban board data dynamically from data.json

  return (
    <div className="kanban-board card">
      <div className="board-header">
        <h2>Kanban Board</h2>
      </div>
      <div className="board-columns">
        {columns.map((column, index) => (
          <div key={index} className="board-column">
            <div className="column-header">
              <span className="column-title">
                {column.icon} {column.title} ({column.count})
              </span>
            </div>
            <div className="column-tasks">
              {column.tasks.map((task, taskIndex) => (
                <div key={taskIndex} className="task-card">
                  <h4>{task.title}</h4>
                  <span className="task-label">{task.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard;
