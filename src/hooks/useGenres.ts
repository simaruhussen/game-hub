import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";
import useData from "./useData";
 export interface Genre{
    id:number;
    name:string;
}


const useGenres = ()=> useData<Genre>('/genres')

export default useGenres