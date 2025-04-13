const correctId = "Landge000";
const correctPass = "Landge@000";

function checkLogin() {
  const id = document.getElementById("loginId").value;
  const pass = document.getElementById("loginPass").value;
  if (id === correctId && pass === correctPass) {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("app").style.display = "block";
  } else {
    alert("चुकीचा ID/Password");
  }
}

function addSubject() {
  const name = document.getElementById("newSubject").value;
  if (!name) return;

  const container = document.createElement("div");
  container.className = "note-card";
  container.innerHTML = \`
    <h3>\${name}</h3>
    <textarea id="text_\${name}" placeholder="Write your note..."></textarea>
    <br/>
    <input type="file" accept="image/*,video/*" />
    <select onchange="translateNote(this, 'text_\${name}')">
      <option value="">Translate to...</option>
      <option value="hi">Hindi</option>
      <option value="mr">Marathi</option>
      <option value="fr">French</option>
    </select>
    <button onclick="saveNote('\${name}')">Save</button>
    <button onclick="deleteNote(this)">Delete</button>
  \`;
  document.getElementById("subjects").appendChild(container);
}

function saveNote(name) {
  const content = document.getElementById(\`text_\${name}\`).value;
  localStorage.setItem(\`note_\${name}\`, content);
  alert("Note saved!");
}

function deleteNote(btn) {
  if (confirm("Delete this note?")) {
    btn.parentElement.remove();
  }
}

function translateNote(select, textareaId) {
  const lang = select.value;
  const text = document.getElementById(textareaId).value;

  if (!lang || !text) return;

  // Dummy translation (for demo only)
  document.getElementById(textareaId).value = \`[\${lang}] \${text}\`;
}