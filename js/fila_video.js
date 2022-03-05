let video = $('.ma_fila .mafila_detail').find('li#linked');
console.log(video.length);
let i = 0;
function addarea(num){
    for(i=0;i<video.length;i++){
        if(num==i){
            video.eq(i).addClass('active');
            $('.addarea'+i).show();
        }else{
            video.eq(i).removeClass('active');
            $('.addarea'+i).hide();
        }
    }
}
