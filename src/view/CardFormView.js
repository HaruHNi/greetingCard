export default class CardFormView {
    constructor (submitCallback) {
        this.cardForm = document.getElementById('cardForm')
        this.bind(submitCallback)
    }

    bind (submitCallback) {
        this.cardForm.onsubmit = () => {
            if (submitCallback) {
                submitCallback()
            }

            this.reset()
            return false
        }
    }

    getFormData () {
        const { value: category } = this.cardForm.category
        const { value: message } = this.cardForm.message

        return {
            id: '',
            date: Date.now(),
            category,
            message
        }
    }

    reset () {
        this.cardForm.category.value = 'partner'
        this.cardForm.message.value = ''
    }
}