import { ReactNode } from 'react';
import { CharacterProps } from '../../../types';
import * as S from './Card.styles';

export interface CardProps
  extends Omit<React.HtmlHTMLAttributes<HTMLDivElement>, 'id'> {
  id: number | string;
  character: Partial<CharacterProps>;
  button?: React.ReactNode;
}

export function Card(props: CardProps) {
  function renderValue(key: string, value: ReactNode) {
    if (Array.isArray(value)) {
      return (
        <li>
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
        </li>
      );
    } else {
      return (
        <>
          <strong>{key.replaceAll('_', ' ')}:</strong> {value}
        </>
      );
    }
  }

  return (
    <S.CardWrapper key={props.character.name}>
      <S.CardTitle>{props.character.name}</S.CardTitle>
      <S.CardContent>
        {Object.entries(props.character).map(([key, value]) => {
          if (key === 'id' || key === 'name') return null;
          if (Array.isArray(value)) {
            return renderValue(key, value);
          }
          return (
            <li key={`${key}_${String(value)}`}>{renderValue(key, value)}</li>
          );
        })}
      </S.CardContent>
      {props.button && props.button}
    </S.CardWrapper>
  );
}
