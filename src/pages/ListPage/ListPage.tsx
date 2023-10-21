import PokemonList from "../../components/PokemonList/PokemonList";
import { Pokemon } from "../../types/pokemon";

interface ListPageProps {
    totalPokemons: Pokemon[];
}

const ListPage = ({ totalPokemons }: ListPageProps): JSX.Element => {
    return <PokemonList pokemons={totalPokemons!} />;
};

export default ListPage;
