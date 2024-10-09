import { useFetch } from "../hooks/"

export const MultipleCustomHooks = () => {

    const { data, isLoading, hasError } = useFetch('https://pokeapi.co/api/v2/pokemon/3');

    return (
        <div>
            <h1>Información de Pokemón</h1>
            <hr />

            {isLoading && <h2>Cargando...</h2>}
            {hasError && <h2>{hasError}</h2>}

            <h2>{data?.name}</h2>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </div>
    )
}
