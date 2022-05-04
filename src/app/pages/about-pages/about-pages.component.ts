import { Component, OnInit } from '@angular/core';

export interface Data  {
  link: string,
  place: string,
  date: string,
  city?: string
}

@Component({
  selector: 'app-about-pages',
  templateUrl: './about-pages.component.html',
  styleUrls: ['./about-pages.component.css']
}) 
export class AboutPagesComponent implements OnInit {
  data: Data[] = [
    {link: 'https://fakestoreapi.com/docs', place:'Şaiq küçəsi', date: '9:00-21:00',city: 'Bakı'},
    {link: 'https://fakestoreapi.com/docs', place:'Axundov küçəsi', date: '9:00-21:00',city: 'Sumqayıt'},
    {link: 'https://fakestoreapi.com/docs', place:'Aşıq Alı küçəsi', date: '9:00-21:00',city: 'Gəncə'},
    {link: 'https://fakestoreapi.com/docs', place:'Cəlilov küçəsir', date: '9:00-21:00',city: 'Mingəçevir'},
    {link: 'https://fakestoreapi.com/docs', place:'Qurbanov küçəsi', date: '9:00-21:00',city: 'Naxçıvan'},
    {link: 'https://fakestoreapi.com/docs', place:'Əsədullayev küçəsi', date: '9:00-21:00',city: 'Lənkəran'},
    {link: 'https://fakestoreapi.com/docs', place:'Bakıxanov küçəsi', date: '9:00-21:00',city: 'Şəki'},
    {link: 'https://fakestoreapi.com/docs', place:'Qala küçəsi', date: '9:00-21:00',city: 'Yevlax'},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
