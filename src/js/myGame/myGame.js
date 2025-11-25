const goblinImg = new URL('../../img/goblin.png', import.meta.url);


export function addGoblin() {
  const blocks = document.querySelectorAll('.game-item');

  blocks.forEach((block, index) => {
    const goblin = document.createElement('img');
    console.log(`element img create in block ${index + 1}`);
    goblin.className = 'goblin';
    goblin.src = goblinImg;
    goblin.alt = 'GOBLIN';
    block.appendChild(goblin);
  });
}

export function showRandomGoblin() {
  const randomIndex = Math.floor(Math.random() * 16);
  const goblins = document.querySelectorAll('.goblin');
  goblins.forEach(goblin => {
    goblin.classList.remove('active');
  });

  goblins[randomIndex].classList.add('active');
}



