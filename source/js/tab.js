$(function(){
$('.tab-panels>div').hide();
$('.tab-nav a').click(function(){                         // При клике на вкладку
$('.tab-panels>div').hide().filter(this.hash).show();   // - показывается блок с описанием текущей вкладки
$('.tab-nav li').removeClass('select');                 // - удаляется класс 'select' у активной ранее вкладки
$(this).parent().addClass('select');                    // - добавляется класс 'select' для выбранной вкладки
return (false);                                         // - прерывается обработка события onClick
})
$(function(){
$ ('.pop-block').each(function(){
var closeTrigger = $(this).find('.close-block').length;
if (closeTrigger < 1 ){ // проверяем наличие кнопки и если нет - добавляем
$(this).append('<span class="close-block"></span>');
}else{
return '';
}
$('.close-block').on('click', function(){
$(this).closest('.pop-block').fadeOut(100);
});
});
});
});
