import useData from "./useData";

interface platform{
    id:string;
    name:string;
    slug:string;
}
const usePlatforms=()=>useData<platform>('/platforms/lists/parents')

 export default usePlatforms
