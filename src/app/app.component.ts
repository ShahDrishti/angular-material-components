import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'material-table';
  detail = [
    { position: 1, name: 'John', age: 20, salary: 20000 },
    { position: 2, name: 'Sia', age: 24, salary: 25000 },
    { position: 3, name: 'Neha', age: 26, salary: 15000 },
    { position: 4, name: 'Deepak', age: 23, salary: 27000 },
    { position: 5, name: 'Meera', age: 33, salary: 19000 },
    { position: 6, name: 'Mahir', age: 32, salary: 24000 },
    { position: 7, name: 'Krish', age: 28, salary: 30000 },
    { position: 8, name: 'Kevin', age: 26, salary: 35000 },
    { position: 9, name: 'Nick', age: 29, salary: 21000 },
    { position: 10, name: 'Priya', age: 26, salary: 23000 },
  ];

  displayedColumn: string[] = ['position', 'name', 'age', 'salary'];
  columnToDisplay: string[] = this.displayedColumn.slice();

  ngOnInit() {
    console.log(this.displayedColumn);
  }

  onAdd() {
    // const newColumn = Math.floor(Math.random() * this.displayedColumn.length);
    // this.columnToDisplay.push(this.displayedColumn[newColumn]);
    console.log(this.displayedColumn);
  }
  //Removal of Last Column
  onRemove() {
    if (this.columnToDisplay.length) {
      this.columnToDisplay.pop();
    }
  }

  onShuffle() {
    let currentIndex = this.columnToDisplay.length;
    while (currentIndex !== 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex = currentIndex - 1;

      // Swapping of columns
      let temp = this.columnToDisplay[currentIndex];
      this.columnToDisplay[currentIndex] = this.columnToDisplay[randomIndex];
      this.columnToDisplay[randomIndex] = temp;
    }
  }
}
