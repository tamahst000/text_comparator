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

// TODO: 複数の差分を表示できるようにする
// TODO: 改行、空白も結果に表示できるようにする
function compareText() {
  const text1 = document.getElementById("text1").value;
  const text2 = document.getElementById("text2").value;

  const diff = calculateDiff(text1, text2);
  displayDiff(diff);
}

function calculateDiff(text1, text2) {
  const chars1 = text1.split("");
  const chars2 = text2.split("");
  const diff = [];
  let i = 0,
    j = 0;

  while (i < chars1.length || j < chars2.length) {
    if (i >= chars1.length) {
      diff.push({ type: "add", char: chars2[j] });
      j++;
    } else if (j >= chars2.length) {
      diff.push({ type: "remove", char: chars1[i] });
      i++;
    } else if (chars1[i] !== chars2[j]) {
      diff.push({ type: "remove", char: chars1[i] });
      diff.push({ type: "add", char: chars2[j] });
      i++;
      j++;
    } else {
      diff.push({ type: "same", char: chars1[i] });
      i++;
      j++;
    }
  }

  return diff;
}

function displayDiff(diff) {
  const resultDiv1 = document.getElementById("result1");
  resultDiv1.innerHTML = "";
  const resultDiv2 = document.getElementById("result2");
  resultDiv2.innerHTML = "";

  let diffText1 = "";
  let diffText2 = "";
  diff.forEach((d) => {
    switch (d.type) {
      case "add":
        diffText1 += `<span class="diff-add">${d.char}</span>`;
        break;
      case "remove":
        diffText2 += `<span class="diff-remove">${d.char}</span>`;
        break;
      case "same":
        diffText1 += `<span>${d.char}</span>`;
        diffText2 += `<span>${d.char}</span>`;
        break;
    }
  });

  resultDiv1.innerHTML = `
  <div>${diffText1}</div>
  `;

  resultDiv2.innerHTML = `
  <div>${diffText2}</div>
  `;
}
