import { 
  BuyMeCoffee, 
  Cover, 
  Section, 
  SocialNetworks, 
  Title,
} from '../components';

export const Home = () => 
  <div>
    <Section>
      <Cover title="Victor<br />Smirnov" />
      <SocialNetworks />
      <BuyMeCoffee />
    </Section>
    <Section>
      <Title>New Post</Title>
    </Section>
  </div>;

export default Home;
