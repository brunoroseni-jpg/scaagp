async function loadComponent(containerId, componentName) {
    const html = await fetch(`/src/components/${componentName}/${componentName}.html`).then(r => r.text());
    document.getElementById(containerId).innerHTML = html;
    
}

window.addEventListener('load', () => {
    loadComponent('navbar', 'navbar');
    loadComponent('menuLateral', 'menuLateral');
})