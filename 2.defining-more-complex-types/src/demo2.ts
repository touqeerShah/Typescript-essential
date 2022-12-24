interface Item {
    name: string,
    age: number
}

interface ItemQuery<Item> {
    (vale: Item): boolean
}

type itemQuery = {
    [typeOfContract in keyof Item]?: ItemQuery<Item[typeOfContract]>
}

function query(
    item: Item[],
    query: itemQuery
) {
    return item.filter(contract => {
        for (const property of Object.keys(contract) as (keyof Item)[]) {
            let propertyQuery = q[property] as Query<Item[keyof Item]> // here we define which type of propert it will ne
            if (property && propertyQuery.matches(contract[property])) {
                return true
            }
        }
    })

}



let data = query([], {
    name: name => name === "touqeer"
}) 