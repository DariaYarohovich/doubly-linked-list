const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data = data);

        if (this.length === 0) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        this.length++;

        return this;
    }

    head() {
        if(  this.length) {
            return this._head.data;
        } else {
            return null;
        }
    }

    tail() {
        if( this.length ) {
            return this._tail.data;
        } else {
            return null;
        }
    }

    at(index) {
        var current = this._head,
            i= 0;

        while ( i < index ) {
            current = current.next;
            i++;
        }
        return current.data;
    }

    insertAt(index, data) {
        var node  = new Node(data = data);

        var current = this._head,
            previous,
            i = 0;

        while ( i < index ) {
            previous = current;
            current = current.next;
            i++;
        }
        previous.next = node;
        current.prev = node;
        node.next = current;
        node.prev = previous;

        this.length++;

        return this;
    }

    isEmpty() {
        if (this.length) {
            return false;
        } else {
            return true;
        }
    }

    clear() {
        var current = this._head,
            i = 0;

        while (i++ < this.length) {
            current.prev = null;
            current = current.next;
        }
        this.length = 0;

        return this;
    }

    deleteAt(index) {
        var current = this._head,
            previous,
            i = 0;

        while ( i < index ) {
            previous = current;
            current = current.next;
            i++;
        }

        previous.next = current.next;
        current.next.prev = previous;
        this.length++;

        return this;
    }

    reverse() {
        var head = this._head,
            current = this._head,
            tmp;

        while (current) {
            this._tail = head;
            tmp = current.next;
            current.next = current.prev;
            current.prev = tmp;
            if (!tmp) {
                this._head = current;
            }
            current = tmp;
        }

        return this;
    }

    indexOf(data) {
        var current = this._head,
            i = 0;

        while ( i < this.length ) {
            if ( current.data === data ) {
                return i;
            } else {
                current = current.next;
                i++;
            }
        }
        return -1;
    }
}

module.exports = LinkedList;
