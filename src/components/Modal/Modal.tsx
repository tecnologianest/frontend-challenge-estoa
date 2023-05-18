import React from 'react';
import * as S from './Modal.styles';

export interface ModalProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  isModalOpen: boolean;
}

export function Modal({ isModalOpen, children }: ModalProps) {
  return (
    <S.Wrapper isModalOpen={isModalOpen}>
      <S.Backdrop>
        <S.ModalContent>{children}</S.ModalContent>
      </S.Backdrop>
    </S.Wrapper>
  );
}
