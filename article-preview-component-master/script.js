const shareButton = document.querySelector('.share-icon');
const share = document.querySelector('.share')

shareButton.addEventListener('click', () => {
    share.classList.toggle('share-active')
})