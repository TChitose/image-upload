import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';
@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {

  @Input() img = '';
  @Output() closeEvent = new EventEmitter();

  constructor(
  ) { }

  ngOnInit(): void {
  }

  /**
   * クリックイベント
   *
   * @param {*} $event イベント情報
   * @memberof ModalComponent
   */
  public onClick() {
    this.notifyCloseModal();
  }

  /**
   * モーダルダイアログを閉じる
   *
   * @private
   * @memberof ModalComponent
   */
  private notifyCloseModal() {
    this.closeEvent.emit();
  }

}
