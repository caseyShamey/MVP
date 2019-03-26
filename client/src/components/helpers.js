// var nodesArray = [1, 2];
export default class Node {
  constructor(video, choiceOneText, choiceTwoText) {
    this.video = video;
    this.choiceOneText = choiceOneText;
    this.choiceTwoText = choiceTwoText;
    this.parent = null;
    this.children = [];
  }

  // add an immediate child
  addChild (child) {
    if (!child || !(child instanceof Node)) {
      child = new Node(child);
    }
    child.parent = this
    // if (!this.isDescendant(child)) {
      this.children.push(child);
    // } else {
      // throw new Error('That child is already a child of this node');
    // }
    // return the new child node for convenience
    return child;
  };

  // Node.prototype.isDescendant = function(child) {
  //   if (this.children.indexOf(child) !== -1) {
  //     // `child` is an immediate child of this node
  //     return true;
  //   } else {
  //     for (var i = 0; i < this.children.length; i++) {
  //       if (this.children[i].isDescendant(child)) {
  //         // `child` is descendant of this node
  //         return true;
  //       }
  //     }
  //     return false;
  //   }
  // };

  // remove and immediate child
  removeChild(child) {
    var index = this.children.indexOf(child);
    if (index !== -1) {
      // remove the child
      this.children.splice(index, 1);
    } else {
      throw new Error('That node is not an immediate child of this node');
    }
  };
}
