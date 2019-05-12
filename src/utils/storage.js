const LOCALSTORAGE_KEY = 'greetingCard'

export default class Storage {
    constructor () {
        this.localStorage = window.localStorage
        this.cards = []

        this.init()
    }

    init () {
        const localData = this.localStorage.getItem(LOCALSTORAGE_KEY) || '[]'
        this.cards = JSON.parse(localData)
    }

    save () {
        const saveData = JSON.stringify(this.cards)
        this.localStorage.setItem(LOCALSTORAGE_KEY, saveData)
    }

    getItem (filter = () => true) {
        return this.cards.filter(filter)
    }

    addItem (card) {
        this.cards.push(card)
        this.save()
    }

    deleteItem (id) {
        this.cards = this.cards.filter(card => ( card.id !== id ))
        this.save()
    }

    deleteAll () {
        this.cards = []
        this.save()
    }
}