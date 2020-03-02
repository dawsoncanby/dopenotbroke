let page = 'homepage';

function selectPage(newPage) {

  $('#' + page).hide()
  $('#' + newPage).show()
  page = newPage;
}


$(document).ready(() => {
  $('#site-links').children('div').each((i, e) => {
    let link = $(e);
    let page = link.children('span').html().toLowerCase()
    link.on('click', () => {
      console.log(page);
      selectPage(page);
    })
  })

  selectPage(page);
})
