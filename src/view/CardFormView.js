export default class CardFormView {
    constructor (submitCallback) {
        this.cardForm = document.getElementById('cardForm')
        this.bind(submitCallback)
    }

    bind (submitCallback) {
        this.cardForm.onsubmit = () => {
            const { value: message } = this.cardForm.message
            if (message === '') {
                alert('Message를 입력해주세요.')
                return false
            }

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
            id: Date.now().toString(16),
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