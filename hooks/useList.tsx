import { useState } from "react";
import { Movie } from "../libs/typings";

function useList(uid: string | undefined) {
  const [list, setList] = useState<Movie[]>([]);

  

  return list;
}

export default useList;
