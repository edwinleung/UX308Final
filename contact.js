const Page = require("./_layout/Default");

module.exports = class extends Page {
    constructor(){
        // change localhost to heroku here
        // and the name to yours
        super({title:"Contact", sName:"Edwin Leung", sAction:"https://dry-bayou-18746.herokuapp.com/send/"});
    }
    render(sPage) {
        return `
        ${this.requireMarked('_pages/contact.md')}
        <form action="${this.sAction}" method="POST">
            <!-- add a div.form-group rather than the <br />-->
            <div class="form-group">
                <!-- give inputs the class form-control -->
                <label>Name: <input name="name" placeholder="Name" class="form-control" /></label>
            </div>
            <div class="form-group">
                <label>Email:<input name="email" placeholder="Email" type="email" class="form-control" /></label>
            </div>
            <div class="form-group">
                <label>Phone Number:<input name="phone" placeholder="Telephone" type="tel"
                        class="form-control" /></label>
            </div>
            <div class="form-group">
                <label>Message:<textarea name="message" placeholder="Type your message here"
                        class="form-control"></textarea></label>
            </div>
            <button type="submit">Send Message</button>

        </form>
        `;
    }
}