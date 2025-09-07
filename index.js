// index.js
function generateBarcode() {
  const input = document.getElementById("barcode-input").value.trim();
  const barcodeElement = document.getElementById("barcode");

  if (input !== "") {
    JsBarcode(barcodeElement, input, {
      format: "CODE128",
      lineColor: "#000",
      width: 2,
      height: 100,
      displayValue: true
    });
  } else {
    barcodeElement.innerHTML = "";
  }
}


function handleInput() {
  generateBarcode();
}

function appendNumber(num) {
  const inputEl = document.getElementById("barcode-input");
  inputEl.value += num;
  generateBarcode();
}

function deleteOneChar() {
  const inputEl = document.getElementById("barcode-input");
  inputEl.value = inputEl.value.slice(0, -1);
  generateBarcode();
}

function clearAll() {
  document.getElementById("barcode-input").value = "";
  document.getElementById("barcode").innerHTML = "";
}
// tab all

function appendNumberAll(num) {
  const textarea = document.getElementById("barcode-input-all");
  textarea.value += num;
}

function deleteOneCharAll() {
  const textarea = document.getElementById("barcode-input-all");
  textarea.value = textarea.value.slice(0, -1);
}

function clearAllIn() {
  document.getElementById("barcode-input-all").value = "";
}

// function showBarcodeModal() {
//   const modal = document.getElementById("barcodeModal");
//   const barcodeList = document.getElementById("barcode-list");
//   const input = document.getElementById("barcode-input-all").value.trim(); // dùng ID mới

//   barcodeList.innerHTML = "";

//   const codes = input.split(/[\n,]+/).map(code => code.trim()).filter(code => code !== "");

//   if (codes.length === 0) {
//     alert("Vui lòng nhập ít nhất một mã vạch.");
//     return;
//   }

//   modal.style.display = "flex";

//   setTimeout(() => {
//     codes.forEach(code => {
//       const container = document.createElement("div");
//       const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

//       try {
//         JsBarcode(svg, code, {
//           format: "CODE128",
//           lineColor: "#000",
//           width: 2,
//           height: 100,
//           displayValue: true
//         });

//         container.appendChild(svg);
//       } catch (e) {
//         const errorMsg = document.createElement("p");
//         errorMsg.textContent = `Mã lỗi: ${code}`;
//         errorMsg.style.color = "red";
//         container.appendChild(errorMsg);
//       }

//       barcodeList.appendChild(container);
//     });
//   }, 50);
// }


function showBarcodeModal() {
  const barcodeList = document.getElementById("barcode-list");
  const input = document.getElementById("barcode-input-all").value.trim();

  barcodeList.innerHTML = "";

  const codes = input.split(/[\n,]+/).map(code => code.trim()).filter(code => code !== "");

  if (codes.length === 0) {
    alert("Vui lòng nhập ít nhất một mã vạch.");
    return;
  }

  setTimeout(() => {
    codes.forEach((code, index) => {
      const container = document.createElement("div");
      container.style.display = "flex";
      container.style.alignItems = "center";
      container.style.gap = "10px";
      container.style.marginBottom = "15px";

      // Tạo số thứ tự
      const indexLabel = document.createElement("span");
      indexLabel.textContent = `${index + 1}.`;
      indexLabel.style.fontWeight = "bold";
      indexLabel.style.minWidth = "30px";

      // Tạo SVG mã vạch
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

      try {
        JsBarcode(svg, code, {
          format: "CODE128",
          lineColor: "#000",
          width: 2,
          height: 100,
          displayValue: true
        });

        container.appendChild(indexLabel); // Thêm STT
        container.appendChild(svg);        // Thêm barcode
      } catch (e) {
        const errorMsg = document.createElement("p");
        errorMsg.textContent = `Mã lỗi: ${code}`;
        errorMsg.style.color = "red";
        container.appendChild(errorMsg);
      }

      barcodeList.appendChild(container);
    });

  }, 50);
}
