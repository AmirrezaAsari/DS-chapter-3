class PriorityQueue {
    constructor() {
        this.head = null;
    }
  
    enqueue(element) {
        if (!this.head) {
            this.head = new Node(element);
            return;
        }
  
        var node = this.head;
        var prev = null;
  
        while (node && node.value <= element) {
            prev = node;
            node = node.next;
        }
  
        if (!prev) {
            this.head = new Node(element, this.head);
            return;
        }
  
        node = new Node(element);
        node.next = prev.next;
        prev.next = node;
    }
  
    dequeue() {
        if (!this.head) {
            return null;
        }
  
        var min = this.head;
        var next = min.next;
  
        while (next) {
            if (min.value > next.value) {
            min = next;
            }
            next = next.next;
        }
  
        if (!min.prev || !min.next) {
            this.head = null;
            return min.value;
        }
  
        if (!min.prev) {
            this.head = min.next;
            min.next.prev = null;
            return min.value;
        }
  
        min.prev.next = min.next;
        min.next.prev = min.prev;
        return min.value;
    }
  }
  
  class Node {
        constructor(value, next = null) {
        this.value = value;
        this.next = next;
        }
  }