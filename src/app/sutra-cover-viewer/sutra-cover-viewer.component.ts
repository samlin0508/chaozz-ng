import { Component, OnInit } from '@angular/core';
import { SutraList } from  '../sutra-list';

@Component({
  selector: 'sutra-cover-viewer',
  templateUrl: './sutra-cover-viewer.component.html',
  styleUrls: ['./sutra-cover-viewer.component.css']
})
export class SutraCoverViewerComponent implements OnInit {
  sutraList: SutraList = {
    list: [{
      name: "南無阿彌陀佛108遍",
      contentInBackground: "南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛"
    },{
      name: "般若波羅蜜多心經49遍",
      contentInBackground: "觀自在菩薩行深般若波羅蜜多時照見五蘊皆空度一切苦厄舍利子色不異空空不異色色即是空空即是色受想行識亦復如是舍利子是諸法空相不生不滅不垢不淨不增不減是故空中無色無受想行識無眼耳鼻舌身意無色聲香味觸法無眼界乃至無意識界無無明亦無無明盡乃至無老死亦無老死盡無苦集滅道無智亦無得以無所得故菩提薩埵依般若波羅蜜多故心無罣礙無罣礙故無有恐怖遠離顛倒夢想究竟涅槃三世諸佛依般若波羅蜜多故得阿耨多羅三藐三菩提故知般若波羅蜜多是大神咒是大明咒是無上咒是無等等咒能除一切苦真實不虛故說般若波羅蜜多咒即說咒曰揭諦揭諦波羅揭諦波羅僧揭諦菩提薩婆訶"
    }]
  };

  constructor() { }

  ngOnInit(): void {
  }

  onClickMore() {
    this.sutraList.list.push({
      name: "南無阿彌陀佛108遍",
      contentInBackground: "南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛南無阿彌陀佛"
    });
  }

}
