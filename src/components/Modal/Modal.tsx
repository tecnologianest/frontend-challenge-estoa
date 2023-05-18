import React, { useEffect } from 'react';
import * as S from './Modal.styles';

interface ModalProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
}
export function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleContentClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Prevent the click event from propagating to the wrapper and triggering the modal close
    event.stopPropagation();
  };

  return (
    <S.ModalWrapper isOpen={isOpen} onClick={onClose}>
      <S.ModalContent onClick={handleContentClick}>
        <S.CloseButton onClick={onClose}>X</S.CloseButton>
        {children}
      </S.ModalContent>
    </S.ModalWrapper>
  );
}
