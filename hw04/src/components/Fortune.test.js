import React from 'react';
import axios from 'axios';

jest.mock('axios');

test('good response', () => {
  axios.get.mockImplementation(() => Promise.resolve({ data: 'success!'}));
});

test('bad response', () => {
  axios.get.mockImplementation(() => Promise.reject({ data: 'failed!' }));
});

