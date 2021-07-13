class Todo {
    constructor (selector) {
        this.selector = selector;

        this.DOM = null;
    }

    init() {
        if (!this.isValidSelector() || !this.findTargetElement()) {
            return falese;
        }
        this.render()
    }
    isValidSelector() {
        if (typeof this.selector !== 'string' || this.selector === '') {
            return false;
        }
        return true;
    }
    findTargetElement() {
        this.DOM = document.querySelector(this.selector);

        if (!this.DOM) {
            return false;
        }
        return true;
    }
    render() {
        const HTML = '<div class="list"></div>';
        this.DOM.insertAdjacentHTML('beforeend', HTML);
        this.listDOM = this.DOM.querySelector('.list');
    }
    createCard(message, color, date, completed = false) {
        let status = '<span class="badge not-completed">Not completed</span>';

        if (completed) {
            status = '<span class="badge completed">Completed</span>';
        }
        const HTML = `<div class="card" style="border-color: ${color};">
                        ${status}
                        <p class="message">${message}</p>
                        <p class="deadline">${date}</p>
                    </div>`;

        this.listDOM.insertAdjacentHTML('afterbegin', HTML);
    }
}

export {Todo}