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
            const parentId = flatCopy[id].parentId;
            flatCopy[parentId].children = flatCopy[parentId].children || [];
            flatCopy[id].children = flatCopy[id].children || [];
            flatCopy[parentId].children.push(flatCopy[id])
            delete flatCopy[id].parentId;
        }
    }
    // console.log(JSON.stringify(flatCopy, undefined , 2))
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


let flatList = [
    {id: 1, parentId: null},
    {id: 2, parentId: null},
    {id: 3, parentId: 1},
    {id: 4, parentId: 3},
    {id: 5, parentId: 3},
];
const nestedList = [
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
const getNested = (flatList, parentId = null) =>
    flatList
        .filter(item => item.parentId === parentId)
        .reduce((acc, next) =>
                [...acc, {id: next.id, children: [...getNested(flatList, next.id)]}],
            []
        )

const getFlat = (nestedList, parentId = null) =>
    nestedList
        .reduce((acc, next) =>
                [...acc, {id: next.id, parentId}, ...getFlat(next.children, next.id)],
            []
        )

console.log(getFlat(getNested(getFlat(getNested(flatList)))));
console.log(getNested(getFlat(getNested(getFlat(nestedList)))));