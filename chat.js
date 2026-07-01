function sendMessage() {
  let text = document.getElementById("msgInput").value;
  if (!text || !currentUser) return;

  db.collection("messages").add({
    user: currentUser,
    text: text,
    time: Date.now()
  });

  document.getElementById("msgInput").value = "";
}

// real-time listener
db.collection("messages")
  .orderBy("time")
  .onSnapshot(snapshot => {
    let box = document.getElementById("messages");
    box.innerHTML = "";

    snapshot.forEach(doc => {
      let msg = doc.data();
      let div = document.createElement("div");
      div.textContent = msg.user + ": " + msg.text;
      box.appendChild(div);
    });
  });
