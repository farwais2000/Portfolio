import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./config/socials', () => ({ socials: [] }));

jest.mock('./components/Header', () => ({
  __esModule: true,
  default: () => <div data-testid="header">Header</div>,
}));

jest.mock('./components/Footer', () => ({
  __esModule: true,
  default: () => <div data-testid="footer">Footer</div>,
}));

jest.mock('./components/About', () => ({
  __esModule: true,
  default: () => <section data-testid="about">About</section>,
}));

jest.mock('./components/Work', () => ({
  __esModule: true,
  default: () => <section data-testid="work">Work</section>,
}));

jest.mock('./components/Skills', () => ({
  __esModule: true,
  default: () => <section data-testid="skills">Skills</section>,
}));

jest.mock('./components/Contact', () => ({
  __esModule: true,
  default: () => <section data-testid="contact">Contact</section>,
}));

jest.mock('./components/Home', () => ({
  __esModule: true,
  default: () => <section data-testid="home">Home</section>,
}));

jest.mock('./AnimatedBackground', () => ({
  __esModule: true,
  default: () => <div data-testid="background" />,
}));

describe('App', () => {
  it('renders the main portfolio sections', () => {
    render(<App />);

    expect(screen.getByTestId('background')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('home')).toBeInTheDocument();
    expect(screen.getByTestId('about')).toBeInTheDocument();
    expect(screen.getByTestId('work')).toBeInTheDocument();
    expect(screen.getByTestId('skills')).toBeInTheDocument();
    expect(screen.getByTestId('contact')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
