(function () {
    class MyCustomTag extends HTMLElement {

        // A constructor must always be ideally declared and any parameters passed to the parent also.
        // This gets called when the HTML parser sees your tag
        constructor() {
            super(); // always call super() first in the constructor.
            // The constructor is always ideally where any event listeners, etc would normally be implemented, for example:
            // this.addEventListener('click', this.handleClick);
            this._total = 0;
            this._time = new Date();
            console.log('constructor called');
            this.attachShadow({mode: 'open'});
            this.render();
        }

        //Called every time the element is inserted into the DOM.

        // Tt is static (set for all inheritors and itself) and gettable (for reference).
        static get observedAttributes() {
            console.log('observedAttributes called');
            // This function should return an array of strings where each string is the name of the attribute you wish to observe
            //     return ['id', 'custom-custom-attribute', 'data-something', 'disabled'];
            // IF ATTRIBUTE IS NOT IN THIS ARRAY, COMPONENT WILL NOT RESPOND TO ADD/REMOVE/CHANGE OF THAT ATTRIBUTE
            return ['increment'];
        }


        // This function is fired whenever an attribute on the component is changed,

        // Get the "text" property
        get increment() {
            // console.log('get increment attribute value');
            return this.getAttribute('increment');
        }

        // Attributes of the custom element we actually want to observe changes upon

        // STATIC  GET, this is because we want it inherited by any sub classes/components and we want to declare it only once to reference.

        // Set the "text" property
        set increment(increment) {
            // console.log('set increment attribute value');
            // this refers to the DOM element itself. So in this example, this refers to <custom-element>.

            this.setAttribute("increment", increment);
            this.render();
        }

        get time() {
            return this._time;
        }

        set time(time) {
            this._time = time;
            this.render(); // Each render is replacing the innerHTML, better get hold of individual DOM node that needs repaint ?
            this.addEventListener(); // because whole innerHTML is replaced, eventlisteners added to any node are also gone.
        }

        incrementBy(increment) {
            this._total += Number(increment);
            this.render(); // Each render is replacing the innerHTML, better get hold of individual DOM node that needs repaint ?
            this.addEventListener(); // because whole innerHTML is replaced, eventlisteners added to any node are also gone.
        }

        // Will also run when the element is adopted elsewhere on the document or in a new page.

        //Every time the component is added anywhere in the page, at any time, it will fire this function.
        connectedCallback() {
            console.log('connectedCallback called');
            this.addEventListener();
        }

        addEventListener() {
            this.addButton = this.shadowRoot.getElementById('add');
            this.addButton.addEventListener('click', (e) => this.doAddAction(e));
        }

        // Only if the attribute that changed is currently being observed.
        attributeChangedCallback(attrName, oldVal, newVal) {
            console.log('attributeChangedCallback called for', {attrName, oldVal, newVal});
            this.render();
        }


        // If for example we delete the node or a parent node in the DOM tree, this function will fire since inherently it will remove the element from the DOM.

        disconnectedCallback() {
            console.log('disconnectedCallback called');
        }

        doAddAction(e) {
            // create and dispatch the event

            const event = new CustomEvent("doAdd", {...e, detail: {increment: this.increment}});

            //   this.incrementBy(this.increment);
            //console.log({event});

            this.dispatchEvent(event);
        }

        render() {
            this.shadowRoot.innerHTML = `<style>
    .wrapper {
        text-align: center;
        background: orange;
        display: block;
        border: 5px red double;
    }

    p {
        font-size: 20px;
    }

    h1 {
        font-size: 35px;
        color: red;
    }

</style>


<div class="wrapper">

   <h2>Custom Element</h2>
  <p>I Increment by : <span>${this.increment}</span></p>
  <button id="add">Click Me</button>
  <h1>${this._total}</h1>
  
  <h3>Time is ${this._time.getHours()}:${this._time.getMinutes()}:${this._time.getSeconds()}</h3>
</div>

`
        }
    }

// This registers your new tag and associates it with your class

// The name of your custom element must contain a dash (-). For example, <file-reader>, and <hello-world> are valid names for custom elementswhile <hello_world>, and <fileReader> are not.
// This is necessary in order to allow the HTML parser differentiate between a custom element and an inbuilt HTML element.

// https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name

// A custom element can't be registered more than once. A DOMException error will be thrown if you do so.

    if (!window.customElements.get('my-custom-tag')) {


        //A custom element can be created using the customElements.define() browser API method and a class that extends HTMLElement


        // define(tagName, constructor, options)
        // Defines a new custom element. Takes three arguments: A valid tag name for a custom element, class definition for the custom element, and an options object.
        // Only one option is supported currently: extends which is a string specifying the name of a built-in element to extend. Used to create a customized built-in elements.
        window.customElements.define('my-custom-tag', MyCustomTag);

        // Another option is to use an anonymous class like so:

        // window.customElements.define('custom-element', class extends HTMLElement {
        //     Define behaviour here
        // });
    }

})();

