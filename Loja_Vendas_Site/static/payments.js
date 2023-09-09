$(document).ready(function() {
  // Validação e manipulação do formulário de pagamento
  $("#paymentForm").submit(function(event) {
    event.preventDefault();
    
    // Obter os valores dos campos do formulário
    var name = $("#name").val();
    var cardNumber = $("#cardNumber").val();
    var expiration = $("#expiration").val();
    var cvv = $("#cvv").val();
    
    // Simular validação (aqui você pode adicionar lógica de validação real)
    if (name === "" || cardNumber === "" || expiration === "" || cvv === "") {
      $("#paymentMessage").html("<p>Preencha todos os campos.</p>");
    } else {
      // Simular processamento de pagamento bem-sucedido
      $("#paymentMessage").html("<p>Pagamento confirmado com sucesso!</p>");
      // Limpar campos do formulário após o sucesso
      $("#name").val("");
      $("#cardNumber").val("");
      $("#expiration").val("");
      $("#cvv").val("");
    }
  });
});
