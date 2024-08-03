import { render } from '@react-email/render';
import { writeFileSync } from 'fs';
import React from 'react';
import 'reflect-metadata';
import EmailWrapper from './email-wrapper';

const html = render(<EmailWrapper />, {
  pretty: true,
});

writeFileSync('email.html', html);
