import AboutPage from '@components/AboutPage';

type Props = { message: string | null };


const about = ({ message }: Props) => {
    console.log('[pages/about] rendering about page with message from server', message);
    return <AboutPage message={ message }/>;
};

export const getServerSideProps = () => {
    return { props: { message: 'Current date is' + new Date().toLocaleString() } }
}

export default about;