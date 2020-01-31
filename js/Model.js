class Model {
  constructor() {
    this.categoryList = [
      {
        id: 1,
        name: "1st category",
        selected: false,
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
}
