import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../';
import { CharacterProps } from '../../types';
import * as S from './Card.styles';

export function Card(props: Partial<CharacterProps>) {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/character/' + props.id);
  }

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
                <li key={index}>{item}</li>
              ))}
            </ul>
          </S.Details>
        </li>
      );
    } else {
      return (
        <React.Fragment>
          <strong>{key.replaceAll('_', ' ')}:</strong> {value}
        </React.Fragment>
      );
    }
  }

  return (
    <S.CardWrapper key={props.name ?? crypto.randomUUID()}>
      <S.CardTitle>{props.name}</S.CardTitle>
      <S.CardContent>
        {Object.entries(props).map(([key, value]) => {
          if (key === 'id' || key === 'name') return null;
          if (Array.isArray(value)) {
            return renderValue(key, value);
          }
          return (
            <li key={key + '-' + String(value)}>{renderValue(key, value)}</li>
          );
        })}
      </S.CardContent>
      <Button onClick={handleClick}>SEE MORE</Button>
    </S.CardWrapper>
  );
}
