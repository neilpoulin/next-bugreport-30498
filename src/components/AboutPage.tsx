import { useState } from 'react';
import Link from 'next/link';
import * as d3 from 'd3';
import LoginForm from '@components/LoginForm';

type Props = { message: string | null };
const AboutPage = ({ message }: Props) => {
    const [count, setCount] = useState(0);

    console.log('[AboutPage] rendering about page');
    const handleLogin = () => {
        console.log('login success');
    };

    return (
        <div>
            <Link href={'/'} passHref>
                <a>Go Home</a>
            </Link>
            <h1 className="text-indigo-600 font-bold text-3xl">About Page</h1>
            <p>{message}</p>

            <button
                onClick={() => setCount((current) => current + 1)}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Increase Count
            </button>
            <p>Count: {count}</p>
            <p>D3 Max Value: {d3.max([1, 2, 3, 50, 5])}</p>
            <div className={'bg-indigo-100'}>
                <LoginForm onSuccess={handleLogin} />
            </div>
        </div>
    );
};

export default AboutPage;
