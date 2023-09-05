import { render, screen } from '@testing-library/react';
import Home, { option } from './page';
import Links from './components/links';

//usado para parar o erro do useRouter
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    pathname: '/',
    asPath: '/',
    query: {},
  }),
}));

describe('Criando os componentes', () => {
  let getByText: any;

  beforeEach(() => {
    const renderResult = render(Home());
    getByText = renderResult.getByText;
    render(Links({ linksProps: option }));

  });

  test('Verificando se contem o texto', () => {
    expect(getByText("Discovery")).toBeTruthy();
  });


  test('Verificando se contem as propriedades do option ', () => {
    option.forEach((item) => {
      expect(item).toHaveProperty('id');
      expect(item).toHaveProperty('alt');
      expect(item).toHaveProperty('img');
      expect(item).toHaveProperty('title');
      expect(item).toHaveProperty('tipo');
    });
  });

  test('Verificando se contem todos os titulos de options em tela', () => {
    option.forEach((item) => {
      expect(screen.getAllByText(item.title)).toBeTruthy();
    });
  });
});
