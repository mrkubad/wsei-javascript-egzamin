document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#container');
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', e => {
            container.innerHTML = e.target.dataset.text;
        });
    });
});