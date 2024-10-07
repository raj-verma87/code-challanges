var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let res = dummy;
    let total =0,carry=0;

    while(l1 || l2 || carry){
        total = carry;
        if(l1){
            total += l1.val;
            l1 = l1.next;
        }
        if(l2){
            total += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(total / 10); 
        total = total % 10;
        dummy.next = new ListNode(total);
        dummy = dummy.next;
    }
    return res.next;
};