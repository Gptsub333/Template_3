import KanbanBoard from "./KanbanBoard";
import "./Dashboard.css";
import data from "../data/data.json";

function Dashboard() {
  const { todayTasks } = data.dashboard; // Fetch today's tasks dynamically from data.json

  return (
    <section className="dashboard">
      <div className="dashboard-grid">
        {/* Today Tasks */}
        <div className="today-tasks card">
          <div className="section-header">
            <h2>📋 Today Tasks</h2>
            <button className="btn-text">See All ›</button>
          </div>
          <div className="task-cards">
            {todayTasks.map((task, index) => (
              <div key={index} className="task-card">
                <div className="task-header">
                  <h3>{task.title}</h3>
                  <button className="btn-icon">⋮</button>
                </div>
                <p className="task-description">{task.description}</p>
                <div className="task-footer">
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar"
                      style={{ width: `${task.progress}%` }}
                    ></div>
                  </div>
                  <span className="member-count">{task.members} members</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kanban Board */}
        <KanbanBoard />
      </div>
    </section>
  );
}

export default Dashboard;
