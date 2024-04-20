export const getTexto = async () => {
    try {
        const dataTexto = await fetch(`https://catfact.ninja/fact`).then((res) => res.json());
        console.log(dataTexto)
        return dataTexto.fact
    } catch (error) {
        console.log('error', error)
        return error
    }
};