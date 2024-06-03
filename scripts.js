function showSection(sectionId) {
    document.getElementById('main').style.display = 'none';
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function goBack() {
    document.getElementById('main').style.display = 'block';
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
}
