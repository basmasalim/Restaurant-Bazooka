import { Component } from '@angular/core';
import { HeroSection } from '../../components/home-page/hero-section/hero-section';
import { SpecialOffers } from '../../components/home-page/special-offers/special-offers';
import { MenuPreview } from '../../components/home-page/menu-preview/menu-preview';
import { Offers } from '../../components/offers/offers';

@Component({
  selector: 'app-home',
  imports: [HeroSection, SpecialOffers, MenuPreview, Offers],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
