import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SutraCover } from  '../sutra-cover';
import { SutraService } from '../sutra.service'

@Component({
  selector: 'sutra-cover-viewer',
  templateUrl: './sutra-cover-viewer.component.html',
  styleUrls: ['./sutra-cover-viewer.component.css']
})
export class SutraCoverViewerComponent implements OnInit {
  sutraList: SutraCover[];

  constructor(
    private sutraService: SutraService,
    private router: Router,
    private titleService: Title) { }

  ngOnInit(): void {
    this.sutraService.getSutraList().subscribe(x => this.sutraList = x);
    this.titleService.setTitle("抄自在線上抄經推廣中心-經書列表");
  }

  onNameClicked(uid: string): void {
    this.router.navigate
    (
      [
        "sutras", 
        uid
      ]
    );
  }
}
