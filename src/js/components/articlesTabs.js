const articleTabs = () => {

const buttonsWrap = document.querySelector('.articles__filter-box')
const buttons = document.querySelectorAll('.articles__filter-btn')
const firstBlock = document.querySelector('.articles__list-first-box')
buttonsWrap.addEventListener('click', (e) => {
    let target = e.target;
    if (target.classList.contains('articles__filter-btn') &&  !target.classList.contains('articles__filter-btn--first') ) {
        buttons.forEach(item => item.classList.remove('isActive'))
        target.classList.add('isActive')
            firstBlock.style.display = 'none'
            
 

    }
    if (target.classList.contains('articles__filter-btn--first') ) {
        buttons.forEach(item => item.classList.remove('isActive'))
        target.classList.add('isActive')
        firstBlock.style.display = 'grid'
        

    }
})



// const paginationBtns = document.querySelectorAll('.articles__pagination-btn')
// paginationBtns.forEach(item => {
//     item.addEventListener('click', () => {
//         paginationBtns.forEach(btn => btn.classList.remove('active'))
//         item.classList.add('active')
//     })
// })
}

export default articleTabs