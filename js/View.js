class View {
  constructor() {
    this.containerRoot = document.getElementById("root");

    this.containerCategoryList = document.createElement("div");
    this.containerCategoryList.className = "containerCategoryList";
    this.nameApp = document.createElement("h3");
    this.nameApp.className = "title";
    this.nameApp.textContent = "todo";
    this.labelBox = document.createElement("div");
    this.labelBox.className = "label-box label-category";
    this.label = document.createElement("h1");
    this.label.className = "label";
    this.label.textContent = "Your List";
    this.labelBox.appendChild(this.label);
    this.categoryList = document.createElement("ul");
    this.categoryList.className = "list categoryList";

    this.containerForm = document.createElement("div");
    this.containerForm.className = "container-form form-category";
    this.formCategory = document.createElement("form");
    this.formCategory.className = "form-category";
    this.inputCategory = document.createElement("input");
    this.inputCategory.type = "text";
    this.inputCategory.className = "name-category";
    this.inputCategory.placeholder = "add category tasks ...";
    this.btnAddCategory = document.createElement("button");
    this.btnAddCategory.type = "submit";
    this.btnAddCategory.className = "btn btn-add";
    this.containerForm.appendChild(this.formCategory);
    this.formCategory.append(this.inputCategory, this.btnAddCategory);

    this.containerCategoryList.append(
      this.nameApp,
      this.labelBox,
      this.categoryList,
      this.containerForm
    );

    this.containerTasksList = document.createElement("div");
    this.containerTasksList.className = "containerTasksList";

    this.containerNameCategory = document.createElement("div");
    this.containerNameCategory.className = "label-box label-tasks";

    this.nameCategory = document.createElement("h1");
    this.nameCategory.className = "label";

    this.containerNameCategory.appendChild(this.nameCategory);

    this.tasksList = document.createElement("ul");
    this.tasksList.className = "list listTasks";

    this.containerForm = document.createElement("div");
    this.containerForm.className = "container-form form-tasks";

    this.containerTasksList.append(
      this.containerNameCategory,
      this.tasksList,
      this.containerForm
    );

    this.containerRoot.append(
      this.containerCategoryList,
      this.containerTasksList
    );

    this._newTextTask = "";
    this.editTask();
  }

  showCategories(categories) {
    while (this.categoryList.firstChild) {
      this.categoryList.firstChild.remove();
    }

    if (categories.length === 0) {
      const msg = document.createElement("h3");
      msg.textContent = "Empty lists !";
      this.categoryList.appendChild(msg);
    } else {
      categories.forEach(category => {
        const liCategory = document.createElement("li");
        liCategory.textContent = category.name;
        liCategory.dataset.idCategory = category.id;
        if (category.selected === true) {
          liCategory.classList.add("selected");
        }
        this.categoryList.appendChild(liCategory);
      });
    }
  }

  bindHandleAddCategory(handler) {
    this.formCategory.addEventListener("submit", e => {
      e.preventDefault();
      if (this.inputCategory.value == "") return;
      const name = this.inputCategory.value;
      handler(name);
      this.inputCategory.value = "";
      this.containerCategoryList.classList.add("slide-out");
      this.containerTasksList.classList.add("slide-in");
    });
  }

  bindHandleSelectedCategory(handler) {
    this.categoryList.addEventListener("click", e => {
      if (e.target.tagName.toLowerCase() !== "li") return;
      else {
        const liCategory = e.target;
        let idCategory = liCategory.dataset.idCategory;
        idCategory = parseInt(idCategory);
        handler(idCategory);
        this.containerCategoryList.classList.add("slide-out");
        this.containerTasksList.classList.add("slide-in");
      }
    });
  }

  bindHandleRemoveCategory(handler) {
    this.containerTasksList.addEventListener("click", e => {
      if (
        e.target.tagName.toLowerCase() === "button" &&
        e.target.classList.contains("btn-remove-category")
      ) {
        this.containerCategoryList.classList.remove("slide-out");
        this.containerTasksList.classList.remove("slide-in");
        const idCategory = e.target.dataset.idCategory;
        handler(idCategory);
      } else return;
    });
  }

  showTasksLabel(idCategory, nameCategory, countTasks) {
    while (this.containerNameCategory.firstChild) {
      this.containerNameCategory.firstChild.remove();
    }

    if (nameCategory === null) {
      this.nameCategory.textContent = "Select list ...";
      this.containerNameCategory.appendChild(this.nameCategory);
    } else {
      const btnBack = document.createElement("button");
      btnBack.className = "btn btn-back";
      const btnRemoveCategory = document.createElement("button");
      btnRemoveCategory.className = "btn btn-remove-category";
      btnRemoveCategory.dataset.idCategory = idCategory;

      this.nameCategory.textContent = nameCategory;

      const counter = document.createElement("span");
      counter.className = "count-task";

      const counterText = countTasks === 1 ? "task" : "tasks";

      counter.textContent = `${countTasks} ${counterText} to do`;

      this.containerNameCategory.append(
        btnBack,
        btnRemoveCategory,
        this.nameCategory,
        counter
      );
      btnBack.addEventListener("click", () => {
        this.containerCategoryList.classList.remove("slide-out");
        this.containerTasksList.classList.remove("slide-in");
      });
    }
  }

  showTasks(tasks) {
    while (this.tasksList.firstChild) {
      this.tasksList.firstChild.remove();
    }
    while (this.containerForm.firstChild) {
      this.containerForm.firstChild.remove();
    }

    if (tasks === null) {
      const msg = document.createElement("h3");
      msg.textContent = "Choose or create new list of tasks ...";
      this.tasksList.appendChild(msg);
    } else {
      if (tasks.length === 0) {
        const msg = document.createElement("h3");
        msg.textContent = "Nothing to do ! add a new task ...";
        this.tasksList.appendChild(msg);

        const formTask = document.createElement("form");
        const inputTask = document.createElement("input");
        inputTask.type = "text";
        inputTask.className = "textTask";
        inputTask.placeholder = "add task ...";
        const btnAddTask = document.createElement("button");
        btnAddTask.type = "submit";
        btnAddTask.className = "btn btn-add";
        formTask.append(inputTask, btnAddTask);

        this.containerForm.appendChild(formTask);
      } else {
        tasks.forEach(task => {
          const liTask = document.createElement("li");
          const statusTask = document.createElement("label");
          statusTask.className = "statusTask";
          const taskDone = document.createElement("input");
          taskDone.type = "checkbox";
          if (task.completed) {
            taskDone.setAttribute("checked", true);
            taskDone.classList.add("task-completed");
          }
          const btnTaskDone = document.createElement("span");
          btnTaskDone.className = "btn-task-done";
          statusTask.append(taskDone, btnTaskDone);

          const taskText = document.createElement("div");
          taskText.className = "text-task";
          taskText.setAttribute("contenteditable", true);
          taskText.textContent = task.text;
          liTask.dataset.idTask = task.id;
          if (task.completed) liTask.classList.add("completed");

          const btnRemove = document.createElement("button");
          btnRemove.className = "btn-remove";

          liTask.append(statusTask, taskText, btnRemove);
          this.tasksList.appendChild(liTask);
        });
        const formTask = document.createElement("form");
        const inputTask = document.createElement("input");
        inputTask.type = "text";
        inputTask.className = "textTask";
        inputTask.placeholder = "add task ...";
        const btnAddTask = document.createElement("button");
        btnAddTask.type = "submit";
        btnAddTask.className = "btn btn-add";
        formTask.append(inputTask, btnAddTask);

        this.containerForm.appendChild(formTask);
      }
    }
  }

  bindHandleAddTasks(handler) {
    this.containerForm.addEventListener("submit", e => {
      e.preventDefault();
      const inputTask = this.containerForm.querySelector("input");
      if (inputTask.value == "") return;
      const text = inputTask.value;

      handler(text);

      inputTask.value = "";
    });
  }

  getIdTask(btn) {
    let idTask = btn.parentNode.dataset.idTask;
    idTask = parseInt(idTask);
    return idTask;
  }

  bindHandleRemoveTask(handler) {
    this.containerTasksList.addEventListener("click", e => {
      if (!e.target.tagName.toLowerCase() === "button") return;
      const btn = e.target;
      if (btn.classList.contains("btn-remove")) {
        const idTask = this.getIdTask(btn);
        handler(idTask, "removeTask");
      } else return;
    });
  }

  bindHandleMakeCompletedTask(handler) {
    this.tasksList.addEventListener("change", e => {
      if (!e.target.type === "checkbox") return;
      const btn = e.target.parentNode;

      const idTask = this.getIdTask(btn);
      handler(idTask, "makeCompleted");
    });
  }

  editTask() {
    this.containerTasksList.addEventListener("input", e => {
      if (e.target.hasAttribute("contenteditable")) {
        this._newTextTask = e.target.textContent;
      } else return;
    });
  }
  bindHandleEditTask(handler) {
    this.containerTasksList.addEventListener("focusout", e => {
      if (this._newTextTask) {
        const idTask = this.getIdTask(e.target);
        const editText = this._newTextTask;
        handler(idTask, "textEdit", editText);
      }
    });
  }
}
