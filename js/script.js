function updateCount(textareaId, countId) {
  const textarea = document.getElementById(textareaId);
  const countSpan = document.getElementById(countId);
  const textLength = textarea.value.length;

  countSpan.textContent = textLength;
  if (textLength > 0) {
    countSpan.style.color = "red";
  } else {
    countSpan.style.color = "";
  }
}

function resetText(textareaId, countId) {
  const textarea = document.getElementById(textareaId);
  const countSpan = document.getElementById(countId);

  textarea.value = "";
  countSpan.textContent = "0";
  countSpan.style.color = "";
}
