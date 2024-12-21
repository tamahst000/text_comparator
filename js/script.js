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

function copyText(textareaId, buttonId) {
  var textarea = document.getElementById(textareaId);
  var button = document.getElementById(buttonId);

  navigator.clipboard
    .writeText(textarea.value)
    .then(function () {
      var popover = new bootstrap.Popover(button, {
        trigger: "focus",
      });
      popover.show();

      setTimeout(function () {
        popover.hide();
      }, 1000);
    })
    .catch(function (error) {
      console.error("コピーに失敗しました: ", error);
    });
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
