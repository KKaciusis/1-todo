class Form {
    constructor(selector) {
        this.selector = selector;
        
        this.DOM = null;
        this.messageDOM = null;
        this.colorDOM = null;
        this.dateDOM = null;
        this.completedDOM = null;
        this.saveButtonDOM = null;

    }
    init() {
        if (!this.isValidSelector() || !this.findTargetElement()){
            return false;
        }
        this.render();
        this.addEvents();
    }
    isValidSelector() {
        if (typeof this.selector !== 'string' || this.selector === ''){
            return false;
        }
        return true;
    }
    findTargetElement () {
        this.DOM = document.querySelector(this.selector);

        if (!this.DOM) {
            console.log('ERROR: pagal pateikta selector, elementas neegzistuoja');
            return false;
        }
        return true;
    }
    render() {
        const HTML = `<form class="form">
        <div class="form-row">
            <textarea placeholder="Message"></textarea>
        </div>

        <div class="form-row">
            <input type="color">
        </div>

        <div class="form-row">
            <input type="date">
        </div>

        <div class="form-row">
            <input type="checkbox"><span>Task compleated?</span>
        </div>

        <div class="form-row">
            <button class="save" type="submit">Save</button>
            <button type="reset">Reset</button>
        </div>
    </form>`;

    this.DOM.insertAdjacentHTML('afterbegin', HTML);
    this.messageDOM = this.DOM.querySelector('textarea');
    this.colorDOM = this.DOM.querySelector('input[type="color"]');
    this.dateDOM = this.DOM.querySelector('input[type="date"]');
    this.completedDOM = this.DOM.querySelector('input[type="checkbox"]');
    this.saveButtonDOM = this.DOM.querySelector('button.save');
    }
    addEvents() {
        this.saveButtonDOM.addEventListener('click', (e) => { 
            e.preventDefault();
            const message = this.messageDOM.value;
            const color = this.colorDOM.value;
            const date = this.colorDOM.value;
            const completed = this.completedDOM.value;

            if (this.isValidTask(message, color, date, completed)){
                console.log('task is valid');
            } else {
                console.log('task is not valid');
            }
        });
    }
    isValidTask(message, color, date, completed) {
        if (!this.isValidMessage(message) || !this.isValidColor(color) || !this.isValidDate(date) || !this.isValidCompleted(completed)){
            return false;
        }
        return true;
    }
    isValidMessage(message){
        return true;
    }
    isValidColor(color){
        return true;
    }
    isValidDate(date){
        return true;
    }
    isValidCompleted(completed){
        return true;
    }
}

export { Form }