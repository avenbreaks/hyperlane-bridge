import { memo } from 'react';

function _HyperlaneLogo({
  width,
  height,
  fill,
  className = '',
}: {
  width?: number | string;
  height?: number | string;
  fill?: string;
  className?: string;
}) {
  return (
    <svg width="119" height="67" viewBox="0 0 119 67" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.0186 38.7601V66L75.2535 38.5182L88.9488 29.813V1L46.5023 29.1535L32.0186 38.7601Z" fill="#A6C462"/>
<path d="M118 1H88.9488V29.813H118V1Z" fill="#A6C462"/>
<path d="M118 29.813H88.9488L75.2535 38.5182L107.221 38.0726L118 29.813Z" fill="#A6C462"/>
<path d="M1 38.7601H32.0186L46.5023 29.1535H16.5302L1 38.7601Z" fill="#A6C462"/>
<path d="M1 38.7601V66H32.0186V38.7601H1Z" fill="#A6C462"/>
<path d="M1 38.7601V66H32.0186M1 38.7601H32.0186M1 38.7601L16.5302 29.1535H46.5023M32.0186 66V38.7601M32.0186 66L88.9488 29.813M32.0186 66L75.2535 38.5182M32.0186 38.7601L88.9488 1M32.0186 38.7601L46.5023 29.1535M46.5023 29.1535L88.9488 1M88.9488 1H118V29.813M88.9488 1V29.813M118 29.813H88.9488M118 29.813L107.221 38.0726L75.2535 38.5182M88.9488 29.813L75.2535 38.5182" stroke="#0D192C" stroke-width="1.5"/>
</svg>
  );
}

export const HyperlaneLogo = memo(_HyperlaneLogo);
