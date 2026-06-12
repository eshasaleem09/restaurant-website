// ===========================
// 1. NAVBAR — scroll pe dark background
// ===========================
const header = document.getElementById('header');

window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


// ===========================
// 2. HAMBURGER MENU — mobile toggle
// ===========================
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Menu link click pe band karo
navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});


// ===========================
// 3. MENU FILTER — category buttons
// ===========================
const filterBtns = document.querySelectorAll('.filter-btn');
const menuCards  = document.querySelectorAll('.menu-card');

filterBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {

    // Active button update karo
    filterBtns.forEach(function (b) {
      b.classList.remove('active');
    });
    btn.classList.add('active');

    // Cards filter karo
    const filter = btn.getAttribute('data-filter');

    menuCards.forEach(function (card) {
      if (filter === 'all') {
        card.classList.remove('hidden');
      } else if (card.getAttribute('data-category') === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });

  });
});


// ===========================
// 4. RESERVATION FORM — validation
// ===========================
function handleReservation() {
  const name   = document.getElementById('fname').value.trim();
  const phone  = document.getElementById('fphone').value.trim();
  const date   = document.getElementById('fdate').value;
  const guests = document.getElementById('fguests').value;

  // Check: koi field khali nahi honi chahiye
  if (!name || !phone || !date || !guests) {
    alert('Please fill in all fields.');
    return;
  }

  // Check: guests number 1 se zyada ho
  if (guests < 1) {
    alert('Number of guests must be at least 1.');
    return;
  }

  // Success dikhao
  document.getElementById('formFields').style.display  = 'none';
  document.getElementById('formSuccess').style.display = 'block';
}