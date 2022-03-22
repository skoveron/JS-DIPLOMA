import Column from "./Column.js";

export default class Trello {
   constructor(root) {
      this.root = root;

      Trello.columns().forEach(column => {
         const columnView = new Column(column.id, column.title);

         this.root.appendChild(columnView.elements.root);
      });
   }

   static columns() {
      return [
         {
            id: 1,
            title: "Not Started"
         },
         {
            id: 2,
            title: "In Progress"
         },
         {
            id: 3,
            title: "Completed"
         }
      ];
   }
}
