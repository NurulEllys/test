// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle")
  const navLinks = document.querySelector(".nav-links")
  const body = document.body
  let darkMode = localStorage.getItem("darkMode") === "enabled"

  // Apply dark mode on initial load if it was previously enabled
  if (darkMode) {
    body.classList.add("dark-mode")
    updateThemeToggleIcon(true)
  }

  // Theme toggle functionality
  const themeToggle = document.querySelector(".theme-toggle")
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      body.classList.add("dark-mode-transition")
      body.classList.toggle("dark-mode")
      darkMode = body.classList.contains("dark-mode")

      // Update localStorage
      localStorage.setItem("darkMode", darkMode ? "enabled" : "disabled")

      // Update icon
      updateThemeToggleIcon(darkMode)

      // Remove transition class after transition completes
      setTimeout(() => {
        body.classList.remove("dark-mode-transition")
      }, 500)
    })
  }

  function updateThemeToggleIcon(isDarkMode) {
    const sunIcon = document.querySelector(".theme-toggle .sun")
    const moonIcon = document.querySelector(".theme-toggle .moon")

    if (sunIcon && moonIcon) {
      if (isDarkMode) {
        sunIcon.style.opacity = "0"
        sunIcon.style.transform = "translateY(-20px)"
        moonIcon.style.opacity = "1"
        moonIcon.style.transform = "translateY(0)"
      } else {
        sunIcon.style.opacity = "1"
        sunIcon.style.transform = "translateY(0)"
        moonIcon.style.opacity = "0"
        moonIcon.style.transform = "translateY(20px)"
      }
    }
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active")

      // Toggle aria-expanded attribute for accessibility
      const expanded = menuToggle.getAttribute("aria-expanded") === "true" || false
      menuToggle.setAttribute("aria-expanded", !expanded)

      // Animate hamburger to X
      const spans = menuToggle.querySelectorAll("span")
      if (navLinks.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
        spans[1].style.opacity = "0"
        spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
      } else {
        spans[0].style.transform = "none"
        spans[1].style.opacity = "1"
        spans[2].style.transform = "none"
      }
    })
  }
  
  // Portfolio Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the portfolio page by looking for the portfolio elements
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    if (portfolioItems.length === 0) return; // Not on portfolio page, exit
    
    // Get the modal
    const modal = document.getElementById('projectModal');
    if (!modal) return; // Modal not found, exit
    
    const modalBody = modal.querySelector('.modal-body');
    const closeModal = modal.querySelector('.close-modal');
    
    // Get all "View Details" buttons
    const viewButtons = document.querySelectorAll('.view-btn');
    
    // Project data
    const projectData = {
        'project1': {
            title: 'Student Management System',
            image: 'images/project1.jpg',
            description: 'A comprehensive database application for managing student records, attendance, and grades with reporting features.',
            technologies: ['SQL', 'C#', 'Database Design', '.NET Framework'],
            features: [
                'Student registration and profile management',
                'Attendance tracking system',
                'Grade management and reporting',
                'Parent communication portal'
            ],
            challenges: 'Implementing a secure and efficient database structure while ensuring data integrity was a significant challenge. I solved this by implementing proper normalization techniques and transaction management.'
        },
        'project2': {
            title: 'Office Document Templates',
            image: 'images/project2.jpg',
            description: 'A collection of professional Microsoft Office templates for business correspondence, reports, and presentations.',
            technologies: ['MS Word', 'Excel', 'PowerPoint', 'Document Design'],
            features: [
                'Professionally designed letterheads and business documents',
                'Automated report templates with formulas',
                'Corporate presentation designs',
                'Consistent branding across all documents'
            ],
            challenges: 'Creating templates that were both visually appealing and functional across different versions of Microsoft Office required extensive testing and refinement.'
        },
        'project3': {
            title: 'Network Design Project',
            image: 'images/project3.jpg',
            description: 'A small business network design with security implementation, including topology diagrams and documentation.',
            technologies: ['Networking', 'Security', 'Documentation', 'Cisco Technologies'],
            features: [
                'Comprehensive network topology design',
                'Security implementation plan',
                'Hardware and software specifications',
                'Detailed implementation documentation'
            ],
            challenges: 'Balancing security requirements with usability and budget constraints required careful planning and prioritization of security measures.'
        },
        'project4': {
            title: 'Digital CV Website',
            image: 'images/project4.png',
            description: 'This responsive digital CV website created as part of my IT coursework, showcasing web development skills.',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
            features: [
                'Fully responsive design for all devices',
                'Interactive portfolio section',
                'Dark/light mode toggle',
                'Contact form with validation'
            ],
            challenges: 'Implementing a responsive design that works seamlessly across all devices while maintaining visual appeal required extensive CSS work and testing.'
        },
        'project5': {
            title: 'Sales Data Analysis',
            image: 'images/project5.png',
            description: 'Excel-based sales data analysis with interactive dashboards and visualizations for business insights.',
            technologies: ['Excel', 'Data Analysis', 'Visualization', 'Power Query'],
            features: [
                'Interactive sales dashboards',
                'Trend analysis and forecasting',
                'Regional performance comparisons',
                'Automated reporting system'
            ],
            challenges: 'Processing large datasets efficiently while creating meaningful visualizations required advanced Excel techniques and optimization.'
        },
        'project6': {
            title: 'IT Research Project',
            image: 'images/project6.jpg',
            description: 'Research on emerging technologies in IT and their potential impact on business operations.',
            technologies: ['Research', 'Documentation', 'Analysis', 'Technical Writing'],
            features: [
                'Comprehensive literature review',
                'Case studies of technology implementation',
                'Cost-benefit analysis',
                'Implementation recommendations'
            ],
            challenges: 'Synthesizing complex technical information into accessible recommendations for non-technical stakeholders required careful consideration of communication approaches.'
        }
    };
    
    // Function to open modal with project details
    function openProjectModal(projectId) {
        const project = projectData[projectId];
        
        if (project) {
            // Create modal content without Live Demo or Source Code buttons
            let modalContent = `
                <div class="project-detail">
                    <h2>${project.title}</h2>
                    <div class="project-detail-image">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    <div class="project-detail-content">
                        <h3>Project Overview</h3>
                        <p>${project.description}</p>
                        
                        <h3>Technologies Used</h3>
                        <div class="project-technologies">
                            ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                        </div>
                        
                        <h3>Key Features</h3>
                        <ul class="project-features">
                            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                        
                        <h3>Challenges & Solutions</h3>
                        <p>${project.challenges}</p>
                    </div>
                </div>
            `;
            
            // Set modal content
            modalBody.innerHTML = modalContent;
            
            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
    }
    
    // Add click event to all view buttons
    viewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });
    
    // Close modal when clicking the close button
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });
    
    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    });
    
    // Filter projects
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Show/hide portfolio items based on filter
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (navLinks && navLinks.classList.contains("active") && !event.target.closest("nav")) {
      navLinks.classList.remove("active")
      menuToggle.setAttribute("aria-expanded", "false")

      // Reset hamburger icon
      const spans = menuToggle.querySelectorAll("span")
      spans[0].style.transform = "none"
      spans[1].style.opacity = "1"
      spans[2].style.transform = "none"
    }
  })

  // Portfolio filters with animation
  const filterButtons = document.querySelectorAll(".filter-btn")
  const portfolioItems = document.querySelectorAll(".portfolio-item")

  if (filterButtons.length > 0 && portfolioItems.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove("active"))

        // Add active class to clicked button
        this.classList.add("active")

        const filter = this.getAttribute("data-filter")

        // Filter portfolio items with staggered animation
        portfolioItems.forEach((item, index) => {
          if (filter === "all" || item.getAttribute("data-category") === filter) {
            setTimeout(() => {
              item.style.display = "block"
              setTimeout(() => {
                item.style.opacity = "1"
                item.style.transform = "translateY(0)"
              }, index * 100)
            }, 50)
          } else {
            item.style.opacity = "0"
            item.style.transform = "translateY(20px)"
            setTimeout(() => {
              item.style.display = "none"
            }, 300)
          }
        })
      })
    })
  }

  // Portfolio modal with enhanced animations
  const viewButtons = document.querySelectorAll(".view-btn")
  const modal = document.getElementById("projectModal")
  const modalContent = modal ? modal.querySelector(".modal-body") : null
  const closeModal = document.querySelector(".close-modal")

  if (viewButtons.length > 0 && modal && modalContent && closeModal) {
    viewButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault()
        const projectId = this.getAttribute("data-project")

        // Here you would typically fetch project details based on projectId
        // For now, we'll just add some placeholder content with enhanced styling
        modalContent.innerHTML = `
          <h2>${this.closest(".portfolio-item").querySelector("h3").textContent}</h2>
          <div class="project-details">
            <img src="${this.closest(".portfolio-item").querySelector("img").src}" alt="Project Image" style="border-radius: var(--border-radius); box-shadow: var  alt="Project Image" style="border-radius: var(--border-radius); box-shadow: var(--box-shadow);">
            <div class="project-description">
                <p>${this.closest(".portfolio-item").querySelector("p").textContent}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
                <h3>Technologies Used:</h3>
                <ul class="tech-list">
                    ${Array.from(this.closest(".portfolio-item").querySelectorAll(".portfolio-tags span"))
                      .map((tag) => `<li><span>${tag.textContent}</span></li>`)
                      .join("")}
                </ul>
            </div>
          </div>
        `

        modal.style.display = "block"
        document.body.style.overflow = "hidden" // Prevent scrolling when modal is open
      })
    })

    closeModal.addEventListener("click", () => {
      modal.style.display = "none"
      document.body.style.overflow = "auto" // Re-enable scrolling
    })

    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none"
        document.body.style.overflow = "auto"
      }
    })
  }

  // Contact form handling with enhanced feedback
  const contactForm = document.getElementById("contactForm")
  const formStatus = document.getElementById("formStatus")

  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Add loading state to button
      const submitBtn = contactForm.querySelector(".submit-btn")
      const originalBtnText = submitBtn.textContent
      submitBtn.textContent = "Sending..."
      submitBtn.disabled = true
      submitBtn.style.opacity = "0.7"

      // Get form data
      const formData = new FormData(contactForm)
      const formValues = Object.fromEntries(formData.entries())

      // Simple validation
      let isValid = true
      for (const [key, value] of Object.entries(formValues)) {
        if (!value.trim()) {
          isValid = false
          break
        }
      }

      // Simulate form submission with delay for better UX
      setTimeout(() => {
        if (isValid) {
          // Simulate form submission
          formStatus.textContent = "Message sent successfully! I will get back to you soon."
          formStatus.className = "form-status success"
          contactForm.reset()

          // Reset button
          submitBtn.textContent = originalBtnText
          submitBtn.disabled = false
          submitBtn.style.opacity = "1"

          // Hide success message after 5 seconds
          setTimeout(() => {
            formStatus.style.display = "none"
          }, 5000)
        } else {
          formStatus.textContent = "Please fill in all fields."
          formStatus.className = "form-status error"

          // Reset button
          submitBtn.textContent = originalBtnText
          submitBtn.disabled = false
          submitBtn.style.opacity = "1"
        }
      }, 1500)
    })
  }

  // Animate skill bars when they come into view
  const animateSkillBars = () => {
    const skillLevels = document.querySelectorAll(".skill-level")

    if (skillLevels.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const width = entry.target.style.width
              entry.target.style.width = "0"

              setTimeout(() => {
                entry.target.style.width = width
              }, 100)

              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.2 },
      )

      skillLevels.forEach((skillLevel) => {
        // Reset width to 0 initially
        const width = skillLevel.style.width
        skillLevel.style.width = "0"
        observer.observe(skillLevel)
      })
    }
  }

  // Animate elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      ".highlight-card, .interest-card, .soft-skill, .timeline-item, .portfolio-item, .contact-item, .reference-item",
    )

    if (elements.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add("animate-in")
              }, index * 100)
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1 },
      )

      elements.forEach((element) => {
        element.classList.add("animate-item")
        observer.observe(element)
      })
    }
  }

  // Add back to top button functionality
  const addBackToTopButton = () => {
    // Create the button if it doesn't exist
    if (!document.querySelector(".back-to-top")) {
      const backToTopButton = document.createElement("div")
      backToTopButton.className = "back-to-top"
      backToTopButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>
      `
      document.body.appendChild(backToTopButton)

      // Add click event
      backToTopButton.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      })

      // Show/hide based on scroll position
      window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
          backToTopButton.classList.add("visible")
        } else {
          backToTopButton.classList.remove("visible")
        }
      })
    }
  }

  // Add interactive typing effect to hero section
  const addTypingEffect = () => {
    const heroText = document.querySelector(".hero-text h2")
    if (heroText) {
      const originalText = heroText.textContent
      heroText.textContent = ""

      let i = 0
      const typeWriter = () => {
        if (i < originalText.length) {
          heroText.textContent += originalText.charAt(i)
          i++
          setTimeout(typeWriter, 100)
        }
      }

      setTimeout(typeWriter, 1000)
    }
  }

  // Add parallax effect to hero section
  const addParallaxEffect = () => {
    const hero = document.querySelector(".hero")
    if (hero) {
      window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`
      })
    }
  }

  // Add hover effects to navigation
  const enhanceNavigation = () => {
    const navLinks = document.querySelectorAll(".nav-links a")
    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", (e) => {
        const target = e.target
        target.style.transition = "transform 0.3s ease"
        target.style.transform = "translateY(-3px)"
      })

      link.addEventListener("mouseleave", (e) => {
        const target = e.target
        target.style.transform = "translateY(0)"
      })
    })
  }

  // Call animation and enhancement functions
  animateSkillBars()
  animateOnScroll()
  addBackToTopButton()
  addTypingEffect()
  addParallaxEffect()
  enhanceNavigation()
})

// Check if service worker is supported
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("serviceworker.js")
      .then((registration) => {
        console.log("ServiceWorker registration successful with scope: ", registration.scope)
      })
      .catch((error) => {
        console.log("ServiceWorker registration failed: ", error)
      })
  })
}

// Add preloader
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader")
  if (preloader) {
    preloader.classList.add("preloader-hidden")

    // Remove preloader from DOM after animation completes
    preloader.addEventListener("transitionend", () => {
      preloader.remove()
    })
  }
})

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    if (targetId === "#") return

    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for header height
        behavior: "smooth",
      })
    }
  })
})

// Add tilt effect to cards
const addTiltEffect = () => {
  // Remove highlight-card from this selector to prevent tilt effect on highlight cards
  const cards = document.querySelectorAll(".interest-card, .soft-skill")

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const tiltX = (y - centerY) / 10
      const tiltY = (centerX - x) / 10

      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-5px)`
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)"
    })
  })
}

// Call tilt effect after DOM is loaded
document.addEventListener("DOMContentLoaded", addTiltEffect)
