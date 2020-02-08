class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.bindRenderCategoryList(this.renderCategoryList.bind(this));
    this.renderCategoryList(this.model.categoryList);
  }

  renderCategoryList(categories) {
    this.view.showCategories(categories);
  }
}
