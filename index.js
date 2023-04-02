$(window).load(function() {

    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

}); 
//var MyForm= document;
$(document).ready(function(){
	document.getElementById("submitButton").disabled = false;
	var validName = false;
	var validEmail = false;
	var validPhone = false;

	$("#myForm").submit(function(event){
		event.preventDefault();


		var name = $("#fio").val();
		var email = $("#email").val();
		var phone = $("#phone").val();
		var regFIO =/^([а-яё]+ [а-яё]+ [а-яё]+)|([a-z']+ [a-z']+ [a-z']+)$/ig ; 
		var regEmail = /^[a-z0-9_-]+((@yandex\.ru)|(@yandex\.ua)|(@yandex\.by)|(@ya\.ru)|(@yandex\.kz)|(@yandex\.com))$/ig;
		var regPhone = /^\+7\(\d{3}\)\d{3}\-\d{2}\-\d{2}$/g;
		if(name == ""|| name==" " ||(regFIO.test(name))==false) {  
			$("#fio").parent().removeClass("has-success").addClass("has-error");	
			$(".nameBlock").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
			$(".nameBlock .glyphicon-ok").remove();
			validName = false;
			
		} else  {
			$("#fio").parent().removeClass("has-error").addClass("has-success");	
			$(".nameBlock").append("<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
			$(".nameBlock .glyphicon-remove").remove();
			validName = true;
		}
		// console.log(regFIO.test(name), "regFIO-test");
		// console.log(validName, "validName");
		// console.log(name.search(regFIO));
		// console.log(name.match(regFIO));

		if(email =="" || email==" " ||(regEmail.test(email))==false) {
			$("#email").parent().removeClass("has-success").addClass("has-error");	
			$(".emailBlock").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
			$(".emailBlock .glyphicon-ok").remove();
			validEmail = false;	
		} else {
			$("#email").parent().removeClass("has-error").addClass("has-success");	
			$(".emailBlock").append("<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
			$(".emailBlock .glyphicon-remove").remove();
			validEmail = true;	
		}
		// console.log(regEmail.test(email), "regEmail-test");
		// console.log(validEmail, "validEmail");
		// console.log(email.search(regEmail));
		// console.log(email.match(regEmail));

		function FuckingSum(phone){
			var sum=0;
			for (var i=0,size=phone.length;i<size;i++) {
				phone[i]=parseInt(phone[i],10); //мало ли
				sum = +phone[3] + +phone[4] + +phone[5] + +phone[7] + +phone[8] + +phone[9] + +phone[11] + +phone[12] + +phone[14] + +phone[15]
			}
		return sum;
		}
		FuckingSum(phone);
		//console.log(FuckingSum(phone));
		
		if(phone == ""|| phone==" "||(regPhone.test(phone))==false|| FuckingSum(phone)>23) {
			$("#phone").parent().removeClass("has-success").addClass("has-error");	
			$(".phoneBlock").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
			$(".phoneBlock .glyphicon-ok").remove();
			validPhone = false;	
		} else {
			$("#phone").parent().removeClass("has-error").addClass("has-success");	
			$(".phoneBlock").append("<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
			$(".phoneBlock .glyphicon-remove").remove();
			validPhone = true;	
		}
		// console.log(regPhone.test(phone), "regPhone-test");
		// console.log(validPhone, "validPhone");
		// console.log(phone.search(regPhone));
		// console.log(phone.match(regPhone));

		if(validName == true && validEmail == true && validPhone == true) {
			$("form").unbind('submit').submit();
			function delayClick() {
				$('#submitButton').click();
			}
			function delayDisabledButton(){
				document.getElementById("submitButton").disabled = true;
			}
			setTimeout(delayClick, 5);
			setTimeout(delayDisabledButton, 10);
			
			//document.getElementById("myForm").action="action.js";
 			// $("#submitButton").on('click', function(){
 			// });
			$("#myForm").on("submit", function() {
				$.ajax({
	                url: 'test.php', // url where to submit the request
	                type : "GET", // type of action POST || GET
	                dataType : 'json', // data type
	                data : $("#myForm").serialize(), // post data || get data
	                success : function(result) {
	                    // you can see the result from the console
	                    // tab of the developer tools
	                    console.log(result);
	                },
	                error: function(xhr, resp, text) {
	                    console.log(xhr, resp, text);
	                }
	            });
    
			});

				




			

		} else { 
			alert("не отправил");
		}

	});

});




