let display = () => {
    const playGameBtn = document.querySelector(".play-game-btn")
    const choicesDiv = document.querySelector(".choices")
    const half = document.querySelector('.half')
    playGameBtn.classList.toggle('hide')
    half.classList.toggle('hide')
    choicesDiv.classList.toggle('hide')
};
