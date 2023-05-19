import { ReactNode } from 'react'
import { CharacterProps } from '../../../types'
import * as S from './Card.styles'

export interface CardProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  character: Partial<CharacterProps>;
  button?: React.ReactNode;
}

export function Card({ character, button, ...props }: CardProps) {
  function renderValue(key: string, value: ReactNode) {
    if (Array.isArray(value)) {
      return (
        <div key={`${key}`}>
          <S.Details open>
            <summary>
              <strong>{key.replaceAll('_', ' ')}</strong>
            </summary>
            <ul>
              {value.map((item: string, index: number) => (
                <li key={`${key}_${index}`}>{item}</li>
              ))}
            </ul>
          </S.Details>
        </div>
      );
    } else {
      return (
        <div key={`${key}`}>
          <strong>{key.replaceAll('_', ' ')}:</strong> {value}
        </div>
      );
    }
  }

  return (
    <S.CardWrapper {...props}>
      <S.CardTitle>{character.name}</S.CardTitle>
      <S.CardContent>
        {Object.entries(character).map(([key, value], index) => {
          if (key === 'id' || key === 'name') return null;
          if (Array.isArray(value)) {
            return renderValue(key, value);
          }
          return <div key={`${index}_${key}`}>{renderValue(key, value)}</div>;
        })}
      </S.CardContent>
      {button && button}
    </S.CardWrapper>
  );
}
