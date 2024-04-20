export const getCats = async (text:any) => {
    try {
        const dataCats = await fetch(`https://cataas.com/cat/says/`).then((res) => res.json());
        console.log(dataCats)
        return dataCats
    } catch (error) {
        console.log('error', error)
        return error
    }
};