import AboutPage from '@components/AboutPage';
import { getDefaultLayout, PageLayout } from '@components/Layout';

type Props = { message: string | null };

const About: PageLayout<Props> = ({ message }: Props) => {
    console.log('[pages/about] rendering about page with message from server', message);
    return <AboutPage message={message} />;
};

About.getLayout = getDefaultLayout();

// export const getServerSideProps = () => {
//     return {
//         props: { message: 'Current date is' + new Date().toLocaleString() },
//     };
// };

export default About;
