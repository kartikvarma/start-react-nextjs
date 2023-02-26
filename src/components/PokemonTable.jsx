import store from '../../store';
import PokemonRow from './PokemonRow';
import { observer } from 'mobx-react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';

const PokemonTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead style={{ fontSize: 'x-large' }}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {store.filteredPokemon.map((pokemon) => (
            <PokemonRow
              pokemon={pokemon}
              key={pokemon.id}
              onSelect={(pokemon) => store.setSelectedPokemon(pokemon)}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default observer(PokemonTable);
