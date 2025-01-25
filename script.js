function verificarCompra() {
    const produto = document.getElementById("produto").value;
    const saldo = parseFloat(document.getElementById("saldo").value);

    let precoProduto;
    if (produto === "sanduiche") {
        precoProduto = 8.00;
    } else if (produto === "refri") {
        precoProduto = 5.00;
    } else if (produto === "batata") {
        precoProduto = 6.50;
    } else if (produto === "agua") {
        precoProduto = 2.00;
    }

    if (isNaN(saldo) || saldo <= 0) {
        document.getElementById("resultado").innerText = "Por favor, insira um saldo válido!";
        document.getElementById("resultado").className = "insuficiente";
        return;
    }

    if (saldo >= precoProduto) {
        const troco = saldo - precoProduto;
        document.getElementById("resultado").innerText = `Compra realizada com sucesso! Troco: R$${troco.toFixed(2)}`;
        document.getElementById("resultado").className = "sucesso";
    } else {
        document.getElementById("resultado").innerText = "Saldo insuficiente para a compra.";
        document.getElementById("resultado").className = "insuficiente";
    }
}
