import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { IWidget } from './shared/model';
import { WIDGETS } from './shared/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'drag-and-drop-angular';

  @ViewChildren('dragbox') dragboxs: QueryList<ElementRef>;

  widgets: IWidget[] = WIDGETS;

  className: any = {
    MOVE: 'move',
  };

  sourceIndex: number;

  ngOnInit(): void {
    this.sortBySequence();
  }

  sortBySequence() {
    this.widgets = this.widgets.sort((a: IWidget, b: IWidget) => a.sequence - b.sequence)
  }

  getActiveDragbox = (index: number): ElementRef => this.dragboxs.find((dragbox, i) => i === index);

  setMoveClass(dragbox: ElementRef) {
    dragbox.nativeElement.style.opacity = 0.4;
    dragbox.nativeElement.classList.add(this.className.MOVE);
  }

  removeMoveClass(dragbox: ElementRef) {
    dragbox.nativeElement.style.opacity = 1;
    dragbox.nativeElement.classList.remove(this.className.MOVE);
  }

  dragStart(index: number) {
    this.sourceIndex = index;
    const dragbox: ElementRef = this.getActiveDragbox(index);
    this.setMoveClass(dragbox);
  }

  tempIndex: number;

  dragOver(event: DragEvent, index: number) {
    if (this.tempIndex !== index) {
      this.tempIndex = index;
      [...Array(this.widgets.length).keys()].forEach(i => {
        const dragbox: ElementRef = this.getActiveDragbox(i);
        if ([index, this.sourceIndex].includes(i)) {
          this.setMoveClass(dragbox);
        } else {
          this.removeMoveClass(dragbox);
        }
      });
    }
    event.preventDefault?.();
  }

  drop(event: DragEvent, index: number) {
    event.stopPropagation();
    if (index !== this.sourceIndex) {
      [this.widgets[index].sequence, this.widgets[this.sourceIndex].sequence] = [this.widgets[this.sourceIndex].sequence, this.widgets[index].sequence];
      this.sortBySequence();
    }
    [this.getActiveDragbox(index), this.getActiveDragbox(this.sourceIndex)].forEach(dragbox => this.removeMoveClass(dragbox));

  }
}
