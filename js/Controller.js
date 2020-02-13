class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.bindRenderCategoryList(this.renderCategoryList.bind(this));
    this.model.bindRenderTaskList(this.renderTaskList.bind(this));
    this.model.bindRenderLabelTask(this.renderLabelTask.bind(this));

    this.view.bindHandleAddCategory(this.handleAddCategory.bind(this));
    this.view.bindHandleSelectedCategory(
      this.handleSelectedCategory.bind(this)
    );
    this.view.bindHandleRemoveCategory(this.handleRemoveCategory.bind(this));

    this.view.bindHandleAddTasks(this.handleAddTasks.bind(this));
    this.view.bindHandleRemoveTask(this.handleOptionsTask.bind(this));
    this.view.bindHandleMakeCompletedTask(this.handleOptionsTask.bind(this));
    this.view.bindHandleEditTask(this.handleOptionsTask.bind(this));

    this.renderCategoryList(this.model.categoryList);
    this.renderLabelTask(this.model.categoryList);
    this.renderTaskList(this.model.categoryList);
  }

  renderCategoryList(categories) {
    this.view.showCategories(categories);
    localStorage.setItem("todo", JSON.stringify(this.model.categoryList));
  }

  handleAddCategory(name) {
    this.model.addCategory(name);
  }

  handleSelectedCategory(id) {
    this.model.selectCategory(id);
  }

  handleRemoveCategory(nameCategory) {
    this.model.removeCategory(nameCategory);
  }

  renderLabelTask(categoryList) {
    if (!categoryList) this.view.showTasksLabel(null);
    else {
      const selectedCategory = categoryList.findIndex(
        category => category.selected
      );
      const idCategory = categoryList[selectedCategory].id;
      const nameCategory = categoryList[selectedCategory].name;
      const countTasks = categoryList[selectedCategory].tasks.filter(
        task => !task.completed
      ).length;

      this.view.showTasksLabel(idCategory, nameCategory, countTasks);
    }
  }

  renderTaskList(categoryList) {
    if (!categoryList) this.view.showTasks(null);
    else {
      const activeCategory = categoryList.filter(category => category.selected);

      this.view.showTasks(activeCategory[0].tasks);
      localStorage.setItem("todo", JSON.stringify(this.model.categoryList));
    }
  }

  handleAddTasks(text) {
    this.model.addTask(text);
  }

  handleOptionsTask(idTask, option, editText) {
    this.model.optionsTask(idTask, option, editText);
  }
}
