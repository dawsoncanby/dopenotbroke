let page = 'homepage';

function selectPage(newPage) {
  $('.page').hide()
  console.log($('.page'));
  $('#' + newPage).show()
  console.log(newPage);
  page = newPage;
}


$(document).ready(() => {
  $('#site-links').children('div').each((i, e) => {
    let link = $(e);
    let page = link.children('span').html().toLowerCase()
    link.on('click', () => {
      selectPage(page);
    })
  })

  selectPage(page);
})
