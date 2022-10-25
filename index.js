function sendMail() {
  var params = {
    to_name: "serududuy",
    from_name: document.getElementById("from_name").value,
    reply_to: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_c5te1ge";
  const templateID = "template_6sa0fz8";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("from_name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}

function kirimPesan() {
  var data = {
    service_id: "service_c5te1ge",
    template_id: "template_6sa0fz8",
    user_id: "R1n-THAfL2KuRRAz1",
    template_params: {
      to_name: "serududuy",
      from_name: document.getElementById("from_name").value,
      reply_to: document.getElementById("email").value,
      message: document.getElementById("message").value,
    },
  };

  fetch("https://api.emailjs.com/api/v1.0/email/send-form", {
    type: "POST",
    data: JSON.stringify(data),
    contentType: "application/json",
  })
    .then(() => {
      alert("Your mail is sent!");
      console.log(data);
    })
    .catch((error) => {
      alert("Oops... " + JSON.stringify(error));
      console.log(error);
    });
}
