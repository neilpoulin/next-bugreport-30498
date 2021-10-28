import Head from 'next/head';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import cn, { Argument as ClassValue } from 'classnames';
import Image from 'next/image';

export type MaxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';

export type DefaultLayoutProps = PropsWithChildren<{
    showLogo?: boolean;
    className?: ClassValue;
    container?: boolean;
    title?: string;
    description?: string;
    metaImageUrl?: string;
    metaImageAltText?: string;
    noMargin?: boolean;
    maxWidth?: MaxWidth;
    noMetadata?: boolean;
    fullWidth?: boolean;
}>;

export function getMaxWidthClasses(maxWidth?: MaxWidth | null) {
    return {
        'max-w-sx': maxWidth === 'xs',
        'max-w-sm': maxWidth === 'sm',
        'max-w-md': maxWidth === 'md',
        'max-w-lg': maxWidth === 'lg',
        'max-w-xl': maxWidth === 'xl',
        'max-w-2xl': maxWidth === '2xl',
        'max-w-3xl': maxWidth === '3xl',
        'max-w-4xl': maxWidth === '4xl',
        'max-w-5xl': maxWidth === '5xl',
        'max-w-6xl': maxWidth === '6xl',
        'max-w-7xl': maxWidth === '7xl',
    };
}

export default function DefaultLayout({
    children,
    className,
    showLogo,
    container = true,
    title,
    description = 'some description',
    metaImageUrl = 'some meta info',
    metaImageAltText = `Logo`,
    noMargin = false,
    maxWidth,
    fullWidth = false,
    noMetadata = false,
}: DefaultLayoutProps): JSX.Element {
    const widthClasses = fullWidth ? {} : getMaxWidthClasses(maxWidth);
    const metaTitle = title ? `${title}` : 'Test App';
    return (
        <div
            className={cn(
                {
                    container: !maxWidth && container && !fullWidth,
                    'mx-auto': maxWidth && !fullWidth,
                    ...widthClasses,
                },
                className,
            )}
        >
            {!noMetadata && (
                <Head>
                    <title>{metaTitle}</title>
                    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                    <link rel="alternate icon" href="/favicon.ico" />
                    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                    <meta name="description" content={description} />
                    <meta property="og:image" content={metaImageUrl} />
                    <meta name="og:title" content={metaTitle} />
                    <meta name="og:description" content={description} />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={metaTitle} />
                    <meta name="twitter:description" content={description} />
                    <meta name="twitter:image" content={metaImageUrl} />
                    <meta name="twitter:image:alt" content={metaImageAltText} />
                    <meta name="twitter:description" content={description} />
                </Head>
            )}

            <main className={cn('h-full', { 'mt-6 sm:mt-12': !noMargin })}>
                {showLogo && (
                    <Link href="/" passHref>
                        <a>
                            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                        </a>
                    </Link>
                )}
                {children}
            </main>
        </div>
    );
}
