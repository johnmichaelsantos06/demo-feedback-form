/**
 * 
 */

$(document).ready(function() {
	var list = [
		{
			key: 1,
			value: 5
		},
		{
			key: 2,
			value: 4
		},
		{
			key: 3,
			value: 3
		},
		{
			key: 4,
			value: 2
		},
		{
			key: 5,
			value: 1
		}
	];
	list.forEach(function(data, i) {
		$("#star" + data.key).click(function() {
			$("#starsValue").val(data.value);
		});
	})
	
	$("#submitBtn").click(function() {
		swal({
			text: 'Thanks for your response! Please enter your email to get an exclusive promo!',
			content: "input",
			button: {
				text: "Go",
				closeModal: true,
			},
		}).then(function(email) {
				var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				if (!email.match(emailRegex)) {
					swal("Error", "Invalid email address", "error");
				} else {
					var rating = $("#starsValue").val();
					
					$.post("/submit", { rating: rating, email: email })
						.done(function(data) {
							location.reload();
					});
				}
		});
	});
});