const input = document.querySelector("input");
const submitBtn = document.querySelector("button.addItems-submit");
const clearBtn = document.querySelector("button.displayItems-clear");
const addMessageDiv = document.querySelector("h4.addItems-action");
const removeMessageDiv = document.querySelector("h4.displayItems-action");
const groceryList = document.querySelector("div.grocery-list");

const addItem = (e) => {
  e.preventDefault();
  if (input.value.trim() !== "") {
    const singleItem = document.createElement("div");
    singleItem.innerHTML = ` <div class="grocery-item">
  <h4 class="grocery-item__title">${input.value}</h4>
  <a href="#" class="grocery-item__link">
      <i class="far fa-trash-alt"></i>
  </a>
</div>`;
    input.value = "";
    groceryList.appendChild(singleItem);

    addMessageDiv.classList.add("success");
    addMessageDiv.textContent = `${singleItem.textContent} added to  grocery list`;
    window.setTimeout(function () {
      addMessageDiv.classList.remove("success");
    }, 1000);

    const removeItem = () => {
      if (!removeMessageDiv.classList.contains("success")) {
        groceryList.removeChild(singleItem);
        removeMessageDiv.classList.add("success");
        removeMessageDiv.textContent = `${singleItem.textContent} Removed From The List`;
        window.setTimeout(function () {
          removeMessageDiv.classList.remove("success");
        }, 1000);
      }
    };
    singleItem.querySelector("a").addEventListener("click", removeItem);
  } else {
    addMessageDiv.classList.add("alert");
    addMessageDiv.textContent = "Please Add Grocery Item";
    window.setTimeout(function () {
      addMessageDiv.classList.remove("alert");
    }, 2000);
  }
};

const clearList = () => {
  removeMessageDiv.classList.add("alert");
  if (groceryList.textContent !== "") {
    groceryList.textContent = "";
    removeMessageDiv.textContent = "All Items Deleted";
  } else {
    removeMessageDiv.textContent = "No more Items to Delete";
  }
  window.setTimeout(function () {
    removeMessageDiv.classList.remove("alert");
  }, 2000);
};

submitBtn.addEventListener("click", addItem);
clearBtn.addEventListener("click", clearList);
