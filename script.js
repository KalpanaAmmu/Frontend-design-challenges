const projects = [
  'card-component',
  'coming-soon-page',
  'fylo-data-storage-component',
  'single-price-grid-component',
  'the-secret-of-success',
  'w3-interior-design',
];

const list = document.getElementById('list');

projects.forEach((name, i) => {
  const listItem = document.createElement('li');

  listItem.innerHTML = `
          <a href="/${name}/index.html">
              <img src="/${name}/design/desktop-design.jpg" alt="${name}" />
              <p>${i + 1}. ${formatProjectName(name)}</p>
          </a>
      `;

  list.appendChild(listItem);
});

function formatProjectName(name) {
  return name
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}
