function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
$(function () {
  $(document).scroll(function () {
	  var $nav = $(".navbar");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});