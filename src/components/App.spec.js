import App from './App.js';

describe('App', () => {
  it('should render without crashing', () => {
    const ghiblidata = App();
    expect(ghiblidata instanceof HTMLElement).toBe(true);
  });
});
