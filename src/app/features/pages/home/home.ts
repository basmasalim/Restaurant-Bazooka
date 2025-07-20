import { Component } from '@angular/core';
import { HeroSection } from '../../components/home-page/hero-section/hero-section';
import { SpecialOffers } from '../../components/home-page/special-offers/special-offers';

@Component({
  selector: 'app-home',
  imports: [HeroSection, SpecialOffers],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
