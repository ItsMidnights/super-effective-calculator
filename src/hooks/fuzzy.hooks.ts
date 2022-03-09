import React from "react";
import Fuse from "fuse.js";
import { debounce } from "debounce";

export const useFuzzySearch = <T>(data: readonly T[]) => {
  const [results, setResults] = React.useState<Fuse.FuseResult<T>[]>();
  const fuse = new Fuse(data, {
    includeMatches: true,
    ignoreLocation: true,
    includeScore: true,
    threshold: 0.5,
    minMatchCharLength: 2,
  });

  const _search = React.useCallback(
    (text: string) => {
      const results: Fuse.FuseResult<T>[] = fuse.search(`=${text}`, {
        limit: 20,
      });
      setResults(results);
    },
    [data]
  );

  const search = React.useCallback(debounce(_search, 200), [data]);

  React.useEffect(() => {
    console.log("useFuzzySearch mounted.");

    return () => {
      console.log("useFuzzySearch unmounted.");
    };
  }, []);

  return {
    results,
    search,
  };
};
