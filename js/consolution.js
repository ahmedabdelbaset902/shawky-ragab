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

    const form = this;
    const btn = document.getElementById("submitBtn");
    const successMessage = document.getElementById("successMessage");

    successMessage.classList.add("d-none");

    btn.disabled = true;
    btn.innerHTML = `
        <span class="spinner-border spinner-border-sm me-2" role="status"></span>
        جاري إرسال الطلب...
    `;

    emailjs.sendForm(
        "service_y24yl8d",
        "template_g30mnpp",
        form
    )
    .then(function (response) {

        console.log("SUCCESS!", response);

        form.reset();

        document.querySelectorAll(".payment-box").forEach(box => {
            box.classList.add("d-none");
        });

        successMessage.classList.remove("d-none");

        btn.classList.remove("btn-primary");
        btn.classList.add("btn-success");
        btn.disabled = true;
        btn.innerHTML = "✔ تم إرسال الطلب";

    })
    .catch(function (error) {

        console.error("EmailJS Error:", error);

        alert(
            "Status: " + (error.status || "Unknown") +
            "\n\nText: " + (error.text || "No message") +
            "\n\n" + JSON.stringify(error)
        );

        btn.disabled = false;
        btn.classList.remove("btn-success");
        btn.classList.add("btn-primary");
        btn.innerHTML = "إرسال الاستشارة";

    });

});