document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
        this.querySelector('i').classList.toggle('fa-bars');
    });
    
    // Dropdown Toggle for Mobile
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                menu.classList.toggle('active');
                this.querySelector('i').classList.toggle('fa-chevron-up');
                this.querySelector('i').classList.toggle('fa-chevron-down');
            }
        });
    });
    
    // Hero Slider
    const heroSlider = document.querySelector('.hero-slider');
    const slides = document.querySelectorAll('.slide');
    const slideIndicators = document.querySelector('.slide-indicators');
    const prevSlideBtn = document.querySelector('.prev-slide');
    const nextSlideBtn = document.querySelector('.next-slide');
    
    // Create indicators
    slides.forEach((slide, index) => {
        const indicator = document.createElement('span');
        indicator.dataset.index = index;
        if (index === 0) indicator.classList.add('active');
        slideIndicators.appendChild(indicator);
    });
    
    const indicators = document.querySelectorAll('.slide-indicators span');
    let currentSlide = 0;
    const slideCount = slides.length;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        currentSlide = index;
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        showSlide(currentSlide);
    }
    
    // Auto slide change
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Reset interval on manual slide change
    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    nextSlideBtn.addEventListener('click', function() {
        nextSlide();
        resetInterval();
    });
    
    prevSlideBtn.addEventListener('click', function() {
        prevSlide();
        resetInterval();
    });
    
    indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            showSlide(index);
            resetInterval();
        });
    });
    
    // Testimonials Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialIndicators = document.querySelector('.testimonial-indicators');
    const prevTestimonialBtn = document.querySelector('.prev-testimonial');
    const nextTestimonialBtn = document.querySelector('.next-testimonial');
    
    // Create indicators
    testimonials.forEach((testimonial, index) => {
        const indicator = document.createElement('span');
        indicator.dataset.index = index;
        if (index === 0) indicator.classList.add('active');
        testimonialIndicators.appendChild(indicator);
    });
    
    const testimonialIndicatorsList = document.querySelectorAll('.testimonial-indicators span');
    let currentTestimonial = 0;
    const testimonialCount = testimonials.length;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        testimonialIndicatorsList.forEach(indicator => indicator.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        testimonialIndicatorsList[index].classList.add('active');
        currentTestimonial = index;
    }
    
    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonialCount;
        showTestimonial(currentTestimonial);
    }
    
    function prevTestimonial() {
        currentTestimonial = (currentTestimonial - 1 + testimonialCount) % testimonialCount;
        showTestimonial(currentTestimonial);
    }
    
    nextTestimonialBtn.addEventListener('click', nextTestimonial);
    prevTestimonialBtn.addEventListener('click', prevTestimonial);
    
    testimonialIndicatorsList.forEach(indicator => {
        indicator.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            showTestimonial(index);
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                    mobileMenuBtn.querySelector('i').classList.add('fa-bars');
                }
            }
        });
    });
    
    // Sticky header on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Search functionality (placeholder)
    const searchIcon = document.querySelector('.search-icon');
    searchIcon.addEventListener('click', function() {
        alert('Search functionality would be implemented here with a proper search API.');
    });
});
// Set active page in navigation
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        
        // Highlight current page
        if (linkPage === currentPage) {
            link.classList.add('active');
            
            // Keep parent dropdowns highlighted
            let parent = link.closest('.dropdown-menu');
            if (parent) {
                parent.previousElementSibling.classList.add('active');
            }
        }
    });
    
    // Mobile dropdown toggle
    const dropdownToggles = document.querySelectorAll('.dropdown > a');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.nextElementSibling.classList.toggle('show');
                this.querySelector('i').classList.toggle('fa-chevron-up');
            }
        });
    });
});
// scripts.js - Enhanced for multi-page support

// Mobile menu toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.main-nav').classList.toggle('active');
    this.querySelector('i').classList.toggle('fa-times');
});

// Dynamic active page highlighting
const currentPage = location.pathname.split('/').pop();
document.querySelectorAll('.main-nav a').forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    if (linkPage === currentPage || 
        (currentPage === 'index.html' && linkPage === '')) {
        link.classList.add('active');
        
        // Highlight parent dropdown
        const dropdown = link.closest('.dropdown');
        if (dropdown) {
            dropdown.querySelector('> a').classList.add('active');
        }
    }
});

// Initialize components based on page
if (document.querySelector('.hero-slider')) {
    // Initialize slider only on homepage
    initSlider();
}

function initSlider() {
    // Slider logic from previous implementation
}
// Inside js/script.js
const newsData = [
    {
        title: "Prestige Wins Science Fair",
        date: "May 15, 2023",
        image: "images/news/science-fair.jpg",
        excerpt: "Our team took first place in the state competition."
    },
    {
        title: "New Library Opening",
        date: "April 2, 2023",
        image: "images/news/new-library.jpg",
        excerpt: "The $2M facility opens next month."
    }
    // Add more news items here as needed!
];

function loadNews() {
    const container = document.getElementById('newsContainer');
    newsData.forEach(item => {
        container.innerHTML += `
            <div class="news-card">
                <img src="${item.image}" alt="${item.title}">
                <div class="news-content">
                    <span class="news-date">${item.date}</span>
                    <h3>${item.title}</h3>
                    <p>${item.excerpt}</p>
                    <a href="#" class="read-more">Read More</a>
                </div>
            </div>
        `;
    });
}

