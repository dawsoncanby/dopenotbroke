let page = 'homepage';

$(document).ready(() => {
  $('#about').hide();

  $('#site-links').children('div').each((i, e) => {
    let link = $(e);
    link.on('click', () => {
      let newPage = link.children('span').html().toLowerCase();
      $('#' + page).hide();
      $('#' + newPage).show();
    })
  })
})
