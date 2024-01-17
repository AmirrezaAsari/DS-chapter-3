//the code is just for algorithm and dose not work

function Q2(Node h1, Node h2){
    if(h1==null) return h1;
    if(h2 == null) return h1;
    Node head;
    Node s;
    if(h1.value < h2.value){
        head.h1;
        h7 = h7.next;
    }
    else {
        head = h2;
        h2 = h2.next;
    }
    s = head;
    while(h1 != null && h2 != null){
        if(h1.value < h2.value){
            s.next = h1;
            h1 = h1.next;
        }
        else{
            s.next = h2;
            h2 = h2.next;
        }
        s = head;
        while(h1!=null && h2 != null){
            if(h1.value < h2.value) {
                s.next = h1;
            }
            else{
                s.next = h2;
                h2 = h2.next;
            }
            s = s.next;
        }
    }
    if(h1 == null) s.next = h2;
    else s.next = h1;
    while(s!= null) s = s.next;
    return head;
}