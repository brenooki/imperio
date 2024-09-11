AOS.init();

function toggleForm(type) {
    var formNatural = document.getElementById('form-natural');
    var formArtificial = document.getElementById('form-artificial');
    
    if (type === 'natural') {
        formNatural.style.display = formNatural.style.display === 'block' ? 'none' : 'block';
        formArtificial.style.display = 'none';
    } else if (type === 'artificial') {
        formArtificial.style.display = formArtificial.style.display === 'block' ? 'none' : 'block';
        formNatural.style.display = 'none';
    }
}
