$(document).ready(function(){
	$("#arrow_left").click(function(){
		$(".second").hide(10);
	});
	$("#arrow_right").click(function(){
		$(".second").show(1);
	});
});

$(document).ready(function(){
    $("#arrow_left").click(function(){
        $(".first").show(1);
    });
    $("#arrow_right").click(function(){
        $(".first").hide(1);
    });
});

$(document).ready(function(){
	$("#button_1").click(function(){
		if($("#info_1").show(1)){
			$("#info_2,#info_3").hide(1);
		};
	});
	$("#button_2").click(function(){
		if($("#info_2").show(1)){
			$("#info_1,#info_3").hide(1);
		};
	});
	$("#button_3").click(function(){
		if($("#info_3").show(1)){
			$("#info_1,#info_2").hide(1);
		};
	});
})
var x = 0;
$(document).ready(function(){
	$(".menu_icon").click(function(){
		x = 1 - x;
		if(x == 1){
			$(".menu").show("slow");
		}
		else{
			$(".menu").hide("slow");
		}
		return false;
	});
});
var y = 0;
$(document).ready(function(){
	$("#second_list").click(function(){
		y = 1 - y;
		if(y == 1){
			$("#categories").show("slow");
		}
		else{
			$("#categories").hide("slow");
		}
		return false;
	});
});
$(document).scroll(function(){
		if($(document).scrollTop() > $("#all").height() / 1.8){
			$("#registry").show("slow");
		}
		else{
			$("#registry").hide("slow");
		}
});

