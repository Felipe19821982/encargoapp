import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-criptoactivos',
  templateUrl: './criptoactivos.page.html',
  styleUrls: ['./criptoactivos.page.scss'],
})
export class CriptoactivosPage implements OnInit {
  coins: any[] = [];
  viewMode: 'list' | 'grid' = 'list'; // Variable para almacenar el modo de vista

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchCoins();
  }

  fetchCoins() {
    const settings = {
      async: true,
      crossDomain: true,
      url: 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0',
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '64ece04b01msh85470598e5a401ep1aa9e0jsnbf616c56aa0d',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    };

    this.http.get(settings.url, { headers: settings.headers }).subscribe((response: any) => {
      this.coins = response.data.coins;
    });
  }

  toggleView() {
    this.viewMode = this.viewMode === 'list' ? 'grid' : 'list';
  }
}
