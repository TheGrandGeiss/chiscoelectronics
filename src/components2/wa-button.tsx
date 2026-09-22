import { waLink } from '@/lib/whatsapp';

type Props = {
  message: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

export function WaButton({
  message,
  children,
  size = 'md',
  className = '',
}: Props) {
  const pad =
    size === 'lg'
      ? 'px-6 py-3.5 text-[17px]'
      : size === 'sm'
        ? 'px-3 py-1.5 text-[14px]'
        : 'px-4 py-2.5 text-[15px]';

  return (
    <a
      href={waLink(message)}
      target='_blank'
      rel='noopener noreferrer'
      className={`inline-flex items-center gap-2 rounded font-medium text-white transition-opacity hover:opacity-90 ${pad} ${className}`}
      style={{ background: 'var(--whatsapp)' }}>
      <svg
        viewBox='0 0 24 24'
        aria-hidden
        className='h-[1.1em] w-[1.1em] shrink-0 fill-current'>
        <path d='M17.5 14.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.1s-.8 1-.9 1.2c-.2.2-.3.2-.6.1a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.5-.6.3-.5v-.5l-.9-2.2c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4 0-.2-.2-.3-.5-.4zM12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3a8.2 8.2 0 1 1 7.2 4z' />
      </svg>
      {children}
    </a>
  );
}
