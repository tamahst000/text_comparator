function updateCount(textareaId, countWithSpacesId, countWithoutSpacesId) {
  const textarea = document.getElementById(textareaId);
  const countWithSpacesSpan = document.getElementById(countWithSpacesId);
  const countWithoutSpacesSpan = document.getElementById(countWithoutSpacesId);
  const textWithSpacesLength = textarea.value.length;
  const textWithoutSpacesLength = textarea.value.replace(/\s+/g, "").length;

  countWithSpacesSpan.textContent = textWithSpacesLength;
  countWithoutSpacesSpan.textContent = textWithoutSpacesLength;

  if (textWithoutSpacesLength > 0) {
    countWithSpacesSpan.style.color = "red";
    countWithoutSpacesSpan.style.color = "red";
  } else {
    countWithSpacesSpan.style.color = "";
    countWithoutSpacesSpan.style.color = "";
  }
}

function resetText(textareaId, countWithSpacesId, countWithoutSpacesId) {
  const textarea = document.getElementById(textareaId);
  const countWithSpacesSpan = document.getElementById(countWithSpacesId);
  const countWithoutSpacesSpan = document.getElementById(countWithoutSpacesId);

  textarea.value = "";
  countWithSpacesSpan.textContent = "0";
  countWithSpacesSpan.style.color = "";
  countWithoutSpacesSpan.textContent = "0";
  countWithoutSpacesSpan.style.color = "";
}

function compareText() {
  const text1 = document.getElementById("text1").value;
  const text2 = document.getElementById("text2").value;

  const diff = JsDiff.createPatch("text1/text2", text1, text2);

  const diffHtml = Diff2Html.getPrettyHtml(diff, {
    outputFormat: "side-by-side",
    matching: "lines",
    drawFileList: false,
    fileListToggle: false,
    fileContentToggle: false,
  });

  document.getElementById("result").innerHTML = diffHtml;
}
