const CATEGORY_MAP = {
    'partner': '동료',
    'friend': '친구',
    'family': '가족'
}

export default class CardListView {
    constructor (list) {
        this.listFilter = document.getElementById('cardListFilter')
        this.listView = document.getElementById('cardList')
        this.list = list

        this.bind()
        this.render()
    }

    bind () {
        this.listFilter.onchange = event => {
            const { target: {value = ''} } = event
            const filter = ({category}) => {
                return value === 'all' ? true : category === value
            }

            this.render(filter)
        }
    }

    setListData (list) {
        this.list = list
        this.render()
    }

    render (filter = () => true) {
        const list = this.list.filter(filter).reverse()
        const listItems = list.map(item => {
            return `<li>${CATEGORY_MAP[item.category]}에게 - ${item.message}</li>`
        })

        this.listView.innerHTML = listItems.join('')
    }
}