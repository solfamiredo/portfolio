new fullpage(
    '#wrap', 
    {
    autoScrolling:true ,
    anchors:['1page' , '2page' , '3page' , '4page' , '5page' , '6page' , '7page'],
    navigation:true
    }
);

    $('#wrap .section:nth-child(6) li a').on('click',function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        $('.popup').animate({'scrollTop':'0'},500);
        $('.popwrap .view').attr('src',href);
        $('.popwrap').show(300);
    });

    $('#wrap .popwrap').on('wheel' , function(e){
        e.stopPropagation();
    })


    $('.popwrap .close').click(function(){
        
        $('.popwrap').hide(300);
  
    });