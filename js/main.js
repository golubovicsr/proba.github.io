   // Selektuj dugme
  const backToTop = document.getElementById('backToTop');

  // Prikazi ili sakrij dugme prilikom skrola
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // kada je skrol > 200px
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });

  // Klik dugmeta vodi na vrh sa glatkom animacijom
  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // animacija se desi samo prvi put
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.addEventListener("DOMContentLoaded", function() {
  const rows = document.querySelectorAll('.lokacijeTreninga .row');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // jednom kada se pojavi
      }
    });
  }, { threshold: 0.1 }); // 10% elemenata mora biti vidljivo

  rows.forEach(row => observer.observe(row));
});



const vestWrappers = document.querySelectorAll('.vesti-img-wrapper, .vesti-text-wrapper');

const vestObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

vestWrappers.forEach(item => vestObserver.observe(item));

//lokacije filter
document.addEventListener('DOMContentLoaded', function() {
  const filter = document.getElementById('opstinaFilter');
  if (filter) {
    const filtrirajLokacije = () => {
      const lokacije = document.querySelectorAll('div[data-opstina]');
      const izabranaOpstina = filter.value;
      lokacije.forEach(lokacija => {
        if (izabranaOpstina === 'sve' || lokacija.dataset.opstina === izabranaOpstina) {
          lokacija.style.display = '';
        } else {
          lokacija.style.display = 'none';
        }
      });
    };
    filter.addEventListener('change', filtrirajLokacije);
    filtrirajLokacije();
  }
});

//sekcija faq na index stranici
document.addEventListener("DOMContentLoaded", function() {
  const faqElements = document.querySelectorAll('.faq h2, .faq .accordion-button, .faq .accordion-body');

  faqElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  });

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  faqElements.forEach(el => observer.observe(el));
});


//blog
const blogSection = document.querySelector('.blog');
const accordionItems = document.querySelectorAll('.accordion-item');

const blogObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      blogObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

if (blogSection) blogObserver.observe(blogSection);

accordionItems.forEach(item => blogObserver.observe(item));

// Inicijalno postavi elemente "nevidljivima" i pomaknuto
if (blogSection) {
  blogSection.style.opacity = '0';
  blogSection.style.transform = 'translateY(20px)';
}

accordionItems.forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(20px)';
});

//o-nama
document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.o-nama .row, .o-nama > .container > .text-center, .o-nama p');

  elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  });

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});

//zasto karate
document.addEventListener("DOMContentLoaded", function() {
  const revealElements = document.querySelectorAll('.zasto-karate .reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  revealElements.forEach(el => observer.observe(el));
});


//programi vezbanja
document.addEventListener("DOMContentLoaded", function() {

  const programElements = document.querySelectorAll(
    '.hero-programi h1, .hero-programi p, ' +
    'section.py-5.px-custom p, ' +
    '.program-card, ' +
    '.value-item, ' +
    '.cta-section h2, .cta-section p, .cta-section a'
  );

  programElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  });

  const programObserver = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observerInstance.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0, 
    rootMargin: "0px 0px -100px 0px" 
  });

  programElements.forEach(el => programObserver.observe(el));

});









