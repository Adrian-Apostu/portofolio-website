function Projects() {
  return (
    <div className="section" id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Personal Budget Manager</h3>
        <p>This project focuses on building an API that enables users to manage a personal budget based on the principles of Envelope Budgeting. The API allows clients to create, read, update, and delete budget envelopes, and track the balance of each envelope. It adheres to best practices for REST endpoint naming conventions, utilizes proper response codes, and includes data validation mechanisms to prevent users from overspending their budget.</p>
        <ul>
          <li>Develop an API using Node.js and Express</li>
          <li>Implement CRUD operations for budget envelopes</li>
          <li>Create endpoints to update envelope balances</li>
          <li>Utilize Git version control for tracking project progress</li>
          <li>Master command line navigation and file manipulation</li>
          <li>Utilize Postman for testing API endpoints</li>
        </ul>
        <a href="https://personal-budget-tracker-app.netlify.app/">View Project</a>
      </div>
      <div className="project">
        <h3>Recipe Planner</h3>
        <p>The Recipe Planner project helps users search for recipes, save their favorite ones, and manage these recipes effectively. The application provides a search functionality to find recipes from an external API and allows users to save and delete recipes.</p>
        <ul>
          <li>Develop an API using Node.js and Express</li>
          <li>Implement CRUD operations for recipes</li>
          <li>Utilize React for the frontend interface</li>
          <li>Utilize Tailwind CSS for styling</li>
          <li>Test API endpoints with Postman</li>
        </ul>
        <a href="https://recipe-planner-app.netlify.app/">View Project</a>
      </div>
    </div>
  );
}

export default Projects;
