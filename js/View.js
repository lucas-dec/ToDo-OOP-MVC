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
    this.formCategory = document.createElement("form");
    this.formCategory.className = "form-category";
    this.inputCategory = document.createElement("input");
    this.inputCategory.type = "text";
    this.inputCategory.className = "name-category";
    this.inputCategory.placeholder = "add category tasks ...";
    this.btnAddCategory = document.createElement("button");
    this.btnAddCategory.type = "submit";
    this.btnAddCategory.className = "btn btn-add-category";
    this.btnAddCategory.textContent = "+";
    this.formCategory.append(this.inputCategory, this.btnAddCategory);

    this.containerCategoryList.append(
      this.nameApp,
      this.labelBox,
      this.categoryList,
      this.formCategory
    );

    this.containerTasksList = document.createElement("div");
    this.containerTasksList.className = "containerTasksList";

    this.containerNameCategory = document.createElement("div");
    this.containerNameCategory.className = "label-box label-tasks";
    this.btnBack = document.createElement("button");
    this.btnBack.className = "btn btn-back";
    this.btnBack.textContent = "<-";
    this.nameCategory = document.createElement("h1");
    this.nameCategory.className = "label";
    this.containerNameCategory.append(this.btnBack, this.nameCategory);

    this.tasksList = document.createElement("ul");
    this.tasksList.className = "list listTasks";

    this.formTask = document.createElement("form");
    this.inputTask = document.createElement("input");
    this.inputTask.type = "text";
    this.inputTask.className = "textTask";
    this.inputTask.placeholder = "add task ...";
    this.btnAddTask = document.createElement("button");
    this.btnAddTask.type = "submit";
    this.btnAddTask.className = "btn btnAddTask";
    this.btnAddTask.textContent = "Add Task";
    this.formTask.append(this.inputTask, this.btnAddTask);

    this.containerTasksList.append(
      this.containerNameCategory,
      this.tasksList,
      this.formTask
    );

    this.containerRoot.append(
      this.containerCategoryList,
      this.containerTasksList
    );
  }
}
