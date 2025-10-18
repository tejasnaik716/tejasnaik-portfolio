// Basic interactivity: nav toggle, year, modal for project case studies
document.addEventListener('DOMContentLoaded', function(){
  // Year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Nav toggle (mobile)
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  navToggle && navToggle.addEventListener('click', function(){
    mainNav.classList.toggle('open');
  });

  // Modal logic
  window.openModal = function(e,id){
    e.preventDefault();
    const modal = document.getElementById('modal');
    const content = document.getElementById('modal-content');
    content.innerHTML = getCaseStudyHtml(id);
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden','false');
  };

  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal').addEventListener('click', function(e){
    if(e.target === this) closeModal();
  });

  function closeModal(){
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden','true');
    document.getElementById('modal-content').innerHTML = '';
  }
});

// Case study content (placeholder — replace with real content)
function getCaseStudyHtml(id){
  const cases = {
    1: {
      title: 'Smart Parking — Mobile App',
      content: `<h2>Smart Parking</h2>
        <p><strong>Overview:</strong> Mobile application to find available parking spots, reserve and navigate to them in cities.</p>
        <h4>Problem</h4><p>Users struggle to find parking quickly leading to wasted time.</p>
        <h4>Approach</h4><p>User research, mapping patterns, hi-fi prototypes and usability tests.</p>
        <h4>Outcome</h4><p>Reduced average time-to-park by 22% during pilot.</p>`
    },
    2: {
      title: 'Wardrobe Organizer',
      content: `<h2>Wardrobe Organizer</h2>
        <p>Upload wardrobe photos, categorize items and generate outfit suggestions with filters by occasion and weather.</p>
        <h4>Outcome</h4><p>Improved user retention and increased daily active sessions.</p>`
    },
    3: {
      title: 'Booking Flow Redesign',
      content: `<h2>Booking Flow Redesign</h2><p>Streamlined a multi-step booking flow, clarified copy, and reduced cognitive load.</p>`
    }
  };

  const c = cases[id] || {title:'Case study', content:'Case details coming soon.'};
  return `<article class="case-study">${c.content}</article>`;
}
