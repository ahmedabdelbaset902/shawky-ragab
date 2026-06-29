const paymentMethod = document.getElementById("paymentMethod");

paymentMethod.addEventListener("change", function () {

    document.querySelectorAll(".payment-box").forEach(box => {
        box.classList.add("d-none");
    });

    if (this.value === "vodafone")
        document.getElementById("vodafoneFields").classList.remove("d-none");

    if (this.value === "instapay")
        document.getElementById("instapayFields").classList.remove("d-none");

    if (this.value === "bank")
        document.getElementById("bankFields").classList.remove("d-none");

});


document.getElementById("consultForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const btn = document.getElementById("submitBtn");

    btn.disabled = true;
    btn.innerHTML = "جاري إرسال الطلب...";

    setTimeout(() => {

        alert("تم إرسال الطلب بنجاح.");

        this.reset();

        document.querySelectorAll(".payment-box").forEach(box => {
            box.classList.add("d-none");
        });

        btn.disabled = false;
        btn.innerHTML = "إرسال الاستشارة";

    },1500);

});