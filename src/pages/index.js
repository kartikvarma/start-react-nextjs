import styled from '@emotion/styled';
import CssBaseline from '@mui/material/CssBaseline';
import PokemonInfo from '../components/PokemonInfo';
import PokemonFilter from '../components/PokemonFilter';
import PokemonTable from '../components/PokemonTable';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;

const Tilte = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

const Home = () => {
  return (
    <Container>
      <CssBaseline />
      <Tilte>Pokeman Search</Tilte>
      <TwoColumnLayout>
        <div>
          <PokemonFilter />
          <PokemonTable />
        </div>
        <PokemonInfo />
      </TwoColumnLayout>
    </Container>
  );
};

export default Home;
