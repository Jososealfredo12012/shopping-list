const itemForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");
const itemFilter = document.querySelector("#filter");
const clearBtn = document.querySelector("#clear");

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;
  // Validate input
  if (newItem === "") {
    alert("Please add an item");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `${itemInput.value}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`;

  itemList.appendChild(li);

  checkUI();

  itemInput.value = "";
}

/**
 * @param {MouseEvent} e
 */
function removeItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    e.target.parentElement.parentElement.remove();
  }

  checkUI();
}

function clearItems() {
  if (confirm("Are you sure?")) {
    while (itemList.firstChild) {
      itemList.lastChild.remove();
    }
  }

  checkUI();
}

function checkUI() {
  const items = itemList.querySelectorAll("li");
  if (!items.length) {
    clearBtn.classList.add("hide");
    itemFilter.classList.add("hide");
  } else {
    clearBtn.classList.remove("hide");
    itemFilter.classList.remove("hide");
  }
}



itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click", clearItems);
checkUI();
