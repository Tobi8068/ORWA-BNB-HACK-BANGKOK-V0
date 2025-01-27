import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import HomeSevenMain from '../components/homes/home-seven';

const HomeSeven = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Home Seven ORWA'} />
         <HomeSevenMain />
      </Wrapper>
   );
};

export default HomeSeven;