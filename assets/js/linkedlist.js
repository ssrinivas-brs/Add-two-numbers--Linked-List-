function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// Definition of addTwoNumbers function
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let p = l1, q = l2, current = dummyHead;
    let carry = 0;

    while (p !== null || q !== null) {
        let x = (p !== null) ? p.val : 0;
        let y = (q !== null) ? q.val : 0;
        let sum = x + y + carry;
        carry = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10);
        current = current.next;

        if (p !== null) p = p.next;
        if (q !== null) q = q.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next;
};

// Function to calculate sum and display result
function calculateSum() {
    let list1Str = document.getElementById("list1").value;
    let list2Str = document.getElementById("list2").value;

    // Convert input strings to arrays of integers
    let list1 = convertStringToList(list1Str);
    let list2 = convertStringToList(list2Str);

    // Call addTwoNumbers function
    let sumList = addTwoNumbers(list1, list2);

    // Convert result linked list to a string for display
    let resultStr = convertListToString(sumList);

    // Display result
    document.getElementById("result").textContent = "Result: " + resultStr;
}

// Function to convert string representation of linked list to array
function convertStringToList(str) {
    let arr = str.split(',').map(Number);
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummyHead.next;
}

// Function to convert linked list to string representation
function convertListToString(list) {
    let result = '';
    while (list !== null) {
        result += list.val;
        if (list.next !== null) {
            result += ' -> ';
        }
        list = list.next;
    }
    return result;
}