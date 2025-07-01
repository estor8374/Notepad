
window.onload = () => {
  const savedNote = localStorage.getItem("note");
  if (savedNote) {
    document.getElementById("note").value = savedNote;
  }
};

function saveNote() {
  const note = document.getElementById("note").value;
  localStorage.setItem("note", note);
  alert("Note saved locally!");
}

function clearNote() {
  if (confirm("Clear this note?")) {
    document.getElementById("note").value = "";
    localStorage.removeItem("note");
  }
}
