
document.addEventListener('DOMContentLoaded', function() {
    var cities = document.querySelectorAll('.cities');

    cities.forEach(function(city) {
        city.addEventListener('mouseenter', function() {
            var para = this.querySelector('.para');
            para.style.display = 'block';
        });

        city.addEventListener('mouseleave', function() {
            var para = this.querySelector('.para');
            para.style.display = 'none';
        });
    });
});




document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('search-input');
  
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            var searchTerm = searchInput.value.trim();
            if (searchTerm !== '') {
                var searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchTerm);
                window.location.href = searchUrl;
            }
        }
    });
  });
