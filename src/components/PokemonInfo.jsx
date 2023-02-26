import store from '../../store';
import { observer } from 'mobx-react';
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableRow
} from '@mui/material';
import { Head } from 'next/document';

const PokemonInfo = () => {
  const selectedPokemon = store.selectedPokemon;
  return selectedPokemon ? (
    <div>
      <h1>{selectedPokemon.name.english}</h1>
      <TableContainer component={Paper}>
        <Table>
          {Object.keys(selectedPokemon.base).map((key) => (
            <TableRow key={key}>
              <TableCell>{key}</TableCell>
              <TableCell>{selectedPokemon.base[key]}</TableCell>
            </TableRow>
          ))}
        </Table>
      </TableContainer>
    </div>
  ) : null;
};

export default observer(PokemonInfo);
