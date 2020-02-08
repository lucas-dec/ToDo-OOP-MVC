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
}
