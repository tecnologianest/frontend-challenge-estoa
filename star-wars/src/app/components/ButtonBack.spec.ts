import { render, fireEvent } from '@testing-library/react';
import { ButtonBack } from './buttonBack';

const mockUseRouter = {
    back: jest.fn(),
  };
  
  jest.mock('next/navigation', () => ({
    useRouter: () => mockUseRouter,
  }));


describe('Testando o componente ButtonBack', () => {

  test('Verificando se contem um botão e se esta com o type correto', () => {
    const { getByRole } = render(ButtonBack());
    const button = getByRole('button');

    // Verifique a existência do botão
    expect(button).toBeDefined();

    // Verificando o atributo "type"
    expect(button.getAttribute('type')).toBe('button');
  });

  test('Testando quando apertar o botão chamar a funçao back', () => {
    const { getByRole } = render(ButtonBack());
    const button = getByRole('button');

    fireEvent.click(button);
  
    expect(mockUseRouter.back).toHaveBeenCalledTimes(1);
  });
});

