function toggleNav() {
    var nav = document.getElementById('nav');
    var toggle = document.getElementById('navbar-toggle-icon');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
        
    } else {
        nav.style.display = 'block';
    }
    if (toggle.style.display= 'none'){
        toggle.style.display= 'block';
        
    }
}