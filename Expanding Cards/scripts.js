const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClassName();
        panel.classList.add('active');
    });
});


function removeActiveClassName() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}