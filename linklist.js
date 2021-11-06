class Node{
     
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    append(val){
        // If I have no head or to say an empty  link list
        if(this.head === null){
            this.head = new Node(val);
            return;
        } 

        // If I have a head to say linklist is not empty
        let curr = this.head;
        // keep walking until u hit a tail
        while(curr.next !== null){
            curr = curr.next; 
        }
        // found tail, add new node.
        curr.next = new Node(val);
    }

    print(){
        let str = '';
        let curr = this.head;
        while(curr !== null){
            str += ` ${curr.val}`;
            curr = curr.next;
        }
        console.log(str);
    }

    contains(target){
        let curr = this.head;
        while(curr !== null){
            if(curr.val === target) return true;
            curr = curr.next;
        }
        return false;
    }
}

const list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append('d');
list.print()


console.log(list.contains('a')); //true
console.log(list.contains('b')); //true
console.log(list.contains('c')); //true
console.log(list.contains('d')); //true
console.log(list.contains('e')); //true
console.log(list.contains('f')); //true