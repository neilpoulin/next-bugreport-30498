import { ReactNode } from 'react';
import DefaultLayout, { DefaultLayoutProps } from '@components/DefaultLayout';
import { NextPage } from 'next';

export type LayoutRenderFunction = (page: ReactNode) => ReactNode;

export type PageLayout<P = unknown> = NextPage<P> & {
    getLayout?: LayoutRenderFunction;
};

export const getDefaultLayout =
    (props: DefaultLayoutProps = {}): LayoutRenderFunction =>
    (page) =>
        <DefaultLayout {...props}>{page}</DefaultLayout>;
