export function header() {
  const content = document.getElementById('content');
  const header = document.createElement('div');
  header.classList.add('header');
  const headLogo = document.createElement('h1');
  headLogo.textContent = 'THE ROTI WAY';
  headLogo.classList.add('logo');
  header.appendChild(headLogo);

  content.appendChild(header);
}
