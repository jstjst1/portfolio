/* JavaScript for Endless Scroll */

// Sample data for additional projects (to simulate endless scroll)
// In a real scenario, this data would be fetched from a server.
const projectData = [
    { title: 'Project Title 2', description: 'Description of the project, your role, and technologies used.', link: '#' },
    { title: 'Project Title 3', description: 'Description of the project, your role, and technologies used.', link: '#' },
    { title: 'Project Title 4', description: 'Description of the project, your role, and technologies used.', link: '#' },
    // Add more project data as needed
];

const projectContainer = document.querySelector('.project-list');
let projectIndex = 0;

// Function to load more projects
function loadMoreProjects() {
    if (projectIndex < projectData.length) {
        // Create a new project element
        const project = document.createElement('div');
        project.className = 'project';
        project.innerHTML = `
            <h3>${projectData[projectIndex].title}</h3>
            <p>${projectData[projectIndex].description}</p>
            <a href="${projectData[projectIndex].link}">View Project</a>
        `;
        // Append the project to the project container
        projectContainer.appendChild(project);
        projectIndex++;
    }
}

// Event listener for scroll event to load more projects
window.addEventListener('scroll', () => {
    // Check if the user has scrolled to the bottom of the page
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        loadMoreProjects();
    }
});

// Initial load of projects
for (let i = 0; i < 2; i++) { // Load a few projects initially
    loadMoreProjects();
}
