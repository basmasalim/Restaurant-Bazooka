import { Component } from '@angular/core';
import { IFooterWidget } from '../../interfaces/ifooter-widget';
import { IFooterLink } from '../../interfaces/ifooter-link';
import { ISocialIcon } from '../../interfaces/isocial-icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  footerWidgets: IFooterWidget[] = [
    {
      title: 'Address',
      description: ['17 Mostafa El-Nahas Street,', 'Nasr City, Cairo', 'Egypt'],
    },
    {
      title: 'Book a Table',
      description: [
        'To place an order or reserve a table,',
        'our customer support is ready to assist you.',
      ],
      phone: '16941',
    },
    {
      title: 'Opening Hours',
      description: ['Saturday – Friday', '11:00 AM – 3:00 AM'],
    },
    {
      title: 'Follow Us',
      description: [
        'Stay updated with our latest offers',
        'on Facebook and Instagram.',
      ],
    },
  ];

  footerLinks: IFooterLink[] = [
    { label: 'Bazooka franchise', url: '#' },
    { label: 'Contact us', url: '#' },
    { label: 'Jobs applications', url: '#' },
    { label: 'Privacy policy', url: '#' },
  ];

  socialIcons: ISocialIcon[] = [
    {
      platform: 'facebook',
      iconPath: 'svg/facebook-svgrepo-com.svg',
      url: 'https://facebook.com',
    },
    {
      platform: 'instagram',
      iconPath: 'svg/instagram-svgrepo-com.svg',
      url: 'https://instagram.com',
    },
    {
      platform: 'twitter',
      iconPath: 'svg/twitter-154-svgrepo-com.svg',
      url: 'https://twitter.com',
    },
    {
      platform: 'youtube',
      iconPath: 'svg/youtube-svgrepo-com.svg',
      url: 'https://youtube.com',
    },
  ];
}
