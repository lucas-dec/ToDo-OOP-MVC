class Model {
  constructor() {
    this.categoryList = [
      {
        id: 1,
        name: "1st category",
        selected: true,
        tasks: [
          {
            id: 1,
            text: "text of 1st task in 1st category",
            completed: false
          },
          {
            id: 2,
            text: "text of 2nd task in 1st category",
            completed: true
          },
          {
            id: 3,
            text: "text of 3th task in 1st category",
            completed: false
          }
        ]
      },
      {
        id: 2,
        name: "2nd category",
        selected: false,
        tasks: [
          {
            id: 1,
            text: "text of 1st task in 2nd category",
            completed: false
          },
          {
            id: 2,
            text: "text of 2nd task in 2nd category",
            completed: true
          },
          {
            id: 3,
            text: "text of 3th task in 2nd category",
            completed: false
          }
        ]
      }
    ];
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
  }
}
