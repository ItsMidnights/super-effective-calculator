import React from "react";
import Fuse from "fuse.js";
import { debounce } from "debounce";

export const useFuzzySearch = <T>(
  data: readonly T[],
  opts?: Fuse.IFuseOptions<T>
) => {
  const [results, setResults] = React.useState<Fuse.FuseResult<T>[]>();

  let fuse: Fuse<T>;

  if (!opts) {
    fuse = new Fuse(data, {
      includeScore: true,
      includeMatches: true,
    });
  } else {
    fuse = new Fuse(data, opts);
  }

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
    // console.log("useFuzzySearch mounted.");

    return () => {
      // console.log("useFuzzySearch unmounted.");
    };
  }, []);

  return {
    results,
    setResults,
    search,
  };
};
