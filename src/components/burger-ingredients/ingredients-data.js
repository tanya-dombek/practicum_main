export const normalaizedData = (data) => { 
    return {
        Bread: [
            {
                name: 'Краторная булка N-200i',
                price: '20',
                thumbnail: data[0].image_large,
                count: '2'
            },
            {
                name: 'Флюоресцентная булка R2-D3',
                price: '20',
                thumbnail: data[14].image_large,
                count: '0'
            }
        ],
        Sauce: [
            {
                name: 'Соус Spicy-X',
                price: '30',
                thumbnail: data[3].image_large,
                count: '0'
            },
            {
                name: 'Соус фирменный Space Sauce',
                price: '30',
                thumbnail: data[6].image_large,
                count: '0'
            },
            {
                name: 'Соус традиционный галактический',
                price: '30',
                thumbnail: data[5].image_large,
                count: '1'
            },
            {
                name: 'Соус с шипами Антарианского плоскоходца',
                price: '30',
                thumbnail: data[9].image_large,
                count: '0'
            },
        ],
        Toppings: [
            {
                name: 'Говяжий метеорит (отбивная)',
                price: '300',
                thumbnail: data[1].image_large,
                count: '0'
            },
            {
                name: 'Биокотлета из марсианской Магнолии',
                price: '424',
                thumbnail: data[2].image_large,
                count: '0'
            },
            {
                name: 'Мясо бессмертных моллюсков Protostomia',
                price: '133',
                thumbnail: data[4].image_large,
                count: '1'
            },
            {
                name: 'Плоды Фалленианского дерева',
                price: '80',
                thumbnail: data[7].image_large,
                count: '1'
            },
            {
                name: 'Хрустящие минеральные кольца',
                price: '80',
                thumbnail: data[8].image_large,
                count: '2'
            },
            {
                name: 'Кристаллы марсианских альфа-сахаридов',
                price: '70',
                thumbnail: data[10].image_large,
                count: '0'
            },
            {
                name: 'Мини-салат Экзо-Плантаго',
                price: '400',
                thumbnail: data[11].image_large,
                count: '0'
            },
            {
                name: 'Филе Люминесцентного тетраодонтимформа',
                price: '40',
                thumbnail: data[12].image_large,
                count: '0'
            },
            {
                name: 'Сыр с астероидной плесенью',
                price: '90',
                thumbnail: data[13].image_large,
                count: '0'
            },
        ]
    }
}