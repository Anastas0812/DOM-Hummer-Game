import goblinImg from '../../img/goblin.png';

const totalCell = 16;

//создание сетки(игрового поля) 4х4 циклом
const gameContainer = document.getElementById('gameContainer');

for (let i = 0; i < totalCell; i++) {
  const gameItem = document.createElement('div');
  gameItem.className = 'game-item';
  gameItem.textContent = `${i + 1}`;
  gameContainer.append(gameItem);
}

let currentGoblin = null;
let previousCellIndex = null;

function createGoblin() {
  const goblin = document.createElement('img');
  goblin.className = 'goblin';
  goblin.src = goblinImg;
  goblin.alt = 'GOBLIN';
  return goblin;
}

export function showRandomGoblin() {
  const cells = document.querySelectorAll('.game-item');
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * totalCell);
  } while (randomIndex === previousCellIndex && totalCell > 1);

  if (currentGoblin) {
    currentGoblin.remove();
  }

  currentGoblin = createGoblin();
  cells[randomIndex].append(currentGoblin);
  previousCellIndex = randomIndex;
  return randomIndex;
}

//старая версия 
// export function addGoblin() {
//   const blocks = document.querySelectorAll('.game-item');

//   blocks.forEach((block, index) => {
//     const goblin = document.createElement('img');
//     console.log(`element img create in block ${index + 1}`);
//     goblin.className = 'goblin';
//     goblin.src = goblinImg;
//     goblin.alt = 'GOBLIN';
//     block.append(goblin);
//   });
// }

// export function showRandomGoblin() {
//   const randomIndex = Math.floor(Math.random() * 16);
//   const goblins = document.querySelectorAll('.goblin');
//   goblins.forEach(goblin => {
//     goblin.classList.remove('active');
//   });

//   goblins[randomIndex].classList.add('active');
// }



