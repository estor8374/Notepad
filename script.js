
window.onload = () => {
  displayNotes();
};

function saveNote() {
  const title = document.getElementById("noteTitle").value.trim();
  const content = document.getElementById("noteContent").value.trim();
  if (!title || !content) {
    alert("Please enter both title and content!");
    return;
  }

  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push({ title, content });
  localStorage.setItem("notes", JSON.stringify(notes));
  clearInputs();
  displayNotes();
}

function clearInputs() {
  document.getElementById("noteTitle").value = "";
  document.getElementById("noteContent").value = "";
}

function deleteNote(index) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

function displayNotes() {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const notesList = document.getElementById("notesList");
  notesList.innerHTML = "";
  notes.forEach((note, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${note.title}</strong><br>${note.content.replace(/\n/g, "<br>")}
      <button onclick="deleteNote(${index})">🗑️</button>`;
    notesList.appendChild(li);
  });
}
