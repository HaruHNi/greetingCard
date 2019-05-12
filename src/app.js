import Storage from './utils/storage'
import CardFormView from './view/CardFormView'
import CardListView from './view/CardListView'

document.addEventListener('DOMContentLoaded', () => {
    const storage = new Storage()
    const localData = storage.getItem()

    const submitCallback = () => {
        const card = cardFormView.getFormData()
        storage.addItem(card)
        cardListView.setListData(storage.getItem())
    }

    const cardFormView = new CardFormView(submitCallback)
    const cardListView = new CardListView(localData)
})