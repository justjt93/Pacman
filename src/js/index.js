document.addEventListener('DOMContentLoaded', () => {
  const pacman = document.querySelector('.pacboy-active-light');

  let pacMouth = 85;
  document.addEventListener('click', () => {
    if(pacMouth === 0){
    pacMouth = 85;
    }else{
      pacMouth = 0;
    }
    pacman.style.backgroundPositionX = `${pacMouth}px`;
  });
});

    // background-position-x: 85px;