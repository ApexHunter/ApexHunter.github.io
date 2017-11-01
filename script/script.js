var navContent = document.querySelectorAll(".experience .wrapper-content");

$(".exp-nav li").click(function(){
	$(".exp-nav li.active").removeClass("active");
	$(this).addClass("active");
	var i = $(".exp-nav li").index(this);
	disappearAll();
	navContent[i].classList.remove("disappear");
})

function disappearAll(){
	for(var i=0; i<navContent.length;i++){
		navContent[i].classList.add("disappear");
	}
};
