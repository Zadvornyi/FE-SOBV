import {getDeepValueFromObj} from "./index";

export interface NodeList {
  data: any,
  previous: any,
  next: any,
}


export class NodeLinkedList {
  public data: any;
  public previous: NodeList | null;
  public next: NodeList | null;

  constructor(value: any) {
    this.data = value;
    this.previous = null;
    this.next = null;

  }

}

export class LinkedList {
  protected length: number = 0;
  public head: any = null;
  public tail: any = null;

  public add(value: any) {
    const node: NodeLinkedList = new NodeLinkedList(value);

    if (this.length) {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.length++;

    return node;
  }

  public find(val: any) {
    let thisNode = this.head;
    while (thisNode) {
      if (thisNode.data === val) {
        return thisNode;
      }

      thisNode = thisNode.next;
    }

    return thisNode;
  };


  public findAtPath(val: any, path: string) {
    let thisNode = this.head;
    while (thisNode) {
      let tmpVal = getDeepValueFromObj(thisNode, path);

      if (tmpVal === val) {
        return thisNode;
      }

      thisNode = thisNode.next;
    }

    return thisNode;
  };


  public searchNodeAt(position: number) {
    let currentNode = this.head,
      length = this.length,
      count = 1,
      message = {failure: 'Failure: non-existent node in this list.'};

    // 1st use-case: an invalid position
    if (length === 0 || position < 1 || position > length) {
      throw new Error(message.failure);
    }

    // 2nd use-case: a valid position
    while (count < position) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  };

  public remove(val: any) {
    if (this.length === 0) {
      return undefined;
    }

    if (this.head.data === val) {
      return this.removeByPosition(0);
    }

    let previousNode = this.head;
    let thisNode = previousNode.next;

    while (thisNode) {
      if (thisNode.data === val) {
        break;
      }

      previousNode = thisNode;
      thisNode = thisNode.next;
    }

    if (thisNode === null) {
      return undefined;
    }

    previousNode.next = thisNode.next;
    this.length--;
    return this;
  }

  public removeByPosition(position: number) {
    let currentNode = this.head,
      length = this.length,
      count = 1,
      message = {failure: 'Failure: non-existent node in this list.'},
      beforeNodeToDelete = null,
      afterNodeToDelete = null,
      nodeToDelete = null,
      deletedNode = null;

    // 1st use-case: an invalid position
    if (length === 0 || position < 1 || position > length) {
      throw new Error(message.failure);
    }

    // 2nd use-case: the first node is removed
    if (position === 1) {
      this.head = currentNode.next;

      // 2nd use-case: there is a second node
      if (!this.head) {
        this.head.previous = null;
        // 2nd use-case: there is no second node
      } else {
        this.tail = null;
      }

      // 3rd use-case: the last node is removed
    } else if (position === this.length) {
      this.tail = this.tail.previous;
      this.tail.next = null;
      // 4th use-case: a middle node is removed
    } else {
      while (count < position) {
        currentNode = currentNode.next;
        count++;
      }

      beforeNodeToDelete = currentNode.previous;
      nodeToDelete = currentNode;
      afterNodeToDelete = currentNode.next;

      beforeNodeToDelete.next = afterNodeToDelete;
      afterNodeToDelete.previous = beforeNodeToDelete;
      deletedNode = nodeToDelete;
      nodeToDelete = null;
    }

    this.length--;

    return message;
  };
}




