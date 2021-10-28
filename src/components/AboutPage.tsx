import { useState } from 'react';
import Link from 'next/link';

type Props = { message: string | null };
const AboutPage = ({ message }: Props) => {
    const [count, setCount] = useState(0);


    console.log('[AboutPage] rendering about page');
    return <div>
        <Link href={ '/' } passHref><a>Go Home</a></Link>
        <h1>About Page</h1>
        <p>{ message }</p>

        <button onClick={ () => setCount((current) => current + 1) }>Increase Count</button>
        <p>Count: { count }</p>
    </div>;
};

export default AboutPage;