function login() {
	$("#sentResponseLogin").html("Usuário não encontrado!").show();
}

function signUp() {
	var agree = $("#agree").is(":checked");
	if(agree) {
		$("#sentResponseSignup").html("Você concordou com nossos termos de uso. Então você não discorda de tudo.").show();
	} else {
		$("#sentResponseSignup").html("Para fazer o cadstro, você precisa concordar com os termos de uso.").show();
	}
}