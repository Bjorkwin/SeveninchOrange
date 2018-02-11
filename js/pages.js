var lastPageName = null;

var pageToRoute = {
  home: '',
  about: '#about',
  contact: '#contact',
};

var routeToPage = {
  '#': 'home',
  '#about': 'about',
  '#contact': 'contact',
};

function setPage(name) {
  $('#page_' + lastPageName).css('display', 'none');
  $('#nav_' + lastPageName).removeClass('active');
  $('#nav_' + name).addClass('active');
  $('#page_' + name).css('display', 'block');
  lastPageName = name;

  window.location.hash = pageToRoute[name];
  correctStyles(name);
}

function correctStyles(name) {
  if (name === 'home') {
    $('#frontpage_styles').attr('disabled', false);
  } else {
    $('#frontpage_styles').attr('disabled', true);
  }
}

function loadPage() {
  lastPageName = routeToPage[window.location.hash || '#'];

  console.log(lastPageName);

  $('#page_' + lastPageName).css('display', 'block');
  $('#nav_' + lastPageName).addClass('active');

  correctStyles(lastPageName);
}

window.onload = function () {
  loadPage();

  setTimeout(function () {
    $('#postload_styles').attr('disabled', false);
  }, 250);
}
