import { fireEvent, render } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal', () => {
  test('renders modal when isOpen is true', () => {
    const { getByText } = render(
      <Modal isOpen={true} onClose={jest.fn()}>
        Modal Content
      </Modal>
    );

    const modalContent = getByText('Modal Content');
    expect(modalContent).toBeInTheDocument();
  });

  test('does not render modal when isOpen is false', () => {
    const { queryByText } = render(
      <Modal isOpen={false} onClose={jest.fn()}>
        Modal Content
      </Modal>
    );

    const modalContent = queryByText('Modal Content');
    expect(modalContent).toBeNull();
  });

  test('calls onClose when Escape key is pressed', () => {
    const onClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={onClose}>
        Modal Content
      </Modal>
    );

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose).toHaveBeenCalled();
  });

  test('does not call onClose when other key is pressed', () => {
    const onClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={onClose}>
        Modal Content
      </Modal>
    );

    fireEvent.keyDown(document, { key: 'Enter' });
    expect(onClose).not.toHaveBeenCalled();
  });

  test('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <Modal isOpen={true} onClose={onClose}>
        Modal Content
      </Modal>
    );

    const closeButton = getByText('X');
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });

  test('does not call onClose when ModalContent is clicked', () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <Modal isOpen={true} onClose={onClose}>
        Modal Content
      </Modal>
    );

    const modalContent = getByText('Modal Content');
    fireEvent.click(modalContent);
    expect(onClose).not.toHaveBeenCalled();
  });
});
