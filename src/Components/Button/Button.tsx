import { ButtonContainer, ButtonVariant } from './Button.styles.ts';

interface ButtonProps {
  variant?: ButtonVariant;
  buttonText?: string;
}

export function Button({
  variant = 'primary',
  buttonText = 'Enviar',
}: ButtonProps) {
  return <ButtonContainer variant={variant}>{buttonText}</ButtonContainer>;
}
