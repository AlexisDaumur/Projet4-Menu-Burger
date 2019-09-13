$(document).ready(function(){     // FONTION QUI M'OUVRE MON MENU BLANC QUAND JE CLIC SUR MON BURGER
  $('.btn-navigation').click(function(){
    $('.nav-langue').toggleClass('isOpen');
  });
});

$(document).ready(function(){     // FONTION QUI TRANSFORME MES BARRE DE MON BURGER EN CROIX ET LA METTRE EN ROUGE
  $('.btn-navigation').click(function(){
    $('.barre').toggleClass('isOpen');
  });
});

$(document).ready(function(){     // FONTION QUI M'OUVRE MON MENU ROUGE QUAND JE CLIC SUR MON BURGER
  $('.btn-navigation').click(function(){
    $('.menu').toggleClass('isOpen');
  });
});

$(document).ready(function(){     // FONTION QUI M'OUVRE MON MENU GRIS QUE JE LE SURVOLLE
  $('.blocgris').hover(function(){
    $('.blocgris').toggleClass('stickbarre');
  });
});

$(document).ready(function(){     // FONTION QUI CHANGE L'OPICITY DE MES ANCRES
  $('.nav-menu').hover(function(){
    $('.gg').toggleClass('grey');
  });

});