// Call on page load
window.addEventListener('DOMContentLoaded', loadNews);
// Authentication
document.getElementById('login-btn').addEventListener('click', async () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    alert('Login error: ' + error.message);
  }
});

document.getElementById('logout-btn').addEventListener('click', () => {
  auth.signOut();
});

auth.onAuthStateChanged(user => {
  if (user) {
    // User is logged in
    document.getElementById('login-btn').style.display = 'none';
    document.getElementById('logout-btn').style.display = 'inline-block';
    document.getElementById('post-form').style.display = 'block';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
  } else {
    // User is logged out
    document.getElementById('login-btn').style.display = 'inline-block';
    document.getElementById('logout-btn').style.display = 'none';
    document.getElementById('post-form').style.display = 'none';
  }
});

// Post submission
document.getElementById('submit-post').addEventListener('click', async () => {
  const content = document.getElementById('post-content').value;
  const category = document.getElementById('post-category').value;
  const imageFile = document.getElementById('post-image').files[0];
  
  if (!content) {
    alert('Please enter some content');
    return;
  }
  
  try {
    let imageUrl = '';
    
    if (imageFile) {
      // Upload image to Firebase Storage
      const storageRef = storage.ref(`news-images/${Date.now()}_${imageFile.name}`);
      await storageRef.put(imageFile);
      imageUrl = await storageRef.getDownloadURL();
    }
    
    // Add post to Firestore
    await db.collection('posts').add({
      content: content,
      imageUrl: imageUrl,
      category: category,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      author: auth.currentUser.email,
      authorName: auth.currentUser.displayName || 'School Staff'
    });
    
    // Clear form
    document.getElementById('post-content').value = '';
    document.getElementById('post-image').value = '';
    
  } catch (error) {
    alert('Error posting: ' + error.message);
  }
});

// Load and display posts
function renderPosts() {
  db.collection('posts')
    .orderBy('createdAt', 'desc')
    .onSnapshot(snapshot => {
      const postsContainer = document.getElementById('posts-container');
      postsContainer.innerHTML = '';
      
      snapshot.forEach(doc => {
        const post = doc.data();
        const postDate = post.createdAt?.toDate().toLocaleString() || 'Just now';
        
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
          <div class="post-header">
            <span class="post-category">${post.category}</span>
            <span class="post-author">${post.authorName}</span>
            <span class="post-date">${postDate}</span>
          </div>
          <div class="post-content">${post.content}</div>
          ${post.imageUrl ? `<img src="${post.imageUrl}" class="post-image">` : ''}
        `;
        postsContainer.appendChild(postElement);
      });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderPosts();
});
// Add to your renderPosts function
function renderPosts() {
  db.collection('posts')
    .orderBy('createdAt', 'desc')
    .onSnapshot(snapshot => {
      const postsContainer = document.getElementById('posts-container');
      postsContainer.innerHTML = '';
      
      snapshot.forEach(doc => {
        const post = doc.data();
        const postDate = post.createdAt?.toDate().toLocaleString() || 'Just now';
        const isAuthor = auth.currentUser && auth.currentUser.email === post.author;
        
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.dataset.id = doc.id;
        postElement.innerHTML = `
          <div class="post-header">
            <span class="post-category">${post.category}</span>
            ${post.pinned ? '<span class="pinned-badge">📌 Pinned</span>' : ''}
            <span class="post-author">${post.authorName}</span>
            <span class="post-date">${postDate}</span>
          </div>
          <div class="post-content">${post.content}</div>
          ${post.imageUrl ? `<img src="${post.imageUrl}" class="post-image">` : ''}
          ${isAuthor ? `
            <div class="post-actions">
              <button class="edit-post">Edit</button>
              <button class="delete-post">Delete</button>
              ${auth.currentUser.email.match(/admin@|principal@/) ? 
                `<button class="toggle-pin">${post.pinned ? 'Unpin' : 'Pin'}</button>` : ''}
            </div>
          ` : ''}
        `;
        
        postsContainer.appendChild(postElement);
        
        // Add event listeners if user is author
        if (isAuthor) {
          postElement.querySelector('.delete-post').addEventListener('click', () => deletePost(doc.id));
          postElement.querySelector('.edit-post').addEventListener('click', () => editPost(doc.id, post));
          if (postElement.querySelector('.toggle-pin')) {
            postElement.querySelector('.toggle-pin').addEventListener('click', () => togglePin(doc.id, !post.pinned));
          }
        }
      });
    });
}

// Delete post function
async function deletePost(postId) {
  if (confirm('Are you sure you want to delete this post?')) {
    try {
      const postRef = db.collection('posts').doc(postId);
      const post = await postRef.get();
      
      // Delete associated image if exists
      if (post.data().imageUrl) {
        const imageRef = storage.refFromURL(post.data().imageUrl);
        await imageRef.delete();
      }
      
      await postRef.delete();
    } catch (error) {
      alert('Error deleting post: ' + error.message);
    }
  }
}

// Edit post function
async function editPost(postId, postData) {
  const newContent = prompt('Edit post content:', postData.content);
  if (newContent !== null) {
    try {
      await db.collection('posts').doc(postId).update({
        content: newContent,
        editedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    } catch (error) {
      alert('Error updating post: ' + error.message);
    }
  }
}

// Toggle pin function
async function togglePin(postId, pinState) {
  try {
    await db.collection('posts').doc(postId).update({
      pinned: pinState
    });
  } catch (error) {
    alert('Error pinning post: ' + error.message);
  }
}