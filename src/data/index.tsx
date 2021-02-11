import React from 'react';
import Greeter from '../views/Greeter';
import { PageLink, TabLink } from '../models';
import { jsOrange, midBlue, green, pink } from '../theme/colors';

import staticData from './json/static.json';
import contactData from './json/contact.json';
import pkg from '../../package.json';

export const pages: PageLink[] = [
  {
    name: 'Home',
    url: '/myportfolio',
    icon: 'home',
    isInternal: true,
    comp: () => (
      <Greeter
        staticData={staticData}
        contactData={contactData}
        repoUrl={pkg.repository.url}
      />
    ),
  },
];

export const tabs: TabLink[] = [
  {
    name: 'skills.js',
    url: '/skills',
    icon: ['fab', 'js'],
    color: jsOrange,
    mdFileName: 'skills',
  },
  {
    name: '.educationrc',
    url: '/education',
    icon: 'university',
    color: midBlue,
    mdFileName: 'education',
  },
  {
    name: 'experience.config',
    url: '/experience',
    icon: 'sliders-h',
    color: green,
    mdFileName: 'experience',
  },
  {
    name: 'certificates.sass',
    url: '/certificates',
    icon: ['fab', 'sass'],
    color: pink,
    mdFileName: 'certificates',
  },
];
