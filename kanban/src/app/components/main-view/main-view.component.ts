import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/modals/board.modal';
import { Column } from 'src/app/modals/column.modal';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  board: Board = new Board('Test Board', [
    new Column('Todo List', ['Read', 'Eat', 'Workout', 'Eat', 'Sleep']),
    new Column('Done', [
      'Meet with friends',
      'Football',
      'Movies',
      'German',
      'Sleep',
    ]),
  ]);
  todos = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  dones = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog',
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
