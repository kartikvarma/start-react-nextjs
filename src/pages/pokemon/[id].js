import styled from '@emotion/styled';
import CssBaseline from '@mui/material/CssBaseline';
import { withRouter } from 'next/router';
import store from '../../../store';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';

const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;

function TableCe() {
  return null;
}

export default withRouter(({ router }) => {
  const pokemon = store.pokemons.find(
    ({ id }) => id.toString() === router.query.id
  );
  return (
    <Container>
      <CssBaseline />
      {pokemon && (
        <div>
          <h1>{pokemon.name.english}</h1>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Attribute</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(pokemon.base).map((k) => (
                <TableRow>
                  <TableCell>{k}</TableCell>
                  <TableCell>{pokemon.base[k]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </Container>
  );
});
