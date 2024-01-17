//the code is just for algorithm and dose not work

function Q1(Node head){
    if (head.next == null){
        Node preMan = head;
        while (head.next.next != null){
            head = head.next;
            if(preMan.next.value < head.next.value) preMan = head;
        }
        if(head.value > preMan.next.value){
            head = head.next;
            return;
        }
        preMan.next = preMan.next.next;
    }
}