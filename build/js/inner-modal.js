$(function(){
$("#modalButton_1").click(function() {
  document.getElementById('modal_1').classList.add('active');
  document.querySelector('.close-menu').classList.add('close-menu-active');
});
});

$(function(){
$("#modalButton_2").click(function() {
document.getElementById('modal_2').classList.add('active');
document.querySelector('.close-menu').classList.add('close-menu-active');
});
});

$(function(){
$("#modalButton_3").click(function() {
document.getElementById('modal_3').classList.add('active');
document.querySelector('.close-menu').classList.add('close-menu-active');
});
});

$(function(){
$(".close-menu").click(function() {
document.getElementById('modal_1').classList.remove('active');
document.getElementById('modal_2').classList.remove('active');
document.getElementById('modal_3').classList.remove('active');
document.querySelector('.close-menu').classList.remove('close-menu-active')
});
});

/* Tablet_version */


$(function(){
$("#modalButton_10").click(function() {
  document.getElementById('modal_10').classList.add('active');
  document.querySelector('.close-menu').classList.add('close-menu-active');
});
});

$(function(){
$("#modalButton_20").click(function() {
document.getElementById('modal_20').classList.add('active');
document.querySelector('.close-menu').classList.add('close-menu-active');
});
});

$(function(){
$("#modalButton_30").click(function() {
document.getElementById('modal_30').classList.add('active');
document.querySelector('.close-menu').classList.add('close-menu-active');
});
});

$(function(){
$(".close-menu").click(function() {
document.getElementById('modal_10').classList.remove('active');
document.getElementById('modal_20').classList.remove('active');
document.getElementById('modal_30').classList.remove('active');
document.querySelector('.close-menu').classList.remove('close-menu-active')
});
});
