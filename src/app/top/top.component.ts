import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ImageModalComponent } from '../image-modal/image-modal.component';
import { ImgData } from '../model/img';
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit, OnDestroy {


  constructor(
  ) { }
  title = '';
  uploadImg: string | ArrayBuffer | null = null;
  cnt = 0;
  newTweetContents = '';
  imageSrc: Array<ImgData> = [];
  reader = new FileReader();
  imgModal = '';


   // データの変更を通知するためのオブジェクト
  private modalEventSubject = new BehaviorSubject<boolean>(false);

  // Subscribe するためのプロパティ( これでイベント通知をキャッチする )
  public modalEventObservable$ = this.modalEventSubject.asObservable();


  ngOnInit(): void {
  }

  onChangeInput(evt: any) {
    const file = evt.target.files[0];
    this.reader.onload = ((e) => {
      this.uploadImg = e.target ? e.target['result'] : null;
    });
    this.reader.readAsDataURL(file);
  }

  ngOnDestroy() {
  }

  confirm() {
    this.imageSrc[this.cnt] = {
      img: this.uploadImg,
      title: this.title,
      favrite: 0
    };
    this.uploadImg = null;
    this.title = '';
    this.cnt++;
  }

  public onClick(img: any) {
    this.imgModal = img;
    this.modalEventSubject.next(true);
  }

  public close() {
    this.imgModal = '';
    this.modalEventSubject.next(false);
  }

  inputChange(str: any){
    this.title = str;
  }

  favAdd(index: number){
    this.imageSrc[index].favrite++;
  }
}
