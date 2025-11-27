document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links li');
  const themeToggle = document.getElementById('themeToggle');
  const sections = document.querySelectorAll('.section');
  const skillBars = document.querySelectorAll('.skill-progress-bar');
  const projectCards = document.querySelectorAll('.project-card');
  const modal = document.getElementById('projectModal');
  const closeModal = document.querySelector('.close-modal');
  const modalContent = document.getElementById('modalContent');
  const modalTitle = document.getElementById('modalTitle');
  const contactForm = document.getElementById('contactForm');
  
  // Toggle menu
  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  
  // Close menu when a link is clicked
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
  
  // Add smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Theme toggle functionality
  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
  });
  
  // Animate sections on scroll
  function checkScroll() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.85) {
        section.classList.add('visible');
        
        // Animate skill bars when skills section is visible
        if (section.id === 'resume') {
          animateSkillBars();
        }
      }
    });
  }
  
  // Animate skill bars
  function animateSkillBars() {
    skillBars.forEach(bar => {
      const width = bar.getAttribute('data-width');
      bar.style.width = width;
    });
  }
  
  // Initialize skill bars with 0 width
  skillBars.forEach(bar => {
    bar.style.width = '0';
  });
  
  // Check scroll on load and scroll
  window.addEventListener('load', checkScroll);
  window.addEventListener('scroll', checkScroll);
  
  // Project modals
  projectCards.forEach(card => {
    card.addEventListener('click', function() {
      const projectId = this.getAttribute('data-project');
      showProjectModal(projectId);
    });
  });
  
  // Close modal
  closeModal.addEventListener('click', function() {
    modal.classList.remove('show');
  });
  
  // Close modal when clicking outside
  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });
  
  // Show project modal with content
  function showProjectModal(projectId) {
    let title = '';
    let content = '';
    
    switch(projectId) {
      case 'medical':
        title = 'Medical Imaging Software';
        content = `
          <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" alt="Medical Imaging Software" class="modal-image">
          <p class="modal-description">This project involved developing specialized software for medical professionals to enhance diagnostic capabilities through advanced imaging processing.</p>
          <div class="modal-features">
            <h3>Features</h3>
            <ul>
              <li>High-resolution image processing</li>
              <li>DICOM compatibility</li>
              <li>Measurement and annotation tools</li>
              <li>Secure patient data management</li>
              <li>Cross-platform compatibility</li>
            </ul>
          </div>
          <h3>Technologies Used</h3>
          <div class="modal-tech">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">Django</span>
            <span class="tech-tag">OpenCV</span>
            <span class="tech-tag">PostgreSQL</span>
            <span class="tech-tag">JavaScript</span>
          </div>
        `;
        break;
      case 'bakery':
        title = 'Bakery Management Software';
        content = `
          <img src="images/bakery.JPG" alt="Bakery Management Software" class="modal-image">
          <p class="modal-description">A comprehensive offline system designed specifically for bakery businesses to streamline operations and improve efficiency.</p>
          <div class="modal-features">
            <h3>Features</h3>
            <ul>
              <li>Inventory management</li>
              <li>Sales tracking and reporting</li>
              <li>Employee management</li>
              <li>Delivery route optimization</li>
              <li>Offline functionality</li>
            </ul>
          </div>
          <h3>Technologies Used</h3>
          <div class="modal-tech">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">Spring Boot</span>
            <span class="tech-tag">MySQL</span>
            <span class="tech-tag">JavaScript</span>
            <span class="tech-tag">HTML/CSS</span>
          </div>
        `;
        break;
      case 'ecommerce':
        title = 'E-commerce Website';
        content = `
          <img src="images/ecommerce.png" alt="E-commerce Website" class="modal-image">
          <p class="modal-description">A fully functional online store with secure payment processing, shopping cart functionality, and responsive design.</p>
          <div class="modal-features">
            <h3>Features</h3>
            <ul>
              <li>Product catalog with filtering</li>
              <li>Shopping cart and checkout</li>
              <li>Secure payment integration</li>
              <li>User accounts and order history</li>
              <li>Admin dashboard for inventory</li>
            </ul>
          </div>
          <h3>Technologies Used</h3>
          <div class="modal-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">MongoDB</span>
            <span class="tech-tag">Express</span>
            <span class="tech-tag">Stripe API</span>
          </div>
        `;
        break;
      case 'vetki':
        title = 'Vetki Social App';
        content = `
          <div class="vetki-logo" style="margin: 0 auto 20px; width: 120px; height: 120px; font-size: 60px;">V</div>
          <p class="modal-description">A modern social media platform with real-time features, user profiles, and interactive content sharing.</p>
          <div class="modal-features">
            <h3>Features</h3>
            <ul>
              <li>User profiles and authentication</li>
              <li>Real-time post creation and sharing</li>
              <li>Like and comment functionality</li>
              <li>Responsive design for all devices</li>
              <li>Real-time notifications</li>
            </ul>
          </div>
          <h3>Technologies Used</h3>
          <div class="modal-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Firebase</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">Express</span>
            <span class="tech-tag">Socket.io</span>
          </div>
        `;
        break;
        case 'realestate':
  title = 'Real Estate Listings Website';
  content = `
    <img src="images/realestate.jpg" alt="Real Estate Listings Website" class="modal-image">
    <p class="modal-description">Responsive platform for publishing, searching, and managing housing properties with geolocation integration.</p>
    <div class="modal-features">
      <h3>Features</h3>
      <ul>
        <li>Property search with filters</li>
        <li>Interactive maps integration</li>
        <li>Agent profiles and contact</li>
        <li>Property management dashboard</li>
        <li>Responsive mobile design</li>
      </ul>
    </div>
    <h3>Technologies Used</h3>
    <div class="modal-tech">
      <span class="tech-tag">Vue.js</span>
      <span class="tech-tag">PHP</span>
      <span class="tech-tag">MySQL</span>
      <span class="tech-tag">Google Maps API</span>
      <span class="tech-tag">RESTful API</span>
    </div>
  `;
  break;
      default:
        title = 'Project Details';
        content = `<p>Detailed information about this project.</p>`;
    }
    
    modalTitle.textContent = title;
    modalContent.innerHTML = content;
    modal.classList.add('show');
  }
  
  // Contact form submission
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  });
});