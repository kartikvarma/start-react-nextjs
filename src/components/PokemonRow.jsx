import Link from 'next/link';
import Button from '@mui/material/Button';
import { TableCell, TableRow } from '@mui/material';

const PokemonRow = ({ pokemon, onSelect }) => (
  <TableRow>
    <TableCell>
      <Link href={`/pokemon/${pokemon.id}`}>{pokemon.name.english}</Link>
    </TableCell>
    <TableCell>{pokemon.type.join(', ')}</TableCell>
    <TableCell>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onSelect(pokemon)}
      >
        Select Pokemon
      </Button>
    </TableCell>
  </TableRow>
);

export default PokemonRow;
