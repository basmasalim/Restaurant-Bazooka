import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ISpecialOffers } from '../../../../core/interfaces/ispecial-offers';

@Component({
  selector: 'app-special-offers',
  imports: [],
  templateUrl: './special-offers.html',
  styleUrl: './special-offers.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SpecialOffers {
  // Sample data array
  specialOffers: ISpecialOffers[] = [
    {
      id: 1,
      title: 'Smoked Brisket',
      description: 'Pulled Pork, Beer Braised Brisket, & Quarter',
      price: 40,
      imageSrc: 'images/home-page/special-offers/1.png',
      imageAlt:
        'Smoked Brisket burger with pulled pork and beer braised brisket',
      buttonText: 'Order Now',
    },
    {
      id: 2,
      title: 'Classic Cheeseburger',
      description: 'Angus beef, cheddar, lettuce, tomato, special sauce',
      price: 28,
      imageSrc: 'images/home-page/special-offers/2.png',
      imageAlt: 'Classic cheeseburger with melted cheddar',
    },
    {
      id: 3,
      title: 'Spicy Chicken',
      description: 'Crispy chicken, jalapeños, pepper jack, chipotle mayo',
      price: 32,
      imageSrc: 'images/home-page/special-offers/3.png',
      imageAlt: 'Spicy chicken sandwich with jalapeños',
    },
    {
      id: 4,
      title: 'Spicy Chicken',
      description: 'Crispy chicken, jalapeños, pepper jack, chipotle mayo',
      price: 32,
      imageSrc: 'images/home-page/special-offers/4.png',
      imageAlt: 'Spicy chicken sandwich with jalapeños',
    },
    {
      id: 5,
      title: 'Spicy Chicken',
      description: 'Crispy chicken, jalapeños, pepper jack, chipotle mayo',
      price: 32,
      imageSrc: 'images/home-page/special-offers/4.png',
      imageAlt: 'Spicy chicken sandwich with jalapeños',
    },
  ];

  // swiper breakpoints
  breakpoints = {
    0: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 1,
    },
    740: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  };
}
