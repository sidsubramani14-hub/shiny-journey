let currentUser = null;

function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (!username || !password) return;

  db.collection("users").doc(username).get().then(doc => {

    if (!doc.exists) {
      // create account
      db.collection("users").doc(username).set({
        password: password,
        wisps: [],
        level: 1
      });

      enterGame(username);
    } else {
      let data = doc.data();

      if (data.password !== password) {
        alert("Wrong password");
        return;
      }

      enterGame(username);
    }
  });
}

function enterGame(username) {
  currentUser = username;

  document.getElementById("loginBox").style.display = "none";
  document.getElementById("gameUI").style.display = "block";
}
