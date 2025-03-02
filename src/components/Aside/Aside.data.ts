export interface IAside {
    id: number,
    name: string,
    url: string
}


export const Aside: IAside[] = [
    {
        id: 1,
        name: 'Персонажи',
        url: '/personage'
    },
    {
        id: 2,
        name: 'Планеты',
        url: '/planets'
    },
    {
        id: 3,
        name: 'Космические корабли:',
        url: '/spaceships'
    }
]