import Fuse from "fuse.js";
import { debounce } from "lodash";
import { SECPokemonRecord } from "../types/pokemon.types";

const pokemon: SECPokemonRecord[] = [];

const fuse = new Fuse<SECPokemonRecord>(pokemon, {
  includeScore: true,
  keys: ["name"],
});

// to avoid setting state after component is unmounted
const _isMounted = useRef(false);
useEffect(() => {
  _isMounted.current = true;
  return () => (_isMounted.current = false);
});

const fuzzySearch = useCallback(
  (searchQuery) => {
    let dealersToSet = props.dealers;
    if (searchQuery) {
      const searchResults = fuse.search(searchQuery);
      dealersToSet = searchResults.map((result) => result.item);
    }
    // ref for checking if component is mounted
    if (_isMounted.current) {
      setDealers(dealersToSet);
    }
  },
  [fuse, props.dealers],
);
// trailing edge of debounce (default) called
// this means that the last call of all collected
// calls will be used
const debouncedSearch = debounce(fuzzySearch, 200);
// dependancy array is empty since adding
// required deps created an infinite loop
// eslint-disable-next-line react-hooks/exhaustive-deps
const searchForDealers = useCallback(debouncedSearch, []);
// change handler passed to onChange of TextField
const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  searchForDealers(event.target.value.toLowerCase());
};