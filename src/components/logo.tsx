import Image from 'next/image';
import Link from 'next/link';

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/" aria-label="R&M Construtora - Home">
      <Image
        src="https://i.imgur.com/azs8M1l.png"
        alt="R&M Construtora Logo"
        width={160}
        height={45}
        className={`h-auto ${className}`}
        priority
      />
    </Link>
  );
};

export default Logo;
