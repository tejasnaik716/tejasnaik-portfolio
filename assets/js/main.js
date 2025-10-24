// main.js - Handles interactivity for Tejas Naik's Portfolio Website

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
        // Close mobile menu after clicking a link
        const nav = document.querySelector('.nav');
        nav.classList.remove('active');
    });
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');
mobileMenuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Modal functionality for project case studies
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');

// Sample project details (replace with real case study content if available)
const projectDetails = {
    1: {
        title: 'Easy Parking',
        description: 'A detailed case study on the Easy Parking app, including user research, wireframes, and prototyping in Figma.',
        link: '#' // Replace with actual case study URL
    },
    2: {
        title: 'Cyberbullying and Hate Speech Detection',
        description: 'Explore the full-stack development process, ML integration, and UI/UX design for this Twitter-based detection tool.',
        link: '#' // Replace with actual case study URL
    },
    3: {
        title: 'E-Commerce UI for Cricket Gear',
        description: 'Case study on applying Gestalt principles to design intuitive dashboards for admins, sellers, and customers.',
        link: '#' // Replace with actual case study URL
    },
    4: {
        title: 'Student Management System',
        description: 'Overview of the database-driven system, including ER diagrams, UI mockups, and implementation details.',
        link: '#' // Replace with actual case study URL
    }
};

document.querySelectorAll('[data-project]').forEach(button => {
    button.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project');
        const details = projectDetails[projectId];
        modalBody.innerHTML = `
            <h3>${details.title}</h3>
            <p>${details.description}</p>
            <a href="${details.link}" class="btn btn-primary" target="_blank">View Full Case Study</a>
        `;
        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
    });
});

// Close modal when clicking the close button or outside the modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
    }
});

// Dynamic footer year update
document.getElementById('year').textContent = new Date().getFullYear();
