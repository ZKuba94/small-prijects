const products = [
    {id: 1, name: 'ski', categoryId: 2}
]
const categories = [
    {id: 2, name: 'winter sports'}
]
let categoryName = '???';
const tryMe1 = (advertId) => {
    return fetch(`http://localhost:3200/adverts/${advertId}`).then(res=>res.json())
        .then(advert => {
            return fetch(`http://localhost:3200/categories/${advert.categoryId}`).then(res=>res.json())
                .then(category => {
                    categoryName = category.title
                    return console.log(categoryName);
                })
        })
        .catch(e => console.error(e))
}
tryMe1(categories[0].id)
const tryMe2 = async (advertId) => {
    try {
        const advert = await fetch(`http://localhost:3200/adverts/${advertId}`).then(res=>res.json());
        const category = await fetch(`http://localhost:3200/categories/${advert.categoryId}`).then(res=>res.json());
        categoryName = category.title
        return console.log(categoryName);
    } catch (e){
        console.error(e)
    }
}
tryMe2(products[0].id)
// const tryUs = async () => {
//     // const [tm1Response, tm2Response] = await Promise.all([tryMe1(1), tryMe2(5)]) // ['comp','out']
//     // console.table({tm1Response, tm2Response})
//     const res = await tryMe2(10000)
// }


// tryUs();

// const promiseFn = (resolve, reject) => {
//     // long calcs
//     if (false){ reject() }
//     // more calcs
//     setTimeout(() =>
//             resolve(12),
//         50000
//     )
// }
//
// function myPromise() {
//     return new Promise(promiseFn);
// }

// const value = await myPromise() // 12