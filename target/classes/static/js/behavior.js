/**
 * 
 */

$(document).ready(function() {
	$("#emoji-div").emoji({
		callback: function(event, value) {
			$("#starsValue").val(value);
		}
	});
	
	$("form").submit(function(e) {
		e.preventDefault();
	});
	
	$("#submitBtn").click(function() {
		var rating = $("#starsValue").val();
		var email = $("#emailInput").val();

		var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!email.match(emailRegex)) {
			swal("Error", "Invalid email address", "error");
		} else {
			$.post("/submit", { rating: rating, email: email })
			.done(function(data) {
				swal({
					text: 'Thanks for your response!',
					button: {
						text: "Go",
						closeModal: true,
					},
				}).then(function(data) {
					location.reload();
				});
			});
		}
		
	});
});