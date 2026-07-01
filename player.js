let playerData = {
  level: 1,
  wisps: [],
  xp: 0
};

function loadPlayer(username) {
  db.collection("users").doc(username).get().then(doc => {
    playerData = doc.data();
  });
}

function savePlayer() {
  db.collection("users").doc(currentUser).update(playerData);
}
