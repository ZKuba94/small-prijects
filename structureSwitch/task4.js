let flat = [
    {id: 1, parentId: null},
    {id: 2, parentId: null},
    {id: 3, parentId: 1},
    {id: 4, parentId: 3},
    {id: 5, parentId: 3},
];
const nested = [
    {
        id: 1,
        children: [
            {
                id: 3,
                children: [
                    {id: 4, children: []},
                    {id: 5, children: []}
                ]
            }
        ]
    },
    {
        id: 2,
        children: []
    }
]
const flatToNest = (flat) => {
    const flatCopy = {}
    for (const el of flat) {
        flatCopy[el.id]={...el}
    }
    for (const id in flatCopy) {
        if (flatCopy[id].parentId !== null) {
            flatCopy[flatCopy[id].parentId].children = flatCopy[flatCopy[id].parentId].children || [];
            flatCopy[id].children = flatCopy[id].children || [];
            flatCopy[flatCopy[id].parentId].children.push(flatCopy[id])
            delete flatCopy[id].parentId;
        }
    }
    const nestedParents = []
    for (const id in flatCopy) {
        if (flatCopy[id].parentId === null) {
            nestedParents.push(flatCopy[id])
            flatCopy[id].children = flatCopy[id].children || [];
            delete flatCopy[id].parentId;
        }
    }
    return console.log(nestedParents)
}
flatToNest(flat)

const nestToFlat = nested => {
    const flattedArray = []
    const repeat = parent => {
        flattedArray.push(parent)
        if (parent.children) {
            parent.children.forEach(child => {
                child.parentId = parent.id
                repeat(child)})
        }
    }
    nested.forEach(parent => repeat(parent))
    flattedArray.forEach(el => delete el.children)
    flattedArray.forEach(el => el.parentId !== undefined?'':el.parentId=null)
    return console.log(flattedArray)
}
nestToFlat(nested)

// class Nest {
//     constructor(id, children) {
//         this.id = id
//         this.children = children
//     }
// }
//
// const nestedFromFlat = []

// function switcher1(a) {
//     for (const flatEl of a) {
//         if (flatEl.parentId === null) {
//             nestedFromFlat.push({id: flatEl.id, children: []})
//         } else {
//             for (const nestedEl of nestedFromFlat) {
//                 for (const prop in nestedEl) {
//                     if (flatEl.parentId === nestedEl.id && typeof nestedEl[prop] === 'object') {
//                         nestedEl[prop].push({id: flatEl.id, children: []})
//                     } else if (flatEl.parentId && flatEl.parentId !== nestedEl.id && nestedEl[prop] === 'object') {
//                         console.log(flatEl)
//                         switcher1([flatEl])
//                     }
//                 }
//             }
//         }
//     }
// }

// switcher1(flat)
// console.log(nestedFromFlat)
// const switcher2 = flat => {
//     for (const nestedEl of flat) {
//         if (nestedEl.parentId === null) {
//             flat.unshift({id: nestedEl.id, children: []})
//             flat.forEach((item, index) => {
//                 if (item.id === nestedEl.id && item.parentId === nestedEl.parentId) {
//                     flat.splice(index, 1)
//                 }
//             })
//         } else {
//             for (const key in nestedEl) {
//                 flat.forEach((item, index) => {
//                     if (nestedEl.parentId === item.id && nestedEl[key] === item.id) {
//                         item.children.push({id: nestedEl.id, children: []})
//                         // delete item.parentId
//                     } else {
//                         switcher2()
//                     }
//                     if (item.id === nestedEl.id && item.parentId === nestedEl.parentId) {
//                         flat.splice(index, 1)
//                     }
//                 })
//                 // if (typeof nestedEl[key] === 'object') {
//                 //     switcher2(nestedEl[key])
//                 // }
//             }
//         }
//     }
// }
// switcher2(flat)
// console.log(flat)

// const switch1 = (arr) => {
//     for (nestEl of flat) {
//         if (nestEl.parentId === null) {
//             flat.unshift({id: nestEl.id, children: []})
//             arr.forEach((item, index) => {
//                 if (item.id === nestEl.id && item.parentId === null) {
//                     flat.splice(index, 1)
//                 }
//             })
//         } else {
//             for (const key in nestEl) {
//                 flat.forEach((item, index) => {
//                     if (nestEl.parentId === item.id && key === 'id') {
//                         item.children.push({id: nestEl.id, children: []})
//                         // delete item.parentId
//                     } else {
//                         // console.log(nestEl)
//                         // console.log(item.children)
//                         switch2(nestEl,item)
//                     }
//                     if (item.id === nestEl.id && item.parentId === nestEl.parentId) {
//                         flat.splice(index, 1)
//                     }
//                 })
//             }
//         }
//     }
// }


// const switcher = arr => {
//     for (arrEl of arr) {
//         for (flatEl of flat) {
//             if (arrEl.id === flatEl.parentId && arrEl.children !== undefined) {
//                 arrEl.children = [{id: flatEl.id, children: []}]
//                 switcher(arrEl.children)
//             } else {
//                 arrEl.children = []
//             }
//         }
//     }
// }
// for (el of flat) {
//     // let indexToRemove = flat.findIndex(obj => !obj.hasOwnProperty('children'))
//     let indexToRemove = flat.findIndex(obj => obj.parentId !== null)
//     if (indexToRemove > 0) {
//         flat.splice(indexToRemove, 1)}
//         delete el.parentId;
// }

// switcher(flat)
// console.log(flat)
// if (arrEl.id === 3) {
//     console.log(arrEl.id)
// let indexToRemove = arr.findIndex(obj => obj.id === 3)
// console.log(indexToRemove)
// arr.splice(indexToRemove, 1)
// flat = arr.filter(obj => obj.id !== arrEl.id)
// console.log(arr.filter(obj => obj.id !== arrEl.id))