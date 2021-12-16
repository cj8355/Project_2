
const sendTestEmail = () => {
     fetch(`/api/email/send-email`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => {
        return res.json();
      }).then((data) => {
        console.log("data", data);
      });
}

document.querySelector("#send").addEventListener("click", sendTestEmail);