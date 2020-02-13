class Model {
  constructor() {
    this.categoryList = JSON.parse(localStorage.getItem("todo")) || [];
  }

  bindRenderCategoryList(callback) {
    this.renderCategoryList = callback;
  }

  bindRenderLabelTask(callback) {
    this.renderLabelTask = callback;
  }

  bindRenderTaskList(callback) {
    this.renderTaskList = callback;
  }

  addCategory(name) {
    let id;
    if (this.categoryList.length > 0)
      id = this.categoryList[this.categoryList.length - 1].id + 1;
    else id = 1;
    const category = {
      id,
      name,
      selected: false,
      tasks: []
    };
    this.categoryList.push(category);
    this.selectCategory(id);
  }

  selectCategory(id) {
    this.categoryList.forEach(category => {
      category.selected = false;
    });

    const indexCategory = this.categoryList.findIndex(
      category => category.id === id
    );

    this.categoryList[indexCategory].selected = true;
    this.renderCategoryList(this.categoryList);
    this.renderLabelTask(this.categoryList);
    this.renderTaskList(this.categoryList);
  }

  removeCategory(idCategory) {
    const indexCategory = this.categoryList.findIndex(
      category => category.id === idCategory
    );
    this.categoryList.splice(indexCategory, 1);
    this.renderCategoryList(this.categoryList);
    this.renderLabelTask(null);
    this.renderTaskList(null);
  }

  addTask(text) {
    const indexSelectedCategory = this.categoryList.findIndex(
      category => category.selected === true
    );

    let id;
    if (this.categoryList[indexSelectedCategory].tasks.length > 0)
      id =
        this.categoryList[indexSelectedCategory].tasks[
          this.categoryList[indexSelectedCategory].tasks.length - 1
        ].id + 1;
    else id = 1;
    const task = {
      id,
      text,
      completed: false
    };
    this.categoryList[indexSelectedCategory].tasks.push(task);
    this.renderLabelTask(this.categoryList);
    this.renderTaskList(this.categoryList);
  }

  optionsTask(idTask, option, editText) {
    const indexSelectedCategory = this.categoryList.findIndex(
      category => category.selected
    );
    const indexTask = this.categoryList[indexSelectedCategory].tasks.findIndex(
      task => task.id === idTask
    );

    if (option === "removeTask") {
      this.categoryList[indexSelectedCategory].tasks.splice(indexTask, 1);
    }
    if (option === "makeCompleted") {
      let status = this.categoryList[indexSelectedCategory].tasks[indexTask]
        .completed;
      this.categoryList[indexSelectedCategory].tasks[
        indexTask
      ].completed = !status;
    }
    if (option === "textEdit") {
      this.categoryList[indexSelectedCategory].tasks[indexTask].text = editText;
    }
    this.renderLabelTask(this.categoryList);
    this.renderTaskList(this.categoryList);
  }
}
