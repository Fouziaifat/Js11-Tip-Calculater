let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    let totalBill = document.getElementById("totBill").value;
    let tipPercent = document.getElementById("tipPerc").value;
    let NoPeo = document.getElementById("noPeops").value;

    let billAmount = document.querySelector(".d1");
    let TipAmount = document.querySelector(".d2");
    let TotBillFinal = document.querySelector(".d3");
    let EachPay = document.querySelector(".d4");

    billAmount.innerHTML = "$" + totalBill;
    let tipamount = totalBill* (tipPercent/100)
    TipAmount.innerHTML = "$" + tipamount;

    let plus = Number(totalBill) + Number(tipamount);
    TotBillFinal.innerHTML = "$" + plus;

    let each = plus / NoPeo;
    EachPay.innerHTML = each.toFixed(2);
});
